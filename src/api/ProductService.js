const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => products.slice(0, 8)); // limiting to 8 products
  };
  
  export { fetchProducts };
  