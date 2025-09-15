import MyInfoHeader from "@components/my/MyInfoHeader.tsx";
import MyStoreInfo from "@components/my/MyStoreInfo.tsx";
import styled from "@emotion/styled";
import { useGetStoreInfo } from "@hooks/store/useGetStoreInfo.ts";

const MyInfoPage = () => {
  const { data, isSuccess } = useGetStoreInfo();

  if (!data && !isSuccess) return null;

  return (
    <MyInfoContainer>
      <MyInfoHeader address={data?.response.address} />
      <MyStoreInfo response={data?.response} />
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
