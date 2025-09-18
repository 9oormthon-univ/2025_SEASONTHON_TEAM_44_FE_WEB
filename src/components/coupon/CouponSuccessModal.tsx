import ImgLetter from "@img/img-letter.png"
import * as S from "@components/coupon/CouponSuccessModal.css.ts";

interface CouponSuccessModalProp {
  handleClose: () => void;
}

const CouponSuccessModal = ({ handleClose }: CouponSuccessModalProp) => {
  return (
    <S.ModalWrapper>
      <S.CouponSuccessModalContainer>
        <div>쿠폰이 정상적으로 등록되었어요!</div>
        <div>단골분들께 저희가 잘 전달해드렸어요</div>
        <img src={ImgLetter} alt="" />
        <button onClick={handleClose}>확인</button>
      </S.CouponSuccessModalContainer>
    </S.ModalWrapper>
  );
};

export default CouponSuccessModal;
