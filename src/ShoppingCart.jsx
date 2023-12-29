import styled from "styled-components";

const StyledShoppingCart = styled.div`
  background: white;
  flex-grow: 1;
  padding: 4px;
`;

const ShoppingCart = () => {
  return (
    <>
      <StyledShoppingCart>Shopping Cart</StyledShoppingCart>
    </>
  );
};

export default ShoppingCart;
