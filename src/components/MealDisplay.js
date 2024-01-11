import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Details from "./Details";

const MealDisplay = () => {
  let { name } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const { data: mealDetails, isPending, error, setError } = useFetch(url);

  return (
    <div className="meal-details-page">
      <Details
        mealDetails={mealDetails}
        isPending={isPending}
        error={error}
        setError={setError}
      />
    </div>
  );
}
 
export default MealDisplay;