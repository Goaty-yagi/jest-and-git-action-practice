import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "@/pages";

describe("ExampleForm component", () => {
  test("renders form with input and submit button", () => {
    const { getByText, getByLabelText } = render(
      <ExampleForm onSubmit={() => {}} />
    );
    const inputElement = getByLabelText("exampleInput");
    const submitButton = getByText("Submit");

    expect(inputElement).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("calls onSubmit handler when form is submitted", () => {
    const mockSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <ExampleForm onSubmit={mockSubmit} />
    );
    const inputElement = getByLabelText("exampleInput");
    const submitButton = getByText("Submit");

    // Simulate user input and form submission
    fireEvent.change(inputElement, { target: { value: "Test Input" } });
    fireEvent.click(submitButton);

    // Check if onSubmit was called with the correct value
    expect(mockSubmit).toHaveBeenCalledWith("Test Input");
  });

  test("does not call onSubmit if input is empty", () => {
    const mockSubmit = jest.fn();
    const { getByText } = render(<ExampleForm onSubmit={mockSubmit} />);
    const submitButton = getByText("Submit");

    // Submit the form without entering any value
    fireEvent.click(submitButton);

    // Ensure onSubmit is not called when input is empty
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
