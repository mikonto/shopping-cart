import { render, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("ShoppingCart component", () => {
  const mockShoppingCart = [
    {
      details: {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: "{count: 259, rate: 4.1}",
      },
      quantity: 1,
    },
  ];

  it("renders the correct title", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: /shopping cart/i });
    expect(title).toBeInTheDocument();
  });

  it("renders the correct text", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={[]}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const emptyMessage = screen.getByText("Your shopping cart is empty");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("renders the button in empty shopping cart", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={[]}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Shop now" });
    expect(button).toBeInTheDocument();

    const link = screen.getByRole("link", { name: "Shop now" });
    expect(link).toHaveAttribute("href", "/products");
  });

  it("renders the shopping cart details", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const expectedTitle = mockShoppingCart[0].details.title;
    expect(screen.getByText(expectedTitle)).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Remove" });
    expect(button).toBeInTheDocument();
  });

  it("renders the order summary", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const emptyMessage = screen.getByText("Order summary");
    expect(emptyMessage).toBeInTheDocument();
  });

  it("renders the button in order summary", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "To checkout" });
    expect(button).toBeInTheDocument();
  });

  it("it renders correctly", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <ShoppingCart
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
