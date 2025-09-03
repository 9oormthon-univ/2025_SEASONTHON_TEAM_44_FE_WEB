import styled from "@emotion/styled";
import { Outlet } from "react-router";
import SideBar from "@components/common/SideBar.tsx";
import Header from "@components/common/Header.tsx";

const RootLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Inner>
        <SideBar />
        <Content>
          <Outlet />
        </Content>
      </Inner>
    </Wrapper>
  );
};

export default RootLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  overflow: hidden;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 10% 211px 98px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  
  @media (max-width: 1600px) {
    padding: 40px 8% 110px 60px;
  }
  
  @media (max-width: 980px) {
    padding: 40px 5% 110px 60px;
  }
`;
