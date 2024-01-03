import Table from 'react-bootstrap/Table';

const Ingredient = ({ mealDetails }) => {
  // Create a list of ingredient and measure pairs
  const ingredients = mealDetails ? Array.from({ length: 20 }, (_, i) => ({
    ing: mealDetails.meals[0][`strIngredient${i + 1}`],
    meas: mealDetails.meals[0][`strMeasure${i + 1}`]
  })) : [];

  // Filter out any ingredient/measurement pairs that are null, undefined, or empty strings
  const validIngredients = ingredients.filter(ingredient => ingredient.ing && ingredient.ing.trim());

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        {validIngredients.map((ingredient, index) => (
          <tr key={index}>
            <td>{ingredient.ing}</td>
            <td>{ingredient.meas}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Ingredient;