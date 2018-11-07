export const findCard = cardName =>
  document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("SearchProductName");
    const button = document.getElementsByClassName("site-search__button")[0];
    search.value = cardName;
    button.click();
  });
