const stopButton = document.querySelector("[data-stop]");
const startButton = document.querySelector("[data-start]");

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopChangingColor);

let changeColorInterval;

function changeColor() {
    startButton.disabled = true;
    stopButton.disabled = false;
    bgColorFunction();
    changeColorInterval = setInterval(bgColorFunction, 1000);
}

function stopChangingColor() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(changeColorInterval);
}

function bgColorFunction() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
