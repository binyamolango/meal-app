import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';

const MealCategory = ({ mealCategory }) => {
  return (
    mealCategory.categories.map(category => (
      <Col xs={12} md={6} lg={4} xl={3} key={category.idCategory}>
        <Card>
          <Link to="meal-list">
            <Card.Img variant="top" src={category.strCategoryThumb} alt='category-img' />
          </Link>
          <Card.Body>
            <Link to="meal-list">
              <Card.Title className='category-title'><h2>{category.strCategory}</h2></Card.Title>
            </Link>
            <OverlayTrigger
              trigger="click"
              key='bottom'
              placement='bottom'
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Body>
                    {category.strCategoryDescription}
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="outline-success">Food Description</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </Col>
    ))
  );
}
 
export default MealCategory;