"use client";
import Image from "next/image";
import ShoppingBag from "../../../public/shopping-bag.svg";
import Skeleton, { skeletonTypes } from "../Skeleton";
import { Card, CardInfo, Description, Price, PriceCard, Text } from "./style";

export interface IItemCard {
  name: string;
  price: string;
  description?: string;
  brand?: string;
  photo: string;
}
export default function ItemCard({
  description,
  name,
  price,
  photo,
}: IItemCard) {
  return (
    <div style={{ width: "100%", display: "block", justifyContent: "center" }}>
      <Card>
        {photo ? (
          <Image priority src={photo} alt={name} width={138} height={138} />
        ) : (
          <Skeleton
            type={skeletonTypes.square}
            width="200px"
            height="200px"
            boarderRadius={8}
          />
        )}
        <CardInfo>
          <Text>{name}</Text>
          <PriceCard>
            <Price>{price}</Price>
          </PriceCard>
        </CardInfo>
        {description ? (
          <Description>{description}</Description>
        ) : (
          <Skeleton type={skeletonTypes.text} />
        )}
      </Card>
      <button
        style={{
          width: "100%",
          height: "32px",
          background: "#0F52BA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          color: "white",
          borderRadius: "0 0 8px 8px",
          border: "none",
        }}
      >
        <Image width={12} height={12} src={ShoppingBag} alt="bag icon" />
        Comprar
      </button>
    </div>
  );
}
