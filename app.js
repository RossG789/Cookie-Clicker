// cookieClick.classList.remove("cookieanim"); // reset animation
// void element.offsetWidth; // trigger reflow
// cookieClick.classList.add("cookieanim"); // start animation

// Second Interval and Insertion function
let cookies = 0;

setInterval(function () {
  cookies += 1;
  document.getElementById("counted-cookies").innerHTML = cookies;
  localStorage.setItem("localCookies", cookies);
  console.log("cookies stored");
}, 1000);

let cookieClick = document.getElementById("cookie");

cookieClick.addEventListener("click", handleCookies);

function handleCookies(event) {
  // Animation stuff
  cookieClick.classList.remove("cookieanim"); // reset animation
  void cookieClick.offsetWidth; // trigger reflow
  cookieClick.classList.add("cookieanim"); // start animation
  // End of animation stuff
  cookies += 1;
  document.getElementById("counted-cookies").innerHTML = cookies;
  event.preventDefault();
  localStorage.setItem("localCookies", cookies);
}

function getCookies() {
  const localCookies = localStorage.getItem("localCookies");
  document.getElementById("counted-cookies").innerHTML = localCookies;

  console.log(localCookies);
}

getCookies(cookies);
