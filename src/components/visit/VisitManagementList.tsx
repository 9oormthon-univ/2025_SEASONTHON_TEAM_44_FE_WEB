import * as S from "@components/visit/VisitManagementList.css.ts";

const visitList = [
  {
    id: 0,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 1,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 0,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 1,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 0,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 1,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 0,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 1,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
  {
    id: 0,
    visitDate: "2023-08-01 14:30",
    name: "홍길동",
    type: "신규 등록",
    count: 1,
    etc: "신규 단골 등록",
  },
];

const VisitManagementList = () => {
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
        {visitList.map((visitor) => (
          <S.VisitManagementListItem key={visitor.id}>
            <div>{visitor.visitDate}</div>
            <div>{visitor.name}</div>
            <div>{visitor.type}</div>
            <div>{visitor.count}회</div>
            <div>{visitor.etc}</div>
          </S.VisitManagementListItem>
        ))}
      </S.VisitManagementItemsSection>
    </S.VisitManagementListContainer>
  );
};

export default VisitManagementList;

