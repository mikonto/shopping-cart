import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledShoppingCart = styled.div`
  display: grid;
  gap: 12px;
  flex-grow: 1;
  padding: 12px;
  grid-template-columns: repeat(2, 0.5fr);

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
  margin: 4px;
`;

const Button = styled.button`
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

const Spacer = styled.div`
  height: 15px;
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const ShoppingCart = ({ shoppingCart }) => {
  const hasItems = shoppingCart.length > 0;

  return hasItems ? (
    <>
      <Title>Shopping cart</Title>
      <StyledShoppingCart>
        <Card>
          {shoppingCart.map((cartItem) => (
            <ItemCard>
              <p key={cartItem.details.id}>{cartItem.details.title}</p>
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
            <Button>Shop now</Button>
          </Link>
          <Spacer />
        </Card>
      </StyledShoppingCart>
    </>
  );
};

export default ShoppingCart;
