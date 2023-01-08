const hoursTop = document.getElementById("hours").firstElementChild;
const hoursBottom = document.getElementById("hours").lastElementChild;
const minutesTop = document.getElementById("minutes").firstElementChild;
const minutesBottom = document.getElementById("minutes").lastElementChild;
const secondsTop = document.getElementById("seconds").firstElementChild;
const secondsBottom = document.getElementById("seconds").lastElementChild;

function updateClock() {
  const date = new Date();
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const seconds = date.getSeconds().toString();

  // if (hoursTop.textContent !== hours) {
  //   hoursBottom.innerHTML = hoursTop.innerHTML;
  //   hoursTop.innerHTML = hours;
  //   hoursTop.classList.add("flip");
  //   hoursBottom.classList.add("flip");
  //   setTimeout(function () {
  //     hoursTop.classList.remove("flip");
  //     hoursBottom.classList.remove("flip");
  //   }, 500);
  // }

  // if (minutesTop.textContent !== minutes) {
  //   minutesBottom.innerHTML = minutesTop.innerHTML;
  //   minutesTop.innerHTML = minutes;
  //   minutesTop.classList.add("flip");
  //   minutesBottom.classList.add("flip");
  //   setTimeout(function () {
  //     minutesTop.classList.remove("flip");
  //     minutesBottom.classList.remove("flip");
  //   }, 500);
  // }

  if (secondsTop.textContent !== seconds) {
    secondsBottom.innerHTML = secondsTop.innerHTML;
    secondsTop.innerHTML = seconds;

    secondsTop.classList.add("show");
    secondsBottom.classList.add("show");
    secondsTop.classList.remove("flip");
    secondsBottom.classList.remove("flip");
    
    setTimeout(function () {
      secondsBottom.classList.remove("show");
      secondsBottom.classList.add("flip");  
      setTimeout(function () {  
      secondsBottom.innerHTML = secondsTop.innerHTML; 
        secondsTop.classList.add("flip");
        secondsTop.classList.remove("show");
        secondsBottom.classList.add("show");
      }, 250);
    }, 250);
  }

  setTimeout(updateClock, 1000);
}

updateClock();