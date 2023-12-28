import styled from "styled-components";
import logoImage from "./assets/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const StyledLogo = styled.img`
  height: 40px;
  width: auto;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: lightblue;
  height: 60px;
  width: 100%;
`;

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  height: 60px;
  width: 80px;
  border: none;
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

const Header = () => {
  const badgeContent = 4;
  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logoImage} alt="Description of the image" />
      </Link>
      <StyledMenu>
        <StyledMenuItem to="/">Home</StyledMenuItem>
        <StyledMenuItem to="/products">Products</StyledMenuItem>
        <StyledMenuItem to="/shopping-cart">
          <Badge badgeContent={badgeContent} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </StyledMenuItem>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
