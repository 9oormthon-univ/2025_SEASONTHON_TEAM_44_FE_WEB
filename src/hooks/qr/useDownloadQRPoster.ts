import { useEffect, useRef, useState } from "react";
import { blobToDataURL } from "@utils/qr.ts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useDownloadQRPoster = (qrUrl?: string) => {


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

  return {
    ref,
    localQr,
    loading,
    disabled,
    handleDownloadPDF,
  };
};
