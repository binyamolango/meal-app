import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Ingredient from "./Ingredient";
import Spinner from 'react-bootstrap/Spinner';
import CommentSection from './CommentSection';

const Details = (props) => {
  const {
    mealDetails,
    isPending,
    error,
    setError
  } = props;

  const hasMealsData = () => mealDetails && mealDetails.meals && mealDetails.meals.length > 0;

  return (
    <Container>
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
      {hasMealsData() && (
      <><h1 className='home-title'>{mealDetails.meals[0].strMeal}</h1><Card className="meal-details-card">
          <Card.Img className="meal-details-img" variant="top" src={mealDetails.meals[0].strMealThumb} alt="meal-img" />
          <Card.Body>
            <Card.Text>
              {mealDetails.meals[0].strInstructions}
            </Card.Text>
            <Ingredient mealDetails={mealDetails} />
            <CommentSection mealID={mealDetails.meals[0].idMeal} />
          </Card.Body>
        </Card></>
      )}
    </Container>
  );
}
 
export default Details;