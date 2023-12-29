import React, { useState } from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid #d3d3d3;
`;

const StyledImage = styled.img`
  height: 170px;
`;

const StyledRatingContainer = styled.div`
  display: flex;
  justify-content: center; /* Centralize content */
  align-items: center; /* Align items vertically */
  gap: 6px;
`;

const AddToCart = styled.div`
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
  font-size: 0.9rem; /* Font size */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: #6ca5bc;
  }
`;

const ProductCard = ({ title, price, rating, ratingCount, image }) => {
  const [num, setNum] = useState(1);

  return (
    <StyledProductCard>
      <p>
        <StyledImage src={image} alt="alt" />
      </p>
      <p>
        <b>{title}</b>
      </p>
      <p>
        <b>{price} $</b>
      </p>

      <StyledRatingContainer>
        <Rating name="read-only" value={rating} readOnly precision={0.1} />
        <p>{ratingCount}</p>
      </StyledRatingContainer>
      <AddToCart>
        <AddToCartInput
          type="number"
          min={1}
          max={10}
          step={1}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <AddToCartButton>Add to cart</AddToCartButton>
      </AddToCart>
    </StyledProductCard>
  );
};

export default ProductCard;
