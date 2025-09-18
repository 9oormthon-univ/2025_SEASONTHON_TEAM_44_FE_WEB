import type { NoticeItem } from "@apis/notice.ts";
import { receiverType } from "@/types/notices.ts";
import { fmt } from "@utils/date.ts";
import * as S from "@components/notices/NoticeDetailModal.css.ts";

interface NoticeDetailModalProps {
  onClose: () => void;
  noticeItem: NoticeItem;
}

const NoticeDetailModal = ({ noticeItem, onClose }: NoticeDetailModalProps) => {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <S.ModalWrapper onClick={onOverlayClick}>
      <S.NoticesConfirmModalContainer role="dialog" aria-modal="true">
        <S.NoticesConfirmModalContent>
          <S.NoticesConfirmModalContentItem>
            <div>발송 일시</div>
            <div>{fmt(noticeItem.createdAt)}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>제목</div>
            <div>{noticeItem.title}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>대상</div>
            <div>{receiverType.find((item) => item.value === noticeItem.target)?.label}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>공지 열람</div>
            <div>{noticeItem.readCount} / {noticeItem.targetCount}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>내용</div>
            <div>{noticeItem.content}</div>
          </S.NoticesConfirmModalContentItem>
        </S.NoticesConfirmModalContent>
        <S.NoticesConfirmModalButtonSection>
          <S.NoticesConfirmModalButton onClick={onClose}>확인</S.NoticesConfirmModalButton>
        </S.NoticesConfirmModalButtonSection>
      </S.NoticesConfirmModalContainer>
    </S.ModalWrapper>
  );
};

export default NoticeDetailModal;
