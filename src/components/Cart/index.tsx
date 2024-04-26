import { useCart } from "@/context/cartContext";
import Image from "next/image";
import styled from "styled-components";
import Close from "../../../public/Close_cart.svg";
import CardItenCart from "../CardItenCart";

const CartAcordion = styled.div`
  position: fixed;
  right: 0;
  background: #0f52ba;
  width: 486px;
  height: 100vh;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
`;

const Title = styled.p`
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;
  margin: 0;
`;

const CartAccordion = () => {
  const { isOpen, toggleCart } = useCart();

  return (
    <>
      {isOpen && (
        <CartAcordion>
          <div
            style={{
              padding: "36px 48px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0 0 24px 0",
              }}
            >
              <div style={{ position: "fixed", right: "24px" }}>
                <Image
                  onClick={toggleCart}
                  width={38}
                  height={38}
                  src={Close}
                  alt="close icon"
                />
              </div>
              <div style={{ width: "50%" }}>
                <Title>Carrinho de compras</Title>
              </div>
            </div>
            <CardItenCart />
          </div>
        </CartAcordion>
      )}
    </>
  );
};

export default CartAccordion;
