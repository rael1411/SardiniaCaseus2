import "./reset.css";
import "./style.css";

let products = [
  "../src/assets/images/casizolu.jpg",
  "../src/assets/images/fresina.jpg",
  "../src/assets/images/margara2.jpg"
];
const itemContainer = document.getElementById("item-container");
const product = document.createElement("img");
product.classList.add("gallery-item");
product.setAttribute("src", products[2]);
itemContainer.appendChild(product);
