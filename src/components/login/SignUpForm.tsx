import styled from '@emotion/styled';
import { useEffect, useId, useState } from 'react';
import IcAddPhoto from '@icon/ic-add-photo.svg';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useImageUpload } from '@hooks/signup/useImageUpload.ts';
import {
  type SignUpRequest,
  usePostSignUp,
} from '@hooks/signup/usePostSignUp.ts';
import * as React from 'react';

// 입력값을 "HH:MM"으로 변환하는 함수
const formatTimeInput = (value: string): string => {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
};

const scheme = z.object({
  name: z.string().min(1, '가게 이름을 입력해주세요'),
  imageKey: z.string().min(1, '가게 대표 사진을 등록해주세요'),
  introduction: z.string().min(1),
  phone: z.string().min(1, '가게 연락처를 입력해주세요'),
  address: z.string().min(1, '가게 주소를 입력해주세요'),
  detailAddress: z.string().min(1, '가게 상세 주소를 입력해주세요'),
  open: z.string().min(1, '가게 운영시간을 입력해주세요'),
  close: z.string().min(1, '가게 운영시간을 입력해주세요'),
  menuImageKeys: z.array(z.string()).min(0),
});

export type SignUpFormType = z.infer<typeof scheme>;

const SignUpForm = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputId = useId();

  const [menuPreviews, setMenuPreviews] = useState<string[]>([]);
  const menuInputId = useId(); // 메뉴 업로드 input을 위한 고유 id

  const { register, setValue, getValues } = useForm<SignUpFormType>({
    resolver: zodResolver(scheme),
    defaultValues: {
      menuImageKeys: [],
    },
  });
  const { mutate: signUp } = usePostSignUp();

  /* 이미지 핸들링 함수 */
  const { mutateAsync: uploadImage, isPending } = useImageUpload();

  /* 이미지 핸들링 함수 */
  const handleCoverChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 미리보기
    const objectUrl = URL.createObjectURL(file);
    setCoverPreview(objectUrl);

    try {
      const { key } = await uploadImage(file); // <- 네트워크 두 번(presign, PUT) 뜸
      setValue('imageKey', key, { shouldValidate: true });
    } catch (err) {
      console.error(err);
    }
  };

  const handleMenuImagesChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // 여러 파일을 동시에 업로드하기 위해 Promise.all 사용
    const uploadPromises = Array.from(files).map((file) => uploadImage(file));

    try {
      const results = await Promise.all(uploadPromises); // [{key: '...'}, {key: '...'}]
      const newKeys = results.map((r) => r.key);
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file),
      );

      // 기존 값에 새로 업로드된 값들을 추가
      const currentKeys = getValues('menuImageKeys') || [];
      setValue('menuImageKeys', [...currentKeys, ...newKeys], {
        shouldValidate: true,
      });
      setMenuPreviews((prev) => [...prev, ...newPreviews]);
    } catch (err) {
      console.error('메뉴 이미지 업로드 실패:', err);
      // 사용자에게 에러 알림 UI를 보여주는 것이 좋습니다.
    }
  };

  /*const handleRemoveMenuImage = (indexToRemove: number) => {
    // 1. 미리보기 URL 메모리 해제
    URL.revokeObjectURL(menuPreviews[indexToRemove]);

    // 2. 미리보기 상태에서 해당 인덱스 제거
    setMenuPreviews(prev => prev.filter((_, index) => index !== indexToRemove));

    // 3. react-hook-form 상태에서 해당 키 제거
    const currentKeys = getValues("menuImageKeys") || [];
    setValue(
      "menuImageKeys",
      currentKeys.filter((_, index) => index !== indexToRemove),
      { shouldValidate: true },
    );
  };*/

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 생성된 모든 Object URL을 해제
    return () => {
      if (coverPreview) URL.revokeObjectURL(coverPreview);
      menuPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [coverPreview, menuPreviews]);

  /* 운영 시간 함수 */

  // open/close는 화면에 입력창이 없으니 미리 등록
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
    <SignUpFormContainer>
      <SignUpFormTitle>가게 정보 입력</SignUpFormTitle>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 이름</SignUpFormInputLabel>
        <SignUpFormInput
          type="text"
          placeholder="가게이름을 정확하게 입력해주세요"
          {...register('name')}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel htmlFor={coverInputId}>
          대표 사진 업로드
        </SignUpFormInputLabel>
        <SignUpFormImageInputDescription>
          이미지 크기: 362px X 190px
        </SignUpFormImageInputDescription>

        <ImageDropLabel htmlFor={coverInputId} $w={362} $h={190}>
          {coverPreview ? (
            <PreviewImg src={coverPreview} alt="대표 사진 미리보기" />
          ) : (
            <Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <CenterText>
                {isPending ? '업로드 중...' : '사진 추가하기'}
              </CenterText>
            </Center>
          )}
        </ImageDropLabel>

        <HiddenFileInput
          id={coverInputId}
          type="file"
          accept="image/*"
          onChange={handleCoverChange}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>한줄 소개</SignUpFormInputLabel>
        <SignUpFormInput
          type="text"
          placeholder="한줄로 가게를 소개해주세요"
          {...register('introduction')}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>연락처</SignUpFormInputLabel>
        <SignUpFormInput
          type="text"
          placeholder="ex) 02-000-0000"
          {...register('phone')}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 주소 입력</SignUpFormInputLabel>
        <SignUpFormInput
          type="text"
          placeholder="ex) 성남시 분당구 다시온로 ..."
          {...register('address')}
        />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>운영시간</SignUpFormInputLabel>
        <SignUpFormInputRow>
          <SignUpFormInputTime
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
          <SignUpFormInputTime
            type="text"
            placeholder="23:59"
            maxLength={5}
            {...closeRegister}
            onChange={(e) => {
              e.target.value = formatTimeInput(e.target.value);
              closeRegister.onChange(e);
            }}
          />
        </SignUpFormInputRow>
      </SignUpFormInputWrapper>
      {/* 메뉴판 업로드 영역 */}
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel htmlFor={menuInputId}>
          포토 메뉴판
        </SignUpFormInputLabel>
        <SignUpFormImageInputDescription>
          이미지 크기: 362px X 190px
        </SignUpFormImageInputDescription>
        <ImageDropLabel htmlFor={menuInputId} $w={362} $h={190}>
          {menuPreviews.length > 0 ? (
            <PreviewImg
              src={menuPreviews[menuPreviews.length - 1]}
              alt="대표 사진 미리보기"
            />
          ) : (
            <Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <CenterText>
                {isPending ? '업로드 중...' : '사진 추가하기'}
              </CenterText>
            </Center>
          )}
        </ImageDropLabel>

        <HiddenFileInput
          id={menuInputId} // 고유 ID 사용
          type="file"
          accept="image/*"
          multiple
          onChange={handleMenuImagesChange}
        />
      </SignUpFormInputWrapper>
      <SignUpFormButton onClick={() => handleSubmit(getValues())} type="button">
        완료
      </SignUpFormButton>
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
