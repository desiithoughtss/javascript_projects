document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars i");
  const ratingSpan = document.querySelector(".rating-box div span");

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        star.classList.toggle("active", index2 <= index1);
      });
      ratingSpan.textContent = index1 + 1;
    });
  });
});
