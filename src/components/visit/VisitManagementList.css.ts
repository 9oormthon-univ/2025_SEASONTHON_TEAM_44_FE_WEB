import styled from "@emotion/styled";

const VisitManagementListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.grayScale.gray50};
  height: 515px;
  width: 1030px;
`;

const VisitManagementLabelSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const VisitManagementLabel = styled.div`
  width: 200px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.sub1};
  color: ${({ theme }) => theme.colors.black};
`;

const VisitManagementItemsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const VisitManagementListItem = styled.div`
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

const VisitManagementNoneList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayScale.gray500};
`

export { VisitManagementListContainer, VisitManagementLabelSection, VisitManagementLabel, VisitManagementItemsSection, VisitManagementListItem, VisitManagementNoneList };
