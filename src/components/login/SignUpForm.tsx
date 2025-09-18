import { useEffect } from 'react';
import IcAddPhoto from '@icon/ic-add-photo.svg';
import { useImageUpload } from '@hooks/signup/useImageUpload.ts';
import {
  type SignUpRequest,
  usePostSignUp,
} from '@hooks/signup/usePostSignUp.ts';
import * as S from "@components/login/SignUpForm.css.ts";
import IcCloseSmallLight from '@icon/ic-close-small-light.svg';
import styled from "@emotion/styled";
import { formatTimeInput } from "@utils/date.ts";
import { type SignUpFormType, useSignUpForm } from "@hooks/signup/useSignUpForm.ts";
import { useHandleImage } from "@hooks/signup/useHandleImage.ts";

const SignUpForm = () => {
  const { register, setValue, getValues } = useSignUpForm();
  const { mutate: signUp } = usePostSignUp();
  const { mutateAsync: uploadImage, isPending } = useImageUpload();
  const {
    handleMenuImagesChange,
    handleCoverChange,
    coverPreview,
    menuPreviews,
    menuInputId,
    handleRemoveMenuImage,
    coverInputId,
  } = useHandleImage(setValue, getValues, uploadImage);

  /* 운영 시간 함수 */
  useEffect(() => {
    register('open');
    register('close');
  }, [register]);

  const handleSubmit = (data: SignUpFormType) => {
    // 시간 값을 안전하게 처리
    const openTime = String(data.open || '');
    const closeTime = String(data.close || '');

    const openValue = openTime.includes(':')
      ? openTime.replace(':', '')
      : openTime;
    const closeValue = closeTime.includes(':')
      ? closeTime.replace(':', '')
      : closeTime;

    const signUpRequest: SignUpRequest = {
      name: data.name,
      imageKey: data.imageKey,
      introduction: data.introduction,
      phone: data.phone,
      address: data.address,
      detailAddress: '',
      open: parseInt(openValue, 10) || 0,
      close: parseInt(closeValue, 10) || 0,
      menuImageKeys: data.menuImageKeys,
    };
    signUp(signUpRequest);
  };

  const openRegister = register('open');
  const closeRegister = register('close');

  return (
    <S.SignUpFormContainer>
      <S.SignUpFormTitle>가게 정보 입력</S.SignUpFormTitle>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel>가게 이름</S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormInput
          type="text"
          placeholder="가게이름을 정확하게 입력해주세요"
          {...register('name')}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel htmlFor={coverInputId}>
            대표 사진 업로드
          </S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormImageInputDescription>
          이미지 크기: 362px X 190px
        </S.SignUpFormImageInputDescription>

        <S.ImageDropLabel htmlFor={coverInputId} $w={362} $h={190}>
          {coverPreview ? (
            <S.PreviewImg src={coverPreview} alt="대표 사진 미리보기" />
          ) : (
            <S.Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <S.CenterText>
                {isPending ? '업로드 중...' : '사진 추가하기'}
              </S.CenterText>
            </S.Center>
          )}
        </S.ImageDropLabel>

        <S.HiddenFileInput
          id={coverInputId}
          type="file"
          accept="image/*"
          onChange={handleCoverChange}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel>한줄 소개</S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormInput
          type="text"
          placeholder="한줄로 가게를 소개해주세요"
          {...register('introduction')}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel>연락처</S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormInput
          type="text"
          placeholder="ex) 02-000-0000"
          {...register('phone')}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel>가게 주소 입력</S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormInput
          type="text"
          placeholder="ex) 성남시 분당구 다시온로 ..."
          {...register('address')}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormInputWrapper>
        <InputHeader>
          <S.SignUpFormInputLabel>운영시간</S.SignUpFormInputLabel>
          <Dot />
        </InputHeader>
        <S.SignUpFormInputRow>
          <S.SignUpFormInputTime
            type="text"
            placeholder="00:00"
            maxLength={5}
            {...openRegister}
            onChange={(e) => {
              e.target.value = formatTimeInput(e.target.value);
              openRegister.onChange(e);
            }}
          />
          <div>~</div>
          <S.SignUpFormInputTime
            type="text"
            placeholder="23:59"
            maxLength={5}
            {...closeRegister}
            onChange={(e) => {
              e.target.value = formatTimeInput(e.target.value);
              closeRegister.onChange(e);
            }}
          />
        </S.SignUpFormInputRow>
      </S.SignUpFormInputWrapper>
      {/* 메뉴판 업로드 영역 */}
      <S.SignUpFormInputWrapper>
        <S.SignUpFormInputLabel htmlFor={menuInputId}>
          포토 메뉴판
        </S.SignUpFormInputLabel>
        <S.SignUpFormImageInputDescription>
          이미지 크기: 362px X 190px
        </S.SignUpFormImageInputDescription>
        <S.PreviewContainer count={menuPreviews.length}>
          {/* 업로드된 이미지를 map으로 순회하며 보여줍니다. */}
          {menuPreviews.map((src, index) => (
            <S.PreviewItem key={src}>
              <S.MenuPreviewImage src={src} alt={`메뉴 사진 미리보기 ${index + 1}`} />
              {/* 삭제 버튼 추가 */}
              <S.RemoveButton
                type="button"
                onClick={() => handleRemoveMenuImage(index)}
              >
                <img src={IcCloseSmallLight} alt="" style={{ objectFit: "cover" }} />
              </S.RemoveButton>
            </S.PreviewItem>
          ))}
          {/* '사진 추가하기' 버튼 */}
          {menuPreviews.length < 4 && <S.ImageDropLabel htmlFor={menuInputId} $w={menuPreviews.length > 0 ? 176 : 362}
                                                        $h={menuPreviews.length > 0 ? 92 : 190}>
            <S.Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <S.CenterText>
                {isPending ? '업로드 중...' : '사진 추가하기'}
              </S.CenterText>
            </S.Center>
          </S.ImageDropLabel>}
        </S.PreviewContainer>
        <S.HiddenFileInput
          id={menuInputId} // 고유 ID 사용
          type="file"
          accept="image/*"
          multiple
          onChange={handleMenuImagesChange}
        />
      </S.SignUpFormInputWrapper>
      <S.SignUpFormButton onClick={() => handleSubmit(getValues())} type="button">
        완료
      </S.SignUpFormButton>
    </S.SignUpFormContainer>
  );
};

export default SignUpForm;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.primary400};
  margin-bottom: auto;
`;

const InputHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
