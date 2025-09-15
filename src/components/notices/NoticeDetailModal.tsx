import type { NoticeItem } from "@apis/notice.ts";
import styled from "@emotion/styled";
import { receiverType } from "@/types/notices.ts";
import { fmt } from "@utils/date.ts";

interface NoticeDetailModalProps {
  onClose: () => void;
  noticeItem: NoticeItem;
}

const NoticeDetailModal = ({ noticeItem, onClose }: NoticeDetailModalProps) => {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <ModalWrapper onClick={onOverlayClick}>
      <NoticesConfirmModalContainer role="dialog" aria-modal="true">
        <NoticesConfirmModalContent>
          <NoticesConfirmModalContentItem>
            <div>발송 일시</div>
            <div>{fmt(noticeItem.createdAt)}</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>제목</div>
            <div>{noticeItem.title}</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>대상</div>
            <div>{receiverType.find((item) => item.value === noticeItem.target)?.label}</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>공지 열람</div>
            <div>{noticeItem.readCount} / {noticeItem.targetCount}</div>
          </NoticesConfirmModalContentItem>
          <NoticesConfirmModalContentItem>
            <div>내용</div>
            <div>{noticeItem.content}</div>
          </NoticesConfirmModalContentItem>
        </NoticesConfirmModalContent>
        <NoticesConfirmModalButtonSection>
          <NoticesConfirmModalButton onClick={onClose}>확인</NoticesConfirmModalButton>
        </NoticesConfirmModalButtonSection>
      </NoticesConfirmModalContainer>
    </ModalWrapper>
  );
};

export default NoticeDetailModal;

const ModalWrapper = styled.div`
  z-index: 100;
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
  min-width: 610px;
  flex-direction: column;
  border-radius: 20px;
  gap: 30px;
  padding: 40px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);
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
    width: fit-content;
    text-align: left;
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.grayScale.gray500};
  }

  div:last-of-type {
    width: fit-content;
    text-align: left;
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.black};
    white-space: pre-wrap;
  }
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
