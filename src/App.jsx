import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const { name } = useParams();

  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      {name === "products" ? (
        <Products />
      ) : name === "shopping-cart" ? (
        <ShoppingCart />
      ) : (
        <Home />
      )}
    </StyledApp>
  );
}

export default App;
