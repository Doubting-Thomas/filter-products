import {
  productContainer,
  navHome,
  navTofu,
  navSushi,
  navTacos,
  homeText,
  navItems,
} from "./configs.js";

import * as model from "./model.js";
import searchDisplay from "./searchDisplay.js";

// Load and format API results
export const renderTofu = async function () {
  try {
    const api_url = `https://forkify-api.herokuapp.com/api/search?q=tofu`;
    const res = await fetch(api_url);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error("Problem fetching data.");

    // Format API data
    const dataList = {
      image: [],
      title: [],
      publisher: [],
      socialRank: [],
    };
    let recipe = data.recipes;
    recipe.forEach(function (meals) {
      dataList.image.push(meals.image_url);
      dataList.title.push(meals.title);
      dataList.publisher.push(meals.publisher);
      dataList.socialRank.push(meals.social_rank);
    });
    console.log(dataList);

    for (const [i] of recipe.entries()) {
      let markup;
      markup = `
    <section class="product">
      <div class="product__details">
        <div class="product__image">
          <img
            src="${dataList.image[i]}"
            class="product__img"
            alt="${dataList.title[i]}"
          />
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Name</h4>
          <p class="product__servings">${dataList.title[i]}</p>
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Publisher</h4>
          <p class="product__servings">${dataList.publisher[i]}</p>
        </div>
        <div class="product__info">
          <h4 class="product__text">Price</h4>
          <h4 class="product__price">$30</h4>
        </div>
      </div>
    `;
      productContainer.insertAdjacentHTML("afterbegin", markup);
    }
  } catch (err) {
    throw err;
  }
};

export const renderSushi = async function () {
  try {
    const api_url = `https://forkify-api.herokuapp.com/api/search?q=sushi`;
    const res = await fetch(api_url);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error("Problem fetching data.");

    // Format API data
    const dataList = {
      image: [],
      title: [],
      publisher: [],
      socialRank: [],
    };
    let recipe = data.recipes;
    recipe.forEach(function (meals) {
      dataList.image.push(meals.image_url);
      dataList.title.push(meals.title);
      dataList.publisher.push(meals.publisher);
      dataList.socialRank.push(meals.social_rank);
    });
    console.log(dataList);

    for (const [i] of recipe.entries()) {
      let markup;
      markup = `
    <section class="product">
      <div class="product__details">
        <div class="product__image">
          <img
            src="${dataList.image[i]}"
            class="product__img"
            alt="${dataList.title[i]}"
          />
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Name</h4>
          <p class="product__servings">${dataList.title[i]}</p>
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Publisher</h4>
          <p class="product__servings">${dataList.publisher[i]}</p>
        </div>
        <div class="product__info">
          <h4 class="product__text">Price</h4>
          <h4 class="product__price">$30</h4>
        </div>
      </div>
    `;
      productContainer.insertAdjacentHTML("afterbegin", markup);
    }
  } catch (err) {
    throw err;
  }
};

export const renderTacos = async function () {
  try {
    const api_url = `https://forkify-api.herokuapp.com/api/search?q=tacos`;
    const res = await fetch(api_url);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error("Problem fetching data.");

    // Format API data
    const dataList = {
      image: [],
      title: [],
      publisher: [],
      socialRank: [],
    };
    let recipe = data.recipes;
    recipe.forEach(function (meals) {
      dataList.image.push(meals.image_url);
      dataList.title.push(meals.title);
      dataList.publisher.push(meals.publisher);
      dataList.socialRank.push(meals.social_rank);
    });
    console.log(dataList);

    for (const [i] of recipe.entries()) {
      let markup;
      markup = `
    <section class="product">
      <div class="product__details">
        <div class="product__image">
          <img
            src="${dataList.image[i]}"
            class="product__img"
            alt="${dataList.title[i]}"
          />
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Name</h4>
          <p class="product__servings">${dataList.title[i]}</p>
        </div>
  
        <div class="product__info">
          <h4 class="product__text">Publisher</h4>
          <p class="product__servings">${dataList.publisher[i]}</p>
        </div>
        <div class="product__info">
          <h4 class="product__text">Price</h4>
          <h4 class="product__price">$30</h4>
        </div>
      </div>
    `;
      productContainer.insertAdjacentHTML("afterbegin", markup);
    }
  } catch (err) {
    throw err;
  }
};

// Hide home text when API results are rendered
export default function hideText() {
  homeText.style.display = "none";
}

navTofu.addEventListener("click", function () {
  hideText();
  renderTofu();
});

navSushi.addEventListener("click", function () {
  hideText();
  renderSushi();
});

navTacos.addEventListener("click", function () {
  hideText();
  renderTacos();
});

navHome.addEventListener("click", function () {
  productContainer.textContent = "";
  homeText.style.display = "block";
});

navItems.addEventListener("click", function () {
  searchDisplay._resetInput();
});
