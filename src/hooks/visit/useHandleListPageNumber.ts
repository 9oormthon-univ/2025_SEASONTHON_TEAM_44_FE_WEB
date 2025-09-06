import { useState } from "react";

export const useHandleListPageNumber = () => {
  const [currentPage, setCurrentPage] = useState(0); // 0부터 시작
  const onChangePage = (page: number, totalPages: number) => {
    if (page < 0 || page >= totalPages) return;
    setCurrentPage(page);
  };

  return { currentPage, onChangePage, setCurrentPage };
};
