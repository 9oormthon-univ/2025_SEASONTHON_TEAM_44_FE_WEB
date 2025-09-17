import styled from "@emotion/styled";

const TooltipWrapper = styled.div`
  position: absolute;
  pointer-events: none; // 툴팁이 마우스 이벤트를 방해하지 않도록 설정
  transform: translate(-50%, -100%); // 툴팁의 중앙 하단을 좌표에 맞춤
  transition: all 0.1s ease-out; // 부드러운 움직임을 위한 트랜지션
  min-width: 380px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 30px;
  box-shadow: 0 5px 15px 0 rgba(103, 18, 18, 0.25);
  z-index: 1000;
`;

const TooltipHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font: ${({ theme }) => theme.fonts.body4};
  color: ${({ theme }) => theme.colors.grayScale.gray400};
`;

const TooltipContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grayScale.gray30};

  span {
    text-align: center;
  }
`;

const TooltipContentTitle = styled.span`
  padding: 0 5px;
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayScale.gray600};
`;

const TooltipContentCount = styled.span`
  font: ${({ theme }) => theme.fonts.sub2};
  color: ${({ theme }) => theme.colors.black};
`;

export { TooltipWrapper, TooltipHeader, TooltipContent, TooltipContentTitle, TooltipContentCount };
