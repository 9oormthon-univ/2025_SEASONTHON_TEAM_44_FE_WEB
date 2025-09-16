import styled from '@emotion/styled';

export const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ChatbotModal = styled.div`
  position: fixed;
  bottom: 160px;
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

export const ChatbotHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gray100};
`;

export const ChatbotTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayScale.gray500};
`;

export const ChatbotAvatar = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

export const ChatbotGreeting = styled.h4`
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 0 0 20px 0;
`;

export const ChatbotMessages = styled.div`
  flex: 1;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

export const MessageBubble = styled.div`
  background: ${({ theme }) => theme.colors.grayScale.gray30};
  padding: 12px 16px;
  border-radius: 18px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  max-width: 80%;
  word-wrap: break-word;
`;

export const ChatbotActions = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  justify-content: center;
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray100};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

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
  padding: 20px;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScale.gray100};
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray100};
  border-radius: 20px;
  font: ${({ theme }) => theme.fonts.body2};
  outline: none;
  background: ${({ theme }) => theme.colors.grayScale.gray30};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.primary500};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray400};
  }
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
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
