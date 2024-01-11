import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Ingredient from "./Ingredient";
import CommentSection from './CommentSection';
import PendingError from './PendingError';

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
      <PendingError
        isPending={isPending}
        error={error}
        setError={setError}
      />
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