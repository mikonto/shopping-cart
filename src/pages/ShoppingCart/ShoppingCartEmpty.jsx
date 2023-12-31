import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledShoppingCartEmpty = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Spacer = styled.div`
  height: 15px;
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const ShoppingCartEmpty = () => {
  return (
    <StyledShoppingCartEmpty>
      <p>Your shopping cart is empty</p>
      <Link to="/products">
        <BlueButton>Shop now</BlueButton>
      </Link>
      <Spacer />
    </StyledShoppingCartEmpty>
  );
};

export default ShoppingCartEmpty;
