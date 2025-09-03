import styled from "@emotion/styled";
import VisitManagementList from "@components/visit/VisitManagementList.tsx";
import VisitManagementPageAction from "@components/visit/VisitManagementPageAction.tsx";
import { useHandleSearchBar } from "@hooks/visit/useHandleSearchBar.ts";
import { useHandleListPageNumber } from "@hooks/visit/useHandleListPageNumber.ts";
import VisitManagementHeader from "@components/visit/VisitManagementHeader.tsx";

const PAGE_SIZE = 5;

const VisitManagement = () => {
  const { inputText, onChangeInputText } = useHandleSearchBar();
  const { currentPage, onChangePage } = useHandleListPageNumber();

  return (
    <VisitManagementContainer>
      <VisitManagementHeader inputText={inputText} onChangeInputText={onChangeInputText} onSubmit={() => console.log("submit")} />
      <VisitManagementList />
      <VisitManagementPageAction currentPage={currentPage} onChangePage={onChangePage} pageSize={PAGE_SIZE} />
    </VisitManagementContainer>
  );
};

export default VisitManagement;

const VisitManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 52px 105px;
  align-items: center;
  min-width: 1240px;
  gap: 20px;
`;
