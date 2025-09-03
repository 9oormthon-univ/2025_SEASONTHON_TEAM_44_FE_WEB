import styled from "@emotion/styled";

interface ActiveProps {
  isActive?: boolean;
}

const SideBarContainer = styled.div`
  min-width: 242px;
  height: 50%;
  min-height: 477px;
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.grayScale.gray50};
`;

const SideBarMenuItem = styled.div<ActiveProps>`
  padding: 20px;
  text-align: end;
  font: ${({ theme }) => theme.fonts.sub1};
  cursor: pointer;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary.primary200 : 'transparent'};
`;

export { SideBarContainer, SideBarMenuItem };
