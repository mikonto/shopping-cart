import styled from "styled-components";

const StyledShoppingCartCheckout = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
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

const ShoppingCartCheckout = ({ shoppingCart }) => {
  const totalSum = () => {
    const sum = shoppingCart.reduce((total, cartItem) => {
      return total + cartItem.details.price * cartItem.quantity;
    }, 0);

    return Number(sum.toFixed(2));
  };

  return (
    <>
      <StyledShoppingCartCheckout>
        <p>Total: {totalSum()}</p>
      </StyledShoppingCartCheckout>
    </>
  );
};

export default ShoppingCartCheckout;
