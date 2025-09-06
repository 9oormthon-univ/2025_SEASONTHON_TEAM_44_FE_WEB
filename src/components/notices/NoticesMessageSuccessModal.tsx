import IcMessage from "@icon/ic-message.svg";
import styled from "@emotion/styled";

interface NoticesMessageSuccessModalProp {
  handleClose: () => void;
}

const NoticesMessageSuccessModal = ({ handleClose }: NoticesMessageSuccessModalProp) => {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };
  return (
    <ModalWrapper onClick={onOverlayClick}>
      <NoticesMessageSuccessModalContainer>
        <NoticesMessageSuccessModalTitle>공직 정상적으로 전송되었어요!</NoticesMessageSuccessModalTitle>
        <NoticesMessageSuccessModalContent>단골분들께 저희가 잘 전달해드렸어요</NoticesMessageSuccessModalContent>
        <img src={IcMessage} alt="" />
        <NoticesMessageSuccessModalButton onClick={handleClose}>확인</NoticesMessageSuccessModalButton>
      </NoticesMessageSuccessModalContainer>
    </ModalWrapper>
  );
};

export default NoticesMessageSuccessModal;

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

const NoticesMessageSuccessModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 10px;
  padding: 40px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);

  img {
    width: 200px;
    height: 200px;
    align-self: center;
    object-fit: cover;
  }
`;

const NoticesMessageSuccessModalTitle = styled.div`
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

const NoticesMessageSuccessModalContent = styled.div`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayScale.gray500};
  text-align: center;
`;

const NoticesMessageSuccessModalButton = styled.button`
  padding: 14px 146px;
  font: ${({ theme }) => theme.fonts.button1};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.primary700};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.primary700};
  }

  transition: background-color 0.15s ease;
`;
