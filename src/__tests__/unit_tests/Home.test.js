import { render, screen } from "@testing-library/react";
import Home from "../../components/Home";
import MealCategory from "../../components/MealCategory";

describe("Home component", () => {
  test("renders the title and meal categories", async () => {
    render(
      <>
        <Home />
        <MealCategory />
      </>
    )

    // Assert that the title is rendered
    const titleElement = screen.getByText(/Meal Categories/i);
    expect(titleElement).toBeInTheDocument();

    // Assert that the meal categories are rendered
    const categoryElements = await screen.findByTestId("meal-category-0");
    expect(categoryElements).toBeInTheDocument();
  });
});