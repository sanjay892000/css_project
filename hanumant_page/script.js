let nav1 = document.querySelector("#navbar1");
let nav2 = document.querySelector("#navbar2");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav1.style.display = "none";
    nav2.style.display = "flex";
  } else {
    nav1.style.display = "flex";
    nav2.style.display = "none";
  }
});
