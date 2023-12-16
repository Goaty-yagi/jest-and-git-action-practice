import { render, screen } from "@testing-library/react";
import Home from "@/pages";

it("should have Hello Jest text", () => {
  render(<Home />); // ARRANGE

  const myElem = screen.getByText("Hello Jest"); // ACTION
  // test text 'Hello TEST' in the screen
  expect(myElem).toBeInTheDocument(); // ASSERT
});