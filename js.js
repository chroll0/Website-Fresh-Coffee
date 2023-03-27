const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 700) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");
menuBtn.addEventListener("click", function () {
  searchForm.classList.remove("active");
  itemsContainer.classList.remove("active");
  navbar.classList.toggle("show-nav");
});

const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector(".search-form");
searchBtn.addEventListener("click", function () {
  navbar.classList.remove("show-nav");
  itemsContainer.classList.remove("active");
  searchForm.classList.toggle("active");
});

const cartBtn = document.getElementById("cart-btn");
const itemsContainer = document.querySelector(".items-container");
cartBtn.addEventListener("click", function () {
  navbar.classList.remove("show-nav");
  searchForm.classList.remove("active");
  itemsContainer.classList.toggle("active");
});

const readMore = document.getElementById("continue");
const hidden = document.querySelector(".hidden");
readMore.addEventListener("click", function () {
  hidden.classList.toggle("hidden");
  hidden.classList.toggle("read-more");
  if (hidden.classList.contains("hidden")) {
    readMore.textContent = "learn more";
  } else {
    readMore.textContent = "see less";
  }
});
window.onscroll = () => {
  navbar.classList.remove("show-nav");
  searchForm.classList.remove("active");
  itemsContainer.classList.remove("active");
};
