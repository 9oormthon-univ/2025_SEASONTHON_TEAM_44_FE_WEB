import styled from "@emotion/styled";
import { useEffect, useId, useState } from "react";
import IcAddPhoto from "@icon/ic-add-photo.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useImageUpload } from "@hooks/signup/useImageUpload.ts";
import { type SignUpRequest, usePostSignUp } from "@hooks/signup/usePostSignUp.ts";

function toHHmmNumber(s: string): number | null {
  // 허용 포맷: "9", "09", "9:5", "09:05", "0905"
  const trimmed = s.trim();

  // "0905" 같은 숫자붙은 포맷
  if (/^\d{3,4}$/.test(trimmed)) {
    const hh = trimmed.length === 3 ? Number(trimmed.slice(0, 1)) : Number(trimmed.slice(0, 2));
    const mm = trimmed.length === 3 ? Number(trimmed.slice(1)) : Number(trimmed.slice(2));
    if (hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59) return hh * 100 + mm;
    return null;
  }

  // "HH", "H", "HH:MM", "H:MM"
  const m = trimmed.match(/^(\d{1,2})(?::(\d{1,2}))?$/);
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = m[2] !== undefined ? Number(m[2]) : 0;
  if (hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59) return hh * 100 + mm;
  return null;
}

function parseBusinessHours(input: string): { open: number; close: number } | null {
  // 구분자: ~, -, ~ 주변 공백 허용
  const parts = input.split(/\s*[~-]\s*/);
  if (parts.length !== 2) return null;

  const openNum = toHHmmNumber(parts[0]);
  const closeNum = toHHmmNumber(parts[1]);
  if (openNum == null || closeNum == null) return null;

  return { open: openNum, close: closeNum };
}

const scheme = z.object({
  name: z.string().min(1, "가게 이름을 입력해주세요"),
  imageKey: z.string().min(1, "가게 대표 사진을 등록해주세요"),
  introduction: z.string().min(1),
  phone: z.string().min(1, "가게 연락처를 입력해주세요"),
  address: z.string().min(1, "가게 주소를 입력해주세요"),
  detailAddress: z.string().min(1, "가게 상세 주소를 입력해주세요"),
  open: z.number().min(1, "가게 운영시간을 입력해주세요"),
  close: z.number().min(1, "가게 운영시간을 입력해주세요"),
});

export type SignUpFormType = z.infer<typeof scheme>;

const SignUpForm = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const coverInputId = useId();
  const { register, setValue, getValues, setError, clearErrors } = useForm<SignUpFormType>({
    resolver: zodResolver(scheme),
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
      const { key } = await uploadImage(file);   // <- 네트워크 두 번(presign, PUT) 뜸
      setValue("imageKey", key, { shouldValidate: true });
    } catch ( err ) {
      console.error(err);
    }
  };

  useEffect(() => {
    // objectURL 메모리 릴리즈
    return () => {
      if (coverPreview) URL.revokeObjectURL(coverPreview);
    };
  }, [coverPreview]);

  /* 운영 시간 함수 */

  // open/close는 화면에 입력창이 없으니 미리 등록
  useEffect(() => {
    register("open", { valueAsNumber: true });
    register("close", { valueAsNumber: true });
  }, [register]);

  const [businessHourText, setBusinessHourText] = useState("");

  const handleBusinessHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setBusinessHourText(v);

    const parsed = parseBusinessHours(v);
    if (parsed) {
      setValue("open", parsed.open, { shouldValidate: true, shouldDirty: true });
      setValue("close", parsed.close, { shouldValidate: true, shouldDirty: true });
      clearErrors(["open", "close"]);
    } else {
      // 잘못된 입력일 때는 값 비우고 에러 표시 (제출 시 막힘)
      setValue("open", undefined as unknown as number, { shouldValidate: true });
      setValue("close", undefined as unknown as number, { shouldValidate: true });
      setError("open", { type: "manual", message: "운영시간 형식을 확인해주세요 (예: 09:00~23:00)" });
      setError("close", { type: "manual", message: "운영시간 형식을 확인해주세요 (예: 09:00~23:00)" });
    }
  };

  const handleSubmit = (data: SignUpFormType) => {
    const signUpRequest: SignUpRequest = {
      name: data.name,
      imageKey: data.imageKey,
      introduction: data.introduction,
      phone: data.phone,
      address: data.address,
      detailAddress: "",
      open: data.open,
      close: data.close,
    };
    signUp(signUpRequest);
  };

  return (
    <SignUpFormContainer>
      <SignUpFormTitle>가게 정보 입력</SignUpFormTitle>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 이름</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="가게이름을 정확하게 입력해주세요" {...register("name")} />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel htmlFor={coverInputId}>대표 사진 업로드</SignUpFormInputLabel>
        <SignUpFormImageInputDescription>이미지 크기: 362px X 190px</SignUpFormImageInputDescription>

        <ImageDropLabel htmlFor={coverInputId} $w={362} $h={190}>
          {coverPreview ? (
            <PreviewImg src={coverPreview} alt="대표 사진 미리보기" />
          ) : (
            <Center>
              <img src={IcAddPhoto} alt="" aria-hidden />
              <CenterText>{isPending ? "업로드 중..." : "사진 추가하기"}</CenterText>
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
        <SignUpFormInput type="text" placeholder="한줄로 가게를 소개해주세요" {...register("introduction")} />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>연락처</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="ex) 02-000-0000" {...register("phone")} />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>가게 주소 입력</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="ex) 성남시 분당구 다시온로 ..." {...register("address")} />
      </SignUpFormInputWrapper>
      <SignUpFormInputWrapper>
        <SignUpFormInputLabel>운영시간</SignUpFormInputLabel>
        <SignUpFormInput type="text" placeholder="ex) 09:00~23:00" value={businessHourText}
                         onChange={handleBusinessHourChange} />
      </SignUpFormInputWrapper>
      <SignUpFormButton onClick={() => handleSubmit(getValues())} type="button">완료</SignUpFormButton>
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

/*const SignUpSearchButton = styled.button`
  width: fit-content;
  padding: 10px 41px;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray400};
`;*/

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
