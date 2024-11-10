import flatpickr from "flatpickr";
import Notiflix, { Notify } from "notiflix";
import "flatpickr/dist/flatpickr.min.css";
const daysValue = document.querySelector("[data-days]");
const hoursValue = document.querySelector("[data-hours]");
const minutesValue = document.querySelector("[data-minutes]");
const secondsValue = document.querySelector("[data-seconds]");

let countdownInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        clearInterval(countdownInterval);
      timeConvert(selectedDate);
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateDateValues({ days, hours, minutes, seconds }) {
    daysValue.textContent = days;
    hoursValue.textContent = hours;
    daysValue.textContent = days;
    minutesValue.textContent = minutes;
    secondsValue.textContent = seconds;
}

function timeConvert(targetTime) {
    countdownInterval = setInterval(() => {
    const timeNow = new Date();
    const timeConverted = targetTime - timeNow;

        if (timeConverted < 0) {
        Notify.failure('You cannot select past dates');
        updateDateValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(countdownInterval);
        return;
        }
        
        const timeComponents = convertMs(timeConverted);
        updateDateValues(timeComponents);
    }, 1000);
}