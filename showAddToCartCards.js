import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCardProductFromLS } from "./getCartProducts.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removeProdFromCart } from "./removeProdFromCart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

// fetch data
fetch("./api/product.json", {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const products = data;
    let cartProducts = getCardProductFromLS();
    const filterProducts = products.filter((curProd) => {
      return cartProducts.some((curElem) => curElem.id === curProd.id);
    });

    const cartElement = document.querySelector("#productCartContainer");
    const templateContainer = document.querySelector("#productCartTemplate");

    const showCartProduct = () => {
      filterProducts.forEach((curProd) => {
        const { category, id, image, name, price, stock } = curProd;

        let productClone = document.importNode(templateContainer.content, true);
        const LSActualData = fetchQuantityFromCartLS(id, price);

        productClone
          .querySelector("#cardValue")
          .setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productQuantity").textContent =
          LSActualData.quantity;
        productClone.querySelector(".productPrice").textContent =
          LSActualData.price;

        productClone
          .querySelector(".stockElement")
          .addEventListener("click", (event) => {
            incrementDecrement(event, id, price, stock);
          });

        productClone
          .querySelector(".remove-to-cart-button")
          .addEventListener("click", () => removeProdFromCart(id, name));

        cartElement.appendChild(productClone);
      });
    };
    showCartProduct();
    updateCartProductTotal();
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
