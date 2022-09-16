const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeIcon = $(".header__navbar-menu-bars--close");
const menuIcon = $(".header__navbar-menu-bars--menu");
// const elements = $$(".content div h1");

//toggle icon menu_________________
closeIcon.onclick = function () {
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
};
menuIcon.onclick = function () {
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
};
// toggle icon menu END_______________

// hide menu then click link content
const link_lis = $$(".nav__all-list li");

link_lis.forEach((tab, index) => {
  tab.onclick = function () {
    $("#nav__input").checked = false;
    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
  };
});

// _________________________________

const tabs__products = $$(".tab-item_products");
const tabs__projects = $$(".tab-item_projects");
const tabs__about = $$(".tab-item_about");

const panes__products = $$(".tab-pane_products");
const panes__about = $$(".tab-pane_about");
const panes__projects = $$(".tab-pane_projects");

const tabActive__about = $(".tab-item_about.active");
const tabActive__products = $(".tab-item_products.active");
const tabActive__projects = $(".tab-item_projects.active");

const line__products = $(".tabs__products .line__products");
const line__projects = $(".tabs__projects .line__projects");
const line__about = $(".tabs__about .line__about");

requestIdleCallback(function () {
  line__about.style.left = tabActive__about.offsetLeft + "px";
  line__about.style.width = tabActive__about.offsetWidth + "px";
  line__projects.style.left = tabActive__projects.offsetLeft + "px";
  line__projects.style.width = tabActive__projects.offsetWidth + "px";
  line__products.style.left = tabActive__products.offsetLeft + "px";
  line__products.style.width = tabActive__products.offsetWidth + "px";
});
//about

tabs__about.forEach((tab, index) => {
  const pane = panes__about[index];

  tab.onclick = function () {
    $(".tab-item_about.active").classList.remove("active");
    $(".tab-pane_about.active").classList.remove("active");

    line__about.style.left = this.offsetLeft + "px";
    line__about.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
//project
tabs__projects.forEach((tab, index) => {
  const pane = panes__projects[index];

  tab.onclick = function () {
    $(".tab-item_projects.active").classList.remove("active");
    $(".tab-pane_projects.active").classList.remove("active");

    line__projects.style.left = this.offsetLeft + "px";
    line__projects.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
//product
tabs__products.forEach((tab, index) => {
  const pane = panes__products[index];

  tab.onclick = function () {
    $(".tab-item_products.active").classList.remove("active");
    $(".tab-pane_products.active").classList.remove("active");

    line__products.style.left = this.offsetLeft + "px";
    line__products.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
