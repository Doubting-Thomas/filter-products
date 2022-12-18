import * as model from "./model.js";
import searchDisplay from "./searchDisplay.js";
import hideText from "./helper.js";
import { input } from "./configs.js";

export const renderSearchResults = async function () {
  if (input.value === "tofu") {
    try {
      // Get the search results
      const results = searchDisplay.getResults();
      if (!results) return;

      await model.displayTofuResults(results);
      hideText();
    } catch (err) {
      throw err;
    }
  }

  if (input.value === "sushi") {
    model.displayTofuResults = "";
    try {
      const results = searchDisplay.getResults();
      if (!results) return;

      await model.displaySushiResults(results);
      hideText();
    } catch (err) {
      throw err;
    }
  }

  if (input.value === "tacos") {
    try {
      const results = searchDisplay.getResults();
      if (!results) return;

      await model.displayTacosResults(results);
      hideText();
    } catch (err) {
      throw err;
    }
  }
};

// General event handlers
const initResults = function () {
  searchDisplay.addSearchHandler(renderSearchResults);
};
initResults();
