
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("input#datetime-picker")
const startBtn = document.querySelector('button[data-start]')
startBtn.setAttribute("class", "btn btn-primary")
let daysVal = document.querySelector('.value[data-days]')
let hoursVal = document.querySelector('.value[data-hours]')
let minutesVal = document.querySelector('.value[data-minutes]')
let secondsVal = document.querySelector('.value[data-seconds]')

 
const DELAY = 1000;
let isActive = false

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0].getTime() < Date.now()){
          window.alert("Please choose a date in the future") 
      }
    },
};

flatpickr(input, options)

startBtn.addEventListener('click', start)

function start() {
const shoosedTime = Date.parse(input.value)
    
    if (isActive) {
           return
    }
     startBtn.removeAttribute("class", "btn btn-primary")
        startBtn.setAttribute("class", "btn btn-secondary")

    timerId = setInterval(() => {
           
           isActive = true
           const currentTime = Date.now() 
           const deltaTime = shoosedTime-currentTime
        if (shoosedTime ===currentTime) {
               clearInterval(timerId)
               return
           }
       
           const { days, hours, minutes, seconds } = convertMs(deltaTime) 
           daysVal.textContent = `${days}`
           hoursVal.textContent = `${hours}`
           minutesVal.textContent = `${minutes}`
           secondsVal.textContent = `${seconds}`
           
       }, DELAY)
    
    }
 


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad (Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad( Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(val) {
    return String(val).padStart(2, "0")
}
    
 