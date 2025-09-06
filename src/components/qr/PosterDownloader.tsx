import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PosterA4 from './PosterA4';
import * as S from '@components/qr/QRGenerator.css.ts';

function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(String(reader.result));
    reader.readAsDataURL(blob);
  });
}

export default function PosterDownloader({ qrUrl }: { qrUrl: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [localQr, setLocalQr] = useState<string>(''); // dataURL 저장
  const [loading, setLoading] = useState(false);

  // 1) 원격 QR 이미지를 blob->dataURL로 변환해서 같은 출처처럼 취급
  useEffect(() => {
    let revoked: string | null = null;
    let cancelled = false;

    async function warmup() {
      if (!qrUrl) return;
      try {
        setLoading(true);
        const res = await fetch(qrUrl, { credentials: 'include' }); // 필요 없으면 제거 가능
        const blob = await res.blob();

        // 방법 A: blob URL (대부분 됨)
        // const objUrl = URL.createObjectURL(blob);
        // revoked = objUrl;
        // if (!cancelled) setLocalQr(objUrl);

        // 방법 B: dataURL (가장 안전)
        const dataUrl = await blobToDataURL(blob);
        if (!cancelled) setLocalQr(dataUrl);
      } catch (e) {
        console.error('[PosterDownloader] QR preload failed:', e);
      } finally {
        setLoading(false);
      }
    }
    warmup();

    return () => {
      if (revoked) URL.revokeObjectURL(revoked);
      cancelled = true;
    };
  }, [qrUrl]);

  // 2) PDF 저장
  const handleDownloadPDF = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current, {
      backgroundColor: '#ffffff',
      scale: 2,       // 선명도
      useCORS: true,  // 안전망
    });
    const img = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const pageW = pdf.internal.pageSize.getWidth();   // 210
    const pageH = pdf.internal.pageSize.getHeight();  // 297
    const imgW = pageW;
    const imgH = (canvas.height * imgW) / canvas.width;
    const y = (pageH - imgH) / 2;
    pdf.addImage(img, 'PNG', 0, Math.max(0, y), imgW, imgH, undefined, 'FAST');
    pdf.save('store-qr-poster.pdf');
  };

  // 버튼 비활성화 조건
  const disabled = !localQr || loading;

  return (
    <>
      {/* 화면에 안 보이게 렌더(보여주려면 스타일 제거) */}
      <div style={{ position: 'absolute', left: -99999, top: 0 }}>
        {localQr && <PosterA4 ref={ref} qrUrl={localQr} />}
      </div>

      <S.QRGeneratorButton onClick={handleDownloadPDF} disabled={disabled}>
        {loading ? '포스터 준비 중…' : 'QR 다운로드'}
      </S.QRGeneratorButton>
    </>
  );
}
