import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCart = ({badgeContent}) => {
  return (
    <Badge badgeContent={badgeContent} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default ShoppingCart;
