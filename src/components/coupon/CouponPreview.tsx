import IcCloseSmall from "@icon/ic-close-small.svg";
import ImgCoupon from "@img/img-coupon.png";
import type { UseFormWatch } from "react-hook-form";
import type { Coupon } from "@pages/CouponPage.tsx";
import * as S from "@components/coupon/CouponPreview.css.ts";

interface CouponPreviewProps {
  watch: UseFormWatch<Coupon>
  storeName: string | undefined;
}

const CouponPreview = ({ watch, storeName}: CouponPreviewProps) => {
  const { name, benefit } = watch();

  return (
    <S.CouponPreviewContainer>
      <S.CouponPreviewHeader>단골분들께 보이는 화면이에요!</S.CouponPreviewHeader>
      <S.CouponPreviewSection>
        <img src={IcCloseSmall} alt="" />
        {/* 가게명 */}
        <S.CouponPreviewStoreName>{storeName}</S.CouponPreviewStoreName>
        {/* 쿠폰명 */}
        <S.CouponPreviewCouponName>{name || '\u00A0'}</S.CouponPreviewCouponName>
        {/* 혜택 내용 */}
        <S.CouponPreviewCouponBenefit>{benefit || '\u00A0'}</S.CouponPreviewCouponBenefit>
        <img src={ImgCoupon} alt="" />
        <S.CouponPreviewDescription>사장님께서 직접 사용하기 버튼을 눌러주세요</S.CouponPreviewDescription>
        <S.CouponButton buttonType="save">쿠폰 사용하기</S.CouponButton>
      </S.CouponPreviewSection>
    </S.CouponPreviewContainer>
  );
};

export default CouponPreview;
