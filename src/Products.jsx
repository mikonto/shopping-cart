import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledProducts = styled.div`
  background: #dcdcdc;
  flex-grow: 1;
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
        const limitedProducts = response.slice(0, 9);
        setProducts(limitedProducts);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <StyledProducts>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> - $${product.price}
              <br />
              Description: {product.description}
              <br />
              Category: {product.category}
              <br />
              Rating: {product.rating.rate}/5 ({product.rating.count} reviews)
            </li>
          ))}
        </ul>
      </StyledProducts>
    </>
  );
};

export default Products;
