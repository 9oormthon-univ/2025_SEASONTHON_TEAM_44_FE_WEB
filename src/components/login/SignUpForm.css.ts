import styled from "@emotion/styled";

const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 60px 100px;
  border-radius: 30px;
  border: none;
  gap: 15px;
`;

const SignUpFormTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.black};
`;

const SignUpFormButton = styled.button`
  padding: 17px 146px;
  font: ${({ theme }) => theme.fonts.button1};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary.primary500};
  white-space: nowrap;
`;

const SignUpFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SignUpFormInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 0 50px;

  div {
    font: ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SignUpFormInputLabel = styled.label`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
`;

const SignUpFormInput = styled.input`
  padding: 20px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  transition: box-shadow 0.15s ease, background 0.15s ease;
`;

const SignUpFormInputTime = styled.input`
  padding: 20px;
  width: 85px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  text-align: center;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScale.gray200};
  }

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
  }

  transition: box-shadow 0.15s ease, background 0.15s ease;
`;

const SignUpFormImageInputDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayScale.gray400};
`;

const ImageDropLabel = styled.label<{ $w?: number; $h?: number }>`
  position: relative;
  display: block;
  width: ${({ $w }) => ($w ? `${$w}px` : '100%')};
  height: ${({ $h }) => ($h ? `${$h}px` : '190px')};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};
  overflow: hidden;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Center = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CenterText = styled.div`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayScale.gray400};
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MenuPreviewImage = styled.img`
  width: 176px;
  height: 92px;
  object-fit: cover;
`;

const PreviewContainer = styled.div<{ count: number }>`
  display: grid;
  grid-template-columns: ${({ count }) => count > 0 ? `repeat(2, 1fr)` : '176px'};
  grid-auto-columns: 176px;
  gap: 15px; // 아이템 사이의 간격
`;

// 개별 미리보기 이미지와 삭제 버튼을 감싸는 아이템
const PreviewItem = styled.div`
  position: relative; // 삭제 버튼을 위한 기준점
  width: 176px;
  height: 92px;
  border-radius: 12px;
  overflow: hidden;
`;

// 삭제 버튼
const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayScale.gray800};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 10; // 이미지 위에 보이도록

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export {
  SignUpFormContainer,
  SignUpFormTitle,
  SignUpFormButton,
  SignUpFormInputWrapper,
  SignUpFormInputRow,
  SignUpFormInputLabel,
  SignUpFormInput,
  SignUpFormInputTime,
  SignUpFormImageInputDescription,
  ImageDropLabel,
  HiddenFileInput,
  Center,
  CenterText,
  PreviewImg,
  PreviewContainer,
  PreviewItem,
  RemoveButton,
  MenuPreviewImage,
};
