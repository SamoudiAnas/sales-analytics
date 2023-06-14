import { render, screen } from "@testing-library/react";

import { Button } from "@common/Button";

test("renders button with correct text", () => {
  render(<Button>Hello, world!</Button>);
  const buttonElement = screen.getByText(/hello, world!/i);
  expect(buttonElement).toBeInTheDocument();
});
