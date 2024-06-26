import { useProductsContext } from "@/api/ProductsContext";
import { IProductsData } from "@/interfaces/products";
import ItemCard from "../ItemCard";
import { Wrapper } from "./style";

export default function ProductsWrapper() {
  // TODO tipar productsData
  const productContext = useProductsContext();
  const productsData: IProductsData = productContext.productsData;
  const isLoading = productContext.isLoading;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Wrapper>
        {isLoading && <p>Carregando...</p>}
        {productsData &&
          productsData.products.map((product) => (
            <ItemCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              photo={product.photo}
            />
          ))}
      </Wrapper>
    </div>
  );
}
