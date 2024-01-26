/* */

/* Truncate Card Title */
window.addEventListener("load", function () {
  truncateCardTitle();
});

function truncateCardTitle() {
  let cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (let i = 0; i < cardList.length; i++) {
    let text = cardList[i].innerHTML;
    let newText = truncateString(text, 35);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

/* Sidebar Mini */
let toggleBtn = document.querySelector(".sidebarMini__button");
let sidebarMini = document.querySelector(".sidebarMini");
let switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
  document.querySAll("body").classList.toggle("darkMode");
});

/* Navigation */

const getEleById = (id) => {
  return document.getElementById(id);
};
const getEleByCl = (cl) => {
  return document.getElementsByClassName(cl);
};
const queryS = (selector) => {
  return document.querySelector(selector);
};
const querySAll = (selector) => {
  return document.querySelectorAll(selector);
};

const changeContent = (hrefValue) => {
  if (hrefValue == "#home") {
    queryS("#home").classList.add("active", "fadeInUp");
    queryS("#about").classList.remove("active");
    queryS("#portfolio").classList.remove("active");
    queryS("#contact").classList.remove("active");
    // querySAll("#about").classList.add("hidden");
    // querySAll("#portfolio").classList.add("hidden");
    // querySAll("#contact").classList.add("hidden");
  } else if (hrefValue == "#about") {
    queryS("#home").classList.remove("active");
    queryS("#about").classList.add("active", "fadeInUp");
    queryS("#portfolio").classList.remove("active");
    queryS("#contact").classList.remove("active");
  } else if (hrefValue == "#portfolio") {
    queryS("#home").classList.remove("active");
    queryS("#about").classList.remove("active");
    queryS("#portfolio").classList.add("active", "fadeInUp");
    queryS("#contact").classList.remove("active");
  } else if (hrefValue == "#contact") {
    queryS("#home").classList.remove("active");
    queryS("#about").classList.remove("active");
    queryS("#portfolio").classList.remove("active");
    queryS("#contact").classList.add("active", "fadeInUp");
  }
};

querySAll(".navigationLink").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefValue = element.getAttribute("href");
    changeContent(hrefValue);
  });
});

// Portfolio

let $grid = $(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

$(".filter-button-group").on("click", "a", function () {
  let filterValue = $(this).attr("data-filter");
  console.log(this);
  console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});
