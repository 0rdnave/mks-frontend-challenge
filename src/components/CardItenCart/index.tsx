import { useProductsContext } from "@/api/ProductsContext";
import { IProductsData } from "@/interfaces/products";
import { formatePrice } from "@/utils/conversor";
import Image from "next/image";
import styled from "styled-components";
import Close from "../../../public/Close_cart.svg";
import SpinnerInput from "./InputSpinner";
import { Text } from "./style";

const Container = styled.div`
  overflow: auto;
  height: 100%;
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  padding: 16px;
  background: white;
  border-radius: 8px;
  margin: 28px 16px 0 0;
  position: relative;
  align-items: center;
  gap: 8px;

  @media (max-width: 426px) {
    display: flex;
    gap: 16px;
    flex-direction: column;
  }
`;

const CloseIcon = styled(Image)`
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: -10px;
`;

const Price = styled.p`
  font-weight: bold;
`;

const StyledImage = styled(Image)`
  width: 48px;
  height: 48px;

  @media (max-width: 426px) {
    width: 80px;
    height: 80px;
  }
`;

export default function CardItenCart() {
  const productContext = useProductsContext();
  const productsData: IProductsData = productContext.productsData;

  return (
    <Container>
      {productsData.products.map((produ) => (
        <Product key={produ.id}>
          <CloseIcon
            width={24}
            onClick={() => alert("remove from cart")}
            src={Close}
            alt="close icon"
          />
          <StyledImage width={100} height={100} src={produ.photo} alt="teste" />
          <Text>{produ.name}</Text>
          <SpinnerInput initialValue={1} />
          <Price>{formatePrice(produ.price)}</Price>
        </Product>
      ))}
    </Container>
  );
}
