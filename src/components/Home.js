import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PendingError from './PendingError';
import useFetch from "./useFetch";
import MealCategory from './MealCategory';

const Home = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const { data: mealCategory, isPending, error, setError } = useFetch(url);

  return (
    <div className="home-page">
      <Container>
        <h1 className='home-title'>Meal Categories({mealCategory && mealCategory.categories.length})</h1>
        <PendingError
          isPending={isPending}
          error={error}
          setError={setError}
        />
        <Row>
          {mealCategory && <MealCategory mealCategory={mealCategory} />}
        </Row>
      </Container>
    </div>
  );
}
 
export default Home;