// Second Interval and Insertion function
let cookies = 0;
setInterval(function () {
  cookies += 1;
  document.getElementById("counted-cookies").innerHTML = cookies;
}, 1000);

// Adding click events to the second interval

let cookieClick = document.getElementById("cookie");

cookieClick.addEventListener("click", handleCookies);

// Checking to see if cookiesCliked = to multiplier cost

function handleCookies(event) {
  cookies += 1;
  event.preventDefault();
  localStorage.setItem("localCookies", cookies);
  console.log("cookies stored");
}
