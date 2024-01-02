import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MealCategory = ({ mealCategory }) => {
  return (
    mealCategory.categories.map(category => (
      <Col xs={12} md={6} lg={4} xl={3} key={category.idCategory}>
        <Card>
          <Card.Img variant="top" src={category.strCategoryThumb} alt='category-img' />
          <Card.Body>
            <Card.Title>{category.strCategory}</Card.Title>
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