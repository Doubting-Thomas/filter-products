import { renderTofu, renderSushi, renderTacos } from "./helper.js";

// Create state object for the search functionality
export const state = {
  search: {
    results: "",
  },
};

export const displayTofuResults = async function (results) {
  try {
    state.search.results = results;

    await renderTofu();
  } catch (err) {
    throw err;
  }
};

export const displaySushiResults = async function (results) {
  try {
    state.search.results = results;

    await renderSushi();
  } catch (err) {
    throw err;
  }
};

export const displayTacosResults = async function (results) {
  try {
    state.search.results = results;

    await renderTacos();
  } catch (err) {
    throw err;
  }
};
