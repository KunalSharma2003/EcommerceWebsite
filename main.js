// import products from "/api/product.json";
// showProductContainer(products);
import { showProductContainer } from "./homeProductsCards.js";
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
    showProductContainer(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
