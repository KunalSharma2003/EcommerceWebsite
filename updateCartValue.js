let cartValue1 = document.getElementById("cartValue1");
let cartValue2 = document.getElementById("cartValue2");
export const updateCartValue = (cartProduct) => {
  cartValue1.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProduct.length} </i>`;
  cartValue2.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProduct.length} </i>`;
};
