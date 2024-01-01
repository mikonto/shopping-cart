import styled from "styled-components";
import Hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const StyledHome = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    /* Dark layer with 85% opacity */ url(${Hero}); /* Your background image */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
`;

const StyledContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 50px;
  margin: 0;
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

const Home = () => {
  return (
    <StyledHome>
      <StyledContainer>
        <StyledH1>Welcome to Webshop!</StyledH1>
      </StyledContainer>
      <StyledContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
          pulvinar mattis nunc sed.
        </p>
      </StyledContainer>
      <StyledContainer>
        <Link to="/products">
          <BlueButton>Shop now</BlueButton>
        </Link>
      </StyledContainer>
    </StyledHome>
  );
};

export default Home;
