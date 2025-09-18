import { useNavigate } from "react-router";
import type { Coupon } from "@pages/CouponPage.tsx";
import type { UseFormRegister } from "react-hook-form";
import Loading from "@components/common/Loading.tsx";
import * as S from "@components/coupon/CouponForm.css.ts";

interface CouponFormProps {
  register: UseFormRegister<Coupon>,
  onSubmit: () => void;
  isPending?: boolean;
}

const CouponForm = ({ register, onSubmit, isPending }: CouponFormProps) => {
  const navigate = useNavigate();

  const cancelCoupon = () => {
    /* 변경 사항 저장 X 후 대쉬보드*/
    navigate("/dashboard");
  };

  const saveCoupon = () => {
    onSubmit();
  };
  return (
    <S.CouponFormContainer>
      <S.CouponInputGroup>
        <S.CouponInputWrapper>
          <label>쿠폰명</label>
          <input type="text" placeholder="ex) 10번째 방문 고객 감사 쿠폰" maxLength={30} {...register("name")} />
        </S.CouponInputWrapper>
        <S.CouponInputWrapper>
          <label>혜택 내용</label>
          <input type="text" placeholder="ex) 5,000원 할인" {...register("benefit")} />
        </S.CouponInputWrapper>
      </S.CouponInputGroup>
      <S.CouponButtonGroup>
        <S.CouponButton buttonType="cancel" type="button" onClick={cancelCoupon}>취소하기</S.CouponButton>
        <S.CouponButton buttonType="save" type="button" onClick={saveCoupon}>{isPending ? <Loading /> : `저장하기`}</S.CouponButton>
      </S.CouponButtonGroup>
    </S.CouponFormContainer>
  );
};

export default CouponForm;
