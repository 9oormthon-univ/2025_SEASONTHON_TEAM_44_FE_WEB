import styled from "@emotion/styled";

const Header = () => {
  return (
    <HeaderContainer>header</HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.white};
`;
