
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body')

let timerId = null;
const DELAY = 1000;
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function switchBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor(); 
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true
  startBtn.setAttribute("class", "btn btn-secondary")

  timerId = setInterval(() => {
        switchBodyColor()   
  }, DELAY);
}); 

startBtn.addEventListener('click', switchBodyColor)
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false
    startBtn.removeAttribute("class", "btn-secondary")
    startBtn.setAttribute("class", "btn btn-primary ")
});

