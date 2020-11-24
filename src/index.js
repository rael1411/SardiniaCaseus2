import "./reset.css";
import "./style.css";

// product object constructor
function Product(url, name) {
  this.url = url;
  this.name = name;
}
//declaring products and product container
let casizolu = new Product("../src/assets/images/casizolu.jpg", "casizolu");
let fresina = new Product("../src/assets/images/fresina.jpg", "fresina");
let margara2 = new Product("../src/assets/images/margara2.jpg", "margara");
let yogurt = new Product("../src/assets/images/yogurt.jpg", "yogurt");
let products = [casizolu, fresina, margara2, yogurt];
const updatePicture = () => {
  product.setAttribute("src", products[photoCount].url);
  product.setAttribute("alt", products[photoCount].name);
  productTitle.textContent=products[photoCount].name;
};
const productTitle = document.getElementById("product-title")
//preparing and showing default picture
const itemContainer = document.getElementById("item-container");
const product = document.createElement("img");
product.classList.add("gallery-item");
let photoCount = 0;
updatePicture();
itemContainer.appendChild(product);
//buttons to change picture and description
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
nextButton.addEventListener("click", () => {
  if (photoCount == products.length - 1) {
    photoCount = 0;
  } else {
    photoCount++;
  }
  updatePicture();
});
prevButton.addEventListener("click", () => {
  if (photoCount == 0) {
    photoCount = products.length - 1;
  } else {
    photoCount--;
  }
  updatePicture();
});
