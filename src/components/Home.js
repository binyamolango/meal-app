import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import useFetch from "./useFetch";
import MealCategory from './MealCategory';

const Home = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data: mealCategory, isPending, error, setError } = useFetch(url);

  return (
    <div className="home-page">
      <Container>
        <h1 className='home-title'>Meal Categories({mealCategory && mealCategory.categories.length})</h1>
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
          {mealCategory && <MealCategory mealCategory={mealCategory} />}
        </Row>
      </Container>
    </div>
  );
}
 
export default Home;