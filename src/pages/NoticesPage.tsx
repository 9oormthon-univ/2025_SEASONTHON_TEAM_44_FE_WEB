import NoticesTab from "@components/notices/NoticesTab.tsx";
import NoticesForm from "@components/notices/NoticesForm.tsx";
import styled from "@emotion/styled";
import { useState } from "react";
import MessageHistory from "@components/notices/MessageHistory.tsx";
import ListPageAction from "@components/common/ListPageAction.tsx";
import { useHandleListPageNumber } from "@hooks/visit/useHandleListPageNumber.ts";

const PAGE_SIZE = 5;

const NoticesPage = () => {
  const [currentTab, setCurrentTab] = useState<"send" | "history">("send");
  const { currentPage, onChangePage } = useHandleListPageNumber();
  return (
    <NoticesContainer currentTab={currentTab}>
      <NoticesTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "send" && <NoticesForm />}
      {currentTab === "history" && (
        <NoticesMessageHistoryWrapper>
          <MessageHistory />
          <ListPageAction currentPage={currentPage} onChangePage={onChangePage} pageSize={PAGE_SIZE} />
        </NoticesMessageHistoryWrapper>
      )}
    </NoticesContainer>
  );
};

export default NoticesPage;

const NoticesContainer = styled.div<{ currentTab: string }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 52px 210px;
  align-items: center;
  min-width: 1240px;

  @media (max-width: 1240px) {
    width: ${({ currentTab }) => currentTab === "send" ? "100%" : undefined};
    min-width: ${({ currentTab }) => currentTab === "send" ? "100%" : undefined};
    padding: ${({ currentTab }) => currentTab === "send" ? "52px 10%" : "52px 210px"};
  }
`;

const NoticesMessageHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
