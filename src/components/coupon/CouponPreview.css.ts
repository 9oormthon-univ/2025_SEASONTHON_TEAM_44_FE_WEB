import styled from "@emotion/styled";

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

export { CouponButton, CouponPreviewContainer, CouponPreviewHeader, CouponPreviewSection, CouponPreviewStoreName, CouponPreviewCouponName, CouponPreviewCouponBenefit, CouponPreviewDescription };
