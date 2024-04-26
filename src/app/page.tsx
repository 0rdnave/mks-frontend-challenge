"use client";

import "@/api/ProductsContext";
import { ProductsProvider } from "@/api/ProductsContext";
import queryClient from "@/api/queryClient";
import CartAccordion from "@/components/Cart";
import Header from "@/components/Header";
import ProductsWrapper from "@/components/ProductsWrapper";
import { CartProvider } from "@/providers/cartProviders";

import { QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ProductsProvider>
          <CartProvider>
            <Header />
            <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
              <CartAccordion />
              <ProductsWrapper />
            </div>
          </CartProvider>
        </ProductsProvider>
      </QueryClientProvider>
    </main>
  );
}
