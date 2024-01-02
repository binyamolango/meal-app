import Table from 'react-bootstrap/Table';

const Ingredient = ({ mealDetails }) => {
  const ingredients = mealDetails && [
    {ing: mealDetails.meals[0].strIngredient1, meas: mealDetails.meals[0].strMeasure1},
    {ing: mealDetails.meals[0].strIngredient2, meas: mealDetails.meals[0].strMeasure2},
    {ing: mealDetails.meals[0].strIngredient3, meas: mealDetails.meals[0].strMeasure3},
    {ing: mealDetails.meals[0].strIngredient4, meas: mealDetails.meals[0].strMeasure4},
    {ing: mealDetails.meals[0].strIngredient5, meas: mealDetails.meals[0].strMeasure5},
    {ing: mealDetails.meals[0].strIngredient6, meas: mealDetails.meals[0].strMeasure6},
    {ing: mealDetails.meals[0].strIngredient7, meas: mealDetails.meals[0].strMeasure7},
    {ing: mealDetails.meals[0].strIngredient8, meas: mealDetails.meals[0].strMeasure8},
    {ing: mealDetails.meals[0].strIngredient9, meas: mealDetails.meals[0].strMeasure9},
    {ing: mealDetails.meals[0].strIngredient10, meas: mealDetails.meals[0].strMeasure10},
    {ing: mealDetails.meals[0].strIngredient11, meas: mealDetails.meals[0].strMeasure11},
    {ing: mealDetails.meals[0].strIngredient12, meas: mealDetails.meals[0].strMeasure12},
    {ing: mealDetails.meals[0].strIngredient13, meas: mealDetails.meals[0].strMeasure13},
    {ing: mealDetails.meals[0].strIngredient14, meas: mealDetails.meals[0].strMeasure14},
    {ing: mealDetails.meals[0].strIngredient15, meas: mealDetails.meals[0].strMeasure15},
    {ing: mealDetails.meals[0].strIngredient16, meas: mealDetails.meals[0].strMeasure16},
    {ing: mealDetails.meals[0].strIngredient17, meas: mealDetails.meals[0].strMeasure17},
    {ing: mealDetails.meals[0].strIngredient18, meas: mealDetails.meals[0].strMeasure18},
    {ing: mealDetails.meals[0].strIngredient19, meas: mealDetails.meals[0].strMeasure19},
    {ing: mealDetails.meals[0].strIngredient20, meas: mealDetails.meals[0].strMeasure20}
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map(ingredient => ingredient.ing.length > 0 && (
          <tr key={ingredient.ing}>
            <td>{ingredient.ing}</td>
            <td>{ingredient.meas}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
 
export default Ingredient;