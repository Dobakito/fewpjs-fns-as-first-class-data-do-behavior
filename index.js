/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time){
  const newString = parseInt(time);
  if (newString < 12) {
    return `Good Morning`;
  }
  if (newString > 17) {
    return `Good Evening`;
  }
  else {
    return `Good Afternoon`;
  }
}

function displayMessage(string){
  document.getElementById("greeting").textContent = string
}
