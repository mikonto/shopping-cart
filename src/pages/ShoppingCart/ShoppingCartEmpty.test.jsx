import { render, screen } from "@testing-library/react";
import ShoppingCartEmpty from "./ShoppingCartEmpty";
import { MemoryRouter } from "react-router-dom";

describe("ShoppingCartEmpty component", () => {
  it("renders the correct paragraph text", () => {
    render(
      <MemoryRouter>
        <ShoppingCartEmpty />
      </MemoryRouter>
    );
    const paragraphText = /your shopping cart is empty/i;
    const paragraph = screen.getByText(paragraphText);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the button and navigates correctly", () => {
    render(
      <MemoryRouter>
        <ShoppingCartEmpty />
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
        <ShoppingCartEmpty />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
