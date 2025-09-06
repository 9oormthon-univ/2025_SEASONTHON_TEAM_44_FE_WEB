import IcArrowLeft from "@icon/ic-arrow-left.svg";
import IcArrowRight from "@icon/ic-arrow-right.svg";
import styled from "@emotion/styled";

interface ListPageActionProps {
  currentPage: number;   // 0-based
  totalPages: number;    // 총 페이지 수(예: 2면 인덱스는 0~1)
  onChangePage: (page: number) => void; // 0-based로 전달
}

const ListPageAction = ({ currentPage, totalPages, onChangePage }: ListPageActionProps) => {
  const hasPrev = currentPage > 0;
  const hasNext = totalPages > 0 && currentPage + 1 < totalPages;

  const toPrev = () => {
    if (!hasPrev) return;
    onChangePage(Math.max(0, currentPage - 1));
  };

  const toNext = () => {
    if (!hasNext) return;
    onChangePage(Math.min(totalPages - 1, currentPage + 1));
  };

  // 0-based 표시: 현재 = currentPage, 최대 = totalPages - 1
  const displayCurrent = totalPages === 0 ? 0 : currentPage;
  //const displayMax = Math.max(0, totalPages - 1);

  const formatedTotalPages = totalPages === 0 ? 1 : totalPages;

  return (
    <ListPageActionSection>
      <img
        src={IcArrowLeft}
        alt="이전"
        onClick={toPrev}
        style={{ opacity: hasPrev ? 1 : 0.3, pointerEvents: hasPrev ? 'auto' : 'none' }}
      />
      <div>
        {displayCurrent + 1} <span>/ {formatedTotalPages}</span>
      </div>
      <img
        src={IcArrowRight}
        alt="다음"
        onClick={toNext}
        style={{ opacity: hasNext ? 1 : 0.3, pointerEvents: hasNext ? 'auto' : 'none' }}
      />
    </ListPageActionSection>
  );
};

export default ListPageAction;

const ListPageActionSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  white-space: nowrap;

  div {
    min-width: 40px;
    font: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.grayScale.black};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors.grayScale.gray500};
  }

  img {
    cursor: pointer;
  }
`;
