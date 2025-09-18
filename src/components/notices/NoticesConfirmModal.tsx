import theme from "@styles/theme.ts";
import { type NoticeRequest, receiverOptions } from "@/types/notices.ts";
import { usePostNotice } from "@hooks/notices/usePostNotice.ts";
import * as S from "@components/notices/NoticesConfirmModal.css.ts"

interface NoticesConfirmModalProp {
  handleClose: () => void;
  onSubmit?: () => void;
  setIsConfirm: () => void;
  title: string;
  content: string;
  target: "ALL" | "BASIC" | "CERTIFIED" | null;
}

const NoticesConfirmModal = ({
                               handleClose,
                               setIsConfirm,
                               title,
                               content,
                               target,
                             }: NoticesConfirmModalProp) => {
  const { mutate, isSuccess } = usePostNotice();
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) handleClose();
  };

  const handleSubmit = () => {
    const request: NoticeRequest = {
      title: title,
      content: content,
      target: target as "ALL" | "BASIC" | "CERTIFIED",
    };
    mutate(request);
  };

  if (isSuccess) {
    handleClose();
    setIsConfirm();
  }

  const receiverOption = receiverOptions.find((item) => item.value === target);

  return (
    <S.ModalWrapper onClick={onOverlayClick}>
      <S.NoticesConfirmModalContainer role="dialog" aria-modal="true">
        <S.NoticesConfirmModalTitle>공지 내용을 확인해주세요</S.NoticesConfirmModalTitle>
        <S.NoticesConfirmModalContent>
          <S.NoticesConfirmModalContentItem>
            <div>제목</div>
            <div>{title}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>대상</div>
            <div>{receiverOption?.label}</div>
          </S.NoticesConfirmModalContentItem>
          <S.NoticesConfirmModalContentItem>
            <div>내용</div>
            <div>{content}</div>
          </S.NoticesConfirmModalContentItem>
        </S.NoticesConfirmModalContent>
        <S.NoticesConfirmModalButtonSection>
          <S.NoticesConfirmModalButton onClick={handleSubmit}>이렇게 올릴게요</S.NoticesConfirmModalButton>
          <S.NoticesConfirmModalButton
            style={{ backgroundColor: theme.colors.primary.primary50, color: theme.colors.black }}
            onClick={handleClose}>수정할래요</S.NoticesConfirmModalButton>
        </S.NoticesConfirmModalButtonSection>
      </S.NoticesConfirmModalContainer>
    </S.ModalWrapper>
  );
};

export default NoticesConfirmModal;
