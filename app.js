

window.addEventListener("load", function () {
  const hoursTop = document.getElementById("hours").firstElementChild;
  const hoursBottom = document.getElementById("hours").lastElementChild;
  const minutesTop = document.getElementById("minutes").firstElementChild;
  const minutesBottom = document.getElementById("minutes").lastElementChild;
  const secondsTop = document.getElementById("seconds").firstElementChild;
  const secondsBottom = document.getElementById("seconds").lastElementChild;

  function updateClock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    (hoursTop.textContent !== hours) ? flipDigits(hoursTop, hoursBottom, hours) : '';
    (minutesTop.textContent !== minutes) ? flipDigits(minutesTop, minutesBottom, minutes) : '';
    (secondsTop.textContent !== seconds) ? flipDigits(secondsTop, secondsBottom, seconds) : '';
    setTimeout(updateClock, 1000);
  }

  function flipDigits(top, bottom, newValue) {
    bottom.innerHTML = top.innerHTML;
    top.innerHTML = newValue;
    top.classList.add("show");
    bottom.classList.add("show");
    top.classList.remove("flip");
    bottom.classList.remove("flip");

    setTimeout(function () {
      bottom.classList.remove("show");
      bottom.classList.add("flip");
      setTimeout(function () {
        bottom.innerHTML = top.innerHTML;
        top.classList.add("flip");
        top.classList.remove("show");
        bottom.classList.add("show");
      }, 300);
    }, 300);
  }


  updateClock();
});