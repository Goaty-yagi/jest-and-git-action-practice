import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button component test", () => {
  it("should render button and have buttun text", () => {
    const text = "test button";
    const event = jest.fn() // MOCK
    
    render(<Button text={text} event={event} />); // ARRANGE

    // buttun text test
    const myElem = screen.getByText("test button"); // ACTION
    expect(myElem).toBeInTheDocument(); // ASSERT
    expect(screen.getByRole("button")).toBeTruthy();
    expect(screen.getByTestId("custom-button")).toBeTruthy();

    userEvent.click(screen.getByText("test button"))
    expect(event).not.toHaveBeenCalled();
  });
});
