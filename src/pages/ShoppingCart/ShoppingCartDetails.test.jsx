import { render, screen, waitFor } from "@testing-library/react"; // Import waitFor here
import ShoppingCartDetails from "./ShoppingCart";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"; // Import userEvent

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

  it("renders the shopping cart details", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCartDetails
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const productTitle = mockShoppingCart[0].details.title;
    expect(screen.getByText(productTitle)).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Remove" });
    expect(button).toBeInTheDocument();
  });

  it("calls removeFromCart when the remove button is clicked", async () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();

    render(
      <MemoryRouter>
        <ShoppingCartDetails
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    const removeButtons = screen.getAllByRole("button", { name: "Remove" });
    userEvent.click(removeButtons[0]); // Assuming you want to click the first remove button

    await waitFor(() => {
      expect(mockRemoveFromCart).toHaveBeenCalledWith(
        mockShoppingCart[0].details.id
      );
    });
  });

  it("it renders correctly", () => {
    const mockRemoveFromCart = vi.fn();
    const mockUpdateQuantity = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <ShoppingCartDetails
          shoppingCart={mockShoppingCart}
          removeFromCart={mockRemoveFromCart}
          updateQuantity={mockUpdateQuantity}
        />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
