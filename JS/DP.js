// Open Navigation And Sidbar
let header = document.querySelector("header");
let container = document.querySelector("header .container nav ul li");
let nav = document.querySelector("header .container nav");
let humporgar = document.querySelector("header .container .link-list");
let sidbar = document.querySelector(".sidbar");
let closeBtn = document.querySelector(".sidbar .closeBtn");

humporgar.addEventListener("click", () => {
  nav.classList.toggle("active");
});

humporgar.addEventListener("click", () => {
  sidbar.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  sidbar.classList.toggle("open");
});
// Scroll to top

let scrollBtn = document.querySelector(".scrollToTop");

window.onscroll = () => {
  if (window.scrollY > 900) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }

  if (window.scrollY > 0) {
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// Add To Cart Button
let cartBtn = document.querySelectorAll(".addToCart");
let orders = document.querySelector(".number-orders");

cartBtn.forEach((element) => {
  element.onclick = () => {
    let orderNo = ++orders.innerHTML;
    orderNo + 1;
  };
});


