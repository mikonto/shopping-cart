import styled from "styled-components";

const StyledHome = styled.div`
  flex-grow: 1;
  padding: 12px;
`;

const Title = styled.h1`
  background: #f6f6f6;
  padding: 12px;
  margin: 8px;
`;

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <StyledHome></StyledHome>
    </>
  );
};

export default Home;
