"use strict";

const imgRandomProduct = document.querySelector("img");
const btnNewRanProd = document.querySelector("button");

const URL = "https://api.escuelajs.co/api/v1/products";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function displayRandomProduct() {
  const res = await fetch(URL);
  const data = await res.json();
  const products = [...data];
  const ranIndexProd = getRandomInt(0, products.length);
  const ranProd = products[ranIndexProd];
  const images = ranProd.images;
  const ranIndexImg = getRandomInt(0, images.length);
  const ranImg = images[ranIndexImg];
  imgRandomProduct.src = ranImg;
}

btnNewRanProd.addEventListener("click", displayRandomProduct);

displayRandomProduct();
