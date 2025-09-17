import styled from '@emotion/styled';

export const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 135px;
  height: 135px;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    object-fit: contain;
    z-index: 2;
  }

  /* Lottie 애니메이션은 자동으로 뒤에 배치됨 */
`;

export const ChatbotModal = styled.div`
  position: fixed;
  bottom: 155px;
  right: 20px;
  width: 400px;
  height: 600px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChatbotScrollableArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grayScale.gray200};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grayScale.gray400};
  }
`;

export const ChatbotHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 15px 20px;
`;

export const ChatbotMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChatbotTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayScale.gray500};
  margin: 0;
`;

export const CloseButton = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
`;

export const ChatbotAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 126px;
  height: 126px;
  margin: 0 auto;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    object-fit: contain;
    z-index: 2;
  }
`;

export const ChatbotGreeting = styled.h4`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 0;
`;

export const ChatbotMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

export const MessageBubble = styled.div<{ $isUser?: boolean }>`
  background: ${({ theme, $isUser }) =>
    $isUser ? theme.colors.primary.primary500 : theme.colors.grayScale.gray50};
  padding: 10px 15px;
  border-radius: 18px;
  font: ${({ theme }) => theme.fonts.button2};
  color: ${({ theme, $isUser }) =>
    $isUser ? theme.colors.white : theme.colors.black};
  max-width: 90%;
  width: fit-content;
  word-wrap: break-word;
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  margin-left: ${({ $isUser }) => ($isUser ? 'auto' : '0')};
  margin-right: ${({ $isUser }) => ($isUser ? '0' : 'auto')};

  /* 마크다운 스타일링 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 8px 0;
    font-weight: 600;
  }

  p {
    margin: 0;
    line-height: 1.4;
  }

  ul,
  ol {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin: 0;
  }

  code {
    background: rgba(0, 0, 0, 0.1);
    padding: 0;
    border-radius: 3px;
    font-family: monospace;
    font-size: 0.9em;
  }

  pre {
    background: rgba(0, 0, 0, 0.1);
    padding: 8px;
    border-radius: 6px;
    overflow-x: auto;
    margin: 8px 0;
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.colors.primary.primary500};
    padding-left: 12px;
    margin: 8px 0;
    font-style: italic;
  }

  strong,
  b {
    font-weight: 600;
    color: inherit;
  }

  em,
  i {
    font-style: italic;
    color: inherit;
  }
  * {
    color: inherit;
  }
  strong,
  b {
    font-weight: 700 !important;
    color: inherit !important;
  }
  em,
  i {
    font-style: italic !important;
    color: inherit !important;
  }
  code {
    background: rgba(0, 0, 0, 0.1) !important;
    padding: 2px 4px !important;
    border-radius: 3px !important;
    font-family: 'Courier New', monospace !important;
    font-size: 0.9em !important;
    color: inherit !important;
  }
`;

export const ChatbotActions = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 14px 0px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 5px 15px rgba(103, 18, 18, 0.25);
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.grayScale.gray30};
    transform: translateY(-2px);
  }
`;

export const ActionIcon = styled.div`
  font-size: 24px;
`;

export const ActionText = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.black};
`;

export const ChatbotInput = styled.div`
  display: flex;
  padding: 10px 20px 30px 20px;
  gap: 6px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 20px;
  border-radius: 20px;
  font: ${({ theme }) => theme.fonts.body4};
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.grayScale.gray50};
  color: ${({ theme }) => theme.colors.black};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray400};
  }
`;

export const SendButton = styled.button`
  padding: 10px 25px;
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primary.primary500};
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary.primary700};
    transform: scale(1.05);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grayScale.gray200};
    cursor: not-allowed;
  }
`;

export const LoadingBubble = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.grayScale.gray50};
  padding: 10px 15px;
  border-radius: 18px;
  font: ${({ theme }) => theme.fonts.button2};
  color: ${({ theme }) => theme.colors.grayScale.gray400};
  max-width: 80%;
  width: fit-content;
  align-self: flex-start;
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.grayScale.gray200};
  border-top: 2px solid ${({ theme }) => theme.colors.primary.primary500};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
