export function showToast(operation, name) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (operation === "add") {
    toast.textContent = `Great choice! The ${name} has been added to the cart.`;
  } else if (operation === "remove") {
    toast.textContent = `The ${name} has been removed from your cart.`;
  } else {
    toast.textContent = `Hey, you've already added the ${name} to your cart.`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
