import * as S from "@components/my/MySotreInfo.css.ts"

interface MyStoreInfoProps {
  name: string;
  storeImage: string | undefined;
  description: string;
  phoneNumber: string;
  openingHours: string;
  address: string;
}

const MyStoreInfo = ({ name, storeImage, address, description, openingHours, phoneNumber }: MyStoreInfoProps) => {
  return (
    <>
      <S.MyStoreInfoImageSection>
        <div>가게 대표 사진</div>
        <div>이미지 크기: 362px X 190px</div>
        <img src={storeImage} alt="" />
      </S.MyStoreInfoImageSection>
      {/* 가계 정보 영역 */}
      <S.MyStoreInfoInfoSection>
        <S.MyStoreInfoItem>
          <div>가게 이름</div>
          <div>{name}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>한줄 소개</div>
          <div>{description}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>연락처</div>
          <div>{phoneNumber}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>운영시간</div>
          <div>{openingHours}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>주소</div>
          <div>{address}</div>
        </S.MyStoreInfoItem>
      </S.MyStoreInfoInfoSection>
    </>
  )
};

export default MyStoreInfo;
