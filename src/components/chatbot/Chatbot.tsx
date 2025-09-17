import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ChatbotButton,
  ChatbotModal,
  ChatbotScrollableArea,
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
  ChatbotMain,
  LoadingBubble,
  LoadingSpinner,
} from './Chatbot.css';
import { usePostChat } from '@hooks/chatbot/usePostChat';
import { postStoresInsight } from '@apis/store';
import chatbotImage from '/public/chatbot.png';
import NotiIcon from '../svg/NotiIcon';
import TodayIcon from '../svg/TodayIcon';
import ArrowTop from '../svg/ArrowTop';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요 사장님! 다온이입니다 😊',
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: '2',
      text: '도움이 필요한 내용을 입력하거나 선택해보세요!',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [showActions, setShowActions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { mutate: postChat, isPending: isLoading } = usePostChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setShowActions(false);

    setTimeout(() => {
      postChat(
        {
          session_id: '1',
          message: messageText,
        },
        {
          onSuccess: (response) => {
            const responseText =
              typeof response === 'string'
                ? response
                : response?.response ||
                  response?.message ||
                  '네, 도와드리겠습니다! 😊';

            const botMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: responseText,
              isUser: false,
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
          },
          onError: (error) => {
            console.error('챗봇 메시지 전송 실패:', error);
            const errorMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: '죄송합니다. 다시 시도해주세요.',
              isUser: false,
              timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
          },
          onSettled: () => {
            console.log('API 호출 완료');
            setTimeout(() => {
              setShowActions(true);
            }, 400);
          },
        },
      );
    }, 400);
  };

  const handleInsightRequest = async () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: '오늘 방문 요약 보기',
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setShowActions(false);

    setTimeout(async () => {
      try {
        const response = await postStoresInsight();
        const insightText =
          response?.response || '인사이트 데이터를 불러올 수 없습니다.';

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: insightText,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error('인사이트 요청 실패:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: '인사이트를 불러오는데 실패했습니다. 다시 시도해주세요.',
          isUser: false,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setTimeout(() => {
          setShowActions(true);
        }, 400);
      }
    }, 400);
  };

  const handleNoticeRequest = () => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: '공지 메세지 보내는 법을 알려줘',
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setShowActions(false);

    const noticeGuide = `## 📢 공지 메시지 보내는 방법

## 1. 공지 작성하기
- **제목**: 명확하고 간결하게 작성
- **내용**: 핵심 정보를 먼저 배치
- **본문**: 본문을 입력해 정보를 전달

## 2. 공지 유형별 작성법

### 🎉 이벤트 공지
\`\`\`
📢 [이벤트] 특별 할인 이벤트 안내

안녕하세요! 
오는 12월 25일까지 
전 메뉴 20% 할인 이벤트를 진행합니다.

📍 기간: 2024.12.20 ~ 2024.12.25
⏰ 시간: 매일 14:00 ~ 17:00
💰 할인율: 20% (음료 제외)

많은 참여 부탁드립니다! 🙏
\`\`\`

### ⚠️ 운영 공지
\`\`\`
📢 [운영] 휴무일 안내

안녕하세요!
12월 25일(화)은 휴무일입니다.

📍 휴무일: 2024.12.25(화)
📍 재개일: 2024.12.26(수) 정상운영

이용에 참고 부탁드립니다.
\`\`\`

## 3. 공지 작성 팁
- **이모지 활용**: 시각적 효과로 주목도 높이기
- **구조화**: 제목, 본문, 마무리로 명확한 구조
- **간결함**: 핵심만 담아 읽기 쉽게
- **호출행동**: 구체적인 행동 유도

## 4. 발송 시점
- **오전 9-10시**: 출근길 고객 대상
- **오후 12-1시**: 점심시간 고객 대상  
- **오후 6-7시**: 퇴근길 고객 대상

이렇게 작성하시면 효과적인 공지 메시지를 보낼 수 있습니다! 😊`;

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: noticeGuide,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      setTimeout(() => {
        setShowActions(true);
      }, 400);
    }, 400);
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
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </ChatbotHeader>
          <ChatbotScrollableArea>
            <ChatbotMain>
              <ChatbotTitle>챗봇 상담원 다온이</ChatbotTitle>
              <ChatbotAvatar>
                <img src={chatbotImage} alt="다온이" />
              </ChatbotAvatar>
              <ChatbotGreeting>무엇을 도와드릴까요?</ChatbotGreeting>
            </ChatbotMain>
            <ChatbotMessages>
              {messages.map((msg) => (
                <MessageBubble key={msg.id} $isUser={msg.isUser}>
                  {msg.isUser ? (
                    msg.text
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.text}
                    </ReactMarkdown>
                  )}
                </MessageBubble>
              ))}
              {isLoading && (
                <LoadingBubble>
                  <LoadingSpinner />
                  <span>다온이가 답변을 준비하고 있어요...</span>
                </LoadingBubble>
              )}
              <div ref={messagesEndRef} />
            </ChatbotMessages>
            {showActions && (
              <ChatbotActions>
                <ActionButton onClick={handleNoticeRequest}>
                  <ActionIcon>
                    <NotiIcon />
                  </ActionIcon>
                  <ActionText>공지 보내기</ActionText>
                </ActionButton>
                <ActionButton onClick={handleInsightRequest}>
                  <ActionIcon>
                    <TodayIcon />
                  </ActionIcon>
                  <ActionText>오늘 방문 요약 보기</ActionText>
                </ActionButton>
              </ChatbotActions>
            )}
          </ChatbotScrollableArea>
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
              <ArrowTop />
            </SendButton>
          </ChatbotInput>
        </ChatbotModal>
      )}
    </>
  );
}
