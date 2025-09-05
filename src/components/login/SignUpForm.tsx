import styled from "@emotion/styled";
import { useId, useState } from "react";
import IcAddPhoto from "@icon/ic-add-photo.svg";

const SignUpForm = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputId = useId();
  return (
    <SignUpFormContainer>
      <SignUpFormTitle>가게 정보 입력</SignUpFormTitle>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 이름</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="가게이름을 정확하게 입력해주세요"/>
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel htmlFor={coverInputId}>대표 사진 업로드</SignUpFormInputLabel>
        <SignUpFormImageInputDescription>이미지 크기: 362px X 190px</SignUpFormImageInputDescription>

        {/* ⬇️ 업로드 영역 */}
        <ImageDropLabel htmlFor={coverInputId} $w={362} $h={190}>
          {coverPreview ? (
            <PreviewImg src={coverPreview} alt="대표 사진 미리보기" />
          ) : (
            <Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <CenterText>사진 추가하기</CenterText>
            </Center>
          )}
        </ImageDropLabel>

        {/* 실제 파일 인풋은 숨김 */}
        <HiddenFileInput
          id={coverInputId}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setCoverPreview(URL.createObjectURL(file));
          }}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>한줄 소개</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="한줄로 가게를 소개해주세요"/>
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>연락처</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="ex) 02-000-0000"/>
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 주소 찾기</SignUpFormInputLabel>
        <SignUpSearchButton>검색</SignUpSearchButton>
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>상세 주소 입력</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="ex) 명지전문대학 공학관 101호"/>
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>운영시간</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="이건 수정이다"/>
      </SignUpFormInputWrapper>
      <SignUpFormButton>완료</SignUpFormButton>
    </SignUpFormContainer>
  );
};

export default SignUpForm;

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

const SignUpFormImageInputDescription = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.grayScale.gray400};
`;

const SignUpSearchButton = styled.button`
  width: fit-content;
  padding: 10px 41px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray400};
`;

const ImageDropLabel = styled.label<{ $w?: number; $h?: number }>`
  position: relative;
  display: block;
  width: ${({ $w }) => ($w ? `${$w}px` : "100%")};
  height: ${({ $h }) => ($h ? `${$h}px` : "190px")};
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
