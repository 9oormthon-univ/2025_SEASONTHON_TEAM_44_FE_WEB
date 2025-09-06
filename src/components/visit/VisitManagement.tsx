import styled from "@emotion/styled";
import VisitManagementList from "@components/visit/VisitManagementList.tsx";
import ListPageAction from "@components/common/ListPageAction.tsx";
import { useHandleSearchBar } from "@hooks/visit/useHandleSearchBar.ts";
import { useHandleListPageNumber } from "@hooks/visit/useHandleListPageNumber.ts";
import VisitManagementHeader from "@components/visit/VisitManagementHeader.tsx";
import { useGetVisits } from "@hooks/visit/useGetVisits.ts";

const PAGE_SIZE = 9;

const VisitManagement = () => {
  const { inputText, onChangeInputText } = useHandleSearchBar();
  const { currentPage, onChangePage } = useHandleListPageNumber();
  const { data } = useGetVisits(currentPage - 1, PAGE_SIZE);

  return (
    <VisitManagementContainer>
      <VisitManagementHeader inputText={inputText} onChangeInputText={onChangeInputText}
                             onSubmit={() => console.log("submit")} />
      <VisitManagementList items={data?.response.content ?? []} />
      <ListPageAction
        currentPage={currentPage}
        onChangePage={(pageOneBased: number) => onChangePage(pageOneBased, data?.response.totalPages ?? 0)}
        totalPages={data?.response.totalPages ?? 0} // 총 페이지 수
      />
    </VisitManagementContainer>
  );
};

export default VisitManagement;

const VisitManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px 30px;
  align-items: center;
  min-width: 1240px;
  gap: 20px;
`;
