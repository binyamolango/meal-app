import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MealListListing from "./MealListListing";
import Pagination from 'react-bootstrap/Pagination';
import usePagination from "./usePagination";

const LocationMenu = () => {
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`;
  const { data: mealList, isPending, error, setError} = useFetch(url);
  const {
    pageItems,
    currentItems
  } = usePagination(mealList);

  return (
    <div className="location-menu-page">
      <Container>
        <h1 className='home-title'>{id}({mealList && mealList.meals.length})</h1>
        {isPending && (
            <div className="spinner__loading">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {error && (
            <div className='error__message'>
              <Alert variant="danger" onClose={() => setError(null)} dismissible>
                <Alert.Heading>{error}</Alert.Heading>
                <p>
                  The system is not able to reach the required server for fetching the data.
                  There could some problem with the API address.
                </p>
              </Alert>
            </div>
          )}
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
 
export default LocationMenu;