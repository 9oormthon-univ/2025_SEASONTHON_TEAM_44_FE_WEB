import NoticesTab from "@components/notices/NoticesTab.tsx";
import NoticesForm from "@components/notices/NoticesForm.tsx";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MessageHistory from "@components/notices/MessageHistory.tsx";
import ListPageAction from "@components/common/ListPageAction.tsx";
import { useHandleListPageNumber } from "@hooks/visit/useHandleListPageNumber.ts";
import { useGetNotices } from "@hooks/notices/useGetNotices.ts";

const PAGE_SIZE = 9;

const NoticesPage = () => {
  const [currentTab, setCurrentTab] = useState<"send" | "history">("send");
  const { currentPage, onChangePage, setCurrentPage } = useHandleListPageNumber();

  const { data, isLoading, isError, refetch } = useGetNotices(currentPage, PAGE_SIZE);

  // 탭 전환 시 history 들어오면 1페이지부터 다시
  useEffect(() => {
    if (currentTab === 'history') {
      setCurrentPage?.(0);
      refetch();
    }
  }, [currentTab, refetch, setCurrentPage]);
  console.log(data);
  return (
    <NoticesContainer currentTab={currentTab}>
      <NoticesTab currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab === "send" && <NoticesForm />}

      {currentTab === "history" && (
        <NoticesMessageHistoryWrapper>
          {isError && <div>목록을 불러오지 못했어요.</div>}
          {!isLoading && !isError && (
            <>
              <MessageHistory items={data?.items ?? []} />
              <ListPageAction
                currentPage={currentPage}
                totalPages={data?.totalPages ?? 0}
                onChangePage={(page) => onChangePage(page, PAGE_SIZE)}
              />
            </>
          )}
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
  padding: 20px 30px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ currentTab }) => currentTab === "send" ? "520px" : "100%"};;
  min-width: ${({ currentTab }) => currentTab === "send" ? "520px" : "1240px"};;
  
  /*@media (max-width: 1240px) {
    width: ${({ currentTab }) => currentTab === "send" ? "520px" : undefined};
    /!*min-width: ${({ currentTab }) => currentTab === "send" ? "100%" : undefined};*!/
    padding: ${({ currentTab }) => currentTab === "send" ? "52px 10%" : "52px 210px"};
  }*/
`;

const NoticesMessageHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
`;
