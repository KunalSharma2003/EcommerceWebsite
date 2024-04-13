import { getCardProductFromLS } from "./getCartProducts.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id, name) => {
  let cartProduct = getCardProductFromLS();
  cartProduct = cartProduct.filter((curProd) => curProd.id !== id);
  localStorage.setItem("cartProductLS", JSON.stringify(cartProduct));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    showToast("remove", name);
  }
  updateCartValue(cartProduct);
  updateCartProductTotal();
};
