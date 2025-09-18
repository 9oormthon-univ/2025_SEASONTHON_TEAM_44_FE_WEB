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
import * as S from "@components/login/SignUpForm.css.ts";
import IcCloseSmallLight from '@icon/ic-close-small-light.svg';
import styled from "@emotion/styled";

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
    } catch ( err ) {
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
    } catch ( err ) {
      console.error('메뉴 이미지 업로드 실패:', err);
      // 사용자에게 에러 알림 UI를 보여주는 것이 좋습니다.
    }
  };

  const handleRemoveMenuImage = (indexToRemove: number) => {
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
  };

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
