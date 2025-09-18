import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const scheme = z.object({
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

export const useSignUpForm = () => {
  return useForm<SignUpFormType>({
    resolver: zodResolver(scheme),
    defaultValues: {
      menuImageKeys: [],
    },
  });
};
