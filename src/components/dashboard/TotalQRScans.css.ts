import styled from "@emotion/styled";

const TotalQRScansContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  border-radius: 20px;
  border: none;
  gap: 32px;
  width: 100%;
`;

const TotalQRScansTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const TotalQRScansCount = styled.div`
  padding: 42px 20px 20px 107px;
  text-align: end;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayScale.gray500};
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  border-radius: 20px;
  border: none;
  min-width: 159px;
  margin-left: auto;
  
  span {
    margin-right: 15px;
    font: ${({ theme }) => theme.fonts.h1};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export { TotalQRScansContainer, TotalQRScansTitle, TotalQRScansCount };
