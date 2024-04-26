async function fetchProducts() {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC"
  );
  if (!response.ok) {
    throw new Error("Falha ao buscar os produtos");
  }
  return response.json();
}

export default fetchProducts;
