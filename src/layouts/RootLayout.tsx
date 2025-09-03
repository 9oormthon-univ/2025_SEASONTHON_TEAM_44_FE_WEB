import styled from "@emotion/styled";
import { Outlet } from "react-router";
import SideBar from "@components/common/SideBar.tsx";

const RootLayout = () => {
  return (
    <Wrapper>
      <SideBar />
      <Outlet />
    </Wrapper>
  );
};

export default RootLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100dvh;
  background-color: white;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
`;
