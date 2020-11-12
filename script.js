var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

//calls setGradient() on page load
window.onload = setGradient();

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setRandomColor() {
  function randomPick() {
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
  }

  var randomColor1 = randomPick();
  var randomColor2 = randomPick();

  body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
  css.textContent = body.style.background;
}

button.addEventListener("click", setRandomColor);

//some favorite combos: linear-gradient(to right, rgb(168, 225, 218), rgb(145, 96, 89))
