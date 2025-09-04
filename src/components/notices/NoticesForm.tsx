import ReceiverSelector from "@components/notices/ReceiverSelector.tsx";
import { useState } from "react";
import * as S from "@components/notices/NoticesForm.css.ts";

const receiverOptions = [
  { value: 'all', label: '전체' },
  { value: 'normal', label: '일반 단골(10회 미만)' },
  { value: 'vip', label: '인증 단골(10회 이상)' },
];

const NoticesForm = () => {
  const [receiver, setReceiver] = useState<string | null>(null);

  return (
    <S.NoticesFormContainer>
      {/* 메세지 제목 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>제목</S.NoticesFormInputLabel>
        <S.NoticesFormInput type="text" placeholder="제목을 입력하세요" />
      </S.NoticesFormInputSection>
      {/* 메세지 수신자 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>받는 사람</S.NoticesFormInputLabel>
        <ReceiverSelector
          placeholder="받는 사람을 선택하세요"
          options={receiverOptions}
          value={receiver}
          onChange={setReceiver}
        />
      </S.NoticesFormInputSection>
      {/* 메세지 본문 */}
      <S.NoticesFormInputSection>
        <S.NoticesFormInputLabel>본문</S.NoticesFormInputLabel>
        <S.NoticesFormTextArea placeholder="본문을 입력하세요" />
      </S.NoticesFormInputSection>
      <S.NoticesFormButton>공지 보내기</S.NoticesFormButton>
    </S.NoticesFormContainer>
  );
};

export default NoticesForm;
