import styled from "@emotion/styled";

const A4 = styled.div`
  width: 210mm;
  height: 297mm;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15mm;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90mm;
  background: ${({ theme }) => theme.colors.primary.primary20};
  border-radius: 8px;
  padding: 8mm;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative; /* 겹치기용 컨텍스트 */
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grayScale.gray600};
  line-height: 130%;
`;

const Logo = styled.img`
  width: 138px;
  height: 50px;
`;

const CharacterWrap = styled.div`
  position: relative;
  z-index: 1; /* 캐릭터가 QR 뒤로 깔리지 않도록 필요 시 0으로 */
`;

const Character = styled.img`
  width: 152px;
  height: 152px;
  display: block;
`;

/* ✅ 겹치기 포인트: 음수 마진으로 위로 끌어올림 + z-index */
const QRSection = styled.div`
  position: relative;
  z-index: 2;
  margin-top: -12mm; /* 이 값으로 겹치는 정도 조절 */
  padding: 8mm;
  background: linear-gradient(89deg, #FF714D 3.97%, #FF635B 51.8%, #FF8973 99.64%); /* <- background-color 아님 */
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);

  /* 안쪽 흰 테두리 효과가 필요하면 */

  &::before {
    content: '';
    position: absolute;
    inset: 30mm;
    background: #fff;
    z-index: -1;
  }
`;

const LogoOverlay = styled.img`
  z-index: 10;
  position: absolute;
  bottom: 11mm; /* QRSection 안쪽 여백에 맞춰 조정 */
  right: 15mm; /* 오른쪽 여백 */
  width: 50px; /* 적절한 크기로 조정 */
`;

export { A4, Card, Title, Logo, CharacterWrap, Character, QRSection, LogoOverlay };
