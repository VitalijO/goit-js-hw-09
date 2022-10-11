
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body')
console.log(startBtn)
let isActive = false
let timerId = null;
const DELAY = 1000;
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function switchBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor(); 
}

// У першому завданні потрібно, щоб колір фону 
// сторінки почав змінюватись тільки при натисканні на кнопку start.
// Приберіть зміну кольору фону сторінки з події "mouseleave".

startBtn.addEventListener("click", () => {

    if (isActive) {
    return
    }

    startBtn.setAttribute("class", "btn btn-secondary")

  timerId = setInterval(() => {
    
        switchBodyColor() 
        let isActive = true
  }, DELAY);
}); 

startBtn.addEventListener('click', switchBodyColor)
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.dataset.start = 0
    startBtn.removeAttribute("class", "btn-secondary")
    startBtn.setAttribute("class", "btn btn-primary ")
});

