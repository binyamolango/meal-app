import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';

const MealDetails = () => {
  const { id } = useParams();

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

  const { data: mealDetails, isPending, error, setError } = useFetch(url);

  return (
    <div className="meal-details-page">
      <Container>
        <h1 className='home-title'>{mealDetails && mealDetails.meals[0].strMeal}</h1>
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
      </Container>
    </div>
  );
}
 
export default MealDetails;