import { axiosInstance } from "@apis/axiosInstance.ts";

interface CouponRequest {
  name: string;
  benefit: string;
}

export const postCoupon = async (request: CouponRequest) => {
  const response = await axiosInstance.post("/coupons/me", request);
  return response.data;
};
