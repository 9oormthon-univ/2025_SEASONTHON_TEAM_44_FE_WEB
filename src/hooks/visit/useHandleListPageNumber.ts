import { useState } from "react";

export const useHandleListPageNumber = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onChangePage = (page: number, pageSize: number) => {
    if (page < 1 || page > pageSize) return;
    setCurrentPage(page);
  };

  return {
    currentPage,
    onChangePage,
  };
};
