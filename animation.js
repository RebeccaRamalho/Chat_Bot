//CHATBOT ANIMATION
//Ear moving

let firstEar = document.querySelector(".firstEar");
let secondEar = document.querySelector(".secondEar");

window.addEventListener("load", () => {
  for (let impairTimer = 1000; impairTimer <= 3000; impairTimer += 2000) {
    const intervalEearMoving = setInterval(function () {
      firstEar.style.marginLeft = "-8px";
      secondEar.style.marginLeft = "105px";
    }, impairTimer);
    setTimeout(function () {
      clearInterval(intervalEearMoving);
    }, 3000);
  }
  for (let pairTimer = 3000; pairTimer <= 5000; pairTimer += 2000) {
    const intervalSecondEarMoving = setInterval(function () {
      firstEar.style.marginLeft = "-4px";
      secondEar.style.marginLeft = "102px";
    }, pairTimer);
    setTimeout(function () {
      clearInterval(intervalSecondEarMoving);
    }, 5000);
  }
});

let firstEyes = document.querySelector(".firstEyes");
let secondEyes = document.querySelector(".secondEyes");

window.addEventListener("load", () => {
  for (let impairTimer = 1000; impairTimer <= 6000; impairTimer += 2000) {
    const intervalEearMoving = setInterval(function () {
      firstEyes.style.marginLeft = "14px";
      secondEyes.style.marginLeft = "3px";

      firstEyes.style.marginTop = "2px";
      secondEyes.style.marginTop = "3px";
    }, impairTimer);
    setTimeout(function () {
      clearInterval(intervalEearMoving);
    }, 4000);
  }
  for (let pairTimer = 2000; pairTimer <= 8000; pairTimer += 2000) {
    const intervalSecondEarMoving = setInterval(function () {
      firstEyes.style.marginLeft = "13px";
      secondEyes.style.marginLeft = "2px";
      firstEyes.style.marginTop = "1px";
      secondEyes.style.marginTop = "2px";
    }, pairTimer);
    setTimeout(function () {
      clearInterval(intervalSecondEarMoving);
    }, 4000);
  }
});

//talk bubble

let bubbleText = document.querySelector(".bubbleText").children[0];

let text = [
  "",
  "B",
  "o",
  "n",
  "j",
  "o",
  "u",
  "r",
  " ",
  "v",
  "o",
  "u",
  "s",
  " ",
  "v",
  "o",
  "u",
  "l",
  "e",
  "z",
  " ",
  " ",
  "d",
  "i",
  "s",
  "c",
  "u",
  "t",
  "e",
  "r",
  " ",
  "a",
  "v",
  "e",
  "c",
  " ",
  "m",
  "o",
  "i",
  "?",
  " ",
  " ",
  " ",
  "",
  "",
  "",
];

let n = 0;
let index = 0;
let timerInt;

function pushTextInTheBubble() {
  bubbleText.insertAdjacentHTML("beforeend", text[(index += 1)]);
}

window.addEventListener("load", () => {
  for (let i = 100; i <= 1500; i += 100) {
    timerInt = i;

    const interval = setInterval(function () {
      pushTextInTheBubble();
    }, timerInt);

    setTimeout(function () {
      clearInterval(interval);
    }, 1500);
  }
});
