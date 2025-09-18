import * as S from "@components/my/MyInfoHeader.css.ts";
import IcLocation from "@icon/ic-location.svg";
import { useGetSimpleUserInfo } from "@hooks/users/useGetSimpleUserInfo.ts";
import ImgExampleProfile from "@img/img-example-profile.png";

interface MyInfoHeaderProps {
  category: string | undefined;
}

const MyInfoHeader = ({ category }: MyInfoHeaderProps) => {
  const { data, isSuccess } = useGetSimpleUserInfo();

  if (!isSuccess || !data) return null;

  return (
    <S.MyInfoHeaderContainer>
      <S.MyInfoProfileSection>
        <S.MyInfoProfileImage src={data.response.profileImage ? data.response.profileImage : ImgExampleProfile} alt="" />
        <S.MyInfoProfileInner>
          <div>{data.response.name}</div>
          <div><img src={IcLocation} alt="" />{category}</div>
        </S.MyInfoProfileInner>
      </S.MyInfoProfileSection>
      <S.MyInfoEditButton>정보 수정</S.MyInfoEditButton>
    </S.MyInfoHeaderContainer>
  );
};

export default MyInfoHeader;
