import { productsList } from "./data.js";

const productItemBtn = document.querySelectorAll(".product-item-button");
const qualityCart = document.querySelector(".quality");
let cartList = JSON.parse(localStorage.getItem("cartList")) ?? [];

showCart(cartList);

function showCart(cartList) {
  localStorage.setItem("cartList", JSON.stringify(cartList));
  if (cartList.length <= 0) return;
  qualityCart.textContent = cartList.length;
  qualityCart.style.visibility = "visible";
}

productItemBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = Number(btn.id);
    let productSelect = productsList.filter((item) => item.id === productId);

    cartList.forEach((item) => {
      if (item.id === productId) {
        // item.quality = item.quality + 1;
        item.quality += 1;
        productSelect = [];
      }
    });

    const newCartList = cartList.concat(productSelect); //concat: nối 2 mảng vs nhau

    cartList = newCartList;

    showCart(cartList);
  });
});
