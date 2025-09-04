import ReceiverSelector from "@components/notices/ReceiverSelector.tsx";
import * as S from "@components/notices/NoticesForm.css.ts";
import { useMessageForm } from "@hooks/notices/useMessageForm.ts";
import { receiverOptions } from "@/types/notices.ts";

const NoticesForm = () => {
  const {  register, handleSubmit, receiver, onSubmit, onChange  } =useMessageForm();
  return (
    <S.NoticesFormContainer>
      {/* 메세지 제목 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>제목</S.NoticesFormInputLabel>
        <S.NoticesFormInput type="text" placeholder="제목을 입력하세요" {...register('title')} />
      </S.NoticesFormInputSection>
      {/* 메세지 수신자 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>받는 사람</S.NoticesFormInputLabel>
        <ReceiverSelector
          placeholder="받는 사람을 선택하세요"
          options={receiverOptions}
          value={receiver}
          onChange={onChange}
        />
      </S.NoticesFormInputSection>
      {/* 메세지 본문 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>본문</S.NoticesFormInputLabel>
        <S.NoticesFormTextArea placeholder="본문을 입력하세요" />
      </S.NoticesFormInputSection>
      <S.NoticesFormButton onClick={handleSubmit(onSubmit)}>공지 보내기</S.NoticesFormButton>
    </S.NoticesFormContainer>
  );
};

export default NoticesForm;
