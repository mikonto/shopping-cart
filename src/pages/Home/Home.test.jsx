import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home component", () => {
  it("renders the correct title", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: /welcome to webshop!/i });
    expect(title).toBeInTheDocument();
  });

  it("renders the correct paragraph text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const paragraphText =
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis nunc sed./s;
    const paragraph = screen.getByText(paragraphText);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the button and navigates correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Shop now" });
    expect(button).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "Shop now" });
    expect(link).toHaveAttribute("href", "/products");
  });

  it("it renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
