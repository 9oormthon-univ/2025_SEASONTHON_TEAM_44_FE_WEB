import VisitManagementList from "@components/visit/VisitManagementList.tsx";
import ListPageAction from "@components/common/ListPageAction.tsx";
import { useHandleSearchBar } from "@hooks/visit/useHandleSearchBar.ts";
import { useHandleListPageNumber } from "@hooks/visit/useHandleListPageNumber.ts";
import VisitManagementHeader from "@components/visit/VisitManagementHeader.tsx";
import { useGetVisits } from "@hooks/visit/useGetVisits.ts";
import VisitChat from "@components/visit/VisitChat.tsx";
import { useHandleToggle } from "@hooks/visit/useHandleToggle.ts";
import * as S from "@components/visit/VisitManagement.css.ts";

const PAGE_SIZE = 9;

const VisitManagement = () => {
  const { inputText, onChangeInputText } = useHandleSearchBar();
  const { currentPage, onChangePage } = useHandleListPageNumber();
  const { data } = useGetVisits(currentPage, PAGE_SIZE);
  const { toggleItem, handleToggleItem } = useHandleToggle();

  return (
    <>
      <S.VisitManagementContainer>
        <VisitManagementHeader inputText={inputText} onChangeInputText={onChangeInputText}
                               onSubmit={() => console.log("submit")} />
        <VisitManagementList items={data?.response.content ?? []} />
        <ListPageAction
          currentPage={currentPage}
          onChangePage={(pageOneBased: number) => onChangePage(pageOneBased, data?.response.totalPages ?? 0)}
          totalPages={data?.response.totalPages ?? 0} // 총 페이지 수
        />
      </S.VisitManagementContainer>
      <S.VisitChartContainer>
        <S.VisitChartHeader>
          <S.VisitChartTitle>방문 · 적립 추이 차트</S.VisitChartTitle>
          <S.ToggleWrapper>
            <S.ToggleItem isActive={toggleItem === "daily"} onClick={() => handleToggleItem("daily")}>일간</S.ToggleItem>
            <S.ToggleItem isActive={toggleItem === "weekly"} onClick={() => handleToggleItem("weekly")}>주간</S.ToggleItem>
          </S.ToggleWrapper>
        </S.VisitChartHeader>
        <VisitChat toggleItem={toggleItem} />
      </S.VisitChartContainer>
    </>
  );
};

export default VisitManagement;
