import styled from "@emotion/styled";
import IcLogo from "@icon/ic-logo.svg"
import ImgExampleProfile from "@img/img-example-profile.png"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={IcLogo} alt=""/>
      <HeaderProfileSection>
        <img  src={ImgExampleProfile}/>
        <div>다시온님</div>
      </HeaderProfileSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grayScale.gray30};
  justify-content: space-between;
  
  @media (max-width: 1200px) {
    padding: 20px 5%;
  }
`;

const HeaderProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  
  img {
    width: 35px;
    height: 35px;
    background-color: #C4C4C4;
    border-radius: 50%;
    object-fit: cover;
  }
  
  div {
    font: ${({ theme }) => theme.fonts.sub2};
    color: ${({ theme }) => theme.colors.black};
  }
`;
