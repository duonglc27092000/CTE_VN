const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeIcon = $(".header__navbar-menu-bars--close");
const menuIcon = $(".header__navbar-menu-bars--menu");
// const elements = $$(".content div h1");

// elements.forEach((element) => {
//   element.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest",
//   });
// });

//toggle icon menu_________________
closeIcon.onclick = function () {
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
};
menuIcon.onclick = function () {
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
};

// hide menu then click link content
const link_lis = $$(".nav__all-list li");

link_lis.forEach((tab, index) => {
  tab.onclick = function () {
    $("#nav__input").checked = false;
    menuIcon.classList.toggle("hide");
    closeIcon.classList.toggle("hide");
  };
});
// ____________________________________

// toggle icon menu END_______________

// function d7() {
//   tabs.forEach((tab, index) => {
//     tab.onclick = function () {
//       $(".nav__all-btn.hide").classList.remove("hide");
//       this.classList.add("hide");
//     };
//   });
// }
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});
tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
