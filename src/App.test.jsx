import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("App Component", () => {
  it("renders the Header component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toMatch(/logo\.png$/);
  });

  it("renders the correct links", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    const productsLink = screen.getByRole("link", { name: "Products" });
    const shoppingCartLink = screen.getByTestId("shopping-cart-link");

    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(shoppingCartLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute("href", "/");
    expect(productsLink).toHaveAttribute("href", "/products");
    expect(shoppingCartLink).toHaveAttribute("href", "/shopping-cart");
  });

  it("renders the Home component for the default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Welcome to Webshop!")).toBeInTheDocument();
  });

  it("renders the Products component for /products route", () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Products")).toBeInTheDocument();
  });

  it("renders the ShoppingCart component for /shopping-cart route", () => {
    render(
      <MemoryRouter initialEntries={["/shopping-cart"]}>
        <Routes>
          <Route path="/:name" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Shopping cart")).toBeInTheDocument();
  });

  it("it renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
