let isScrolling = false;
let startX;
let scrollLeft;
let scrollInterval;

let subtopnav = document.querySelector("#subtopnav");
let scroll_left_btn = document.querySelector("#scroll_left_btn");
let scroll_right_btn = document.querySelector("#scroll_right_btn");

function startScrollFun(direction) {
  console.dir(subtopnav);
  stopScrollFun();
  scrollInterval = setInterval(() => {
    subtopnav.scrollLeft += direction * 10;
  }, 10);
}

function stopScrollFun() {
  clearInterval(scrollInterval);
}

scroll_left_btn.addEventListener("mousedown", (e) => {
  startScrollFun(1);
});
scroll_left_btn.addEventListener("mouseout", stopScrollFun);
scroll_left_btn.addEventListener("mouseup", stopScrollFun);

scroll_right_btn.addEventListener("mousedown", () => {
  startScrollFun(-1);
});
scroll_right_btn.addEventListener("mouseout", stopScrollFun);
scroll_right_btn.addEventListener("mouseup", stopScrollFun);

function updateScrollButtons() {
  const maxScrollLeft = subtopnav.scrollWidth - subtopnav.clientWidth;

  /* Show or hide left button */
  if (subtopnav.scrollLeft >= 10) {
    scroll_right_btn.style.display = "block";
  } else {
    scroll_right_btn.style.display = "none";
  }
  
  /*  Show or hide right button */
  if (subtopnav.scrollLeft < maxScrollLeft - 10) {
    scroll_left_btn.style.display = "block";
  } else {
    scroll_left_btn.style.display = "none";
  }
}

/*   Listen for scroll events */
subtopnav.addEventListener("scroll", (e) => {
 updateScrollButtons();
});

/*   Also update on page load and after any scroll button press */
window.addEventListener("load", updateScrollButtons);
