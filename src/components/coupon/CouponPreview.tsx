import IcCloseSmall from "@icon/ic-close-small.svg";
import ImgCoupon from "@img/img-coupon.png";
import styled from "@emotion/styled";
import type { UseFormWatch } from "react-hook-form";
import type { Coupon } from "@pages/CouponPage.tsx";

interface CouponPreviewProps {
  watch: UseFormWatch<Coupon>
  storeName: string | undefined;
}

const CouponPreview = ({ watch, storeName}: CouponPreviewProps) => {
  const { name, benefit } = watch();

  return (
    <CouponPreviewContainer>
      <CouponPreviewHeader>단골분들께 보이는 화면이에요!</CouponPreviewHeader>
      <CouponPreviewSection>
        <img src={IcCloseSmall} alt="" />
        {/* 가게명 */}
        <CouponPreviewStoreName>{storeName}</CouponPreviewStoreName>
        {/* 쿠폰명 */}
        <CouponPreviewCouponName>{name || '\u00A0'}</CouponPreviewCouponName>
        {/* 혜택 내용 */}
        <CouponPreviewCouponBenefit>{benefit || '\u00A0'}</CouponPreviewCouponBenefit>
        <img src={ImgCoupon} alt="" />
        <CouponPreviewDescription>사장님께서 직접 사용하기 버튼을 눌러주세요</CouponPreviewDescription>
        <CouponButton buttonType="save">쿠폰 사용하기</CouponButton>
      </CouponPreviewSection>
    </CouponPreviewContainer>
  );
};

export default CouponPreview;

const CouponButton = styled.button<{ buttonType: "cancel" | "save" }>`
  width: 100%;
  padding: 17px 0;
  border-radius: 12px;
  background-color: ${({ theme, buttonType }) =>
    buttonType === "cancel" ? theme.colors.primary.primary50 : theme.colors.primary.primary500};
  border: none;
  font: ${({ theme }) => theme.fonts.button1};
  color: ${({ theme, buttonType }) => buttonType === "cancel" ? theme.colors.black : theme.colors.white};
  cursor: pointer;
`;

const CouponPreviewContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  padding: 21px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CouponPreviewHeader = styled.div`
  font: ${({ theme }) => theme.fonts.sub2};
  color: ${({ theme }) => theme.colors.grayScale.gray600};
  text-align: center;
`;

const CouponPreviewSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);

  div {
    text-align: center;
  }

  img:first-of-type {
    margin-left: auto;
    padding: 7px;
    height: 24px;
    object-fit: cover;
  }

  img:last-of-type {
    padding: 12px;
    object-fit: cover;
    width: 205px;
    height: 205px;
  }
`;

const CouponPreviewStoreName = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayScale.gray600};
`;

const CouponPreviewCouponName = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.black};
`;

const CouponPreviewCouponBenefit = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const CouponPreviewDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.primary.primary700};
`;
