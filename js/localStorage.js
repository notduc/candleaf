const data = [
  {
    id: 1,
    productName: "Spiced Mint",
    price: 9.99,
    img: "../img/product1.png",
    quality: 1,
  },
];

//Khi setItem kiểu dữ liệu đặc biệt thì biến string
localStorage.setItem("data", JSON.stringify(data));

// Khi getItem kiểu dữ liệu sẽ trả về là string

const a = localStorage.getItem("data");
console.log(JSON.parse(a));

// setTimeout(() => {
//   localStorage.removeItem("data");
// }, 3000);
