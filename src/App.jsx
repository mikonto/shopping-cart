import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Home from "./Home";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();

  return (
    <>
      <GlobalStyle />
      <Header />
      {name === "products" ? (
        <Products />
      ) : name === "shopping-cart" ? (
        <ShoppingCart />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
