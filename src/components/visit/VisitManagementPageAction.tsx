import IcArrowLeft from "@icon/ic-arrow-left.svg";
import IcArrowRight from "@icon/ic-arrow-right.svg";
import styled from "@emotion/styled";

interface VisitManagementPageActionProps {
  currentPage: number;
  onChangePage: (page: number, pageSize: number) => void;
  pageSize: number;
}

const VisitManagementPageAction = ({ currentPage, onChangePage, pageSize }: VisitManagementPageActionProps) => {
  return (
    <VisitManagementPageActionSection>
      <img src={IcArrowLeft} alt="" onClick={() => onChangePage(currentPage - 1, pageSize)} />
      <div>{currentPage} <span>/ {pageSize}</span></div>
      <img src={IcArrowRight} alt="" onClick={() => onChangePage(currentPage + 1, pageSize)} />
    </VisitManagementPageActionSection>
  );
};

export default VisitManagementPageAction;

const VisitManagementPageActionSection = styled.div`
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
