import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import WelcomePageCode from "./components/WelcomePageCode";

test("renders Welcome component correctly", () => {
  //
  render(
    <WelcomePageCode subtitle="Esplora la nostra vasta collezione di libri fantasy! E fatti due risate sulle mie cards" />
  );

  //
  const subtitleElement = screen.getByText(
    /Esplora la nostra vasta collezione di libri fantasy!/i
  );
  expect(subtitleElement).toBeInTheDocument();

  //
  const titleElement = screen.getByText(/Welcome to BookStore!/i);
  expect(titleElement).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("changes border color of a book when clicked", () => {
  render(<App />);

  const asinToTest = "asin-del-libro"; // Sostituisci con un ASIN valido del tuo libro
  const bookToClick = screen.getByTestId(`book-${asinToTest}`);
  fireEvent.click(bookToClick);
  expect(bookToClick).toHaveStyle("border: 3px solid red");
});
