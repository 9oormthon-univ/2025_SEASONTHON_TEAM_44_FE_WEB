import * as S from "@components/visit/VisitManagementList.css.ts";
import type { VisitItem } from "@apis/visit.ts";
import { VisitManagementNoneList } from "@components/visit/VisitManagementList.css.ts";
import { fmt } from "@utils/date.ts";

interface VisitManagementListProps {
  items: VisitItem[];
  isFetching?: boolean;
}

const VisitManagementList = ({ items }: VisitManagementListProps) => {
  return (
    <S.VisitManagementListContainer>
      <S.VisitManagementLabelSection>
        <S.VisitManagementLabel>방문일시</S.VisitManagementLabel>
        <S.VisitManagementLabel>고객명</S.VisitManagementLabel>
        <S.VisitManagementLabel>행동유형</S.VisitManagementLabel>
        <S.VisitManagementLabel>누적 방문수</S.VisitManagementLabel>
        <S.VisitManagementLabel>비고</S.VisitManagementLabel>
      </S.VisitManagementLabelSection>
      <S.VisitManagementItemsSection>
        {items.length === 0 && (
            <VisitManagementNoneList>방문 · 적립 내역이 존재하지 않아요</VisitManagementNoneList>
        )}

        {items.map((v, idx) => (
          <S.VisitManagementListItem key={`${v.dateTime}-${v.customerName}-${idx}`}>
            <div>{fmt(v.dateTime)}</div>
            <div>{v.customerName}</div>
            <div>{v.action}</div>
            <div>{v.cumulative}회</div>
            <div>{v.note}</div>
          </S.VisitManagementListItem>
        ))}

      </S.VisitManagementItemsSection>
    </S.VisitManagementListContainer>
  );
};

export default VisitManagementList;

