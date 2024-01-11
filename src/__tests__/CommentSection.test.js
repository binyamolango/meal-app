import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CommentSection from "../components/CommentSection";

describe("CommentSection", () => {
  test("Should make the isPending true at clicking the comment button then false when the comments are updated", () => {
    const setMockedIsPending = jest.fn();
    const setMockedComments = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((initialState) => {
      if (typeof initialState === 'boolean') {
        return [initialState, setMockedIsPending];
      } else {
        return [initialState, setMockedComments];
      }
    });
    
    render(<CommentSection />);

    const inputName = screen.getByPlaceholderText(/Your name/i);
    const inputText = screen.getByPlaceholderText(/Your insights/i);
    const commentBtn = screen.getByRole('button', { name: /Comment/i });
    const mealID = 1234;

    fireEvent.change(inputName, { target: { value: /Bino/i } });
    fireEvent.change(inputText, { target: { value: /Great!/i } });

    setMockedIsPending(false);

    const handleSubmit = () => {
      setMockedIsPending(true);
      const comment = {
        "item_id": mealID,
        "username": "Bino",
        "comment": "Great!"
      }
      setMockedComments(prevComments => [...prevComments, comment]);
      setMockedIsPending(false);
    }
    fireEvent.click(commentBtn);
    handleSubmit();

    expect(setMockedIsPending).toHaveBeenCalledTimes(4);

    useStateSpy.mockRestore();
  })

  test("Should clear the input field as Comment button clicked", async () => {
    const setMockedComments = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((initialState) => [initialState, setMockedComments]);
    render(
      <CommentSection />
    );
    const nameInput = screen.getByPlaceholderText(/Your name/i);
    const textInput = screen.getByPlaceholderText(/Your insights/i);
    const commentBtn = screen.getByRole('button', { name: "Comment" });
    fireEvent.change(nameInput, { target: { value: "Binyam Yohannes" } });
    fireEvent.change(textInput, { target: { value: "Great one. I like it." } });
    fireEvent.click(commentBtn);
    const mealID = 1234;
    const comment = {
      "item_id": mealID,
      "username": "Binyam Yohannes",
      "comment": "Great one. I like it."
    }
    setMockedComments(prevComments => [...prevComments, comment]);
    expect(nameInput.value).toBe("");
    expect(textInput.value).toBe("");

    useStateSpy.mockRestore();
  })

  // test("Should be able to submit as we click on comment button", async () => {
  //   render(
  //     <AddComment
  //       mealID={1234}
  //       updateComments={mockedUpdateComments}
  //     />
  //   );
  //   const commentBtn = screen.getByRole('button', { name: "Comment" });
  //   fireEvent.click(commentBtn)
  // })
})