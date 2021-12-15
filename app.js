const hamburger_menu = document.querySelector(".hamburger-menuM");
const container = document.querySelector(".containerM");
const links = document.querySelector(".linksM");
const ul = document.querySelector(".linksMUl");
const page = document.querySelector(".page-inner");
ul.style.display = "none";
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  function myFunction(x) {
    if (x.matches && !container.classList.contains("active")) {
      // If media query matches
      links.style.height = "8vh";
      page.style.display = "flex";
    } else if (container.classList.contains("active")) {
      links.style.height = "100vh";
      page.style.display = "none";
    } else {
      links.style.height = "14vh";
      page.style.display = "flex";
    }
  }

  if (container.classList.contains("active")) {
    links.style.backgroundColor = "#1d1d1d";
    links.style.height = "100vh";
    ul.style.display = "flex";
  } else {
    links.style.backgroundColor = "initial";
    links.style.height = "14vh";
    ul.style.display = "none";
    page.style.display = "flex";
  }
  var x = window.matchMedia("(max-width: 1368px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener(myFunction);
});
