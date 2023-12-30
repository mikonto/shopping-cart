import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const StyledProductCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  padding-bottom: 28px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Image = styled.img`
  height: 170px;
`;

const Title = styled.p`
  height: 40px; // Assuming each line of text is approximately 20px high
  overflow: hidden; // Optional: prevents text from overflowing the set height
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center; /* Centralize content */
  align-items: center; /* Align items vertically */
  gap: 6px;
`;

const AddToCartContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const AddToCartInput = styled.input`
  width: 35px;
`;

const AddToCartButton = styled.button`
  background-color: skyblue;
  padding: 8px 12px;
  border: none; /* No border */
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: #6ca5bc;
  }
`;

const ProductCard = ({ product, addToCart }) => {
  const [num, setNum] = useState(1);

  return (
    <StyledProductCard>
      <p>
        <Image src={product.image} alt="alt" />
      </p>
      <Title>
        <b>{product.title}</b>
      </Title>

      <b>{product.price}€</b>

      <RatingContainer>
        <Rating
          name="read-only"
          value={product.rating.rate}
          readOnly
          precision={0.1}
        />
        <p>{product.rating.count}</p>
      </RatingContainer>
      <AddToCartContainer>
        <AddToCartInput
          type="number"
          min={1}
          max={10}
          step={1}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <AddToCartButton onClick={() => addToCart(product, num)}>
          Add to cart
        </AddToCartButton>
      </AddToCartContainer>
    </StyledProductCard>
  );
};

export default ProductCard;
