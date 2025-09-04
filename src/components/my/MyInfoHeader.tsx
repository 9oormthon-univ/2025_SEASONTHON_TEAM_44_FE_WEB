import * as S from "@components/my/MyInfoHeader.css.ts";
import IcLocation from "@icon/ic-location.svg";

interface MyInfoHeaderProps {
  name: string;
  address: string;
  profileImage: string | undefined;
}

const MyInfoHeader = ({ name, address, profileImage }: MyInfoHeaderProps) => {
  return (
    <S.MyInfoHeaderContainer>
      <S.MyInfoProfileSection>
        <S.MyInfoProfileImage src={profileImage} alt="" />
        <S.MyInfoProfileInner>
          <div>{name}</div>
          <div><img src={IcLocation} alt="" />{address}</div>
        </S.MyInfoProfileInner>
      </S.MyInfoProfileSection>
      <S.MyInfoEditButton>정보 수정</S.MyInfoEditButton>
    </S.MyInfoHeaderContainer>
  );
};

export default MyInfoHeader;
