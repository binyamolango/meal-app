import { useState } from "react";
import Pagination from 'react-bootstrap/Pagination';

const usePagination = (mealList) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 10;
  const lastItemIdx = currentPage * pageLimit;
  const firstItemIdx = lastItemIdx - pageLimit;
  const currentItems = mealList && mealList.meals.slice(firstItemIdx, lastItemIdx);

  const handlePageClick = (currentPage) => {
    setCurrentPage(currentPage);
  }

  const maxPageNum = mealList && Math.ceil(mealList.meals.length / pageLimit);

  let pageItems = [];
  for (let number = 1; number <= maxPageNum; number++) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageClick(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return {
    currentItems,
    pageItems
  };
}
 
export default usePagination;