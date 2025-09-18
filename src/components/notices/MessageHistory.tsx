import * as S from '@components/notices/MessageHistory.css.ts';
import { type NoticeItem, receiverType } from "@/types/notices.ts";
import { useState } from "react";
import NoticeDetailModal from "@components/notices/NoticeDetailModal.tsx";
import { fmt } from "@utils/date.ts";

interface MessageHistoryProps {
  items: NoticeItem[];
}

const MessageHistory = ({ items }: MessageHistoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<NoticeItem | null>(null);

  const openModal = (item: NoticeItem) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

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
          <S.MessageHistoryListItem key={m.id} onClick={() => openModal(m)}>
            <div>{fmt(m.createdAt)}</div>
            <div>{m.title}</div>
            <div>{receiverType.find((option) => option.value === m.target)?.label}</div>
            <div>{m.targetCount}명</div>
            <div>{m.readCount}명</div>
          </S.MessageHistoryListItem>
        ))}
      </S.MessageHistoryItemsSection>
      {isOpen && <NoticeDetailModal noticeItem={selectedItem!} onClose={() => setIsOpen(false)} />}
    </S.MessageHistoryContainer>
  );
};

export default MessageHistory;
