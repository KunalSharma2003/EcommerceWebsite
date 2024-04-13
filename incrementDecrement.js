import { getCardProductFromLS } from "./getCartProducts.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
export const incrementDecrement = (event, id, price, stock) => {
  const currentCartElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCartElement.querySelector(".productQuantity");
  const productPrice = currentCartElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localStorageProduct = getCardProductFromLS();
  let existingProd = localStorageProduct.find((curPro) => curPro.id === id);

  console.log("Exisiting Product ::", existingProd);
  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }
  console.log("localStoragePrice:", localStoragePrice);
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };
  updatedCart = localStorageProduct.map((curPro) => {
    return curPro.id === id ? updatedCart : curPro;
  });
  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;
  updateCartProductTotal();
};
