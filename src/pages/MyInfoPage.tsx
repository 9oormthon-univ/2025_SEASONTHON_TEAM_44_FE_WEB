import MyInfoHeader from "@components/my/MyInfoHeader.tsx";
import MyStoreInfo from "@components/my/MyStoreInfo.tsx";
import { myInfo } from "@/types/myInfo.ts";
import styled from "@emotion/styled";

const MyInfoPage = () => {
  return (
    <MyInfoContainer>
      <MyInfoHeader {...myInfo.profile} />
      <MyStoreInfo {...myInfo.storeInfo} />
    </MyInfoContainer>
  );
};

export default MyInfoPage;

const MyInfoContainer = styled.div`
  width: 100%;
  padding: 60px 105px 116px 105px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
