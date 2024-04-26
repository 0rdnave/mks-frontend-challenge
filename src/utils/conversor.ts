export const formatePrice = (value: number | string) => {
  if (typeof value === "string") {
    value = parseFloat(value);
  }
  // return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const formatedValue = `R$${value.toFixed(0)}`;

  return formatedValue;
};
