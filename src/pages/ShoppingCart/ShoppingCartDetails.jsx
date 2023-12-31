import styled from "styled-components";

const StyledShoppingCartDetails = styled.div`
  background: white;
  display: flex;
  flex-direction: column;

  padding: 12px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
const ShoppingCartItem = styled(StyledShoppingCartDetails)`
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

const ShoppingCartDetails = ({
  shoppingCart,
  removeFromCart,
  updateQuantity,
}) => {
  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <StyledShoppingCartDetails>
      {shoppingCart.map((cartItem) => (
        <ShoppingCartItem key={cartItem.details.id}>
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
            Remove
          </RedButton>
        </ShoppingCartItem>
      ))}
    </StyledShoppingCartDetails>
  );
};

export default ShoppingCartDetails;
