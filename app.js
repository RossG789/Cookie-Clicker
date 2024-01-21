// cookieClick.classList.remove("cookieanim"); // reset animation
// void element.offsetWidth; // trigger reflow
// cookieClick.classList.add("cookieanim"); // start animation

// Second Interval and Insertion function
let cookies = 0;

document.body.onload = function startGame() {
  getCookies();

  setInterval(function () {
    cookies += 1;
    document.getElementById("counted-cookies").innerHTML = cookies;
    localStorage.setItem("localCookies", cookies);
  }, 1000);
};
let cookieClick = document.getElementById("cookie");

cookieClick.addEventListener("click", handleCookies);

const resetGame = document.getElementById("reset-button");

resetGame.addEventListener("click", restartGame);

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
  cookies = JSON.parse(localStorage.getItem("localCookies"));
}

function restartGame() {
  cookies = 0;
}

// Optional stuff

let upgrades = [
  { upgradeName: "Multiply by 2", amount: cookies * 2, cookiesNeeded: 30 },
  { upgradeName: "Multiply by 4", amount: cookies * 4, cookiesNeeded: 80 },
  { upgradeName: "Multiply by 6", amount: cookies * 6, cookiesNeeded: 170 },
  { upgradeName: "Multiply by 4", amount: cookies * 4, cookiesNeeded: 250 },
];

// console.log(upgrades[0].cookiesNeeded);

function cookiesPerSecond() {
  return cookies;
}
// getCookies();

// Make it more object oriented
// array of objects that represent upgrades
// empty array called purchased items that can be stored later
// function that looks at each item in the array(store items) create p tags that
// add button
// click buy, run buy function that checks if you can "afford it"
// checkif item.price is enough
// if you do it subtracts price from cookies
// then it pushes the items to the empty array

// function set to get cookies per second
// check if they havent bought anything, if they haven't just default to 1 eg. return
// if not true you have a variable that starts at 0
