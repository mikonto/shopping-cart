import styled from "styled-components";
import ShoppingCartDetails from "./ShoppingCartDetails";
import ShoppingCartCheckout from "./ShoppingCartCheckout";
import ShoppingCartEmpty from "./ShoppingCartEmpty";

const StyledShoppingCart = styled.div`
  display: grid;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  grid-template-columns: ${({ hasItems, ...props }) => {
    return hasItems ? "repeat(2, 1fr)" : "repeat(1, 1fr)";
  }};

  grid-template-rows: 0.5fr auto;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const ShoppingCart = ({ shoppingCart, removeFromCart, updateQuantity }) => {
  const hasItems = shoppingCart.length > 0;

  return hasItems ? (
    <>
      <Title>Shopping cart</Title>
      {/* conditional style: items in cart -> two grid items */}
      <StyledShoppingCart style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <ShoppingCartDetails
          shoppingCart={shoppingCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
        <ShoppingCartCheckout shoppingCart={shoppingCart} />
      </StyledShoppingCart>
    </>
  ) : (
    <>
      <Title>Shopping cart</Title>
      {/* conditional style: cart empty -> one grid item */}
      <StyledShoppingCart style={{ gridTemplateColumns: "repeat(1, 1fr)" }}>
        <ShoppingCartEmpty />
      </StyledShoppingCart>
    </>
  );
};

export default ShoppingCart;
