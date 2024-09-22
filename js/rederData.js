import { productsList } from "./data.js";

const products = document.querySelector(".products");

// 3 tham số: item, index, array
productsList.forEach((item, index, array) => {
  const template = `
        <div class="product-item">
            <div class="product-item-img">
            <img src=${item.img} alt="" />
        </div>
        <h3 class="product-name">${item.productName}</h3>
        <p class="product-desc">
            Top grade Soy wax that delivers a smoke less, consistent burn
        </p>
        <div class="product-price">
            <span>${item.price}$</span>
            <span>Sold 2k</span>
        </div>
        <button id=${item.id} class="product-item-button">
            <i data-id="1" class="fa-solid fa-plus"></i> Add to cart
        </button>
    </div>
    `;
  products.insertAdjacentHTML("beforeend", template);
});
