import IcArrowLeft from "@icon/ic-arrow-left.svg";
import IcArrowRight from "@icon/ic-arrow-right.svg";
import styled from "@emotion/styled";

interface ListPageActionProps {
  currentPage: number;
  onChangePage: (page: number, pageSize: number) => void;
  pageSize: number;
}

const ListPageAction = ({ currentPage, onChangePage, pageSize }: ListPageActionProps) => {
  return (
    <ListPageActionSection>
      <img src={IcArrowLeft} alt="" onClick={() => onChangePage(currentPage - 1, pageSize)} />
      <div>{currentPage} <span>/ {pageSize}</span></div>
      <img src={IcArrowRight} alt="" onClick={() => onChangePage(currentPage + 1, pageSize)} />
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
