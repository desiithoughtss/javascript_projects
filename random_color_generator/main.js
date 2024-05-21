const bttn = document.querySelector(".hex-button");
const hexColorValue = document.querySelector(".hex-value");
const hexContainer = document.querySelector(".hex-container");
const hexCopy = document.querySelector(".hex-copy");

let createHexValue = () => {
  let rangeString = "0123456789ABCDEF";
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += rangeString[Math.floor(Math.random() * rangeString.length)];
  }
  hexColorValue.textContent = hexValue;
  hexContainer.style.backgroundColor = hexValue;
};

bttn.addEventListener("click", createHexValue);

const rgbBttn = document.querySelector(".rgb-button");
const getRedInputRange = document.querySelector("#red");
const getBlueInputRange = document.querySelector("#blue");
const getGreenInputRange = document.querySelector("#green");
const rgbContainer = document.querySelector(".rgb-container");
const rgbColorValue = document.querySelector(".rgb-value");
const rgbCopy = document.querySelector(".rgb-copy");

let createRgbValue = () => {
  let extractRedValue = getRedInputRange.value;
  let extractBlueValue = getBlueInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  rgbContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractBlueValue}, ${extractGreenValue})`;
  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractBlueValue}, ${extractGreenValue})`;

  //   console.log(extractBlueValue, extractGreenValue, extractRedValue);
};

rgbBttn.addEventListener("click", createRgbValue);

// ------
function copyHexToClipboard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
}

hexCopy.addEventListener("click", copyHexToClipboard);

function copyrgbToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
}
rgbCopy.addEventListener("click", copyrgbToClipboard);
