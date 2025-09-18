import * as S from "@components/my/MySotreInfo.css.ts";
import type { StoreInfoResponse } from "@apis/store.ts";
import IcMenuBook from "@icon/ic-menu-book.svg";
import { MyStoreInfoEmptyImageSection } from "@components/my/MySotreInfo.css.ts";
import styled from "@emotion/styled";

interface MyStoreInfoProps {
  response: StoreInfoResponse | undefined;
}

const MyStoreInfo = ({ response }: MyStoreInfoProps) => {
  if (!response) return null;
  const { name, storeImageUrl, address, introduction, open, phone, close, detailAddress, menuImageUrls } = response;

  return (
    <>
      <S.MyStoreGridContainer>
        {/* 가게 대표 사진 */}
        <S.MyStoreGridItem>
          <div>가게 대표 사진</div>
          <div className="item-description">이미지 크기: 362px X 190px</div>
          <img src={storeImageUrl} alt="가게 대표 사진" />
        </S.MyStoreGridItem>

        {/* 포토 메뉴판 */}
        <S.MyStoreGridItem>
          <div>포토 메뉴판</div>
          <div className="item-description">이미지 크기: 362px X 190px</div>
          {menuImageUrls.length > 0 ? menuImageUrls.length === 1 ?
              <img src={menuImageUrls[0]} alt="포토 메뉴판" style={{ width: "362px", height: "190px" }} />
              :
              <MenuImagesWrapper>
                {menuImageUrls.map((imageUrl) =>
                  (<img src={imageUrl} alt="포토 메뉴판" style={{ width: "180px", height: "92px" }} />))}
              </MenuImagesWrapper>
            :
            <MyStoreInfoEmptyImageSection>
              <img src={IcMenuBook} style={{ width: "50px", height: "50px" }} alt="" />
              <div style={{ color: "#7F7D7D" }}>아직 등록된 메뉴판이 없어요</div>
            </MyStoreInfoEmptyImageSection>
          }
        </S.MyStoreGridItem>

        {/* 가게 이름 */}
        <S.MyStoreGridItem>
          <div>가게 이름</div>
          <div className="item-value">{name}</div>
        </S.MyStoreGridItem>

        {/* 한줄 소개 */}
        <S.MyStoreGridItem>
          <div>한줄 소개</div>
          <div className="item-value">{introduction}</div>
        </S.MyStoreGridItem>

        {/* 연락처 */}
        <S.MyStoreGridItem>
          <div>연락처</div>
          <div className="item-value">{phone}</div>
        </S.MyStoreGridItem>

        {/* 운영시간 */}
        <S.MyStoreGridItem>
          <div>운영시간</div>
          <div className="item-value">{open} ~ {close}</div>
        </S.MyStoreGridItem>

        {/* 주소 (한 칸을 넓게 사용하고 싶을 경우) */}
        <S.MyStoreGridItem style={{ gridColumn: "1 / -1" }}>
          <div>주소</div>
          <div className="item-value">{address} {detailAddress}</div>
        </S.MyStoreGridItem>
      </S.MyStoreGridContainer>
    </>
  );
};

export default MyStoreInfo;

const MenuImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /*grid-template-columns: repeat(2, minmax(0, 1fr));*/
  gap: 10px;
`;
