import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Products from "./Products";
import { fetchProducts } from "../../api/ProductService";

vi.mock("../../api/ProductService");
describe("Products component", () => {
  const mockProducts = [
    {
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
    },
  ];

  it("displays loading initially", () => {
    fetchProducts.mockResolvedValue(mockProducts);
    render(<Products addToCart={() => {}} />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("displays an error message if the fetch fails", async () => {
    fetchProducts.mockRejectedValue(new Error("Network error"));

    render(
      <MemoryRouter>
        <Products addToCart={() => {}} />
      </MemoryRouter>
    );
    const errorMessage = await screen.findByText(
      /A network error was encountered/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the correct title", async () => {
    fetchProducts.mockResolvedValue(mockProducts);
    render(<Products addToCart={() => {}} />);

    const title = await screen.findByRole("heading", { name: /products/i });
    expect(title).toBeInTheDocument();
  });

  it("renders ProductCard components", async () => {
    fetchProducts.mockResolvedValue(mockProducts);
    render(<Products addToCart={() => {}} />);

    for (const product of mockProducts) {
      // Assuming the title is rendered in each ProductCard
      expect(await screen.findByText(product.title)).toBeInTheDocument();
    }
  });

  it("it renders correctly", () => {
    const { container } = render(<Products addToCart={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
