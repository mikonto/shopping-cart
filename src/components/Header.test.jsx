import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  it("renders the correct logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toMatch(/logo\.png$/);
  });

  it("renders the correct links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    const productsLink = screen.getByRole("link", { name: "Products" });
    const shoppingCartLink = screen.getByTestId("shopping-cart-link");
    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(shoppingCartLink).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("displays correct badge count", () => {
    const count = 5;
    render(
      <MemoryRouter>
        <Header shoppingCartCount={count} />
      </MemoryRouter>
    );

    const badgeContent = screen.getByTestId("badge");
    expect(badgeContent).toBeInTheDocument();
    expect(badgeContent).toHaveTextContent(count.toString());
  });

  it("hides the badge when the shopping cart is empty", () => {
    const count = 0;
    render(
      <MemoryRouter>
        <Header shoppingCartCount={count} />
      </MemoryRouter>
    );

    const badgeContent = screen.queryByTestId("badge");
    expect(badgeContent.textContent).toBe("");
  });
});
