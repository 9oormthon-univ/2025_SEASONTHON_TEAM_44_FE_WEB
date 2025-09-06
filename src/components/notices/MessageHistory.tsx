import * as S from '@components/notices/MessageHistory.css.ts';
import type { NoticeItem } from "@apis/notice.ts";
import { receiverType } from "@/types/notices.ts";

interface MessageHistoryProps {
  items: NoticeItem[];
}

const fmt = (iso: string) => new Date(iso).toLocaleString(); // 필요시 커스텀 포맷

const MessageHistory = ({ items }: MessageHistoryProps) => {
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
        {items.length === 0 && (
          <S.MessageHistoryListItem>
            <div>내역이 없습니다.</div>
          </S.MessageHistoryListItem>
        )}

        {items.map((m) => (
          <S.MessageHistoryListItem key={m.id}>
            <div>{fmt(m.createdAt)}</div>
            <div>{m.title}</div>
            <div>{receiverType.find((option) => option.value === m.target)?.label}</div>
            <div>{m.targetCount}명</div>
            <div>{m.readCount}명</div>
          </S.MessageHistoryListItem>
        ))}
      </S.MessageHistoryItemsSection>
    </S.MessageHistoryContainer>
  );
};

export default MessageHistory;
