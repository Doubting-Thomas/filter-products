import * as model from "./model.js";
console.log("module");

// export const getJSON = async function () {
//   try {
//     const res = await fetch(
//       "https://forkify-api.herokuapp.com/api/search?q=asparagus"
//     );
//     const data = await res.json();
//     console.log(res, data);
//   } catch (err) {
//     throw err;
//   }
// };
// getJSON();

const renderMeals = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
  } catch (err) {
    throw err;
  }
};
