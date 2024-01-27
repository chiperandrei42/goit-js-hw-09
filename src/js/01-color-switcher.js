function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
stopButton.disabled = true;

let timerId; 

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 500);
});

stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId);
    document.body.style.background = "white";
});


  startButton.style.fontSize = "20px";
  startButton.style.padding = "15px 30px";
  startButton.style.display = "inline-block";

  stopButton.style.fontSize = "20px";
  stopButton.style.padding = "15px 30px";
  stopButton.style.display = "inline-block";
