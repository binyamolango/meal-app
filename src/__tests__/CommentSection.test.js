import { fireEvent, render, screen } from "@testing-library/react";
import CommentSection from "../components/CommentSection";
import { useState } from "react";

describe("CommentSection", () => {
  // const [mockedComments, setMockedComments] = useState([]);
  // const mockedUpdateComments = () => {
  //   setMockedComments(mockedComments);
  // };

  test("Should clear the input field as Comment button clicked", async () => {
    // render(
    //   <CommentSection
    //     mealID={1234}
    //   />
    // );
    // const nameInput = screen.getByPlaceholderText(/Your name/i);
    // const textInput = screen.getByPlaceholderText(/Your insights/i);
    // const commentBtn = screen.getByRole('button', { name: "Comment" });
    // fireEvent.change(nameInput, { target: { value: "Binyam Yohannes" } });
    // fireEvent.change(textInput, { target: { value: "Great one. I like it." } });
    // fireEvent.click(commentBtn)
    // expect(nameInput.value).toBe("");
    // expect(textInput.value).toBe("");
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