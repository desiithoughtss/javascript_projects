const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
    switch (event.target.id) {
      case "red":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "green":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
