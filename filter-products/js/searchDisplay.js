// Implement search functionality
class searchDisplay {
  _parentEl = document.querySelector(".nav__search");

  getResults() {
    const results = this._parentEl.querySelector(".nav__input");
    this._resetInput();
    return results;
  }
  // Clear input field
  _resetInput() {
    this._parentEl.querySelector(".nav__input").value = "";
  }

  // Define event handler for the search
  addSearchHandler(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new searchDisplay();
