import { forwardRef } from 'react';
import IcLogo from '@icon/ic-logo.svg';
import ImgPoster from '@img/img-poster.png';
import IcLogoWhite from '@icon/ic-logo-white.svg';
import * as S from './PosterA4.css';

type Props = { qrUrl: string };

const PosterA4 = forwardRef<HTMLDivElement, Props>(({ qrUrl }, ref) => (
  <S.A4 ref={ref}>
    <S.Card>
      <S.Title>오늘도 다시 찾아온 손님<br />단골은 만드는 게 중요한 법!</S.Title>
      <S.Logo src={IcLogo} alt="" />
      <S.CharacterWrap>
        <S.Character src={ImgPoster} alt="" />
      </S.CharacterWrap>
      <S.QRSection>
        <img
          src={qrUrl}
          alt="매장 QR"
          crossOrigin="anonymous"
          style={{ width: '60mm', height: '60mm', objectFit: 'contain' }}
        />
      </S.QRSection>
      <S.LogoOverlay src={IcLogoWhite} alt="작은 로고" />
    </S.Card>
  </S.A4>
));

export default PosterA4;
