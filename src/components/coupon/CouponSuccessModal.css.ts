import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--black-20, rgba(27, 27, 27, 0.20));
`;

const CouponSuccessModalContainer = styled.div`
  display: flex;
  width: 610px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  gap: 10px;
  padding: 40px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);
  
  div:first-of-type {
    font: ${({ theme }) => theme.fonts.sub1};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
  }
  
  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayScale.gray500};
  }
  
  img {
    width: 200px;
    height: 200px;
    align-self: center;
    object-fit: cover;
  }
  
  button {
    width: 100%;
    padding: 17px 0;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.primary.primary500};
    border: none;
    font: ${({ theme }) => theme.fonts.button1};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

export { ModalWrapper, CouponSuccessModalContainer };
