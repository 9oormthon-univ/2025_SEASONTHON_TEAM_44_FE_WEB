import styled from "@emotion/styled";
import CouponForm from "@components/coupon/CouponForm.tsx";
import CouponPreview from "@components/coupon/CouponPreview.tsx";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetStoreInfo } from "@hooks/store/useGetStoreInfo.ts";
import { usePostCoupon } from "@hooks/coupon/usePostCoupon.ts";
import { useEffect, useState } from "react";
import CouponSuccessModal from "@components/coupon/CouponSuccessModal.tsx";
import Loading from "@components/common/Loading.tsx";

const scheme = z.object({
  name: z.string().max(30, "쿠폰명은 최대 30자입니다."),
  benefit: z.string(),
});

export type Coupon = z.infer<typeof scheme>;

const CouponPage = () => {
  const { data, isPending } = useGetStoreInfo();
  const { mutate, isSuccess, isPending: isPostPending } = usePostCoupon();
  const [isOpen, setIsOpen] = useState(false);
  const { register, getValues, watch, setValue } = useForm<Coupon>({
    resolver: zodResolver(scheme),
  });

  const onSubmit = () => {
    mutate(getValues());
  };

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(true);
      setValue("name", "")
      setValue("benefit", "")
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  }, [isSuccess, setValue]);

  if (isPostPending || isPending) return <Loading />;

  return (
    <CouponContainer>
      <CouponTitle>쿠폰 관리</CouponTitle>
      <CouponManagementSection>
        <CouponForm register={register} onSubmit={onSubmit} isPending={isPostPending} />
        <CouponPreview storeName={data?.response.name} watch={watch} />
        {isOpen && <CouponSuccessModal handleClose={() => setIsOpen(false)} />}
      </CouponManagementSection>
    </CouponContainer>
  );
};

export default CouponPage;

const CouponContainer = styled.div`
  width: 100%;
  min-width: 600px;
  padding: 60px 105px 116px 105px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CouponManagementSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 68px;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const CouponTitle = styled.div`
  font: ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;
