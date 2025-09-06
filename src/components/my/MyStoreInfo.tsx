import * as S from "@components/my/MySotreInfo.css.ts"
import type { StoreInfoResponse } from "@apis/store.ts";

interface MyStoreInfoProps {
  response: StoreInfoResponse | undefined;
}

const MyStoreInfo = ( { response }: MyStoreInfoProps) => {
  if (!response) return null;
  const { name, imageUrl, address, introduction, open, phone, close, detailAddress } = response

  return (
    <>
      <S.MyStoreInfoImageSection>
        <div>가게 대표 사진</div>
        <div>이미지 크기: 362px X 190px</div>
        <img src={imageUrl} alt="" />
      </S.MyStoreInfoImageSection>
      {/* 가계 정보 영역 */}
      <S.MyStoreInfoInfoSection>
        <S.MyStoreInfoItem>
          <div>가게 이름</div>
          <div>{name}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>한줄 소개</div>
          <div>{introduction}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>연락처</div>
          <div>{phone}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>운영시간</div>
          <div>{open} ~ {close}</div>
        </S.MyStoreInfoItem>
        <S.MyStoreInfoItem>
          <div>주소</div>
          <div>{address} {detailAddress}</div>
        </S.MyStoreInfoItem>
      </S.MyStoreInfoInfoSection>
    </>
  )
};

export default MyStoreInfo;
