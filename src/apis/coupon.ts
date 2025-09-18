import { axiosInstance } from "@apis/axiosInstance.ts";
import type { CouponRequest } from "@/types/coupon.ts";

export const postCoupon = async (request: CouponRequest) => {
  const response = await axiosInstance.post("/coupons/me", request);
  return response.data;
};
