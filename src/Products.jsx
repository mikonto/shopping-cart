import styled from "styled-components";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const StyledProducts = styled.div`
  background: white;
  flex-grow: 1;
  display: grid;
  gap: 4px;
  padding: 4px;
  grid-auto-rows: minmax(250px, auto);
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Products = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        // Limit the array to the first 9 items
        const limitedProducts = response.slice(0, 8);
        setProducts(limitedProducts);
        console.log(limitedProducts);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <StyledProducts>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating.rate}
            ratingCount={product.rating.count}
            image={product.image}
          />
        ))}
      </StyledProducts>
    </>
  );
};

export default Products;
