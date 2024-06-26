"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Cart from "../../../public/Cart.svg";
import { Button, HeaderWrapper } from "./style";

export default function Header() {
  const cartCount = 5;

  const { toggleCart } = useCart();

  return (
    <HeaderWrapper>
      <p style={{ fontSize: 40, fontWeight: "semibold" }}>MKS</p>
      <Button onClick={toggleCart}>
        <Image width={18} height={18} src={Cart} alt="Cart" />
        <p>{cartCount}</p>
      </Button>
    </HeaderWrapper>
  );
}
