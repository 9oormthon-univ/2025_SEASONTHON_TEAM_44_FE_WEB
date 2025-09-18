import PosterA4 from './PosterA4';
import * as S from '@components/qr/QRGenerator.css.ts';
import { useDownloadQRPoster } from "@hooks/qr/useDownloadQRPoster.ts";

export default function PosterDownloader({ qrUrl }: { qrUrl: string }) {
  const { disabled, ref, handleDownloadPDF, localQr, loading } = useDownloadQRPoster(qrUrl)
  return (
    <>
      <div style={{ position: 'absolute', left: -99999, top: 0 }}>
        {localQr && <PosterA4 ref={ref} qrUrl={localQr} />}
      </div>
      <S.QRGeneratorButton onClick={handleDownloadPDF} disabled={disabled}>
        {loading ? '포스터 준비 중…' : 'QR 다운로드'}
      </S.QRGeneratorButton>
    </>
  );
}
