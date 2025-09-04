import * as S from "@components/notices/MessageHistory.css.ts"

const messageList = [
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "오늘만 할인",
    type: "단골",
    count: 100,
    viewer: 30,
  },
  {
    id: 1,
    sendDate: "2023-08-01 14:30",
    title: "홍홍홍 특급",
    type: "인증 단골",
    count: 60,
    viewer: 31,
  },
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "할인할인할인",
    type: "일반 단골",
    count: 30,
    viewer: 20,
  },
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "오늘만 할인",
    type: "단골",
    count: 100,
    viewer: 30,
  },
  {
    id: 1,
    sendDate: "2023-08-01 14:30",
    title: "홍홍홍 특급",
    type: "인증 단골",
    count: 60,
    viewer: 31,
  },
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "할인할인할인",
    type: "일반 단골",
    count: 30,
    viewer: 20,
  },
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "오늘만 할인",
    type: "단골",
    count: 100,
    viewer: 30,
  },
  {
    id: 1,
    sendDate: "2023-08-01 14:30",
    title: "홍홍홍 특급",
    type: "인증 단골",
    count: 60,
    viewer: 31,
  },
  {
    id: 0,
    sendDate: "2023-08-01 14:30",
    title: "할인할인할인",
    type: "일반 단골",
    count: 30,
    viewer: 20,
  },
];

const MessageHistory = () => {
  return (
    <S.MessageHistoryContainer>
      <S.MessageHistoryLabelSection>
        <S.MessageHistoryLabel>발송일시</S.MessageHistoryLabel>
        <S.MessageHistoryLabel>제목</S.MessageHistoryLabel>
        <S.MessageHistoryLabel>대상</S.MessageHistoryLabel>
        <S.MessageHistoryLabel>수신 인원</S.MessageHistoryLabel>
        <S.MessageHistoryLabel>열람 수</S.MessageHistoryLabel>
      </S.MessageHistoryLabelSection>
      <S.MessageHistoryItemsSection>
        {messageList.map((message) => (
          <S.MessageHistoryListItem key={message.id}>
            <div>{message.sendDate}</div>
            <div>{message.title}</div>
            <div>{message.type}</div>
            <div>{message.count}명</div>
            <div>{message.viewer}명</div>
          </S.MessageHistoryListItem>
        ))}
      </S.MessageHistoryItemsSection>
    </S.MessageHistoryContainer>
  );
};

export default MessageHistory;
