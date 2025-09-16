import { useMutation } from "@tanstack/react-query";
import type { Coupon } from "@pages/CouponPage.tsx";
import { postCoupon } from "@apis/coupon.ts";

export const usePostCoupon = () => {
  return useMutation({
    mutationFn: (coupon: Coupon) => postCoupon(coupon),
  })
};
