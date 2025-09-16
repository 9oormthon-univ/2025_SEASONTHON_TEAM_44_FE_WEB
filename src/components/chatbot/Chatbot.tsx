import { useState } from 'react';
import {
  ChatbotButton,
  ChatbotModal,
  ChatbotHeader,
  ChatbotTitle,
  CloseButton,
  ChatbotAvatar,
  ChatbotGreeting,
  ChatbotMessages,
  MessageBubble,
  ChatbotActions,
  ActionButton,
  ActionIcon,
  ActionText,
  ChatbotInput,
  Input,
  SendButton,
} from './Chatbot.css';
import { postChat } from '@apis/chatbot';
import chatbotImage from '/public/chatbot.png';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    setIsLoading(true);
    try {
      await postChat({
        session_id: '1',
        message: messageText,
      });
      setMessage('');
    } catch (error) {
      console.error('챗봇 메시지 전송 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(message);
    }
  };

  return (
    <>
      <ChatbotButton onClick={() => setIsOpen(!isOpen)}>
        <img src={chatbotImage} alt="챗봇" />
      </ChatbotButton>

      {isOpen && (
        <ChatbotModal>
          <ChatbotHeader>
            <ChatbotTitle>챗봇 상담원 다온이</ChatbotTitle>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </ChatbotHeader>

          <ChatbotAvatar>
            <img src={chatbotImage} alt="다온이" />
          </ChatbotAvatar>

          <ChatbotGreeting>무엇을 도와드릴까요?</ChatbotGreeting>

          <ChatbotMessages>
            <MessageBubble>안녕하세요 사장님! 다온이입니다 😊</MessageBubble>
            <MessageBubble>
              도움이 필요한 내용을 입력하거나 선택해보세요!
            </MessageBubble>
          </ChatbotMessages>

          <ChatbotActions>
            <ActionButton
              onClick={() => handleSendMessage('공지 보내는 방법 알려줘')}
            >
              <ActionIcon>⚠️</ActionIcon>
              <ActionText>공지 보내기</ActionText>
            </ActionButton>
            <ActionButton
              onClick={() => handleSendMessage('오늘 방문 요약 보기')}
            >
              <ActionIcon>🕐</ActionIcon>
              <ActionText>오늘 방문 요약 보기</ActionText>
            </ActionButton>
          </ChatbotActions>

          <ChatbotInput>
            <Input
              type="text"
              placeholder="다온이에게 질문해보세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <SendButton
              onClick={() => handleSendMessage(message)}
              disabled={isLoading || !message.trim()}
            >
              ↑
            </SendButton>
          </ChatbotInput>
        </ChatbotModal>
      )}
    </>
  );
}
