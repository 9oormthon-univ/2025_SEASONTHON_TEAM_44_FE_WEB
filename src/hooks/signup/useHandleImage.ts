import { useEffect, useId, useState } from "react";
import * as React from "react";
import type { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import type { SignUpFormType } from "@hooks/signup/useSignUpForm.ts";
import type { UseMutateAsyncFunction } from "@tanstack/react-query";
import type { UploadedImage } from "@hooks/signup/useUploadToS3.ts";

export const useHandleImage = (
  setValue: UseFormSetValue<SignUpFormType>,
  getValues: UseFormGetValues<SignUpFormType>,
  uploadImage: UseMutateAsyncFunction<UploadedImage, Error, File, unknown>
) => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputId = useId();

  const [menuPreviews, setMenuPreviews] = useState<string[]>([]);
  const menuInputId = useId(); // 메뉴 업로드 input을 위한 고유 id

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

  return {
    coverInputId,
    menuInputId,
    handleCoverChange,
    handleMenuImagesChange,
    handleRemoveMenuImage,
    coverPreview,
    menuPreviews,
  };
};
