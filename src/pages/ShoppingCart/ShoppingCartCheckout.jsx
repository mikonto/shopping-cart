import styled from "styled-components";
import PropTypes from "prop-types";

const StyledShoppingCartCheckout = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const StyledUl = styled.ul`
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 6px;
`;

const NoBulletLi = styled.li`
  margin: 6px;
  list-style-type: none;
`;

const Separator = styled.div`
  height: 1px;
  width: calc(100% - 40px);
  background-color: #c0c0c0;
  margin: 20px;
`;

const BlueButton = styled.button`
  margin-top: auto;
  margin-left: auto;
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
  const subTotal = () => {
    const sum = shoppingCart.reduce((total, cartItem) => {
      return total + cartItem.details.price * cartItem.quantity;
    }, 0);

    return Number(sum.toFixed(2));
  };

  const totalSum = () => {
    const sum = subTotal() + 8;
    return Number(sum.toFixed(2));
  };

  return (
    <StyledShoppingCartCheckout>
      <p>
        <b>Order summary</b>
      </p>
      <StyledUl>
        {shoppingCart.map((cartItem) => (
          <StyledLi key={cartItem.details.id}>
            {cartItem.quantity} x {cartItem.details.title}
          </StyledLi>
        ))}
      </StyledUl>
      <Separator />
      <StyledUl>
        <NoBulletLi>Products total: {subTotal()}€</NoBulletLi>
        <NoBulletLi>Shipping costs: 8€</NoBulletLi>
      </StyledUl>
      <Separator />
      <StyledUl>
        <NoBulletLi>
          <b>Total: {totalSum()}€</b>
        </NoBulletLi>
      </StyledUl>
      <BlueButton>To checkout</BlueButton>
    </StyledShoppingCartCheckout>
  );
};

ShoppingCartCheckout.propTypes = {
  shoppingCart: PropTypes.array,
};

export default ShoppingCartCheckout;
