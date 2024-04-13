export const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  // console.log(currentCardElement);
  // console.log(productQuantity);
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  // console.log(quantity);

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else {
      quantity = stock;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  productQuantity.innerText = quantity;
  console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};
