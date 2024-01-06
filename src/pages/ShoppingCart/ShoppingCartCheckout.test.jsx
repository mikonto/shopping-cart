import { render, screen } from "@testing-library/react";
import ShoppingCartCheckout from "./ShoppingCart";
import { MemoryRouter } from "react-router-dom";

describe("ShoppingCartCheckout component", () => {
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

  it("renders without crashing", () => {
    render(<ShoppingCartCheckout shoppingCart={mockShoppingCart} />);
    expect(screen.getByText("Order summary")).toBeInTheDocument();
  });

  it("displays all cart items", () => {
    render(<ShoppingCartCheckout shoppingCart={mockShoppingCart} />);
    mockShoppingCart.forEach((item) => {
      expect(
        screen.getByText(`${item.quantity} x ${item.details.title}`)
      ).toBeInTheDocument();
    });
  });

  it("calculates and displays the correct subtotal", () => {
    render(<ShoppingCartCheckout shoppingCart={mockShoppingCart} />);
    const expectedSubtotal = "22.3€";
    expect(
      screen.getByText(`Products total: ${expectedSubtotal}`)
    ).toBeInTheDocument();
  });

  it("calculates and displays the correct total", () => {
    render(<ShoppingCartCheckout shoppingCart={mockShoppingCart} />);
    const expectedTotal = "30.3€";
    expect(screen.getByText(`Total: ${expectedTotal}`)).toBeInTheDocument();
  });

  it("contains a 'To checkout' button", () => {
    render(<ShoppingCartCheckout shoppingCart={mockShoppingCart} />);
    expect(screen.getByText("To checkout")).toBeInTheDocument();
  });

  it("it renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <ShoppingCartCheckout shoppingCart={mockShoppingCart} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
