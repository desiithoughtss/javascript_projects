let interval;
let mainString = "ABCDEF1234567890";

document.querySelector("#start").addEventListener("click", () => {
  interval = setInterval(() => {
    let colorString = "#";
    for (let i = 0; i < 6; i++) {
      colorString += mainString[Math.floor(Math.random() * mainString.length)];
    }
    document.querySelector("body").style.backgroundColor = colorString;
  }, 1000);
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
