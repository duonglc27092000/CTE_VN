const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//toggle icon menu
const tabs = $$(".nav__all-btn");

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".nav__all-btn.hide").classList.remove("hide");
    this.classList.add("hide");
  };
});
// toggle icon menu END
