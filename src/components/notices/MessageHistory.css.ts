import styled from "@emotion/styled";

const MessageHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.grayScale.gray50};
  height: 515px;
  width: 1030px;
`;

const MessageHistoryLabelSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const MessageHistoryLabel = styled.div`
  width: 200px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
`;

const MessageHistoryItemsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageHistoryListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  
  div {
    width: 200px;
    text-align: center;
  }
`;

export { MessageHistoryContainer, MessageHistoryLabelSection, MessageHistoryLabel, MessageHistoryItemsSection, MessageHistoryListItem };
