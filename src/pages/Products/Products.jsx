import styled from "styled-components";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { fetchProducts } from "../../api/ProductService";

const StyledProducts = styled.div`
  flex-grow: 1;
  display: grid;
  gap: 12px;
  padding: 12px;
  grid-auto-rows: minmax(250px, auto);
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error)
    return (
      <StyledProducts>
        <p>A network error was encountered</p>
      </StyledProducts>
    );
  if (loading)
    return (
      <StyledProducts>
        <p>Loading...</p>
      </StyledProducts>
    );

  return (
    <>
      <Title>Products</Title>
      <StyledProducts>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </StyledProducts>
    </>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func,
};

export default Products;
