import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  render(<App />);
  const header = screen.getByText(
    /Hebrew Quizzes for Learning Biblical Hebrew/i
  );
  expect(header).toBeInTheDocument();
});
