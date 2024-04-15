import { getCardProductFromLS } from "./getCartProducts.js";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCardProductFromLS();
  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;
  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = Math.floor(existingProduct.price * 100) / 100;
  }
  return { quantity, price };
};
