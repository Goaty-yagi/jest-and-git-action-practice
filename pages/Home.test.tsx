import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

// This test file is to test Home component

// in the test code,
// 1, ARRANGE => render component by render methods
// 2, ACTION => get element by screen method.
// 3, ASSERT => check your expectation by expect methods.
// ex) the element is in the document

it("should have Hello Jest text", () => {
  render(<Home />); // ARRANGE

  const myElem = screen.getByText("Hello Jest"); // ACTION
  // test text 'Hello TEST' in the screen
  expect(myElem).toBeInTheDocument(); // ASSERT
});

// test or it
test("should trigger onChange event", async () => {
  render(<Home />);

  // get input element from placeholder
  const input = screen.getByPlaceholderText("Type something...");

  // Simulate typing 'Hello' into the input field
  userEvent.type(input, "Hello");

  // Assertions
  await waitFor(() => {
    expect(input).toHaveValue("Hello"); // Check if the value in the input field is 'Hello'
  });

  // another example

  // get input element from html role
  const input2 = screen.getByRole("textbox");

  // test form exist
  expect(input2).toBeInTheDocument();

  // Simulate typing 'Hello' into the input field
  userEvent.type(input2, " World");
  // typed text will be updated by useState. useState is Async
  // waitFor is working without await.
  waitFor(() => {
    expect(input2).toHaveValue("Hello World");
  });

  // Test text "Hello World" in the document which cause error
  // because of async.
  expect(screen.getByText("Hello World")).toBeInTheDocument();

  // Test text "Hello World" in the document.
  // This test is successfully executed.
  // When you want to check async test, you should use 
  // methods with the "find" prefix and await but not the "get" prefix.
  expect(await screen.findByText("Hello World")).toBeInTheDocument();
});
