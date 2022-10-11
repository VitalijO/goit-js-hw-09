
const startBtn = document.querySelector('button[data-start]');
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

    if (startBtn.dataset.start>0) {
    return
    }

    startBtn.setAttribute("class", "btn btn-secondary")

  timerId = setInterval(() => {
    
        switchBodyColor() 
        startBtn.dataset.start = 1
  }, DELAY);
}); 

startBtn.addEventListener('click', switchBodyColor)
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.dataset.start = 0
    startBtn.removeAttribute("class", "btn-secondary")
    startBtn.setAttribute("class", "btn btn-primary ")
});

