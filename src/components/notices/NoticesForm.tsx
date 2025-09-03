import styled from "@emotion/styled";
import ReceiverSelector from "@components/notices/ReceiverSelector.tsx";
import { useState } from "react";

const receiverOptions = [
  { value: 'all', label: '전체' },
  { value: 'normal', label: '일반 단골(10회 미만)' },
  { value: 'vip', label: '인증 단골(10회 이상)' },
];

const NoticesForm = () => {
  const [receiver, setReceiver] = useState<string | null>(null);

  return (
    <NoticesFormContainer>
      {/* 메세지 제목 */}
      <NoticesFormInputSection>
        <NoticesFormInputLabel>제목</NoticesFormInputLabel>
        <NoticesFormInput type="text" placeholder="제목을 입력하세요" />
      </NoticesFormInputSection>
      {/* 메세지 수신자 */}
      <NoticesFormInputSection>
        <NoticesFormInputLabel>받는 사람</NoticesFormInputLabel>
        <ReceiverSelector
          placeholder="받는 사람을 선택하세요"
          options={receiverOptions}
          value={receiver}
          onChange={setReceiver}
        />
      </NoticesFormInputSection>
      {/* 메세지 본문 */}
      <NoticesFormInputSection>
        <NoticesFormInputLabel>본문</NoticesFormInputLabel>
        <NoticesFormTextArea placeholder="본문을 입력하세요" />
      </NoticesFormInputSection>
      <NoticesFormButton>공지 보내기</NoticesFormButton>
    </NoticesFormContainer>
  );
};

export default NoticesForm;

const NoticesFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const NoticesFormInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NoticesFormInputLabel = styled.label`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
`;

const NoticesFormInput = styled.input`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};;
  border: none;
  outline: none;
  width: 402px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  transition: box-shadow 0.15s ease, background 0.15s ease;
`;

const NoticesFormTextArea = styled.textarea`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};;
  border: none;
  outline: none;
  min-height: 69px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }
`;

const NoticesFormButton = styled.div`
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 17px 146px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.button1};
  border: none;
  cursor: pointer;

  @media (max-width: 968px) {
    width: 100%;
    text-align: center;
  }
`;
