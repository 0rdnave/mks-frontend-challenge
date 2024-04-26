import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import fetchProducts from "./fetchProducts";

const ProductsContext = createContext<any>({});

export function useProductsContext() {
  return useContext(ProductsContext);
}

export function ProductsProvider({ children }: any) {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data, isLoading, error } = productsQuery;

  if (error) {
    throw new Error("Erro ao carregar os produtos", error);
  }

  return (
    <ProductsContext.Provider value={{ productsData: data, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
}
