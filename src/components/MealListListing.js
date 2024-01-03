import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MealListListing = ({ mealList }) => {
  return (
    mealList.meals.map(meal => (
      <Col xs={12} md={6} lg={4} xl={3} key={meal.idMeal}>
        <Card>
          <Card.Img variant="top" src={meal.strMealThumb} alt='meal-img' />
          <Card.Body>
            <Card.Title className='meal-title'><h2>{meal.strMeal}</h2></Card.Title>
            <div className="card-body-row">
              <Link to={`meal-details/${meal.idMeal}`}>
                <Button variant="outline-success">Meal Details</Button>
              </Link>
              <Button variant="success"><i className="fa-solid fa-thumbs-up"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))
  );
}
 
export default MealListListing;