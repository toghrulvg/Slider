let information = document.querySelectorAll("#news .info-container");
let nextBtn = document.querySelectorAll("#news .nxt-btn");
let backBtn = document.querySelectorAll("#news .bck-btn");

information.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  backBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
