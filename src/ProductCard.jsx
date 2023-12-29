import styled from "styled-components";

const StyledProductCard = styled.div`
  padding: 12px;
  border: 1px solid black;
`;

const StyledImage = styled.img`
  height: 150px;
`;

const ProductCard = ({
  title,
  price,
  description,
  category,
  rating,
  ratingCount,
  image,
}) => {
  return (
    <StyledProductCard>
      <p>
        <StyledImage src={image} alt="alt" />
      </p>
      <p>
        <b>Title: </b>
        {title}
      </p>
      <p>
        <b>Price: </b>
        {price}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <p>
        <b>Category: </b>
        {category}
      </p>
      <p>
        <b>Rating: </b>
        {rating}
      </p>
      <p>
        <b>Rating Count: </b>
        {ratingCount}
      </p>
    </StyledProductCard>
  );
};

export default ProductCard;
