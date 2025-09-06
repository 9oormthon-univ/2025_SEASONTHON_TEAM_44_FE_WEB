import styled from "@emotion/styled";
import theme from "@styles/theme.ts";

interface NoticesConfirmModalProp {
  handleClose: () => void;
  onSubmit?: () => void;
  setIsConfirm: () => void;
}

const noticesConfirmModal = ({ handleClose, onSubmit, setIsConfirm }: NoticesConfirmModalProp) => {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    handleClose();
    setIsConfirm();
  };

  return (
    <ModalWrapper onClick={onOverlayClick}>
      <NoticesConfirmModalContainer role="dialog" aria-modal="true">
        <NoticesConfirmModalTitle>공지 내용을 확인해주세요</NoticesConfirmModalTitle>
        <NoticesConfirmModalContent>
          <NoticesConfirmModalContentItem>
            <div>제목</div>
            <div>오늘 특급 할인!</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>대상</div>
            <div>인증 단골</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>내용</div>
            <div>{'마감 2시간 전이라 특급 할인 진행하고 있으니 와서 보고 가세요~!\n정말 맛있습니다.'}</div>
          </NoticesConfirmModalContentItem>
        </NoticesConfirmModalContent>
        <NoticesConfirmModalButtonSection>
          <NoticesConfirmModalButton onClick={handleSubmit}>이렇게 올릴게요</NoticesConfirmModalButton>
          <NoticesConfirmModalButton
            style={{ backgroundColor: theme.colors.primary.primary50, color: theme.colors.black }}
            onClick={handleClose}>수정할래요</NoticesConfirmModalButton>
        </NoticesConfirmModalButtonSection>
      </NoticesConfirmModalContainer>
    </ModalWrapper>
  );
};

export default noticesConfirmModal;

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

const NoticesConfirmModalContainer = styled.div`
  display: flex;
  width: 610px;
  flex-direction: column;
  border-radius: 20px;
  gap: 30px;
  padding: 40px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);
`;

const NoticesConfirmModalTitle = styled.div`
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

const NoticesConfirmModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  border-radius: 20px;
`;

const NoticesConfirmModalContentItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  div:first-of-type {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.grayScale.gray500};
  }

  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.black};
    white-space: pre-wrap;
`;

const NoticesConfirmModalButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 15%;
  width: 100%;
`;

const NoticesConfirmModalButton = styled.button`
  padding: 14px 0;
  font: ${({ theme }) => theme.fonts.button1};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  border-radius: 12px;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
  white-space: nowrap;
`;
