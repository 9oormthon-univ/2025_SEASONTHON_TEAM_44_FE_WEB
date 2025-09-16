import styled from "@emotion/styled";

interface ActiveProps {
  isActive?: boolean;
}

const SideBarContainer = styled.div`
  min-width: 160px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.grayScale.gray50};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScale.gray50};
  background-color: ${({ theme }) => theme.colors.white};
`;

const SideBarMenuItem = styled.div<ActiveProps>`
  margin: 5px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 5px;
  text-align: start;
  font: ${({ theme }) => theme.fonts.body3};
  cursor: pointer;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary.primary50 : 'transparent'};
  border-radius: 6px;
  color: ${({ isActive, theme }) => isActive ? theme.colors.primary.primary500 : theme.colors.grayScale.gray500};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.primary50};
  }
`;

export { SideBarContainer, SideBarMenuItem };
