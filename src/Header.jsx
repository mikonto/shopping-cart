import styled from "styled-components";
import logoImage from "./assets/logo.png";
import ShoppingCart from "./ShoppingCart";

const StyledHeader = styled.div`
  display: flex;
  background: lightblue;
  height: 50px;
  width: 100%;
`;

const StyledMenu = styled.div`
  display: flex;
  margin-left: auto;
`;

const StyledMenuItem = styled.button`
  background: transparent;
  height: 50px;
  width: 80px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoImage} alt="Description of the image" />
      <StyledMenu>
        <StyledMenuItem>Home</StyledMenuItem>
        <StyledMenuItem>Products</StyledMenuItem>
        <StyledMenuItem>
          <ShoppingCart badgeContent={4} />
        </StyledMenuItem>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
