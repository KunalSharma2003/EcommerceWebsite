import { getCardProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

getCardProductFromLS();
export const addTocart = (event, id, stock, name) => {
  const currentProdElem = document.querySelector(`#card${id}`);
  let arrlocalStorageProduct = getCardProductFromLS();
  let price = currentProdElem.querySelector(".productPrice").innerText;
  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  // console.log(currentProdElem, price, quantity);

  price = price.replace("₹", "");

  let existingProd = arrlocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);

    let updatedCart = { id, quantity, price };
    updatedCart = arrlocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    showToast("add", name);
  }

  if (existingProd) {
    showToast("xyz", name);
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrlocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrlocalStorageProduct));

  updateCartValue(arrlocalStorageProduct);
  showToast("add", name);
};
