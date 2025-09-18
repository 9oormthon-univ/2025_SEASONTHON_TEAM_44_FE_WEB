import styled from "@emotion/styled";

const RegionalRegularRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  width: 100%;
  min-width: 520px;
  border-radius: 20px;
  gap: 30px;
`;

const RegionalRegularRateTitle = styled.div`
  margin-right: auto;
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const RegionalRegularRateContentSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`;

const RegionalRegularRateContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RegionalRegularRateContentItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  
  div:first-of-type {
    width: 15px;
    height: 15px;
    border-radius: 6px;
  }
  
  div:last-of-type {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export { RegionalRegularRateContainer, RegionalRegularRateTitle, RegionalRegularRateContentSection, RegionalRegularRateContentInner, RegionalRegularRateContentItem };
