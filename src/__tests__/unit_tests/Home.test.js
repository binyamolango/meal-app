import { render, screen } from "@testing-library/react";
import Home from "../../components/Home";

describe("Home", () => {
  it("Should render a title", () => {
    render(<Home />)
    const title = screen.getByText(/Meal Categories/i);
    expect(title).toBeInTheDocument();
  })
})