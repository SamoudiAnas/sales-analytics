import CreateAccountScene from "@/scenes/CreateAccount/components/CreateAccountContent";
import { render, screen } from "@testing-library/react";

test("renders create account page", () => {
  render(<CreateAccountScene />);
});
