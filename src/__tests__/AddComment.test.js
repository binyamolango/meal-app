import { fireEvent, render, screen } from "@testing-library/react";
import AddComment from "../components/AddComment";

describe("AddComment", () => {
  const mockedUpdateComments = jest.fn();

  test("Should render name input", () => {
    render(<AddComment
      mealID={1234}
      updateComments={mockedUpdateComments}
    />)
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    expect(nameInput).toBeInTheDocument();
  })

  test("Should render text input", () => {
    render(
      <AddComment
        mealID={1234}
        updateComments={mockedUpdateComments}
      />
    );
    const textInput = screen.getByPlaceholderText(/Your insights/i);
    expect(textInput).toBeInTheDocument();
  })

  test("Should render a comment button", () => {
    render(
      <AddComment
        mealID={1234}
        updateComments={mockedUpdateComments}
      />
    );
    const commentBtn = screen.getByRole("button", {name: "Comment"});
    expect(commentBtn).toBeInTheDocument();
  })

  test("Should be able to type in name input field", async () => {
    render(
      <AddComment
        mealID={1234}
        updateComments={mockedUpdateComments}
      />
    );
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    fireEvent.change(nameInput, { target: { value: "Binyam Yohannes" } });
    expect(nameInput.value).toBe("Binyam Yohannes");
  })

  test("Should be able to type in text input field", async () => {
    render(
      <AddComment
        mealID={1234}
        updateComments={mockedUpdateComments}
      />
    );
    const textInput = screen.getByPlaceholderText(/Your insights/i);
    fireEvent.change(textInput, { target: { value: "Great one. I like it." } });
    expect(textInput.value).toBe("Great one. I like it.");
  })
})