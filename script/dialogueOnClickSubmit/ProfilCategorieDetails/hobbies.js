/**
 * hobbies details (to refacto into a string)
 * @type {Array}
 */
let hobbiesDetails = [
  [
    `J'aime passer mon temps libre à apprendre de nouvelle chose par la <b>lecture</b> (j'aime les livres de découverte et les BD/Webtoon). J'aime aussi dessiner et faire de la sculpture`,
  ],
];
/**
 * @type {number}
 */
let compteur6 = 1;
document.querySelector("body").addEventListener("click", (event) => {
  let questions7 = [
    [`Quelles expériences souhaitez-vous découvrir?`],
    [`Souhaitez-vous découvrir une autre catégorie de mon profil?`],
  ];
  let compteurHobbies = 1;
  let inputVal = document.querySelector("#userAnswers").value;
  let emptyString = "";
  let otherExperienceChoice = document.querySelector("#otherExperienceChoice");
  let categorieAnswer = document.querySelector("#categoriesAnswer");
  let genericHobbies = document.querySelectorAll(".genericHobbies").length - 1;
  let genericHobbiesAndYesButtonAll = document.querySelectorAll(
    ".genericHobbiesAndYes"
  );
  let genericHobbiesAndYes =
    document.querySelectorAll(".genericHobbiesAndYes").length - 1;
  let functionMakeDotsMoveCounter = 0;
  function scrollToTheBottom() {
    const chatBotContainer = document.querySelector("#chatBotContainer");
    chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
  }
  function makeDotsMoves() {
    let compteurHobbiesAndYesInt = Number(
      document
        .querySelectorAll(".genericHobbiesAndYes")
        [genericHobbiesAndYes].attributes[0].textContent.slice(13)
    );

    compteurHobbies = compteurHobbiesAndYesInt;
    function Chargement(chargingDotsThree, dots, dotsOne, dotsTwo, dotsThree) {
      (this.chargingDotsThree = chargingDotsThree),
        (this.dots = dots),
        (this.dotsOne = dotsOne),
        (this.dotsTwo = dotsTwo),
        (this.dotsThree = dotsThree);
    }

    const firstGroupeOfDots = new Chargement(
      document.querySelector(`.yesPlusCategoryChargingDots${compteurHobbies}`),
      document.querySelector(`.yesPlusCategoryDots${compteurHobbies}`),
      document.querySelector(`.dotsOneYesPlusCategory${compteurHobbies}`),
      document.querySelector(`.dotsTwoYesPlusCategory${compteurHobbies}`),
      document.querySelector(`.dotsThreeYesPlusCategory${compteurHobbies}`)
    );
    const secondeGroupeOfDots = new Chargement(
      document.querySelector(`.yesPlusCategoryChargingDots2${compteurHobbies}`),
      document.querySelector(`.yesPlusCategoryDots2${compteurHobbies}`),
      document.querySelector(`.dotsOneYesPlusCategory2${compteurHobbies}`),
      document.querySelector(`.dotsTwoYesPlusCategory2${compteurHobbies}`),
      document.querySelector(`.dotsThreeYesPlusCategory2${compteurHobbies}`)
    );

    function firstDotsValues() {
      chargingDotsThree = firstGroupeOfDots.chargingDotsThree;
      dots = firstGroupeOfDots.dots;
      dotsOne = firstGroupeOfDots.dotsOne;
      dotsTwo = firstGroupeOfDots.dotsTwo;
      dotsThree = firstGroupeOfDots.dotsThree;
    }
    function secondDotsValues() {
      chargingDotsThree = secondeGroupeOfDots.chargingDotsThree;
      dots = secondeGroupeOfDots.dots;
      dotsOne = secondeGroupeOfDots.dotsOne;
      dotsTwo = secondeGroupeOfDots.dotsTwo;
      dotsThree = secondeGroupeOfDots.dotsThree;
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
  function cleartext() {
    document.querySelector("#form").reset();
  }
  let finalInputVal;
  finalInputVal = inputVal.toLowerCase();

  if (
    event.target.matches("#submitMessage") &&
    //YES
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
    //HOBBIES
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
      finalInputVal.includes("association") ||
      finalInputVal.includes("associations"))
  ) {
    let compteurHobbiesAndYesInt = Number(
      document
        .querySelectorAll(".genericHobbiesAndYes")
        [genericHobbiesAndYes].attributes[0].textContent.slice(13)
    );
    compteurHobbies = compteurHobbiesAndYesInt;
    let yesAndCatAnswer = document.querySelector(
      `#yesAndCatAnswer${compteurHobbies}`
    );
    let genericYes = document.querySelectorAll(".genericYes").length - 1;
    let inputVal = document.querySelector("#userAnswers").value;
    let firstYesButton = document.querySelectorAll(".yesEvent")[0];
    let firstNoButton = document.querySelectorAll(".noEvent")[0];
    let noEventButton;
    let yesEventButton;
    compteur4 = Number(
      document
        .querySelectorAll(".genericYes")
        [genericYes].attributes[1].textContent.slice(9)
    );

    let yesAns = document.querySelector(`#yesAns${compteur4}`);
    if (!inputVal) {
      if (document.querySelector(".yes")) {
        yesAns.classList.add("invisible");

        firstYesButton.style.marginLeft = "350px";
        firstNoButton.classList.add("invisible");

        yesEventButton = document.querySelector(".yes");

        firstNoButton.classList.remove("no");
        firstYesButton.classList.remove("yes");
      } else {
        if (
          document.querySelectorAll(".genericYes")[
            document.querySelectorAll(".genericYes").length - 2
          ]
        ) {
          yesAndCatAnswer.classList.add("invisible");

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
          yesEventButton.style.marginLeft = "350px";
          noEventButton.classList.add("invisible");
        }
      }
    } else {
      if (document.querySelector(".yes")) {
        firstYesButton.classList.add("invisible");
        firstNoButton.classList.add("invisible");

        yesEventButton = document.querySelector(".yes");

        yesAndCatAnswer.style.marginTop = "6px";
        yesAndCatAnswer.style.border = `2px solid #dbdeea`;
        yesAndCatAnswer.style.backgroundColor = "#dbdeea";
        yesAndCatAnswer.style.width = "229px";
        yesAndCatAnswer.style.borderRadius = "6px";
        yesAndCatAnswer.style.paddingLeft = "22px";
        yesAndCatAnswer.style.paddingRight = "13px";
        yesAndCatAnswer.style.marginLeft = "126px";
        yesAndCatAnswer.style.marginBottom = "18px";
        yesAndCatAnswer.innerHTML = `<p class="font">${inputVal}</p>`;

        firstNoButton.classList.remove("no");
        firstYesButton.classList.remove("yes");
      } else {
        if (
          document.querySelectorAll(".genericYes")[
            document.querySelectorAll(".genericYes").length - 2
          ]
        ) {
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

          yesEventButton.classList.add("invisible");
          noEventButton.classList.add("invisible");
        }
      }
    }
    makeDotsMoves();
    setTimeout(function () {
      let experienceDetailsSub = document.querySelector(
        `#experienceDetailsSub${compteurHobbies}`
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
      experienceDetailsSub.innerHTML = `<p class="font">${hobbiesDetails[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    setTimeout(function () {
      makeDotsMoves();
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    function chooseAnOtherExperience() {
      setTimeout(function () {
        let otherExperiencesRequest = document.querySelector(
          `#experiencesSub${compteurHobbies}`
        );
        let yesQuestion = document.querySelector(
          `#yesButton${compteurHobbies}`
        );
        let noQuestion = document.querySelector(`#noButton${compteurHobbies}`);

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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions7[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();
  }
  //2)if user use on of the category keyword (here relative to Scolarity)
  else if (
    event.target.matches("button[class='genericHobbies']>p") ||
    (event.target.matches("#submitMessage") &&
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
        finalInputVal.includes("associations")))
  ) {
    {
      document
        .querySelectorAll(".genericHobbies")
        [genericHobbies].attributes[1].textContent.slice(7)
        ? (compteur6 = Number(
            document
              .querySelectorAll(".genericHobbies")
              [genericHobbies].attributes[1].textContent.slice(7)
          ))
        : (compteur6 = Number(
            event.target.parentElement.attributes[1].textContent.slice(7)
          ));
    }
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteur6}`
    );
    let hobbies = document.querySelector(`#hobbies${compteur6}`);
    {
      !inputVal
        ? ((hobbies.style.marginLeft = "255px"),
          categorieAnswer.classList.add("invisible"))
        : ((categorieAnswer.innerHTML = `<p class="font">${inputVal}</p>`),
          hobbies.classList.add("invisible"));
    }
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
    setTimeout(function () {
      cleartext();
    }, 95);
    let scolarity = document.querySelector(`#scolarity${compteur6}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteur6}`
    );

    let skills = document.querySelector(`#skills${compteur6}`);
    let languages = document.querySelector(`#languages${compteur6}`);

    professionalExperience.classList.add("invisible");
    skills.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");

    function makeDotsMove() {
      function Chargement(
        chargingDotsThree,
        dots,
        dotsOne,
        dotsTwo,
        dotsThree
      ) {
        (this.chargingDotsThree = chargingDotsThree),
          (this.dots = dots),
          (this.dotsOne = dotsOne),
          (this.dotsTwo = dotsTwo),
          (this.dotsThree = dotsThree);
      }

      const firstGroupeOfDots = new Chargement(
        document.querySelector(`.categoriesChargingDots${compteur6}`),
        document.querySelector(`.categoriesDots${compteur6}`),
        document.querySelector(`.categoriesDotsOne${compteur6}`),
        document.querySelector(`.categoriesDotsTwo${compteur6}`),
        document.querySelector(`.categoriesDotsThree${compteur6}`)
      );
      const secondeGroupeOfDots = new Chargement(
        document.querySelector(`.categoriesChargingDots3${compteur6}`),
        document.querySelector(`.categoriesDots3${compteur6}`),
        document.querySelector(`.categoriesDotsOne3${compteur6}`),
        document.querySelector(`.categoriesDotsTwo3${compteur6}`),
        document.querySelector(`.categoriesDotsThree3${compteur6}`)
      );

      function firstDotsValues() {
        chargingDotsThree = firstGroupeOfDots.chargingDotsThree;
        dots = firstGroupeOfDots.dots;
        dotsOne = firstGroupeOfDots.dotsOne;
        dotsTwo = firstGroupeOfDots.dotsTwo;
        dotsThree = firstGroupeOfDots.dotsThree;
      }
      function secondDotsValues() {
        chargingDotsThree = secondeGroupeOfDots.chargingDotsThree;
        dots = secondeGroupeOfDots.dots;
        dotsOne = secondeGroupeOfDots.dotsOne;
        dotsTwo = secondeGroupeOfDots.dotsTwo;
        dotsThree = secondeGroupeOfDots.dotsThree;
      }

      functionMakeDotsMoveCounter += 1;
      {
        functionMakeDotsMoveCounter % 2
          ? firstDotsValues()
          : secondDotsValues();
      }

      {
        functionMakeDotsMoveCounter % 2
          ? (chargingDotsThree.style.marginTop = "-142px")
          : (chargingDotsThree.style.marginTop = "-214px");
      }
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
    makeDotsMove();

    let experienceDetails = document.querySelector(
      `#experienceDetails${compteur6}`
    );
    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-84px";
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
      makeDotsMove();
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    function chooseAnOtherExperience() {
      setTimeout(function () {
        let otherExperiencesRequest = document.querySelector(
          `#experiences${compteur6}`
        );
        let yesQuestion = document.querySelector(`#yesButton${compteur6}`);
        let noQuestion = document.querySelector(`#noButton${compteur6}`);

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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions7[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();
  }
});
