document.querySelector("body").addEventListener("keypress", (event) => {
  document.querySelector(".key").textContent = event.key;
});
