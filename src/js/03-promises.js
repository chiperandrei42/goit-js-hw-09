import { Notify } from "notiflix";
const firstDelay = document.querySelector("[name='delay']");
const delayIncrement = document.querySelector("[name='step']");
const promiseAmount = document.querySelector("[name='amount']");
const startButton = document.querySelector("[type='submit']");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
    
  });
}


startButton.addEventListener('click', (e) => {
  e.preventDefault();
  const userAmount = Number(promiseAmount.value);
  let delay = Number(firstDelay.value);
  const incrementDelay = Number(delayIncrement.value);

  for (let i = 0; i < userAmount; i++) {
    createPromise(userAmount, delay).then(message => Notify.success(message)).catch(error => Notify.failure(error));
    delay += incrementDelay;
  }
})




