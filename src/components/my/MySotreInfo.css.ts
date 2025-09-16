import styled from "@emotion/styled";

export const MyStoreGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 176px; // 세로(row) 40px, 가로(column) 30px 간격
  
  @media (max-width: 1300px) {
    // 1열로 변경
    grid-template-columns: 1fr;
    gap: 30px; // 간격 단일화
  }
`;

// ✨ 2. 모든 정보 항목(이미지, 텍스트)을 위한 통합 스타일
export const MyStoreGridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font: ${({ theme }) => theme.fonts.body1};

  // 항목의 제목 (e.g., "가게 이름")
  div:first-of-type {
    color: ${({ theme }) => theme.colors.black};
  }

  // 항목의 값 (e.g., "맛있는 가게")
  .item-value {
    width: 362px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    min-height: 60px; // 최소 높이를 지정하여 디자인 통일성 유지
    word-break: break-all; // 긴 텍스트가 넘치지 않도록 자동 줄바꿈
  }

  // 이미지 스타일
  img {
    width: 362px;
    height: 190px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    object-fit: cover;
  }
  
  // 이미지 설명 텍스트
  .item-description {
    color: ${({ theme }) => theme.colors.grayScale.gray400};
  }
`;

export const MyStoreInfoEmptyImageSection = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px;
  width: 362px; 
  height: 190px; 
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  
  div {
    font: ${({ theme }) => theme.fonts.body3};
  }
`;

/*
import styled from "@emotion/styled";

const MyStoreInfoImageSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MyStoreInfoImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font: ${({ theme }) => theme.fonts.body1};

  div:first-of-type {
    color: ${({ theme }) => theme.colors.black};
  }

  div:last-of-type {
    color: ${({ theme }) => theme.colors.grayScale.gray400};
  }

  img {
    width: 362px;
    height: 190px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    object-fit: cover;
    border: none;
  }
`;

const MyStoreInfoInfoSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 176px;

  @media (max-width: 1200px) {
    gap: 30px;
  }
`;

const MyStoreInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};

  div:last-of-type {
    padding: 20px;
    width: 362px;
    background-color: ${({ theme }) => theme.colors.grayScale.gray30};
    border-radius: 12px;
    border: none;
    outline: none;
  }
`;

export { MyStoreInfoImageSectionWrapper, MyStoreInfoImageSection, MyStoreInfoInfoSection, MyStoreInfoItem };
*/
