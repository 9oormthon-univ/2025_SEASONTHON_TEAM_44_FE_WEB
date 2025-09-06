import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { ReceiverOption } from "@/types/notices.ts";

const schema = z.object({
  title: z.string().min(1, "제목을 입력하세요").max(50, "제목은 최대 50자까지 입력 가능합니다."),
  receiver: z.enum(["ALL", "BASIC", "CERTIFIED"]).nullable().refine(val => val !== null, { message: "받는 사람을 선택하세요" }),
  message: z.string().min(1, "본문을 입력하세요").max(500, "본문은 최대 500자까지 입력 가능합니다."),
});

type FormValues = z.infer<typeof schema>;

export const useMessageForm = () => {
  const [receiver, setReceiver] = useState<string | null>(null);
  const { register, handleSubmit, setValue, getValues } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onChange = (value: string | null) => {
    setReceiver(value);
    setValue('receiver', value as ReceiverOption);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return { register, handleSubmit, receiver, onSubmit, onChange, getValues };
}
