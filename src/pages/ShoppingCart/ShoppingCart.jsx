import styled from "styled-components";
import ShoppingCartDetails from "./ShoppingCartDetails";
import ShoppingCartCheckout from "./ShoppingCartCheckout";
import ShoppingCartEmpty from "./ShoppingCartEmpty";
import PropTypes from "prop-types";

// Base style
const StyledShoppingCartBase = styled.div`
  display: grid;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  grid-template-rows: 0.5fr auto;
  justify-content: center;
`;

const StyledShoppingCartWithItems = styled(StyledShoppingCartBase)`
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledShoppingCartEmpty = styled(StyledShoppingCartBase)`
  grid-template-columns: repeat(1, 1fr);
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const ShoppingCart = ({ shoppingCart, removeFromCart, updateQuantity }) => {
  const hasItems = shoppingCart.length > 0;

  return (
    <>
      <Title>Shopping cart</Title>
      {hasItems ? (
        <StyledShoppingCartWithItems>
          <ShoppingCartDetails
            shoppingCart={shoppingCart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
          <ShoppingCartCheckout shoppingCart={shoppingCart} />
        </StyledShoppingCartWithItems>
      ) : (
        <StyledShoppingCartEmpty>
          <ShoppingCartEmpty />
        </StyledShoppingCartEmpty>
      )}
    </>
  );
};

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.array,
  removeFromCart: PropTypes.func,
  updateQuantity: PropTypes.func,
};

export default ShoppingCart;
