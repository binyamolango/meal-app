import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import PendingError from "./PendingError";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MealListListing from "./MealListListing";
import Pagination from 'react-bootstrap/Pagination';
import PaginationComp from "./usePagination";

const MealList = () => {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
  const { data: mealList, isPending, error, setError } = useFetch(url);
  const {
    pageItems,
    currentItems
  } = PaginationComp(mealList);

  return (
    <div className="meal-list-page">
      <Container>
        <h1 className='home-title'>{id}({mealList && mealList.meals.length})</h1>
        <PendingError
          isPending={isPending}
          error={error}
          setError={setError}
        />
        <Row>
          {currentItems && <MealListListing currentItems={currentItems} />}
        </Row>
        <div className="pagination-cont">
          <Pagination>{pageItems}</Pagination>
        </div>
      </Container>
    </div>
  );
}
 
export default MealList;