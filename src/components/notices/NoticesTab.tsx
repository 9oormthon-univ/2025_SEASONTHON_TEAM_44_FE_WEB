import styled from "@emotion/styled";

interface NoticesTabProps {
  currentTab: "send" | "history";
  setCurrentTab: (tab: "send" | "history") => void;
}

const NoticesTab = ({ currentTab, setCurrentTab }: NoticesTabProps) => {
  return (
    <NoticesTabContainer>
      <NoticesTabItem isActive={currentTab === "send"} onClick={() => setCurrentTab("send")}>
        메세지 보내기
      </NoticesTabItem>
      <NoticesTabItem isActive={currentTab === "history"} onClick={() => setCurrentTab("history")}>
        이전 메세지
      </NoticesTabItem>
    </NoticesTabContainer>
  );
};

export default NoticesTab;

const NoticesTabContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface NoticesTabItemProps {
  isActive?: boolean;
}

const NoticesTabItem = styled.div<NoticesTabItemProps>`
  padding: 20px 45px;
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border-bottom: ${({ isActive, theme }) =>
    (isActive ? `2px solid ${theme.colors.primary.primary500}` : `2px solid ${theme.colors.grayScale.gray50}`)};
  white-space: nowrap;
`;
