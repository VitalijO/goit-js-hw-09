
const form = document.querySelector(".form");
form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
return new Promise((resolve, reject)=> {
const shouldResolve = Math.random() > 0.3;
setTimeout(() => {
     if (shouldResolve) {
     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  }, delay)
  })
   
}


function onFormSubmit(e) {
  e.preventDefault();
  const formEl = e.currentTarget.elements
  let firstDelay= Number(formEl.delay.value)
  const stepDelay = Number(formEl.step.value)
  let amount = Number(formEl.amount.value)

  form.reset()
  for (let i = 0; i < amount; i++) {

  createPromise(i+1, firstDelay).then(({ position, delay }) => { })
  .catch(({ position, delay }) => { })   

  firstDelay= firstDelay+stepDelay
    
  }





}

  
   