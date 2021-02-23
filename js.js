var current = document.querySelector(".current");
var next = document.querySelector(".next");
var countInterval;
function startCounter() {
  var number = parseInt(document.getElementById("number").value);
  console.log(number);
  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval);
    return;
  }
  if (number < 1 || number > 9) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }
  resetNumbers(current, next);
  clearInterval(countInterval);
  var count = 0;
  countInterval = setInterval(function () {
    if (count == number) {
      clearInterval(countInterval);
      alert("Counter has Stopped");
      return;
    }
    increaseCount();
    count++;
  }, 1000);
}
function increaseCount() {
  next.classList.add("animate");
  setTimeout(function () {
    current.innerHTML = next.innerHTML;
    next.classList.remove("animate");
    next.innerHTML = parseInt(next.innerHTML) + 1;
  }, 500);
}

function resetNumbers(current, next) {
  current.innerHTML = 0;
  next.innerHTML = 1;
}
