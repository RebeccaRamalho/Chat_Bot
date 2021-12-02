/**
 *
 * @type {number}
 */
let enterSubmitCounter = 0;
/**
 *
 * @type {number}
 */
let functionMakeDotsMoveCounter = 0;
/**
 *
 * @type {number}
 */
let compteur5;
/**
 * @param {number} compteurx (generic counter)
 * @param {number} compteur2 (changing the name to the category name)
 * @param {number} compteur3 (changing the name to the category name)
 * @param {number} compteur5 (changing the name to the category name )
 * @param {number} compteurLanguages
 * @param {number} compteurHobbies
 */
function makeDotsMoves(
  compteurx,
  compteur2,
  compteur3,
  compteur5,
  compteurLanguages,
  compteurHobbies
) {
  function Chargement(chargingDotsThree, dots, dotsOne, dotsTwo, dotsThree) {
    (this.chargingDotsThree = chargingDotsThree),
      (this.dots = dots),
      (this.dotsOne = dotsOne),
      (this.dotsTwo = dotsTwo),
      (this.dotsThree = dotsThree);
  }
  const firstGroupeOfDots = new Chargement(
    document.querySelector(`.yesPlusCategoryChargingDots${compteurx}`),
    document.querySelector(`.yesPlusCategoryDots${compteurx}`),
    document.querySelector(`.dotsOneYesPlusCategory${compteurx}`),
    document.querySelector(`.dotsTwoYesPlusCategory${compteurx}`),
    document.querySelector(`.dotsThreeYesPlusCategory${compteurx}`)
  );
  const secondeGroupeOfDots = new Chargement(
    document.querySelector(`.yesPlusCategoryChargingDots2${compteurx}`),
    document.querySelector(`.yesPlusCategoryDots2${compteurx}`),
    document.querySelector(`.dotsOneYesPlusCategory2${compteurx}`),
    document.querySelector(`.dotsTwoYesPlusCategory2${compteurx}`),
    document.querySelector(`.dotsThreeYesPlusCategory2${compteurx}`)
  );

  const fourthGroupeOfDots = new Chargement(
    document.querySelector(`.categoriesChargingDots${compteurx}`),
    document.querySelector(`.categoriesDots${compteurx}`),
    document.querySelector(`.categoriesDotsOne${compteurx}`),
    document.querySelector(`.categoriesDotsTwo${compteurx}`),
    document.querySelector(`.categoriesDotsThree${compteurx}`)
  );
  const fifthGroupeOfDots = new Chargement(
    document.querySelector(`.categoriesChargingDots3${compteurx}`),
    document.querySelector(`.categoriesDots3${compteurx}`),
    document.querySelector(`.categoriesDotsOne3${compteurx}`),
    document.querySelector(`.categoriesDotsTwo3${compteurx}`),
    document.querySelector(`.categoriesDotsThree3${compteurx}`)
  );

  const sixthGroupeOfDots = new Chargement(
    document.querySelector(".noChargingDots"),
    document.querySelector(".noDots"),
    document.querySelector(".noDotsOne"),
    document.querySelector(".noDotsTwo"),
    document.querySelector(".noDotsThree")
  );

  function firstDotsValues() {
    if (
      compteurx ==
      (compteur2 ||
        compteur3 ||
        compteur5 ||
        compteurLanguages ||
        compteurHobbies)
    ) {
      chargingDotsThree = fourthGroupeOfDots.chargingDotsThree;
      dots = fourthGroupeOfDots.dots;
      dotsOne = fourthGroupeOfDots.dotsOne;
      dotsTwo = fourthGroupeOfDots.dotsTwo;
      dotsThree = fourthGroupeOfDots.dotsThree;
    } else if (
      compteurx == "fait bouger les boutons de chargements de la catégorie non"
    ) {
      chargingDotsThree = sixthGroupeOfDots.chargingDotsThree;
      dots = sixthGroupeOfDots.dots;
      dotsOne = sixthGroupeOfDots.dotsOne;
      dotsTwo = sixthGroupeOfDots.dotsTwo;
      dotsThree = sixthGroupeOfDots.dotsThree;
    } else {
      chargingDotsThree = firstGroupeOfDots.chargingDotsThree;
      dots = firstGroupeOfDots.dots;
      dotsOne = firstGroupeOfDots.dotsOne;
      dotsTwo = firstGroupeOfDots.dotsTwo;
      dotsThree = firstGroupeOfDots.dotsThree;
    }
  }
  function secondDotsValues() {
    if (
      compteurx ==
      (compteur2 ||
        compteur3 ||
        compteur5 ||
        compteurLanguages ||
        compteurHobbies)
    ) {
      chargingDotsThree = fifthGroupeOfDots.chargingDotsThree;
      dots = fifthGroupeOfDots.dots;
      dotsOne = fifthGroupeOfDots.dotsOne;
      dotsTwo = fifthGroupeOfDots.dotsTwo;
      dotsThree = fifthGroupeOfDots.dotsThree;
    } else {
      chargingDotsThree = secondeGroupeOfDots.chargingDotsThree;
      dots = secondeGroupeOfDots.dots;
      dotsOne = secondeGroupeOfDots.dotsOne;
      dotsTwo = secondeGroupeOfDots.dotsTwo;
      dotsThree = secondeGroupeOfDots.dotsThree;
    }
  }

  functionMakeDotsMoveCounter += 1;
  {
    functionMakeDotsMoveCounter % 2 ? firstDotsValues() : secondDotsValues();
  }

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

  dotsThree.style.visibility = "visible";
  dotsThree.style.marginLeft = "236px";
  dotsThree.style.border = "4px solid #0e2356";
  dotsThree.style.borderRadius = "30px";
  dotsThree.style.marginLeft = "4px";
  dotsThree.style.marginTop = "217px";
  dotsThree.style.backgroundColor = "#0e2356";

  const intervalDotMOving = setInterval(function () {
    //first dot
    for (let impairTimer = 200; impairTimer <= 300; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsOne.style.marginTop = "214px";
      }, impairTimer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 300);
    }
    for (let pairTimer = 300; pairTimer <= 400; pairTimer += 100) {
      const intervalSecondEarMoving = setInterval(function () {
        dotsOne.style.marginTop = "224px";
        dotsTwo.style.marginTop = "214px";
      }, pairTimer);
      setTimeout(function () {
        clearInterval(intervalSecondEarMoving);
      }, 400);
    }
    for (let impairTimer = 400; impairTimer <= 500; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsTwo.style.marginTop = "224px";
        dotsThree.style.marginTop = "214px";
      }, impairTimer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 500);
    }
    for (let impairTimer = 500; impairTimer <= 600; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsThree.style.marginTop = "224px";
      }, impairTimer);
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
  }, 2000);
}
function animateCategories() {
  let genericYes = document.querySelectorAll(".genericYes").length - 1;
  let inputVal = document.querySelector("#userAnswers").value;
  let firstYesButton = document.querySelectorAll(".yesEvent")[0];
  let firstNoButton = document.querySelectorAll(".noEvent")[0];
  let noEventButton;
  let yesEventButton;

  enterSubmitCounter = Number(
    document
      .querySelectorAll(".genericYes")
      [genericYes].attributes[1].textContent.slice(9)
  );

  let yesAns = document.querySelector(`#yesAns${enterSubmitCounter}`);

  //If we click on the first yes button we push it to the left and make the no button invisible
  if (yesEventButton && !inputVal) {
    //we move the yes button to the left
    yesEventButton.style.marginLeft = "350px";
    //we make the no button invisible
    noEventButton.classList.add("invisible");
    //we make the div of the keyboard answer invisible
    yesAns.classList.add("invisible");
    //we remove the class yes so that the following yesEvent we'll be targered into the other yes button
    if (document.querySelector(".yes") && document.querySelector(".no")) {
      yesEventButton = document.querySelector(".yes");

      firstNoButton.classList.remove("no");
      firstYesButton.classList.remove("yes");
    }
  } else if (firstYesButton && inputVal) {
    //s'il y'a au moins deux yesButton
    if (
      document.querySelectorAll(".genericYes")[
        document.querySelectorAll(".genericYes").length - 2
      ]
    ) {
      // if (
      //   Number(
      //     document
      //       .querySelectorAll(".genericYes")
      //       [
      //         document.querySelectorAll(".genericYes").length - 2
      //       ].attributes[1].textContent.slice(9)[0]
      //   ) === 3 ||
      //   5 ||
      //   7 ||
      //   9 ||
      //   1
      // ) {

      yesEventButton = document.querySelector(
        `#yesButton${document
          .querySelectorAll(".genericYes")
          [
            document.querySelectorAll(".genericYes").length - 2
          ].attributes[1].textContent.slice(9)}`
      );
      noEventButton = document.querySelector(
        `#noButton${document
          .querySelectorAll(".genericNo")
          [
            document.querySelectorAll(".genericNo").length - 2
          ].attributes[1].textContent.slice(8)}`
      );

      console.log("noB", noEventButton);

      firstYesButton.classList.remove("yes");
      firstNoButton.classList.remove("no");
      // }
    } else {
      if (document.querySelector(".yes")) {
        yesEventButton = document.querySelector(".yes");
        noEventButton = document.querySelector(".no");

        firstYesButton.classList.remove("yes");
        firstNoButton.classList.remove("no");
      }
      // else {
      //   yesEventButton = document.querySelector(
      //     `#yesButton${enterSubmitCounter - 2000}`
      //   );
      //   noEventButton = document.querySelector(
      //     `#noButton${enterSubmitCounter - 2000}`
      //   );
      // }
    }
    yesEventButton.classList.add("invisible");
    noEventButton.classList.add("invisible");

    yesAns.innerHTML = `<p class="font">${inputVal}</p>`;
    yesAns.style.marginTop = "6px";
    yesAns.style.border = `2px solid #dbdeea`;
    yesAns.style.backgroundColor = "#dbdeea";
    yesAns.style.width = "229px";
    yesAns.style.borderRadius = "6px";
    yesAns.style.paddingLeft = "22px";
    yesAns.style.paddingRight = "13px";
    yesAns.style.marginLeft = "126px";
    yesAns.style.marginBottom = "18px";
    //
    if (document.querySelector(".yes")) {
      firstNoButton.classList.remove("no");
      firstYesButton.classList.remove("yes");
    }
  }

  function makeDotsMove() {
    //Parent div
    let chargingDotsThree = document.querySelector(
      `.chargingDots${enterSubmitCounter}`
    );
    //Same class for all dot div
    let dots = document.querySelector(`.dots${enterSubmitCounter}`);
    //Different class for every dot div
    let dotsOne = document.querySelector(`.dotsOne${enterSubmitCounter}`);
    let dotsTwo = document.querySelector(`.dotsTwo${enterSubmitCounter}`);
    let dotsThree = document.querySelector(`.dotsThree${enterSubmitCounter}`);

    //when the user click on the button yes make the 3 dots move x time and during 3 secondes
    chargingDotsThree.style.marginTop = "-214px";
    chargingDotsThree.style.display = "flex";
    chargingDotsThree.style.flexDirection = "row";
    // chargingDotsThree.style.marginBottom = "10px";
    chargingDotsThree.style.marginLeft = "122px";
    //
    dots.style.border = "4px solid #0e2356";
    // dots.style.visibility = "hidden";
    dots.style.borderRadius = "30px";
    dots.style.marginLeft = "4px";
    dots.style.marginTop = "217px";
    dots.style.backgroundColor = "#0e2356";

    //when the user clik on the button yes change the dots style from invisible to visible
    dotsOne.style.visibility = "visible";
    dotsOne.style.marginLeft = "236px";
    //
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

    //Then make the dots move back to top
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

  makeDotsMove();

  function nowChooseAnExperience() {
    let experiences = document.querySelector(
      `#experiencesQuestion${enterSubmitCounter}`
    );
    let logoAndBotTextArea = document.querySelector("#logoAndBotTextArea");
    let scolarity = document.querySelector(`#scolarity${enterSubmitCounter}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${enterSubmitCounter}`
    );
    let hobbies = document.querySelector(`#hobbies${enterSubmitCounter}`);
    let skills = document.querySelector(`#skills${enterSubmitCounter}`);
    let languages = document.querySelector(`#languages${enterSubmitCounter}`);

    experiences.innerHTML = `<p>Merci 😊...Quelle catégorie de mon profil souhaiteriez-vous découvrir?</div></p>`;
    experiences.style.visibility = "visible";
    experiences.style.border = `2px solid#dbdeea`;
    experiences.style.width = "229px";
    experiences.style.borderRadius = "6px";
    experiences.style.paddingLeft = "22px";
    experiences.style.paddingRight = "13px";
    experiences.style.marginLeft = "126px";
    experiences.style.marginBottom = "20px";
    experiences.style.marginTop = "7px";

    logoAndBotTextArea.style.marginTop = "40px";

    scolarity.classList.remove("invisible");
    professionalExperience.classList.remove("invisible");
    hobbies.classList.remove("invisible");
    skills.classList.remove("invisible");
    languages.classList.remove("invisible");
    //scolarité
    scolarity.innerHTML = otherExperiencesCategories[0];
    scolarity.style.cursor = "pointer";
    scolarity.style.height = "40px";
    scolarity.style.width = "128px";
    scolarity.style.fontFamily = "OpenSans-Light";
    scolarity.style.backgroundColor = "#e7e6e3";
    scolarity.style.borderRadius = "5px";
    scolarity.style.marginRight = "6px";
    scolarity.style.marginLeft = "145px";
    scolarity.style.marginTop = "-3px";
    scolarity.style.paddingLeft = "3px";
    scolarity.style.paddingTop = "-15px";
    scolarity.style.fontSize = "0.8rem";
    scolarity.style.textDecoration = "none";
    scolarity.style.color = "black";
    scolarity.style.textAlign = "center";
    //professionalExperience
    professionalExperience.innerHTML = otherExperiencesCategories[3];
    professionalExperience.style.cursor = "pointer";
    professionalExperience.style.height = "62px";
    professionalExperience.style.width = "101px";
    professionalExperience.style.fontFamily = "OpenSans-Light";
    professionalExperience.style.backgroundColor = "#e7e6e3";
    professionalExperience.style.borderRadius = "5px";
    professionalExperience.style.marginRight = "-9px";
    professionalExperience.style.marginLeft = "291px";
    professionalExperience.style.marginTop = "-11px";
    professionalExperience.style.paddingLeft = "3px";
    professionalExperience.style.paddingTop = "-15px";
    professionalExperience.style.fontSize = "0.8rem";
    professionalExperience.style.textDecoration = "none";
    professionalExperience.style.color = "black";
    professionalExperience.style.textAlign = "center";
    //hobbies
    hobbies.innerHTML = otherExperiencesCategories[1];
    hobbies.style.cursor = "pointer";
    hobbies.style.height = "41px";
    hobbies.style.width = "131px";
    hobbies.style.fontFamily = "OpenSans-Light";
    hobbies.style.backgroundColor = "#e7e6e3";
    hobbies.style.borderRadius = "5px";
    hobbies.style.marginLeft = "137px";
    hobbies.style.marginTop = "-12px";
    hobbies.style.paddingLeft = "3px";
    hobbies.style.paddingTop = "-15px";
    hobbies.style.fontSize = "0.8rem";
    hobbies.style.textDecoration = "none";
    hobbies.style.color = "black";
    hobbies.style.textAlign = "center";
    //skills
    skills.innerHTML = otherExperiencesCategories[2];
    skills.style.cursor = "pointer";
    skills.style.height = "42px";
    skills.style.width = "105px";
    skills.style.fontFamily = "OpenSans-Light";
    skills.style.borderRadius = "5px";
    skills.style.backgroundColor = "#e7e6e3";
    skills.style.marginRight = "23px";
    skills.style.marginLeft = "14px";
    skills.style.marginTop = "4px";
    skills.style.paddingLeft = "0px";
    skills.style.paddingTop = "-15px";
    skills.style.fontSize = "0.8rem";
    skills.style.textDecoration = "none";
    skills.style.color = "black";
    skills.style.textAlign = "center";
    //languages
    languages.innerHTML = otherExperiencesCategories[4];
    languages.style.cursor = "pointer";
    languages.style.height = "32px";
    languages.style.width = "131px";
    languages.style.fontFamily = "OpenSans-Light";
    languages.style.backgroundColor = "#e7e6e3";
    languages.style.borderRadius = "5px";
    languages.style.marginLeft = "146px";
    languages.style.marginTop = "-45px";
    languages.style.paddingLeft = "0px";
    languages.style.paddingTop = "0px";
    languages.style.fontSize = "0.8rem";
    languages.style.textDecoration = "none";
    languages.style.color = "black";
    languages.style.textAlign = "center";
  }

  setTimeout(function () {
    nowChooseAnExperience();
  }, 4000);
}
/**
 * 
 * @param {number} compteurx (generic counter)
 * @param {number} compteur2 (changing the name to the category name )
 * @param {number} compteur3 (changing the name to the category name )
 * @param {number} compteur5 (changing the name to the category name )
 * @param {number} compteurLanguages 
 * @param {number} compteurHobbies 
 */
function AskIfWantToSeeAnOtherExperience(
  compteurx,
  compteur2,
  compteur3,
  compteur5,
  compteurLanguages,
  compteurHobbies
) {
  setTimeout(function () {
    let otherExperiencesRequest;
    if (
      compteurx ==
      (compteur2 ||
        compteur3 ||
        compteur5 ||
        compteurLanguages ||
        compteurHobbies)
    ) {
      otherExperiencesRequest = document.querySelector(
        `#experiences${compteurx}`
      );
    } else {
      otherExperiencesRequest = document.querySelector(
        `#experiencesSub${compteurx}`
      );
    }

    let yesQuestion = document.querySelector(`#yesButton${compteurx}`);
    let noQuestion = document.querySelector(`#noButton${compteurx}`);

    setTimeout(function () {
      yesQuestion.classList.remove("invisible");
      noQuestion.classList.remove("invisible");
    }, 200);

    otherExperiencesRequest.classList.remove("invisible");
    otherExperiencesRequest.style.marginTop = "6px"; //-84px
    otherExperiencesRequest.style.border = `2px solid#dbdeea`;
    otherExperiencesRequest.style.width = "229px";
    otherExperiencesRequest.style.borderRadius = "6px";
    otherExperiencesRequest.style.paddingLeft = "22px";
    otherExperiencesRequest.style.paddingRight = "13px";
    otherExperiencesRequest.style.marginLeft = "126px";
    otherExperiencesRequest.style.marginBottom = "18px";
    otherExperiencesRequest.innerHTML = `<p class="font">${questions99[1]}</p>`;
  }, 5000);
}

document.addEventListener("keydown", botAnsweringToInputVal);

function cleartext() {
  document.querySelector("#form").reset();
}
function scrollToTheBottom() {
  const chatBotContainer = document.querySelector("#chatBotContainer");
  chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
}
function botAnsweringToInputVal(e) {
  var answersPlaceholder = document.querySelector("#userAnswers");
  let compteurx;
  let experienceDetails;
  let error = document.querySelector(".error");
  let otherExperienceChoice = document.querySelector("#otherExperienceChoices");
  let inputVal = document.querySelector("#userAnswers").value;
  let finalInputVal = inputVal.toLowerCase();

  //OUI + CATEGORIE
  if (
    e.code == "Enter" &&
    (finalInputVal.includes("oui") ||
      finalInputVal.includes("ok") ||
      finalInputVal.includes("okay") ||
      finalInputVal.includes("ouais") ||
      finalInputVal.includes("dacc") ||
      finalInputVal.includes("yep") ||
      finalInputVal.includes("yes") ||
      finalInputVal.includes("ouep") ||
      finalInputVal.includes("si") ||
      finalInputVal.includes("d'accord") ||
      finalInputVal.includes("effectivement") ||
      finalInputVal.includes("certainement") ||
      finalInputVal.includes("absolument") ||
      finalInputVal.includes("totalement") ||
      finalInputVal.includes("complètement") ||
      finalInputVal.includes("exactement") ||
      finalInputVal.includes("assurément") ||
      finalInputVal.includes("parfaitement") ||
      finalInputVal.includes("clairement") ||
      finalInputVal.includes("incontestablement") ||
      finalInputVal.includes("indéniablement") ||
      finalInputVal.includes("bien sûr") ||
      finalInputVal.includes("tout à fait") ||
      finalInputVal.includes("affirmatif") ||
      finalInputVal.includes("bien entendu") ||
      finalInputVal.includes("évidemment") ||
      finalInputVal.includes("en effet") ||
      finalInputVal.includes("naturellement") ||
      finalInputVal.includes("bien évidemment")) &&
    //SCOLARITÉ
    (finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarités") ||
      finalInputVal.includes("étude") ||
      finalInputVal.includes("études") ||
      finalInputVal.includes("étudié") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("cursus") ||
      finalInputVal.includes("diplome") ||
      finalInputVal.includes("diplomes") ||
      finalInputVal.includes("diplômes") ||
      finalInputVal.includes("diplôme") ||
      finalInputVal.includes("parcours") ||
      finalInputVal.includes("scolaire") ||
      finalInputVal.includes("scolaires") ||
      finalInputVal.includes("instruction") ||
      finalInputVal.includes("instructions") ||
      finalInputVal.includes("enseignement") ||
      finalInputVal.includes("enseignements") ||
      finalInputVal.includes("enseignemment") ||
      finalInputVal.includes("enseignemments") ||
      finalInputVal.includes("discpline") ||
      finalInputVal.includes("disciplines") ||
      finalInputVal.includes("discplinne") ||
      finalInputVal.includes("disciplinnes") ||
      finalInputVal.includes("cours") ||
      finalInputVal.includes("projets") ||
      finalInputVal.includes("projet") ||
      finalInputVal.includes("branche") ||
      finalInputVal.includes("branches") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("certificat") ||
      finalInputVal.includes("certificats") ||
      finalInputVal.includes("université") ||
      finalInputVal.includes("universités") ||
      finalInputVal.includes("unniversité") ||
      finalInputVal.includes("unniversités") ||
      finalInputVal.includes("bac +") ||
      finalInputVal.includes("apprentissage") ||
      finalInputVal.includes("apprentissages") ||
      finalInputVal.includes("aprentissage") ||
      finalInputVal.includes("aprentissages") ||
      finalInputVal.includes("éducations") ||
      finalInputVal.includes("éducation") ||
      finalInputVal.includes("formation") ||
      finalInputVal.includes("formations") ||
      finalInputVal.includes("formmation") ||
      finalInputVal.includes("formmations") ||
      finalInputVal.includes("établissements") ||
      finalInputVal.includes("établissement") ||
      finalInputVal.includes("établissemments") ||
      finalInputVal.includes("établissemment") ||
      finalInputVal.includes("faculté") ||
      finalInputVal.includes("facultés") ||
      //LANGUES
      finalInputVal.includes("langues") ||
      finalInputVal.includes("parler") ||
      finalInputVal.includes("parle") ||
      finalInputVal.includes("parles") ||
      finalInputVal.includes("s'exprimer") ||
      finalInputVal.includes("exprime") ||
      finalInputVal.includes("exprimes") ||
      finalInputVal.includes("dialecte") ||
      finalInputVal.includes("dialectes") ||
      //HOBBIES
      finalInputVal.includes("hobbies") ||
      finalInputVal.includes("centre d'intérêt") ||
      finalInputVal.includes("centre d'intérêts") ||
      finalInputVal.includes("centres d'intérêts") ||
      finalInputVal.includes("centres d'intérêt") ||
      finalInputVal.includes("loisir") ||
      finalInputVal.includes("loisirs") ||
      finalInputVal.includes("passe temps") ||
      finalInputVal.includes("passes temps") ||
      finalInputVal.includes("passe-temps") ||
      finalInputVal.includes("passes-temps") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("passion") ||
      finalInputVal.includes("passions") ||
      finalInputVal.includes("détente") ||
      finalInputVal.includes("détentes") ||
      finalInputVal.includes("détent") ||
      finalInputVal.includes("détens") ||
      finalInputVal.includes("relaxe") ||
      finalInputVal.includes("relaxes") ||
      finalInputVal.includes("délasser") ||
      finalInputVal.includes("délasse") ||
      finalInputVal.includes("délasses") ||
      finalInputVal.includes("s'amuse") ||
      finalInputVal.includes("s'amuses") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("en dehors du travail") ||
      finalInputVal.includes("distrait") ||
      finalInputVal.includes("distractions") ||
      finalInputVal.includes("distraction") ||
      finalInputVal.includes("divertit") ||
      finalInputVal.includes("divertis") ||
      finalInputVal.includes("diverti") ||
      finalInputVal.includes("divertissement") ||
      finalInputVal.includes("divertissements") ||
      finalInputVal.includes("s'occuper") ||
      finalInputVal.includes("s'occupe") ||
      finalInputVal.includes("s'occupes") ||
      finalInputVal.includes("occupation") ||
      finalInputVal.includes("occupations") ||
      finalInputVal.includes("repos") ||
      finalInputVal.includes("sport") ||
      finalInputVal.includes("sports") ||
      finalInputVal.includes("instrument") ||
      finalInputVal.includes("instruments") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("danse") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("association") ||
      finalInputVal.includes("associations") ||
      //PROFESSIONAL EXPERIENCES
      finalInputVal.includes("expériences") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("travaillé") ||
      finalInputVal.includes("travaillés") ||
      finalInputVal.includes("travailés") ||
      finalInputVal.includes("travailé") ||
      finalInputVal.includes("professionnelles") ||
      finalInputVal.includes("professionnelle") ||
      finalInputVal.includes("professionelle") ||
      finalInputVal.includes("professionnele") ||
      finalInputVal.includes("profesionelle") ||
      finalInputVal.includes("professionele") ||
      finalInputVal.includes("professionelles") ||
      finalInputVal.includes("professionneles") ||
      finalInputVal.includes("profesionelles") ||
      finalInputVal.includes("professioneles") ||
      finalInputVal.includes("accomplissement ") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("accomplisemment") ||
      finalInputVal.includes("accomplisemments") ||
      finalInputVal.includes("acomplisemment") ||
      finalInputVal.includes("acomplisemments") ||
      finalInputVal.includes("acomplissement") ||
      finalInputVal.includes("acomplissements") ||
      finalInputVal.includes("acomplissemments") ||
      finalInputVal.includes("acomplissemment") ||
      finalInputVal.includes("activité professionnelle") ||
      finalInputVal.includes("activité professionnelles") ||
      finalInputVal.includes("activités professionnelle") ||
      finalInputVal.includes("activités professionnelles") ||
      finalInputVal.includes("accomplissement") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("expériences") ||
      finalInputVal.includes("profession") ||
      finalInputVal.includes("professions") ||
      finalInputVal.includes("profesion") ||
      finalInputVal.includes("profesions") ||
      finalInputVal.includes("poste") ||
      finalInputVal.includes("postes") ||
      finalInputVal.includes("métier") ||
      finalInputVal.includes("métiers") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("travail") ||
      finalInputVal.includes("travails") ||
      finalInputVal.includes("emploi") ||
      finalInputVal.includes("emplois") ||
      finalInputVal.includes("boulot") ||
      finalInputVal.includes("boulots") ||
      finalInputVal.includes("job") ||
      finalInputVal.includes("jobs") ||
      finalInputVal.includes("gagne pain") ||
      finalInputVal.includes("gagne pains") ||
      finalInputVal.includes("gagnes-pain") ||
      finalInputVal.includes("gagnes-pains") ||
      finalInputVal.includes("stage") ||
      finalInputVal.includes("stages") ||
      finalInputVal.includes("carrières") ||
      finalInputVal.includes("carrière") ||
      finalInputVal.includes("carière") ||
      finalInputVal.includes("carières") ||
      finalInputVal.includes("carièrres") ||
      finalInputVal.includes("carièrre") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("positions") ||
      finalInputVal.includes("position") ||
      finalInputVal.includes("place") ||
      finalInputVal.includes("places") ||
      finalInputVal.includes("entreprise") ||
      finalInputVal.includes("entreprises") ||
      finalInputVal.includes("domaines") ||
      finalInputVal.includes("domaine") ||
      finalInputVal.includes("dommaines") ||
      finalInputVal.includes("dommaine") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("chargés") ||
      finalInputVal.includes("chargé") ||
      finalInputVal.includes("startup") ||
      finalInputVal.includes("startups") ||
      //SKILLS
      finalInputVal.includes("compétences") ||
      finalInputVal.includes("compétence") ||
      finalInputVal.includes("competences") ||
      finalInputVal.includes("competence") ||
      finalInputVal.includes("aptitude") ||
      finalInputVal.includes("aptitudes") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("faires") ||
      finalInputVal.includes("savoir faires") ||
      finalInputVal.includes("savoir faire") ||
      finalInputVal.includes("savoir-faires") ||
      finalInputVal.includes("savoir-faire") ||
      finalInputVal.includes("capacité") ||
      finalInputVal.includes("capacités") ||
      finalInputVal.includes("qualification") ||
      finalInputVal.includes("qualifications") ||
      finalInputVal.includes("connaissance") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("connaisances") ||
      finalInputVal.includes("connaisance") ||
      finalInputVal.includes("conaissance") ||
      finalInputVal.includes("conaissances") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("habilité") ||
      finalInputVal.includes("habilités") ||
      finalInputVal.includes("habillités") ||
      finalInputVal.includes("habillité") ||
      finalInputVal.includes("expértise") ||
      finalInputVal.includes("expértises") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("hard skills") ||
      finalInputVal.includes("soft-skills") ||
      finalInputVal.includes("hard-skills") ||
      finalInputVal.includes("savoir-être") ||
      finalInputVal.includes("savoir-êtres") ||
      finalInputVal.includes("savoir être") ||
      finalInputVal.includes("savoir êtres") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("qualités") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("notions") ||
      finalInputVal.includes("notion") ||
      finalInputVal.includes("techniques") ||
      finalInputVal.includes("technique") ||
      finalInputVal.includes("technicité") ||
      finalInputVal.includes("languages") ||
      finalInputVal.includes("language") ||
      finalInputVal.includes("stack") ||
      finalInputVal.includes("stacks") ||
      finalInputVal.includes("javascript") ||
      finalInputVal.includes("react") ||
      finalInputVal.includes("node") ||
      finalInputVal.includes("express") ||
      finalInputVal.includes("css") ||
      finalInputVal.includes("site") ||
      finalInputVal.includes("base de donnée") ||
      finalInputVal.includes("sass") ||
      finalInputVal.includes("mvc") ||
      finalInputVal.includes("jwt") ||
      finalInputVal.includes("back") ||
      finalInputVal.includes("front") ||
      finalInputVal.includes("architecture") ||
      finalInputVal.includes("natif") ||
      finalInputVal.includes("native") ||
      finalInputVal.includes("sql") ||
      finalInputVal.includes("mysql") ||
      finalInputVal.includes("vanilla") ||
      finalInputVal.includes("design") ||
      finalInputVal.includes("pattern") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("agilité") ||
      finalInputVal.includes("agile") ||
      finalInputVal.includes("agiles") ||
      finalInputVal.includes("librairies") ||
      finalInputVal.includes("librairie") ||
      finalInputVal.includes("library") ||
      finalInputVal.includes("framework") ||
      finalInputVal.includes("os") ||
      finalInputVal.includes("système d'exploitation") ||
      finalInputVal.includes("système d'exploitations") ||
      finalInputVal.includes("systeme d'exploitation") ||
      finalInputVal.includes("systeme d'exploitations") ||
      finalInputVal.includes("workflow") ||
      finalInputVal.includes("développement") ||
      finalInputVal.includes("web") ||
      finalInputVal.includes("axios") ||
      finalInputVal.includes("linux") ||
      finalInputVal.includes("mac") ||
      finalInputVal.includes("postman") ||
      finalInputVal.includes("slack") ||
      finalInputVal.includes("discord") ||
      finalInputVal.includes("cli") ||
      finalInputVal.includes("command line interface") ||
      finalInputVal.includes("trello") ||
      finalInputVal.includes("méthodes agiles") ||
      finalInputVal.includes("méthodes agile") ||
      finalInputVal.includes("es5") ||
      finalInputVal.includes("es6") ||
      finalInputVal.includes("github") ||
      finalInputVal.includes("ide") ||
      finalInputVal.includes("visual code") ||
      finalInputVal.includes("sublime text") ||
      finalInputVal.includes("gestionnaire de base de donnée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de données") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("gestionnaire de base de donée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de donées") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("environnement de développement intégré"))
  ) {
    compteurYesPlusCat += 2000;

    otherExperienceChoice.insertAdjacentHTML(
      "beforeend",

      `
            <div id="yesAndCatAnswer${compteurYesPlusCat}"></div>

            <div class="yesPlusCategoryChargingDots${compteurYesPlusCat}">
                  <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsOneYesPlusCategory${compteurYesPlusCat}"></div>
                  <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsTwoYesPlusCategory${compteurYesPlusCat}"></div>
                  <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsThreeYesPlusCategory${compteurYesPlusCat}"></div>
            </div>

            <p id="hobbiesAndYes${compteurYesPlusCat}" class="genericHobbiesAndYes"></p>
            <p id="languagesAndYes${compteurYesPlusCat}" class="genericLanguagesAndYes"></p>
            <p id="scolariyAndYes${compteurYesPlusCat}" class="genericscolariyAndYes"></p>
            <p id="skillsAndYes${compteurYesPlusCat}" class="genericSkillsAndYes"></p>
            <p id="professionalExperienceAndYes${compteurYesPlusCat}" class="genericProfessionalExperienceAndYes"></p>
               

            <div id="experienceDetailsSub${compteurYesPlusCat}" class="invisible" ></div>

            <!------>

            <div class="yesPlusCategoryChargingDots2${compteurYesPlusCat}">
                  <div class="yesPlusCategoryDots2${compteurYesPlusCat} dotsOneYesPlusCategory2${compteurYesPlusCat}"></div>
                  <div class="yesPlusCategoryDots2${compteurYesPlusCat} dotsTwoYesPlusCategory2${compteurYesPlusCat}"></div>
                  <div class="yesPlusCategoryDots2${compteurYesPlusCat} dotsThreeYesPlusCategory2${compteurYesPlusCat}"></div>
            </div>

            <!------>

            <div id="experiencesSub${compteurYesPlusCat}" class="invisible"></div>

            <button type="button"  id="yesButton${compteurYesPlusCat}" class="yesEvent invisible genericYes">Oui</button>
            <button type="button"  id="noButton${compteurYesPlusCat}" class="noEvent invisible genericNo">Non</button>
            

          </div>
            `
    );
    let yes =
      document.querySelectorAll(".yesEvent")[
        document.querySelectorAll(".yesEvent").length - 2
      ];
    let noReply =
      document.querySelectorAll(".noEvent")[
        document.querySelectorAll(".noEvent").length - 2
      ];
    let genericHobbiesAndYes =
      document.querySelectorAll(".genericHobbiesAndYes").length - 1;
    let genericHobbies =
      document.querySelectorAll(".genericHobbies").length - 1;
    let compteurx = 1;
    let compteur6 = 1;
    let questions7 = [
      [`Quelles expériences souhaitez-vous découvrir?`],
      [`Souhaitez-vous découvrir une autre catégorie de mon profil?`],
    ];
    let no;
    //HOBBIES
    if (
      finalInputVal.includes("hobbies") ||
      finalInputVal.includes("centre d'intérêt") ||
      finalInputVal.includes("centre d'intérêts") ||
      finalInputVal.includes("centres d'intérêts") ||
      finalInputVal.includes("centres d'intérêt") ||
      finalInputVal.includes("loisir") ||
      finalInputVal.includes("loisirs") ||
      finalInputVal.includes("passe temps") ||
      finalInputVal.includes("passes temps") ||
      finalInputVal.includes("passe-temps") ||
      finalInputVal.includes("passes-temps") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("passion") ||
      finalInputVal.includes("passions") ||
      finalInputVal.includes("détente") ||
      finalInputVal.includes("détentes") ||
      finalInputVal.includes("détent") ||
      finalInputVal.includes("détens") ||
      finalInputVal.includes("relaxe") ||
      finalInputVal.includes("relaxes") ||
      finalInputVal.includes("délasser") ||
      finalInputVal.includes("délasse") ||
      finalInputVal.includes("délasses") ||
      finalInputVal.includes("s'amuse") ||
      finalInputVal.includes("s'amuses") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("en dehors du travail") ||
      finalInputVal.includes("distrait") ||
      finalInputVal.includes("distractions") ||
      finalInputVal.includes("distraction") ||
      finalInputVal.includes("divertit") ||
      finalInputVal.includes("divertis") ||
      finalInputVal.includes("diverti") ||
      finalInputVal.includes("divertissement") ||
      finalInputVal.includes("divertissements") ||
      finalInputVal.includes("s'occuper") ||
      finalInputVal.includes("s'occupe") ||
      finalInputVal.includes("s'occupes") ||
      finalInputVal.includes("occupation") ||
      finalInputVal.includes("occupations") ||
      finalInputVal.includes("repos") ||
      finalInputVal.includes("sport") ||
      finalInputVal.includes("sports") ||
      finalInputVal.includes("instrument") ||
      finalInputVal.includes("instruments") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("danse") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("association") ||
      finalInputVal.includes("associations")
    ) {
      yes.classList.add("invisible");
      noReply.classList.add("invisible");

      let compteurxAndYesInt = Number(
        document
          .querySelectorAll(".genericHobbiesAndYes")
          [
            document.querySelectorAll(".genericHobbiesAndYes").length - 1
          ].attributes[0].textContent.slice(13)
      );

      compteurx = compteurxAndYesInt;
      experienceDetails = `J'aime passer mon temps libre à apprendre de nouvelle chose par la <b>lecture</b>. J'aime aussi <b>dessiner</b> et faire de la sculpture`;

      //LANGUAGES
    } else if (
      finalInputVal.includes("langues") ||
      finalInputVal.includes("parler") ||
      finalInputVal.includes("parle") ||
      finalInputVal.includes("parles") ||
      finalInputVal.includes("s'exprimer") ||
      finalInputVal.includes("exprime") ||
      finalInputVal.includes("exprimes") ||
      finalInputVal.includes("dialecte") ||
      finalInputVal.includes("dialectes")
    ) {
      yes.classList.add("invisible");
      noReply.classList.add("invisible");

      let compteurLanguagesAndYesInt = Number(
        document
          .querySelectorAll(".genericLanguagesAndYes")
          [
            document.querySelectorAll(".genericLanguagesAndYes").length - 1
          ].attributes[0].textContent.slice(15)
      );

      compteurx = compteurLanguagesAndYesInt;
      experienceDetails = `Je peux tenir une conversation en <b>Anglais</b> et maitrise l'<b>Anglais professionnel</b>.`;
      //SKILLS
    } else if (
      finalInputVal.includes("compétences") ||
      finalInputVal.includes("compétence") ||
      finalInputVal.includes("competences") ||
      finalInputVal.includes("competence") ||
      finalInputVal.includes("aptitude") ||
      finalInputVal.includes("aptitudes") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("faires") ||
      finalInputVal.includes("savoir faires") ||
      finalInputVal.includes("savoir faire") ||
      finalInputVal.includes("savoir-faires") ||
      finalInputVal.includes("savoir-faire") ||
      finalInputVal.includes("capacité") ||
      finalInputVal.includes("capacités") ||
      finalInputVal.includes("qualification") ||
      finalInputVal.includes("qualifications") ||
      finalInputVal.includes("connaissance") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("connaisances") ||
      finalInputVal.includes("connaisance") ||
      finalInputVal.includes("conaissance") ||
      finalInputVal.includes("conaissances") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("habilité") ||
      finalInputVal.includes("habilités") ||
      finalInputVal.includes("habillités") ||
      finalInputVal.includes("habillité") ||
      finalInputVal.includes("expértise") ||
      finalInputVal.includes("expértises") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("hard skills") ||
      finalInputVal.includes("soft-skills") ||
      finalInputVal.includes("hard-skills") ||
      finalInputVal.includes("savoir-être") ||
      finalInputVal.includes("savoir-êtres") ||
      finalInputVal.includes("savoir être") ||
      finalInputVal.includes("savoir êtres") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("qualités") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("notions") ||
      finalInputVal.includes("notion") ||
      finalInputVal.includes("techniques") ||
      finalInputVal.includes("technique") ||
      finalInputVal.includes("technicité") ||
      finalInputVal.includes("languages") ||
      finalInputVal.includes("language") ||
      finalInputVal.includes("stack") ||
      finalInputVal.includes("stacks") ||
      finalInputVal.includes("javascript") ||
      finalInputVal.includes("react") ||
      finalInputVal.includes("node") ||
      finalInputVal.includes("express") ||
      finalInputVal.includes("css") ||
      finalInputVal.includes("site") ||
      finalInputVal.includes("base de donnée") ||
      finalInputVal.includes("sass") ||
      finalInputVal.includes("mvc") ||
      finalInputVal.includes("jwt") ||
      finalInputVal.includes("back") ||
      finalInputVal.includes("front") ||
      finalInputVal.includes("architecture") ||
      finalInputVal.includes("natif") ||
      finalInputVal.includes("native") ||
      finalInputVal.includes("sql") ||
      finalInputVal.includes("mysql") ||
      finalInputVal.includes("vanilla") ||
      finalInputVal.includes("design") ||
      finalInputVal.includes("pattern") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("agilité") ||
      finalInputVal.includes("agile") ||
      finalInputVal.includes("agiles") ||
      finalInputVal.includes("librairies") ||
      finalInputVal.includes("librairie") ||
      finalInputVal.includes("library") ||
      finalInputVal.includes("framework") ||
      finalInputVal.includes("os") ||
      finalInputVal.includes("système d'exploitation") ||
      finalInputVal.includes("système d'exploitations") ||
      finalInputVal.includes("systeme d'exploitation") ||
      finalInputVal.includes("systeme d'exploitations") ||
      finalInputVal.includes("workflow") ||
      finalInputVal.includes("développement") ||
      finalInputVal.includes("web") ||
      finalInputVal.includes("axios") ||
      finalInputVal.includes("linux") ||
      finalInputVal.includes("mac") ||
      finalInputVal.includes("postman") ||
      finalInputVal.includes("slack") ||
      finalInputVal.includes("discord") ||
      finalInputVal.includes("cli") ||
      finalInputVal.includes("command line interface") ||
      finalInputVal.includes("trello") ||
      finalInputVal.includes("méthodes agiles") ||
      finalInputVal.includes("méthodes agile") ||
      finalInputVal.includes("es5") ||
      finalInputVal.includes("es6") ||
      finalInputVal.includes("github") ||
      finalInputVal.includes("ide") ||
      finalInputVal.includes("visual code") ||
      finalInputVal.includes("sublime text") ||
      finalInputVal.includes("gestionnaire de base de donnée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de données") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("gestionnaire de base de donée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de donées") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("environnement de développement intégré")
    ) {
      yes.classList.add("invisible");
      noReply.classList.add("invisible");

      let compteurSkillsAndYesInt = Number(
        document
          .querySelectorAll(".genericSkillsAndYes")
          [
            document.querySelectorAll(".genericSkillsAndYes").length - 1
          ].attributes[0].textContent.slice(12)
      );

      compteurx = compteurSkillsAndYesInt;
      experienceDetails =
        "-Je sais développer un site de bout en bout (côté front-end comme côté back-end) avec le langage Javascript,l'écosystème de Node.js et la librairie React.<br/>-Je sais concevoir et manipuler une base de donnée via les outils MySQL et les ORM Sequelize et Mongoose.<br/> -Je sais gérer mes projets via le gestionnaire de version GIT et via GITHUB";

      //PROFESSIONAL EXPERIENCES
    } else if (
      finalInputVal.includes("expériences") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("travaillé") ||
      finalInputVal.includes("travaillés") ||
      finalInputVal.includes("travailés") ||
      finalInputVal.includes("travailé") ||
      finalInputVal.includes("professionnelles") ||
      finalInputVal.includes("professionnelle") ||
      finalInputVal.includes("professionelle") ||
      finalInputVal.includes("professionnele") ||
      finalInputVal.includes("profesionelle") ||
      finalInputVal.includes("professionele") ||
      finalInputVal.includes("professionelles") ||
      finalInputVal.includes("professionneles") ||
      finalInputVal.includes("profesionelles") ||
      finalInputVal.includes("professioneles") ||
      finalInputVal.includes("accomplissement ") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("accomplisemment") ||
      finalInputVal.includes("accomplisemments") ||
      finalInputVal.includes("acomplisemment") ||
      finalInputVal.includes("acomplisemments") ||
      finalInputVal.includes("acomplissement") ||
      finalInputVal.includes("acomplissements") ||
      finalInputVal.includes("acomplissemments") ||
      finalInputVal.includes("acomplissemment") ||
      finalInputVal.includes("activité professionnelle") ||
      finalInputVal.includes("activité professionnelles") ||
      finalInputVal.includes("activités professionnelle") ||
      finalInputVal.includes("activités professionnelles") ||
      finalInputVal.includes("accomplissement") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("expériences") ||
      finalInputVal.includes("profession") ||
      finalInputVal.includes("professions") ||
      finalInputVal.includes("profesion") ||
      finalInputVal.includes("profesions") ||
      finalInputVal.includes("poste") ||
      finalInputVal.includes("postes") ||
      finalInputVal.includes("métier") ||
      finalInputVal.includes("métiers") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("travail") ||
      finalInputVal.includes("travails") ||
      finalInputVal.includes("emploi") ||
      finalInputVal.includes("emplois") ||
      finalInputVal.includes("boulot") ||
      finalInputVal.includes("boulots") ||
      finalInputVal.includes("job") ||
      finalInputVal.includes("jobs") ||
      finalInputVal.includes("gagne pain") ||
      finalInputVal.includes("gagne pains") ||
      finalInputVal.includes("gagnes-pain") ||
      finalInputVal.includes("gagnes-pains") ||
      finalInputVal.includes("stage") ||
      finalInputVal.includes("stages") ||
      finalInputVal.includes("carrières") ||
      finalInputVal.includes("carrière") ||
      finalInputVal.includes("carière") ||
      finalInputVal.includes("carières") ||
      finalInputVal.includes("carièrres") ||
      finalInputVal.includes("carièrre") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("positions") ||
      finalInputVal.includes("position") ||
      finalInputVal.includes("place") ||
      finalInputVal.includes("places") ||
      finalInputVal.includes("entreprise") ||
      finalInputVal.includes("entreprises") ||
      finalInputVal.includes("domaines") ||
      finalInputVal.includes("domaine") ||
      finalInputVal.includes("dommaines") ||
      finalInputVal.includes("dommaine") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("chargés") ||
      finalInputVal.includes("chargé") ||
      finalInputVal.includes("startup") ||
      finalInputVal.includes("startups")
    ) {
      yes.classList.add("invisible");
      noReply.classList.add("invisible");

      let compteurProfessionalExperiencesAndYesInt = Number(
        document
          .querySelectorAll(".genericProfessionalExperienceAndYes")
          [
            document.querySelectorAll(".genericProfessionalExperienceAndYes")
              .length - 1
          ].attributes[0].textContent.slice(28)
      );
      //
      compteurx = compteurProfessionalExperiencesAndYesInt;
      //
      experienceDetails =
        "<b>-De de Janvier à Mars 2020</b> j'ai été fille Au pair auprès d'une famille à Londres. J'ai effectué comme principales tâches: les soins quotidiens à un enfant atteint d'épilepsie sévère. <br><b>-En Mars 2020</b>-Femme de chambre à Hôtel Hyatt à Londres -Tâches principales: nettoyage des chambres de l'hôtel. <br><b>-De Mai à Juin 2021</b> Développeuse web et web mobile, à Association Hand-of hope,<br/>-Tâches principales: réalisation au cours d'un stage d'une interface dynamique.";
    }
    //SCOLARITY
    else if (
      finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarités") ||
      finalInputVal.includes("étude") ||
      finalInputVal.includes("études") ||
      finalInputVal.includes("étudié") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("cursus") ||
      finalInputVal.includes("diplome") ||
      finalInputVal.includes("diplomes") ||
      finalInputVal.includes("diplômes") ||
      finalInputVal.includes("diplôme") ||
      finalInputVal.includes("parcours") ||
      finalInputVal.includes("scolaire") ||
      finalInputVal.includes("scolaires") ||
      finalInputVal.includes("instruction") ||
      finalInputVal.includes("instructions") ||
      finalInputVal.includes("enseignement") ||
      finalInputVal.includes("enseignements") ||
      finalInputVal.includes("enseignemment") ||
      finalInputVal.includes("enseignemments") ||
      finalInputVal.includes("discpline") ||
      finalInputVal.includes("disciplines") ||
      finalInputVal.includes("discplinne") ||
      finalInputVal.includes("disciplinnes") ||
      finalInputVal.includes("cours") ||
      finalInputVal.includes("projets") ||
      finalInputVal.includes("projet") ||
      finalInputVal.includes("branche") ||
      finalInputVal.includes("branches") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("certificat") ||
      finalInputVal.includes("certificats") ||
      finalInputVal.includes("université") ||
      finalInputVal.includes("universités") ||
      finalInputVal.includes("unniversité") ||
      finalInputVal.includes("unniversités") ||
      finalInputVal.includes("bac +") ||
      finalInputVal.includes("apprentissage") ||
      finalInputVal.includes("apprentissages") ||
      finalInputVal.includes("aprentissage") ||
      finalInputVal.includes("aprentissages") ||
      finalInputVal.includes("éducations") ||
      finalInputVal.includes("éducation") ||
      finalInputVal.includes("formation") ||
      finalInputVal.includes("formations") ||
      finalInputVal.includes("formmation") ||
      finalInputVal.includes("formmations") ||
      finalInputVal.includes("établissements") ||
      finalInputVal.includes("établissement") ||
      finalInputVal.includes("établissemments") ||
      finalInputVal.includes("établissemment") ||
      finalInputVal.includes("faculté") ||
      finalInputVal.includes("facultés")
    ) {
      yes.classList.add("invisible");
      noReply.classList.add("invisible");

      let compteurScolarityAndYesInt = Number(
        document
          .querySelectorAll(".genericscolariyAndYes")
          [
            document.querySelectorAll(".genericscolariyAndYes").length - 1
          ].attributes[0].textContent.slice(14)
      );
      //
      compteurx = compteurScolarityAndYesInt;
      experienceDetails = `-En<b>2018</b> J'ai obtenu une licence en philosophie et un certificat en sociologie qui m'ont permis de structurer ma réflexion par l'exercice de la dissertation et de développer ma capacité d'introspection et d'ouverture au monde.<br>-En <b>2020 Social builder</b> puis <b>Simplon</b> en <b>2021</b> m'ont donné l'opportunité de développer des compétences dédiées à la <b>programmation web</b>.<br> J'ai par ces expériences pu développer des compétences tels que entre autres le maquettage d'une application, la capacité à développer le front end d'une application via le <b>framework React</b>, la capacité à développer la partie <b>back-end</b> d'une application grâce à Node.js, la capacité à faire de la veille et à documenter mon code.`;
    }
    //2_
    let yesAndCatAnswer = document.querySelector(
      `#yesAndCatAnswer${compteurx}`
    );
    let genericYes = document.querySelectorAll(".genericYes").length - 1;
    let inputVal = document.querySelector("#userAnswers").value;
    //
    let firstYesButton = document.querySelectorAll(".yesEvent")[0];
    let firstNoButton = document.querySelectorAll(".noEvent")[0];
    let noEventButton;
    let yesEventButton;
    //retreive of the counter value:
    compteur4 = Number(
      document
        .querySelectorAll(".genericYes")
        [genericYes].attributes[1].textContent.slice(9)
    );
    {
      document.querySelector(".yes")
        ? (yesEventButton = document.querySelector(".yes"))
        : (yesEventButton = document.querySelector(
            `#yesButton${compteur4 - 2000}`
          ));
    }
    {
      document.querySelector(".no")
        ? (noEventButton = document.querySelector(".no"))
        : (noEventButton = document.querySelector(
            `#noButton${compteur4 - 2000}`
          ));
    }

    let yesAns = document.querySelector(`#yesAns${compteur4}`);
    //If we click on the first yes button we push it to the left and make the no button invisible
    if (yesEventButton && !inputVal) {
      //we move the yes button to the left
      yesEventButton.style.marginLeft = "350px";
      //we make the no button invisible
      noEventButton.classList.add("invisible");
      //we make the div of the keyboard answer invisible
      yesAns.classList.add("invisible");
      //we remove the class yes so that the following yesEvent we'll be targered into the other yes button
      if (document.querySelector(".yes")) {
        firstNoButton.classList.remove("no");
        firstYesButton.classList.remove("yes");
      }
      //
    } else if (firstYesButton && inputVal) {
      //if there is an input we make the yes et no button invisble
      yesEventButton.classList.add("invisible");
      noEventButton.classList.add("invisible");

      yesAndCatAnswer.innerHTML = `<p class="font">${inputVal}</p>`;
      yesAndCatAnswer.style.marginTop = "6px";
      yesAndCatAnswer.style.border = `2px solid #dbdeea`;
      yesAndCatAnswer.style.backgroundColor = "#dbdeea";
      yesAndCatAnswer.style.width = "229px";
      yesAndCatAnswer.style.borderRadius = "6px";
      yesAndCatAnswer.style.paddingLeft = "22px";
      yesAndCatAnswer.style.paddingRight = "13px";
      yesAndCatAnswer.style.marginLeft = "126px";
      yesAndCatAnswer.style.marginBottom = "18px";

      if (document.querySelector(".yes")) {
        firstNoButton.classList.remove("no");
        firstYesButton.classList.remove("yes");
      }
    }
    //4_
    makeDotsMoves(compteurx);
    //5_
    setTimeout(function () {
      let experienceDetailsSub = document.querySelector(
        `#experienceDetailsSub${compteurx}`
      );
      experienceDetailsSub.classList.remove("invisible");
      experienceDetailsSub.style.marginTop = "6px"; //-84px
      experienceDetailsSub.style.border = `2px solid #dbdeea`;
      experienceDetailsSub.style.width = "229px";
      experienceDetailsSub.style.borderRadius = "6px";
      experienceDetailsSub.style.paddingLeft = "22px";
      experienceDetailsSub.style.paddingRight = "13px";
      experienceDetailsSub.style.marginLeft = "126px";
      experienceDetailsSub.style.marginBottom = "18px";
      experienceDetailsSub.innerHTML = `<p class="font">${experienceDetails}</p>`;
    }, 1500);
    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);
    //6_
    setTimeout(function () {
      makeDotsMoves(compteurx);
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 8000);

    AskIfWantToSeeAnOtherExperience(compteurx);

    //SCOLARITÉ

    //8_
    setTimeout(function () {
      // scrollToTheBottom();
      cleartext();
      // animateCategories();
    }, 100);
    setTimeout(function () {
      scrollToTheBottom();
    }, 4500);
    setTimeout(function () {
      scrollToTheBottom();
    }, 5600);

    return;
  } //YES (without a specific category answer)
  else if (
    e.code == "Enter" &&
    (finalInputVal.includes("oui") ||
      finalInputVal.includes("ok") ||
      finalInputVal.includes("okay") ||
      finalInputVal.includes("ouais") ||
      finalInputVal.includes("dacc") ||
      finalInputVal.includes("yep") ||
      finalInputVal.includes("yes") ||
      finalInputVal.includes("ouep") ||
      finalInputVal.includes("si") ||
      finalInputVal.includes("d'accord") ||
      finalInputVal.includes("effectivement") ||
      finalInputVal.includes("certainement") ||
      finalInputVal.includes("absolument") ||
      finalInputVal.includes("totalement") ||
      finalInputVal.includes("complètement") ||
      finalInputVal.includes("exactement") ||
      finalInputVal.includes("assurément") ||
      finalInputVal.includes("parfaitement") ||
      finalInputVal.includes("clairement") ||
      finalInputVal.includes("incontestablement") ||
      finalInputVal.includes("indéniablement") ||
      finalInputVal.includes("bien sûr") ||
      finalInputVal.includes("tout à fait") ||
      finalInputVal.includes("affirmatif") ||
      finalInputVal.includes("bien entendu") ||
      finalInputVal.includes("évidemment") ||
      finalInputVal.includes("en effet") ||
      finalInputVal.includes("naturellement") ||
      finalInputVal.includes("bien évidemment"))
  ) {
    compteurYesPlusCat += 2000;

    otherExperienceChoice.insertAdjacentHTML(
      "beforeend",
      `
            <div id="yesAns${compteurYesPlusCat}"></div>

            <div class="chargingDots${compteurYesPlusCat}">
              <div class="dots${compteurYesPlusCat} dotsOne${compteurYesPlusCat}"></div>
              <div class="dots${compteurYesPlusCat} dotsTwo${compteurYesPlusCat}"></div>
              <div class="dots${compteurYesPlusCat} dotsThree${compteurYesPlusCat}"></div>
            </div>

            <div id="experiencesQuestion${compteurYesPlusCat}" class="answerExperienceQuestion font"></div>

            <div id="categoriesAnswer${compteurYesPlusCat}"></div>

            <div id="curriculumCategories${compteurYesPlusCat}">

              <div id="firstRow2">
                  <button type="button" id="scolarity${compteurYesPlusCat}" class="genericScolarity invisible">
                  </button>
                  <button type="button" id="professionalExperience${compteurYesPlusCat}" class="genericProfessionalExperience invisible">
                  </button>
              </div>

              <div id="secondRow2">
                  <button type="button" id="hobbies${compteurYesPlusCat}" class="genericHobbies invisible">
                  </button>
                  <button type="button" id="skills${compteurYesPlusCat}" class="genericSkills invisible">
                  </button>
              </div>

              <button type="button" id="languages${compteurYesPlusCat}" class="genericLanguages invisible"></button>

              <div class="categoriesChargingDots${compteurYesPlusCat}">
                  <div class="categoriesDots${compteurYesPlusCat} categoriesDotsOne${compteurYesPlusCat} "></div>
                  <div class="categoriesDots${compteurYesPlusCat} categoriesDotsTwo${compteurYesPlusCat} "></div>
                  <div class="categoriesDots${compteurYesPlusCat} categoriesDotsThree${compteurYesPlusCat} "></div>
              </div>

             <div id="experienceDetails${compteurYesPlusCat}" class="invisible font" ></div>

            </div>
            <!------>

            <div class="categoriesChargingDots3${compteurYesPlusCat}">
              <div class="categoriesDots3${compteurYesPlusCat} categoriesDotsOne3${compteurYesPlusCat} "></div>
              <div class="categoriesDots3${compteurYesPlusCat} categoriesDotsTwo3${compteurYesPlusCat} "></div>
              <div class="categoriesDots3${compteurYesPlusCat} categoriesDotsThree3${compteurYesPlusCat} "></div>
            </div>

            <!------>

            <div id="experiences${compteurYesPlusCat}" class="invisible font"></div>

            <button type="button"  id="yesButton${compteurYesPlusCat}" class="yesEvent invisible genericYes">Oui</button>
            <button type="button"  id="noButton${compteurYesPlusCat}" class="noEvent invisible genericNo">Non</button>
           
            `
    );
    setTimeout(function () {
      animateCategories();
      cleartext();
    }, 100);
    setTimeout(function () {
      scrollToTheBottom();
    }, 500);
    setTimeout(function () {
      scrollToTheBottom();
    }, 5000);

    //removing of the error element and push the error on another dom element
    setTimeout(function () {
      //push another class where there is the error class then delete the error class
      {
        document.querySelector(".error")
          ? (errorTextContent = error.textContent)
          : null;
      }
    }, 100);
    setTimeout(function () {
      let firstErrorPLaceholder = document.querySelector(
        "#firstErrorPLaceholder"
      );
      {
        document.querySelector(".error")
          ? firstErrorPLaceholder.classList.remove("error")
          : null;
      }
      //
    }, 200);
    //SCOLARITY (without yes)
  } else if (
    e.code == "Enter" &&
    (finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarité") ||
      finalInputVal.includes("scolarités") ||
      finalInputVal.includes("étude") ||
      finalInputVal.includes("études") ||
      finalInputVal.includes("étudié") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("étudiés") ||
      finalInputVal.includes("cursus") ||
      finalInputVal.includes("diplome") ||
      finalInputVal.includes("diplomes") ||
      finalInputVal.includes("diplômes") ||
      finalInputVal.includes("diplôme") ||
      finalInputVal.includes("parcours") ||
      finalInputVal.includes("scolaire") ||
      finalInputVal.includes("scolaires") ||
      finalInputVal.includes("instruction") ||
      finalInputVal.includes("instructions") ||
      finalInputVal.includes("enseignement") ||
      finalInputVal.includes("enseignements") ||
      finalInputVal.includes("enseignemment") ||
      finalInputVal.includes("enseignemments") ||
      finalInputVal.includes("discpline") ||
      finalInputVal.includes("disciplines") ||
      finalInputVal.includes("discplinne") ||
      finalInputVal.includes("disciplinnes") ||
      finalInputVal.includes("cours") ||
      finalInputVal.includes("projets") ||
      finalInputVal.includes("projet") ||
      finalInputVal.includes("branche") ||
      finalInputVal.includes("branches") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("certificat") ||
      finalInputVal.includes("certificats") ||
      finalInputVal.includes("université") ||
      finalInputVal.includes("universités") ||
      finalInputVal.includes("unniversité") ||
      finalInputVal.includes("unniversités") ||
      finalInputVal.includes("bac +") ||
      finalInputVal.includes("apprentissage") ||
      finalInputVal.includes("apprentissages") ||
      finalInputVal.includes("aprentissage") ||
      finalInputVal.includes("aprentissages") ||
      finalInputVal.includes("éducations") ||
      finalInputVal.includes("éducation") ||
      finalInputVal.includes("formation") ||
      finalInputVal.includes("formations") ||
      finalInputVal.includes("formmation") ||
      finalInputVal.includes("formmations") ||
      finalInputVal.includes("établissements") ||
      finalInputVal.includes("établissement") ||
      finalInputVal.includes("établissemments") ||
      finalInputVal.includes("établissemment") ||
      finalInputVal.includes("faculté") ||
      finalInputVal.includes("facultés"))
  ) {
    {
      document
        .querySelectorAll(".genericScolarity")
        [
          document.querySelectorAll(".genericScolarity").length - 1
        ].attributes[1].textContent.slice(9)
        ? (compteur2 = Number(
            document
              .querySelectorAll(".genericScolarity")
              [
                document.querySelectorAll(".genericScolarity").length - 1
              ].attributes[1].textContent.slice(9)
          ))
        : (compteur2 = Number(
            e.target.parentElement.attributes[1].textContent.slice(9)
          ));
    }
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteur2}`
    );
    let scolarity = document.querySelector(`#scolarity${compteur2}`);
    {
      !inputVal
        ? ((scolarity.style.marginLeft = "264px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          scolarity.classList.add("invisible"));
    }

    categorieAnswer.style.marginTop = "6px";
    categorieAnswer.style.border = `2px solid #dbdeea`;
    categorieAnswer.style.backgroundColor = "#dbdeea";
    categorieAnswer.style.width = "229px";
    categorieAnswer.style.borderRadius = "6px";
    categorieAnswer.style.paddingLeft = "22px";
    categorieAnswer.style.paddingRight = "13px";
    categorieAnswer.style.marginLeft = "126px";
    categorieAnswer.style.marginBottom = "18px";

    setTimeout(function () {
      cleartext();
    }, 95);

    let professionalExperience = document.querySelector(
      `#professionalExperience${compteur2}`
    );
    let hobbies = document.querySelector(`#hobbies${compteur2}`);
    let skills = document.querySelector(`#skills${compteur2}`);
    let languages = document.querySelector(`#languages${compteur2}`);

    professionalExperience.classList.add("invisible");
    hobbies.classList.add("invisible");
    skills.classList.add("invisible");
    languages.classList.add("invisible");

    compteurx = compteur2;
    makeDotsMoves(compteurx, compteur2);

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteur2}`
    );
    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-19px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = `<p>${experienceDetailsTexte2[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    setTimeout(function () {
      makeDotsMoves(compteurx, compteur2);
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    AskIfWantToSeeAnOtherExperience(compteurx, compteur2);

    //PROFESSIONAL EXPERIENCES (without yes)
  } else if (
    e.code == "Enter" &&
    (finalInputVal.includes("expériences") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("travaillé") ||
      finalInputVal.includes("travaillés") ||
      finalInputVal.includes("travailés") ||
      finalInputVal.includes("travailé") ||
      finalInputVal.includes("professionnelles") ||
      finalInputVal.includes("professionnelle") ||
      finalInputVal.includes("professionelle") ||
      finalInputVal.includes("professionnele") ||
      finalInputVal.includes("profesionelle") ||
      finalInputVal.includes("professionele") ||
      finalInputVal.includes("professionelles") ||
      finalInputVal.includes("professionneles") ||
      finalInputVal.includes("profesionelles") ||
      finalInputVal.includes("professioneles") ||
      finalInputVal.includes("accomplissement ") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("accomplisemment") ||
      finalInputVal.includes("accomplisemments") ||
      finalInputVal.includes("acomplisemment") ||
      finalInputVal.includes("acomplisemments") ||
      finalInputVal.includes("acomplissement") ||
      finalInputVal.includes("acomplissements") ||
      finalInputVal.includes("acomplissemments") ||
      finalInputVal.includes("acomplissemment") ||
      finalInputVal.includes("activité professionnelle") ||
      finalInputVal.includes("activité professionnelles") ||
      finalInputVal.includes("activités professionnelle") ||
      finalInputVal.includes("activités professionnelles") ||
      finalInputVal.includes("accomplissement") ||
      finalInputVal.includes("accomplissements") ||
      finalInputVal.includes("accomplissemment") ||
      finalInputVal.includes("accomplissemments") ||
      finalInputVal.includes("expérience") ||
      finalInputVal.includes("expériences") ||
      finalInputVal.includes("profession") ||
      finalInputVal.includes("professions") ||
      finalInputVal.includes("profesion") ||
      finalInputVal.includes("profesions") ||
      finalInputVal.includes("poste") ||
      finalInputVal.includes("postes") ||
      finalInputVal.includes("métier") ||
      finalInputVal.includes("métiers") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("travail") ||
      finalInputVal.includes("travails") ||
      finalInputVal.includes("emploi") ||
      finalInputVal.includes("emplois") ||
      finalInputVal.includes("boulot") ||
      finalInputVal.includes("boulots") ||
      finalInputVal.includes("job") ||
      finalInputVal.includes("jobs") ||
      finalInputVal.includes("gagne pain") ||
      finalInputVal.includes("gagne pains") ||
      finalInputVal.includes("gagnes-pain") ||
      finalInputVal.includes("gagnes-pains") ||
      finalInputVal.includes("stage") ||
      finalInputVal.includes("stages") ||
      finalInputVal.includes("carrières") ||
      finalInputVal.includes("carrière") ||
      finalInputVal.includes("carière") ||
      finalInputVal.includes("carières") ||
      finalInputVal.includes("carièrres") ||
      finalInputVal.includes("carièrre") ||
      finalInputVal.includes("fonction") ||
      finalInputVal.includes("fonctions") ||
      finalInputVal.includes("positions") ||
      finalInputVal.includes("position") ||
      finalInputVal.includes("place") ||
      finalInputVal.includes("places") ||
      finalInputVal.includes("entreprise") ||
      finalInputVal.includes("entreprises") ||
      finalInputVal.includes("domaines") ||
      finalInputVal.includes("domaine") ||
      finalInputVal.includes("dommaines") ||
      finalInputVal.includes("dommaine") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("charge") ||
      finalInputVal.includes("chargés") ||
      finalInputVal.includes("chargé") ||
      finalInputVal.includes("startup") ||
      finalInputVal.includes("startups"))
  ) {
    {
      document
        .querySelectorAll(".genericProfessionalExperience")
        [
          document.querySelectorAll(".genericProfessionalExperience").length - 1
        ].attributes[1].textContent.slice(22)
        ? (compteur3 = Number(
            document
              .querySelectorAll(".genericProfessionalExperience")
              [
                document.querySelectorAll(".genericProfessionalExperience")
                  .length - 1
              ].attributes[1].textContent.slice(22)
          ))
        : (compteur3 = Number(
            e.target.parentElement.attributes[1].textContent.slice(22)
          ));
    }
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteur3}`
    );
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteur3}`
    );

    {
      !inputVal
        ? ((professionalExperience.style.marginLeft = "291px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          professionalExperience.classList.add("invisible"));
    }

    categorieAnswer.style.marginTop = "6px"; //-84px
    categorieAnswer.style.border = `2px solid #dbdeea`;
    categorieAnswer.style.backgroundColor = "#dbdeea";
    categorieAnswer.style.width = "229px";
    categorieAnswer.style.borderRadius = "6px";
    categorieAnswer.style.paddingLeft = "22px";
    categorieAnswer.style.paddingRight = "13px";
    categorieAnswer.style.marginLeft = "126px";
    categorieAnswer.style.marginBottom = "18px";

    setTimeout(function () {
      cleartext();
    }, 95);

    let scolarity = document.querySelector(`#scolarity${compteur3}`);
    let hobbies = document.querySelector(`#hobbies${compteur3}`);
    let skills = document.querySelector(`#skills${compteur3}`);
    let languages = document.querySelector(`#languages${compteur3}`);

    hobbies.classList.add("invisible");
    skills.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");

    compteurx = compteur3;
    makeDotsMoves(compteurx, compteur3);

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteur3}`
    );

    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-19px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = `<p class="font">${professionalExperiencesDetails[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    AskIfWantToSeeAnOtherExperience(compteurx, compteur3);

    //SKILLS (without yes)
  } else if (
    e.code == "Enter" &&
    (finalInputVal.includes("compétences") ||
      finalInputVal.includes("compétence") ||
      finalInputVal.includes("competences") ||
      finalInputVal.includes("competence") ||
      finalInputVal.includes("aptitude") ||
      finalInputVal.includes("aptitudes") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("faires") ||
      finalInputVal.includes("savoir faires") ||
      finalInputVal.includes("savoir faire") ||
      finalInputVal.includes("savoir-faires") ||
      finalInputVal.includes("savoir-faire") ||
      finalInputVal.includes("capacité") ||
      finalInputVal.includes("capacités") ||
      finalInputVal.includes("qualification") ||
      finalInputVal.includes("qualifications") ||
      finalInputVal.includes("connaissance") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("connaisances") ||
      finalInputVal.includes("connaisance") ||
      finalInputVal.includes("conaissance") ||
      finalInputVal.includes("conaissances") ||
      finalInputVal.includes("connaissances") ||
      finalInputVal.includes("faire") ||
      finalInputVal.includes("habilité") ||
      finalInputVal.includes("habilités") ||
      finalInputVal.includes("habillités") ||
      finalInputVal.includes("habillité") ||
      finalInputVal.includes("expértise") ||
      finalInputVal.includes("expértises") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("hard skills") ||
      finalInputVal.includes("soft-skills") ||
      finalInputVal.includes("hard-skills") ||
      finalInputVal.includes("savoir-être") ||
      finalInputVal.includes("savoir-êtres") ||
      finalInputVal.includes("savoir être") ||
      finalInputVal.includes("savoir êtres") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("qualités") ||
      finalInputVal.includes("spécialité") ||
      finalInputVal.includes("spécialités") ||
      finalInputVal.includes("notions") ||
      finalInputVal.includes("notion") ||
      finalInputVal.includes("techniques") ||
      finalInputVal.includes("technique") ||
      finalInputVal.includes("technicité") ||
      finalInputVal.includes("languages") ||
      finalInputVal.includes("language") ||
      finalInputVal.includes("stack") ||
      finalInputVal.includes("stacks") ||
      finalInputVal.includes("javascript") ||
      finalInputVal.includes("react") ||
      finalInputVal.includes("node") ||
      finalInputVal.includes("express") ||
      finalInputVal.includes("css") ||
      finalInputVal.includes("site") ||
      finalInputVal.includes("base de donnée") ||
      finalInputVal.includes("sass") ||
      finalInputVal.includes("mvc") ||
      finalInputVal.includes("jwt") ||
      finalInputVal.includes("back") ||
      finalInputVal.includes("front") ||
      finalInputVal.includes("architecture") ||
      finalInputVal.includes("natif") ||
      finalInputVal.includes("native") ||
      finalInputVal.includes("sql") ||
      finalInputVal.includes("mysql") ||
      finalInputVal.includes("vanilla") ||
      finalInputVal.includes("design") ||
      finalInputVal.includes("pattern") ||
      finalInputVal.includes("soft skills") ||
      finalInputVal.includes("qualité") ||
      finalInputVal.includes("agilité") ||
      finalInputVal.includes("agile") ||
      finalInputVal.includes("agiles") ||
      finalInputVal.includes("librairies") ||
      finalInputVal.includes("librairie") ||
      finalInputVal.includes("library") ||
      finalInputVal.includes("framework") ||
      finalInputVal.includes("os") ||
      finalInputVal.includes("système d'exploitation") ||
      finalInputVal.includes("système d'exploitations") ||
      finalInputVal.includes("systeme d'exploitation") ||
      finalInputVal.includes("systeme d'exploitations") ||
      finalInputVal.includes("workflow") ||
      finalInputVal.includes("développement") ||
      finalInputVal.includes("web") ||
      finalInputVal.includes("axios") ||
      finalInputVal.includes("linux") ||
      finalInputVal.includes("mac") ||
      finalInputVal.includes("postman") ||
      finalInputVal.includes("slack") ||
      finalInputVal.includes("discord") ||
      finalInputVal.includes("cli") ||
      finalInputVal.includes("command line interface") ||
      finalInputVal.includes("trello") ||
      finalInputVal.includes("méthodes agiles") ||
      finalInputVal.includes("méthodes agile") ||
      finalInputVal.includes("es5") ||
      finalInputVal.includes("es6") ||
      finalInputVal.includes("github") ||
      finalInputVal.includes("ide") ||
      finalInputVal.includes("visual code") ||
      finalInputVal.includes("sublime text") ||
      finalInputVal.includes("gestionnaire de base de donnée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de données") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("gestionnaire de base de donée") ||
      finalInputVal.includes("gestionaire de base de donnée") ||
      finalInputVal.includes("gestionnaire de base de donées") ||
      finalInputVal.includes("gestionaire de base de données") ||
      finalInputVal.includes("environnement de développement intégré"))
  ) {
    {
      document
        .querySelectorAll(".genericSkills")
        [
          document.querySelectorAll(".genericSkills").length - 1
        ].attributes[1].textContent.slice(6)
        ? (compteur5 = Number(
            document
              .querySelectorAll(".genericSkills")
              [
                document.querySelectorAll(".genericSkills").length - 1
              ].attributes[1].textContent.slice(6)
          ))
        : (compteur5 = Number(
            e.target.parentElement.attributes[1].textContent.slice(6)
          ));
    }
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteur5}`
    );
    let skills = document.querySelector(`#skills${compteur5}`);

    {
      !inputVal
        ? ((skills.style.marginLeft = "281px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          skills.classList.add("invisible"));
    }
    categorieAnswer.style.marginTop = "6px"; //-84px
    categorieAnswer.style.border = `2px solid #dbdeea`;
    categorieAnswer.style.backgroundColor = "#dbdeea";
    categorieAnswer.style.width = "229px";
    categorieAnswer.style.borderRadius = "6px";
    categorieAnswer.style.paddingLeft = "22px";
    categorieAnswer.style.paddingRight = "13px";
    categorieAnswer.style.marginLeft = "126px";
    categorieAnswer.style.marginBottom = "18px";

    setTimeout(function () {
      cleartext();
    }, 95);

    let scolarity = document.querySelector(`#scolarity${compteur5}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteur5}`
    );
    let hobbies = document.querySelector(`#hobbies${compteur5}`);
    let languages = document.querySelector(`#languages${compteur5}`);

    professionalExperience.classList.add("invisible");
    hobbies.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");

    compteurx = compteur5;
    makeDotsMoves(compteurx, compteur5);

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteur5}`
    );

    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-7px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = `<p class="font">${experienceDetailsTexte9[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    AskIfWantToSeeAnOtherExperience(compteurx, compteur5);

    //LANGUAGES (without yes)
  } else if (
    e.code == "Enter" &&
    (finalInputVal.includes("langues") ||
      finalInputVal.includes("parler") ||
      finalInputVal.includes("parle") ||
      finalInputVal.includes("parles") ||
      finalInputVal.includes("s'exprimer") ||
      finalInputVal.includes("exprime") ||
      finalInputVal.includes("exprimes") ||
      finalInputVal.includes("dialecte") ||
      finalInputVal.includes("dialectes"))
  ) {
    {
      document
        .querySelectorAll(".genericLanguages")
        [
          document.querySelectorAll(".genericLanguages").length - 1
        ].attributes[1].textContent.slice(9)
        ? (compteurLanguages = Number(
            document
              .querySelectorAll(".genericLanguages")
              [
                document.querySelectorAll(".genericLanguages").length - 1
              ].attributes[1].textContent.slice(9)
          ))
        : (compteurLanguages = Number(
            e.target.parentElement.attributes[1].textContent.slice(9)
          ));
    }

    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteurLanguages}`
    );
    let languages = document.querySelector(`#languages${compteurLanguages}`);
    {
      !inputVal
        ? ((languages.style.marginLeft = "263px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          languages.classList.add("invisible"));
    }

    categorieAnswer.style.marginTop = "6px"; //-84px
    categorieAnswer.style.border = `2px solid #dbdeea`;
    categorieAnswer.style.backgroundColor = "#dbdeea";
    categorieAnswer.style.width = "229px";
    categorieAnswer.style.borderRadius = "6px";
    categorieAnswer.style.paddingLeft = "22px";
    categorieAnswer.style.paddingRight = "13px";
    categorieAnswer.style.marginLeft = "126px";
    categorieAnswer.style.marginBottom = "18px";
    ///
    setTimeout(function () {
      cleartext();
    }, 95);
    //1_dom request
    let scolarity = document.querySelector(`#scolarity${compteurLanguages}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteurLanguages}`
    );
    let hobbies = document.querySelector(`#hobbies${compteurLanguages}`);
    let skills = document.querySelector(`#skills${compteurLanguages}`);

    //2_make the other experiences categories invisibles
    professionalExperience.classList.add("invisible");
    skills.classList.add("invisible");
    scolarity.classList.add("invisible");
    hobbies.classList.add("invisible");

    compteurx = compteurLanguages;
    makeDotsMoves(compteurx, compteurLanguages);

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteurLanguages}`
    );
    //5_i make the element which is initially invisible => visible and if the user choose scolarity show him what is inside scolarityDetails array
    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-16px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = languagesDetails[0];
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    //6_when the scolarity experience his shown, the user can choose an other experience again
    setTimeout(function () {
      makeDotsMoves(compteurx, compteurLanguages);
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    AskIfWantToSeeAnOtherExperience(compteurx, compteurLanguages);

    //HOBBIES (without yes)
  } else if (
    e.code == "Enter" &&
    (finalInputVal.includes("hobbies") ||
      finalInputVal.includes("centre d'intérêt") ||
      finalInputVal.includes("centre d'intérêts") ||
      finalInputVal.includes("centres d'intérêts") ||
      finalInputVal.includes("centres d'intérêt") ||
      finalInputVal.includes("loisir") ||
      finalInputVal.includes("loisirs") ||
      finalInputVal.includes("passe temps") ||
      finalInputVal.includes("passes temps") ||
      finalInputVal.includes("passe-temps") ||
      finalInputVal.includes("passes-temps") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("passion") ||
      finalInputVal.includes("passions") ||
      finalInputVal.includes("détente") ||
      finalInputVal.includes("détentes") ||
      finalInputVal.includes("détent") ||
      finalInputVal.includes("détens") ||
      finalInputVal.includes("relaxe") ||
      finalInputVal.includes("relaxes") ||
      finalInputVal.includes("délasser") ||
      finalInputVal.includes("délasse") ||
      finalInputVal.includes("délasses") ||
      finalInputVal.includes("s'amuse") ||
      finalInputVal.includes("s'amuses") ||
      finalInputVal.includes("temps-libre") ||
      finalInputVal.includes("temps-libres") ||
      finalInputVal.includes("en dehors du travail") ||
      finalInputVal.includes("distrait") ||
      finalInputVal.includes("distractions") ||
      finalInputVal.includes("distraction") ||
      finalInputVal.includes("divertit") ||
      finalInputVal.includes("divertis") ||
      finalInputVal.includes("diverti") ||
      finalInputVal.includes("divertissement") ||
      finalInputVal.includes("divertissements") ||
      finalInputVal.includes("s'occuper") ||
      finalInputVal.includes("s'occupe") ||
      finalInputVal.includes("s'occupes") ||
      finalInputVal.includes("occupation") ||
      finalInputVal.includes("occupations") ||
      finalInputVal.includes("repos") ||
      finalInputVal.includes("sport") ||
      finalInputVal.includes("sports") ||
      finalInputVal.includes("instrument") ||
      finalInputVal.includes("instruments") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("danse") ||
      finalInputVal.includes("danses") ||
      finalInputVal.includes("association") ||
      finalInputVal.includes("associations"))
  ) {
    {
      document
        .querySelectorAll(".genericHobbies")
        [
          document.querySelectorAll(".genericHobbies").length - 1
        ].attributes[1].textContent.slice(7)
        ? (compteurHobbies = Number(
            document
              .querySelectorAll(".genericHobbies")
              [
                document.querySelectorAll(".genericHobbies").length - 1
              ].attributes[1].textContent.slice(7)
          ))
        : (compteurHobbies = Number(
            e.target.parentElement.attributes[1].textContent.slice(7)
          ));
    }
    // INSERTION OF USER INPUT
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteurHobbies}`
    );
    let hobbies = document.querySelector(`#hobbies${compteurHobbies}`);
    //
    {
      !inputVal
        ? ((hobbies.style.marginLeft = "254px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          hobbies.classList.add("invisible"));
    }
    //
    categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`;
    categorieAnswer.style.marginTop = "6px"; //-84px
    categorieAnswer.style.border = `2px solid #dbdeea`;
    categorieAnswer.style.backgroundColor = "#dbdeea";
    categorieAnswer.style.width = "229px";
    categorieAnswer.style.borderRadius = "6px";
    categorieAnswer.style.paddingLeft = "22px";
    categorieAnswer.style.paddingRight = "13px";
    categorieAnswer.style.marginLeft = "126px";
    categorieAnswer.style.marginBottom = "18px";
    ///
    setTimeout(function () {
      cleartext();
    }, 95);
    //1_dom request
    let scolarity = document.querySelector(`#scolarity${compteurHobbies}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteurHobbies}`
    );

    let skills = document.querySelector(`#skills${compteurHobbies}`);
    let languages = document.querySelector(`#languages${compteurHobbies}`);

    //2_make the other experiences categories invisibles
    professionalExperience.classList.add("invisible");
    skills.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");

    compteurx = compteurHobbies;
    makeDotsMoves(compteurx, compteurHobbies);

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteurx}`
    );

    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-19px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = `<p class="font">${hobbiesDetails[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    setTimeout(function () {
      makeDotsMoves(compteurx, compteurHobbies);
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    AskIfWantToSeeAnOtherExperience(compteurx, compteurHobbies);
  }
  //NO
  if (
    e.code == "Enter" &&
    (finalInputVal.includes("non") || finalInputVal.includes("n'ai"))
  ) {
    otherExperienceChoice.insertAdjacentHTML(
      "beforeend",
      `
      <div class="noInputAnswer"></div>
      <div class="noChargingDots">
          <div class="noDots noDotsOne"></div>
          <div class="noDots noDotsTwo"></div>
          <div class="noDots noDotsThree"></div>
      </div>
      <div class="goodByeMessage font"></div>`
    );

    let noInputAnswer = document.querySelector(".noInputAnswer");
    let goodByeMessage = document.querySelector(".goodByeMessage");

    if (document.querySelector(".no")) {
      let noButton = document.querySelector(".no");
      let yesB = document.querySelector(".yes");

      noButton.classList.add("invisible");
      yesB.classList.add("invisible");
    } else {
      let nonCounter = Number(
        document
          .querySelectorAll(".genericNo")
          [
            document.querySelectorAll(".genericNo").length - 1
          ].attributes[1].textContent.slice(8)
      );

      noButton = document.querySelector(`#noButton${nonCounter}`);
      yesButton = document.querySelector(`#yesButton${nonCounter}`);

      yesButton.classList.add("invisible");
      noButton.classList.add("invisible");
    }

    // document.querySelector(".yes").classList.add("invisible");
    // document.querySelector(".no").classList.add("invisible");

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

    no = "fait bouger les boutons de chargements de la catégorie non";
    compteurx = no;

    setTimeout(function () {
      makeDotsMoves(compteurx);
    }, 1000);

    setTimeout(function () {
      goodByeMessage.innerHTML = `<p>Vous pouvez me contacter par mail à l'adresse: kanurebecca0@gmail.com ou par téléphone au: 07.82.43.32.22. À bientôt!<p>`;
      goodByeMessage.style.border = `2px solid #dbdeea`;
      goodByeMessage.style.width = "229px";
      goodByeMessage.style.borderRadius = "6px";
      goodByeMessage.style.paddingLeft = "22px";
      goodByeMessage.style.paddingRight = "13px";
      goodByeMessage.style.marginLeft = "126px";
    }, 3000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 3001);
  }
}
