import { useProductsContext } from "@/api/ProductsContext";
import { IProductsData } from "@/interfaces/products";
import { formatePrice } from "@/utils/conversor";
import Image from "next/image";
import Close from "../../../public/Close_cart.svg";
import SpinnerInput from "./InputSpinner";
import { Text } from "./style";

export default function CardItenCart() {
  const productContext = useProductsContext();
  const productsData: IProductsData = productContext.productsData;

  // const produ = productsData.products.slice(0, 3);

  return (
    <div
      style={{
        overflow: "auto",
        height: "100%",
      }}
    >
      {productsData.products.map((produ) => (
        <div
          key={produ.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr 1fr",
            padding: "16px",
            background: "white",
            borderRadius: "8px",
            margin: "28px 16px 0 0",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Image
            onClick={() => alert("remove from cart")}
            width={24}
            height={24}
            src={Close}
            alt="close icon"
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "-10px",
              top: "-10px",
            }}
          />
          <Image src={produ.photo} alt="teste" width={60} height={60} />
          <Text>{produ.name}</Text>
          <SpinnerInput initialValue={1} />
          <p style={{ fontWeight: "bold" }}>{formatePrice(produ.price)}</p>
        </div>
      ))}
    </div>
  );
}
