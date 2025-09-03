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
        <Outlet />
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
`;
