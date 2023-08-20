'use-strict';

const hands = document.querySelector('.hands');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
hands.style.transform = 'rotate(90deg)';
// const hours = timer.getHours();
// const minutes = timer.getMinutes();
let seconds, minutes, hours;
const rotate = setInterval(() => {
  const timer = new Date();
  seconds = timer.getSeconds();
  minutes = timer.getMinutes();
  hours = timer.getHours();
  console.log(hours);
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds == 0) {
    secondHand.style.transitionDuration = '0s';
    minuteHand.style.transitionDuration = '0s';
    hourHand.style.transitionDuration = '0s';
  } else {
    secondHand.style.transitionDuration = '0.05s';
    minuteHand.style.transitionDuration = '0.05s';
    hourHand.style.transitionDuration = '0.05s';
  }
  secondHand.style.transform = `${
    seconds === 0 ? `rotate(90deg)` : `rotate(${90 + seconds * 6}deg)`
  }`;

  minuteHand.style.transform = `${
    minutes === 0 ? 'rotate(90deg)' : `rotate(${90 + minutes * 6}deg)`
  }`;
  const hourForMinutes = minutes * 0.5;
  hourHand.style.transform = `${
    hours === -12
      ? 'rotate(90deg)'
      : `rotate(${90 + hours * 30 + hourForMinutes}deg)`
  }`;
}, 1000);
