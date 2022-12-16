import {
  api_url,
  api_key,
  productContainer,
  navItem,
  navHome,
  homeText,
} from "./configs.js";

export const getJSON = async function () {
  try {
    const res = await fetch(api_url);
    const data = await res.json();
    console.log(data);

    // Format the API object
    // let recipe = data.data.recipe;
    // recipe = {
    //   id: recipe.id,
    //   title: recipe.title,
    //   publisher: recipe.publisher,
    //   sourceUrl: recipe.source_url,
    //   image: recipe.image_url,
    //   servings: recipe.servings,
    //   cookingTime: recipe.cooking_time,
    //   ingredients: recipe.ingredients,
    // };
    // console.log(recipe);

    // const dataList = {
    //   image: [],
    //   title: [],
    //   publisher: [],
    //   socialRank: [],
    // };
    let image = [];
    let title = [];
    let publisher = [];
    let socialRank = [];

    let recipe = data.recipes[0];
    // // recipe.forEach(function (meals) {
    image.push(recipe.image_url);
    title.push(recipe.title);
    publisher.push(recipe.publisher);
    socialRank.push(recipe.social_rank);
    // // });
    console.log(recipe);

    const markup = `
    <section class="product">
      <div class="product__details">
        <div class="product__image">
          <img
            src="${recipe.image_url}"
            class="product__img"
            alt="${recipe.title}"
          />
        </div>

        <div class="product__info">
          <h4 class="product__text">Name</h4>
          <p class="product__servings">${recipe.title}</p>
        </div>

        <div class="product__info">
          <h4 class="product__text">Publisher</h4>
          <p class="product__servings">${recipe.publisher}</p>
        </div>
        <div class="product__info">
          <h4 class="product__text">Price</h4>
          <h4 class="product__price">$30</h4>
        </div>
      </div>
    `;
    productContainer.insertAdjacentHTML("afterbegin", markup);

    // My own data
    // const dataList = {
    //   image: [],
    //   title: [],
    //   publisher: [],
    //   socialRank: [],
    // };

    // let recipe = data.recipes;
    // recipe.forEach(function (meals) {
    //   dataList.image.push(meals.image_url);
    //   dataList.title.push(meals.title);
    //   dataList.publisher.push(meals.publisher);
    //   dataList.socialRank.push(meals.social_rank);
    // });
    // console.log(dataList);
  } catch (err) {
    throw err;
  }
};
// getJSON();

navItem.addEventListener("click", function () {
  homeText.style.display = "none";
  getJSON();
});

navHome.addEventListener("click", function () {
  productContainer.textContent = "";
  homeText.style.display = "block";
});
