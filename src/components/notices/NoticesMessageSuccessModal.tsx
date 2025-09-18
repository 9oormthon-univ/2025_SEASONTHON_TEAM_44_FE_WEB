import IcMessage from "@icon/ic-message.svg";
import * as S from "./NoticesMessageSuccessModal.css";

interface NoticesMessageSuccessModalProp {
  handleClose: () => void;
}

const NoticesMessageSuccessModal = ({ handleClose }: NoticesMessageSuccessModalProp) => {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };
  return (
    <S.ModalWrapper onClick={onOverlayClick}>
      <S.NoticesMessageSuccessModalContainer>
        <S.NoticesMessageSuccessModalTitle>공직 정상적으로 전송되었어요!</S.NoticesMessageSuccessModalTitle>
        <S.NoticesMessageSuccessModalContent>단골분들께 저희가 잘 전달해드렸어요</S.NoticesMessageSuccessModalContent>
        <img src={IcMessage} alt="" />
        <S.NoticesMessageSuccessModalButton onClick={handleClose}>확인</S.NoticesMessageSuccessModalButton>
      </S.NoticesMessageSuccessModalContainer>
    </S.ModalWrapper>
  );
};

export default NoticesMessageSuccessModal;
