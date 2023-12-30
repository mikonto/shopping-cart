import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const StyledShoppingCart = styled.div`
  display: grid;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  grid-template-columns: repeat(2, 0.4fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const ItemCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
  margin: 4px;
`;

const Image = styled.img`
  height: 60px;
`;

const Qty = styled.input`
  width: 35px;
  height: 25px;
`;

const BlueButton = styled.button`
  background-color: skyblue;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6ca5bc;
  }
`;

const RedButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff3333;
  }
`;

const Spacer = styled.div`
  height: 15px;
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const ShoppingCart = ({ shoppingCart, removeFromCart, updateQuantity }) => {
  const hasItems = shoppingCart.length > 0;

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  return hasItems ? (
    <>
      <Title>Shopping cart</Title>
      <StyledShoppingCart>
        <Card>
          {shoppingCart.map((cartItem) => (
            <ItemCard key={cartItem.details.id}>
              <Image src={cartItem.details.image} alt="alt" />
              <p>{cartItem.details.title}</p>
              <p>
                <b>{cartItem.details.price}€</b>
              </p>
              <Qty
                type="number"
                min={1}
                max={10}
                step={1}
                value={cartItem.quantity}
                onChange={(e) =>
                  handleQuantityChange(cartItem.details.id, e.target.value)
                }
              />
              <RedButton onClick={() => removeFromCart(cartItem.details.id)}>
                Delete
              </RedButton>
            </ItemCard>
          ))}
        </Card>
        <Card>Check out</Card>
      </StyledShoppingCart>
    </>
  ) : (
    <>
      <Title>Shopping cart</Title>
      <StyledShoppingCart>
        <Card>
          <p>Your shopping cart is empty</p>
          <Link to="/products">
            <BlueButton>Shop now</BlueButton>
          </Link>
          <Spacer />
        </Card>
      </StyledShoppingCart>
    </>
  );
};

export default ShoppingCart;
