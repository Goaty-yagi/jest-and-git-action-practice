import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import { act } from "@testing-library/react";
import Home from "@/pages";

// This test file is to test Home component

// in the test code,
// 1, ARRANGE => render component by render methods
// 2, ACTION => get element by screen method.
// 3, ASSERT => check your expectation by expect methods.

//** BLOG0 TEST START **//

// it("should have Hello Jest text", () => {
//   render(<Home />); // ARRANGE

//   const myElem = screen.getByText("Hello Jest"); // ACTION
//   // test text 'Hello TEST' in the screen
//   expect(myElem).toBeInTheDocument(); // ASSERT
// });

//** BLOG0 TEST END **//

//** BLOG1 TEST START **//

test("should trigger onChange event", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText("Type something...") as HTMLInputElement;

  const inputText = "Hello";

  await userEvent.type(input, inputText);

  expect(input).toHaveValue("Hello");

  await userEvent.type(input, " World");

  // Check if length of the value equal to 10
  expect(input.getAttribute("value")).toHaveLength(10); // New!
});

test("Test onSubmit", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText('Type something...');

   // Get submit button element from text
  const submitButton = screen.getByText('Submit')

  // Test the button is disabled before user input is typed.
  expect(submitButton).toBeDisabled();

  // Simulate user input.
  await userEvent.type(input, "something");

  // Test the button is not disabled after user input is typed.
  expect(submitButton).not.toBeDisabled();

  // Mock function to test the function is called
  const mockOnClick = jest.fn();

  // Integurate onclick event with the mock function
  submitButton.onclick = mockOnClick;

  // Simulate the button is clicked.
  await userEvent.click(submitButton);

  // Test submitButton is called
  expect(mockOnClick).toHaveBeenCalled();

  // Once the button is clicked, it should be disabled
  expect(submitButton).toBeDisabled();

  return new Promise<void>((resolve) => { //New!
    setTimeout(() => {
      resolve();
    }, 3000); // Simulate the setTimeout duration (3 seconds)
  }).then(() => {
    // Assert that the button is no longer disabled after 3 seconds
    expect(input.getAttribute("value")).toBe("");
    console.log("value:",input.getAttribute("value") )
  });
});

//** BLOG0 TEST END **//
