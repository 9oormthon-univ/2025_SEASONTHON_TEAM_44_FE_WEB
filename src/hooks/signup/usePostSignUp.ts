import { axiosInstance } from "@apis/axiosInstance.ts";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export interface SignUpRequest {
  name: string;
  imageKey: string;
  introduction: string;
  phone: string;
  address: string;
  detailAddress: string;
  open: number;
  close: number;
  menuImageKeys: string[];
}

export const signUp = async (request: SignUpRequest) => {
  try {
    const response = await axiosInstance.post("/stores", request);
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};

export const usePostSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (req: SignUpRequest) => signUp(req),
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error) => console.error(error),
    onSettled: () => console.log(
      "Mutation is settled",
    ),
  });
};
