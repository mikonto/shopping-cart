import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react"; // Importing useState from React
import { useParams } from "react-router-dom"; // Importing useParams from react-router-dom
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

const StyledApp = styled.div`
  display: flex;
  background: #f6f6f6;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

function App() {
  const { name } = useParams();
  const [shoppingCart, setShoppingCart] = useState([]);
  const shoppingCartCount = shoppingCart.reduce((total, currentItem) => {
    return total + currentItem.quantity;
  }, 0);

  const addToCart = (details, quantity) => {
    const quantityNumber = parseInt(quantity, 10);

    setShoppingCart((currentCart) => {
      // Check if product is already in the cart
      const productExists = currentCart.some(
        (item) => item.details.id === details.id
      );

      if (productExists) {
        // Product found
        return currentCart.map((item) =>
          item.details.id === details.id
            ? { ...item, quantity: item.quantity + quantityNumber }
            : item
        );
      } else {
        // Product not found
        return [...currentCart, { details, quantity: quantityNumber }];
      }
    });
    toast.success("Added to cart", {
      style: {
        marginTop: "65px",
      },
    });
  };

  const removeFromCart = (id) => {
    setShoppingCart((currentCart) =>
      currentCart.filter((item) => item.details.id !== id)
    );
    toast.success("Removed from cart", {
      style: {
        marginTop: "65px",
      },
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setShoppingCart((currentCart) =>
      currentCart.map((item) =>
        item.details.id === id
          ? { ...item, quantity: parseInt(newQuantity, 10) }
          : item
      )
    );
  };

  return (
    <StyledApp>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
      <Header shoppingCartCount={shoppingCartCount} />
      {name === "products" ? (
        <Products addToCart={addToCart} />
      ) : name === "shopping-cart" ? (
        <ShoppingCart
          shoppingCart={shoppingCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ) : (
        <Home />
      )}
    </StyledApp>
  );
}

export default App;
