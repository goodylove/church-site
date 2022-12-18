const hambuger = document.querySelector(".hambuger");
const mobileMenu = document.querySelector(".mobl-menu");
const closeIcon = document.querySelector(".close-icon");

hambuger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
// let slider = document.getElementById("slider");
let i = 1;
setInterval(function () {
  e = document.getElementById("slider");
  console.log(e);
  switch (i) {
    case 0:
      e.style.backgroundPosition = "center top, center top, center top";
      break;
    case 1:
      e.style.backgroundPosition =
        window.innerWidth + "px top, center top, center top";
      break;
    case 2:
      e.style.backgroundPosition =
        window.innerWidth +
        "px top, " +
        window.innerWidth +
        "px top, center top";
      break;
  }
  i++;
  if (i > 2) i = 0;
}, 3000);
// function updateSlider() {
//   switch (i) {
//     case 0:
//       slider.style.background = "center top, center top, center top";
//       //       break;
//       break;
//     case 1:
//       slider.style.backgroundPosition =
//         window.innerWidth + "px top, center top, center top";
//       break;
//     case 2:
//       slider.style.backgroundPosition =
//         window.innerWidth +
//         "px top, " +
//         window.innerWidth +
//         "px top, center top";
//       break;

//     default:
//       break;
//   }
//   i++;
//   if (i > 2) i = 0;
// }
// setInterval(() => {
//   updateSlider();
// }, 3000);
