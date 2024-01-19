// cookieClick.classList.remove("cookieanim"); // reset animation
// void element.offsetWidth; // trigger reflow
// cookieClick.classList.add("cookieanim"); // start animation

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
  cookieClick.classList.remove("cookieanim"); // reset animation
  void cookieClick.offsetWidth; // trigger reflow
  cookieClick.classList.add("cookieanim"); // start animation
  cookies += 1;
  event.preventDefault();
  localStorage.setItem("localCookies", cookies);
  console.log("cookies stored");
}
