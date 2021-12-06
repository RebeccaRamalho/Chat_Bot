/**
 * 
 * @param {string} inputVal 
 * the function animate the no answers of the user
 */
function animateAnswer(inputVal) {
  let yesB = document.querySelector(".yesEvent");
  let noInputAnswer = document.querySelector(".noInputAnswer");
  let noEvent = document.querySelector(".noEvent");
  let yesButton;
  let noButton;

  if (document.querySelector(".no")) {
    noButton = document.querySelector(".no");
    if (inputVal) {
      noInputAnswer.innerHTML = `<p class="font">${inputVal}</p>`;
      noInputAnswer.style.marginTop = "6px";
      noInputAnswer.style.border = `2px solid #dbdeea`;
      noInputAnswer.style.backgroundColor = "#dbdeea";
      noInputAnswer.style.width = "229px";
      noInputAnswer.style.borderRadius = "6px";
      noInputAnswer.style.paddingLeft = "22px";
      noInputAnswer.style.paddingRight = "13px";
      noInputAnswer.style.marginLeft = "126px";
      noInputAnswer.style.marginBottom = "18px";

      noEvent.classList.add("invisible");
      yesB.classList.add("invisible");
    } else {
      yesB.classList.add("invisible");
      noButton.style.marginLeft = "348px";
    }
  } else {
    let noCounter = Number(
      document
        .querySelectorAll(".genericNo")
        [
          document.querySelectorAll(".genericNo").length - 1
        ].attributes[1].textContent.slice(8)
    );
    noButton = document.querySelector(`#noButton${noCounter}`);
    yesButton = document.querySelector(`#yesButton${noCounter}`);
    if (inputVal) {
      noInputAnswer.innerHTML = `<p class="font">${inputVal}</p>`;
      noInputAnswer.style.marginTop = "6px";
      noInputAnswer.style.border = `2px solid #dbdeea`;
      noInputAnswer.style.backgroundColor = "#dbdeea";
      noInputAnswer.style.width = "229px";
      noInputAnswer.style.borderRadius = "6px";
      noInputAnswer.style.paddingLeft = "22px";
      noInputAnswer.style.paddingRight = "13px";
      noInputAnswer.style.marginLeft = "126px";
      noInputAnswer.style.marginBottom = "18px";

      noButton.classList.add("invisible");
      yesButton.classList.add("invisible");
    } else {
      yesButton.classList.add("invisible");
      noButton.style.marginLeft = "348px";
    }
  }
}

function makeDotsMovess() {
  //Parent div
  let chargingDotsThree = document.querySelector(`.noChargingDots`);
  //Same class for all dot div
  let dots = document.querySelector(`.noDots`);
  //Different class for every dot div
  let dotsOne = document.querySelector(`.noDotsOne`);
  let dotsTwo = document.querySelector(`.noDotsTwo`);
  let dotsThree = document.querySelector(`.noDotsThree`);

  chargingDotsThree.style.marginTop = "-214px";
  chargingDotsThree.style.display = "flex";
  chargingDotsThree.style.flexDirection = "row";

  chargingDotsThree.style.marginLeft = "122px";

  dots.style.border = "4px solid #0e2356";

  dots.style.borderRadius = "30px";
  dots.style.marginLeft = "4px";
  dots.style.marginTop = "217px";
  dots.style.backgroundColor = "#0e2356";

  dotsOne.style.visibility = "visible";
  dotsOne.style.marginLeft = "236px";

  dotsTwo.style.visibility = "visible";
  dotsTwo.style.marginLeft = "236px";
  dotsTwo.style.border = "4px solid #0e2356";
  dotsTwo.style.borderRadius = "30px";
  dotsTwo.style.marginLeft = "4px";
  dotsTwo.style.marginTop = "217px";
  dotsTwo.style.backgroundColor = "#0e2356";
  //
  dotsThree.style.visibility = "visible";
  dotsThree.style.marginLeft = "236px";
  dotsThree.style.border = "4px solid #0e2356";
  dotsThree.style.borderRadius = "30px";
  dotsThree.style.marginLeft = "4px";
  dotsThree.style.marginTop = "217px";
  dotsThree.style.backgroundColor = "#0e2356";

  const intervalDotMOving = setInterval(function () {
    //first dot
    for (let timer = 200; timer <= 300; timer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsOne.style.marginTop = "214px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 300);
    }
    for (let timer = 300; timer <= 400; timer += 100) {
      const intervalSecondEarMoving = setInterval(function () {
        dotsOne.style.marginTop = "224px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalSecondEarMoving);
      }, 400);
    }
    //second dot
    for (let timer = 300; timer <= 400; timer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsTwo.style.marginTop = "214px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 400);
    }
    for (let timer = 400; timer <= 500; timer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsTwo.style.marginTop = "224px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 500);
    }
    //third dot
    for (let timer = 400; timer <= 500; timer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsThree.style.marginTop = "214px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 500);
    }
    for (let timer = 500; timer <= 600; timer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsThree.style.marginTop = "224px";
      }, timer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 600);
    }
  }, 1000);
  setTimeout(function () {
    dotsOne.style.visibility = "hidden";
    dotsTwo.style.visibility = "hidden";
    dotsThree.style.visibility = "hidden";
    clearInterval(intervalDotMOving);
  }, 3000);
}
document.querySelector("body").addEventListener("click", (event) => {
  let inputVal = document.querySelector("#userAnswers").value;
  let error = document.querySelector(".error");
  let errorParent = document.querySelector("#firstSubmitedAnswer");
  let otherExperienceChoice = document.querySelector("#otherExperienceChoices");
  let emptyString = "";
  let yesB = document.querySelector(".yesEvent");
  let noEvent = document.querySelector(".noEvent");
  let noInputAnswer = document.querySelector(".noInputAnswer");
  let yesButton;
  let noButton;

  function scrollToTheBottom() {
    const chatBotContainer = document.querySelector("#chatBotContainer");
    chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
  }

  let finalInputVal;
  finalInputVal = inputVal.toLowerCase();

  if (
    event.target.matches(".noEvent") ||
    ((finalInputVal.includes("non") ||
      // finalInputVal.includes("pas") ||
      finalInputVal.includes("n'ai")) &&
      event.target.matches("#submitMessage"))
  ) {
    otherExperienceChoice.insertAdjacentHTML(
      "beforeend",
      `
      <div class="noInputAnswer font"></div>
      <div class="noChargingDots">
          <div class="noDots noDotsOne"></div>
          <div class="noDots noDotsTwo"></div>
          <div class="noDots noDotsThree"></div>
      </div>
      <div class="goodByeMessage font"></div>`
    );
    animateAnswer(inputVal);

    makeDotsMovess();

    let goodByeMessage = document.querySelector(".goodByeMessage");

    setTimeout(function () {
      goodByeMessage.innerHTML = `<p class="font">Vous pouvez me contacter par mail à l'adresse: kanurebecca0@gmail.com ou par téléphone au: 07.82.43.32.22. À bientôt!<p>`;
      goodByeMessage.style.border = `2px solid#dbdeea`;
      goodByeMessage.style.width = "229px";
      goodByeMessage.style.borderRadius = "6px";
      goodByeMessage.style.paddingLeft = "22px";
      goodByeMessage.style.paddingRight = "13px";
      goodByeMessage.style.marginLeft = "126px";
    }, 3000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 3005);
  }
});
