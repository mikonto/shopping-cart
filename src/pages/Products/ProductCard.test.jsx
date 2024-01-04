import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event";

vi.mock("../../../api/ProductService");

describe("ProductCard component", () => {
  const mockProduct = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  it("renders product details correctly", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price}€`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.rating.count}`)).toBeInTheDocument();
  });

  it("renders the AddToCartInput element", () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    const addToCartInput = screen.getByRole("spinbutton");
    expect(addToCartInput).toBeInTheDocument();
  });

  it("calls addToCart function with correct parameters when Add to Cart button is clicked", async () => {
    const addToCartMock = vi.fn();
    render(<ProductCard product={mockProduct} addToCart={addToCartMock} />);

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    userEvent.click(addToCartButton);

    await waitFor(() => {
      expect(addToCartMock).toHaveBeenCalledWith(mockProduct, 1);
    });
  });

  it("it renders correctly", () => {
    const { container } = render(
      <ProductCard product={mockProduct} addToCart={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
