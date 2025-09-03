import NoticesTab from "@components/notices/NoticesTab.tsx";
import NoticesForm from "@components/notices/NoticesForm.tsx";
import styled from "@emotion/styled";
import { useState } from "react";

const NoticesPage = () => {
  const [currentTab, setCurrentTab] = useState<"send" | "history">("send");
  return (
    <NoticesContainer>
      <NoticesTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <NoticesForm />
    </NoticesContainer>
  );
};

export default NoticesPage;

const NoticesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 52px 210px;
  align-items: center;
  min-width: 1240px;
  
  @media (max-width: 1240px) {
    width: 100%;
    min-width: 500px;
    padding: 52px 10%;
  }
`;
