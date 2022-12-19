const hambuger = document.querySelector(".hambuger");
const mobileMenu = document.querySelector(".mobl-menu");
const closeIcon = document.querySelector(".close-icon");
const churchInfo = document.querySelectorAll(".church-info1");

hambuger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});

const slider1 = document.querySelectorAll(".slider1");
let position = 0;

function showSlider() {
  slider1.forEach((p) => {
    p.style.display = "none";
  });
  position++;
  if (position > slider1.length) {
    position = 1;
  }
  slider1[position - 1].style.display = "block";
}

setInterval(() => {
  showSlider();
}, 3000);
const observeChurchInfo = () => {
  const observer = new IntersectionObserver(
    (enteries) => {
      enteries.forEach((e) => {
        e.target.classList.toggle("show", e.isIntersecting);
        e.isIntersecting
          ? observer.unobserve(e.target)
          : observer.observe(e.target);
      });
    },
    {
      threshold: 1,
    }
  );

  churchInfo.forEach((info) => {
    observer.observe(info);
  });
};
observeChurchInfo();

// function observeItems(observe) {
//   const imgCont = document.querySelectorAll(".overall-img");
//   const observer = new IntersectionObserver(
//     (enteries) => {
//       enteries.forEach((e) => {
//         e.target.classList.toggle("show", e.isIntersecting);
//         e.isIntersecting
//           ? observer.unobserve(e.target)
//           : observer.observe(e.target);
//       });
//     },
//     {
//       threshold: 1,
//     }
//   );

//   imgCont.forEach((e) => {
//     observer.observe(e);
//   });
// }
// observeItems();
