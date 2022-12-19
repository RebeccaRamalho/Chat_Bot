/**
 * professional experiences details
 * @type {Array}
 */
let professionalExperiencesDetails = [
  [
    "<br><b>De Janvier à Mars 2020</b> j'ai été fille Au pair auprès d'une famille à Londres. J'ai effectué comme principales tâches: les soins quotidiens à un enfant atteint d'épilepsie. <br><b> En Mars 2020 (1mois)</b> Femme de chambre à Hôtel Hyatt à Londres -Tâches principales: nettoyage des chambres de l'hôtel. <br><b>De Mai à Juin 2021</b> Développeuse web et web mobile auprès de l'association Hand-of hope <br/> -Tâches principales: réalisation au cours d'un stage d'une application fullstack. <b>De Décembre 2021 à Septembre 2022</b> j'ai éffectué une alternance auprès de la direction générale des finances.<br>-Tâches principale: refonte d'une application interne de workflow",
  ],
];

document.querySelector("body").addEventListener("click", (event) => {
  let questions10 = [
    ["Quelles expériences souhaitez-vous découvrir?"],
    ["Souhaitez-vous découvrir une autre catégorie de mon profil?"],
  ];

  let compteur3 = 1;
  let compteurProfessionalExperiences = 1;
  let yes = ["oui", "OUI"];
  let inputVal = document.querySelector("#userAnswers").value;
  let emptyString = "";
  let otherExperienceChoice = document.querySelector("#otherExperienceChoice");

  let genericProfessionalExperience =
    document.querySelectorAll(".genericProfessionalExperience").length - 1;
  let genericProfessionalExperienceAndYesButtonAll = document.querySelectorAll(
    ".genericProfessionalExperienceAndYes"
  );
  let genericProfessionalExperienceAndYes =
    document.querySelectorAll(".genericProfessionalExperienceAndYes").length -
    1;
  let functionMakeDotsMoveCounter = 0;

  function scrollToTheBottom() {
    const chatBotContainer = document.querySelector("#chatBotContainer");
    chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
  }
  //
  //
  function makeDotsMoves() {
    let compteurProfessionalExperiencesAndYesInt = Number(
      document
        .querySelectorAll(".genericProfessionalExperienceAndYes")
        [genericProfessionalExperienceAndYes].attributes[0].textContent.slice(
          28
        )
    );

    compteurProfessionalExperiences = compteurProfessionalExperiencesAndYesInt;

    //test
    // constructor function
    function Chargement(chargingDotsThree, dots, dotsOne, dotsTwo, dotsThree) {
      (this.chargingDotsThree = chargingDotsThree),
        (this.dots = dots),
        (this.dotsOne = dotsOne),
        (this.dotsTwo = dotsTwo),
        (this.dotsThree = dotsThree);
    }

    // creating objects
    const firstGroupeOfDots = new Chargement(
      document.querySelector(
        `.yesPlusCategoryChargingDots${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.yesPlusCategoryDots${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsOneYesPlusCategory${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsTwoYesPlusCategory${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsThreeYesPlusCategory${compteurProfessionalExperiences}`
      )
    );
    const secondeGroupeOfDots = new Chargement(
      document.querySelector(
        `.yesPlusCategoryChargingDots2${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.yesPlusCategoryDots2${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsOneYesPlusCategory2${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsTwoYesPlusCategory2${compteurProfessionalExperiences}`
      ),
      document.querySelector(
        `.dotsThreeYesPlusCategory2${compteurProfessionalExperiences}`
      )
    );

    //à chaque appel de fonction on incrémente d'un
    //lorsque le compteur est un chiffre pair
    //alors les boutons de chargements prennent la valeur de firstGroupeOfDots
    //sinon les boutons de chargements prennent a valeur de secondeGroupeOfDots

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
      //
    }, 1000);
    //After X secondes stop the dot movement and make them invisible
    setTimeout(function () {
      dotsOne.style.visibility = "hidden";
      dotsTwo.style.visibility = "hidden";
      dotsThree.style.visibility = "hidden";
      //
      clearInterval(intervalDotMOving);
    }, 2000);
  }

  function cleartext() {
    document.querySelector("#form").reset();
  }

  //Transformation of lowerCase to UpperCase
  let finalInputVal;
  finalInputVal = inputVal.toLowerCase();

  //CONDITION
  //1)if user use several keyword "oui" + catgory key word like "Scolarité"
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
    //PROFESSIONAL EXPERIENCES
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
    let compteurProfessionalExperiencesAndYesInt = Number(
      document
        .querySelectorAll(".genericProfessionalExperienceAndYes")
        [genericProfessionalExperienceAndYes].attributes[0].textContent.slice(
          28
        )
    );
    //
    compteurProfessionalExperiences = compteurProfessionalExperiencesAndYesInt;
    //
    let yesAndCatAnswer = document.querySelector(
      `#yesAndCatAnswer${compteurProfessionalExperiences}`
    );

    let genericYes = document.querySelectorAll(".genericYes").length - 1;
    let inputVal = document.querySelector("#userAnswers").value;
    //
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
    }
    //InputVal
    else {
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
    //5_i make the element which is initially invisible => visible and if the user choose scolarity show him what is inside scolarityDetails array
    setTimeout(function () {
      let experienceDetailsSub = document.querySelector(
        `#experienceDetailsSub${compteurProfessionalExperiences}`
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
      experienceDetailsSub.innerHTML = `<p class="font">${professionalExperiencesDetails[0]}</p>`;
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    //6_when the scolarity experience his shown, the user can choose an other experience again
    setTimeout(function () {
      makeDotsMoves();
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    //7_
    function chooseAnOtherExperience() {
      setTimeout(function () {
        //request to the DOM of the user response html element
        let otherExperiencesRequest = document.querySelector(
          `#experiencesSub${compteurProfessionalExperiences}`
        );
        let yesQuestion = document.querySelector(
          `#yesButton${compteurProfessionalExperiences}`
        );
        let noQuestion = document.querySelector(
          `#noButton${compteurProfessionalExperiences}`
        );

        setTimeout(function () {
          //after 7500ms move the answer to the top so they can be space for the following questions
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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions10[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();
    //
    return;
  }
  //2)if user use on of the category keyword (here relative to Scolarity)
  else if (
    event.target.matches("button[class='genericProfessionalExperience']>p") ||
    (event.target.matches("#submitMessage") &&
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
        finalInputVal.includes("startups")))
  ) {
    {
      document
        .querySelectorAll(".genericProfessionalExperience")
        [genericProfessionalExperience].attributes[1].textContent.slice(22)
        ? (compteur3 = Number(
            document
              .querySelectorAll(".genericProfessionalExperience")
              [genericProfessionalExperience].attributes[1].textContent.slice(
                22
              )
          ))
        : (compteur3 = Number(
            event.target.parentElement.attributes[1].textContent.slice(22)
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
    ///
    setTimeout(function () {
      cleartext();
    }, 95);
    //1_dom request
    let scolarity = document.querySelector(`#scolarity${compteur3}`);
    let hobbies = document.querySelector(`#hobbies${compteur3}`);
    let skills = document.querySelector(`#skills${compteur3}`);
    let languages = document.querySelector(`#languages${compteur3}`);

    //2_make the other experiences categories invisibles
    hobbies.classList.add("invisible");
    skills.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");

    //3_dots chargements
    function makeDotsMove() {
      //test
      // constructor function
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

      // creating objects
      const firstGroupeOfDots = new Chargement(
        document.querySelector(`.categoriesChargingDots${compteur3}`),
        document.querySelector(`.categoriesDots${compteur3}`),
        document.querySelector(`.categoriesDotsOne${compteur3}`),
        document.querySelector(`.categoriesDotsTwo${compteur3}`),
        document.querySelector(`.categoriesDotsThree${compteur3}`)
      );
      const secondeGroupeOfDots = new Chargement(
        document.querySelector(`.categoriesChargingDots3${compteur3}`),
        document.querySelector(`.categoriesDots3${compteur3}`),
        document.querySelector(`.categoriesDotsOne3${compteur3}`),
        document.querySelector(`.categoriesDotsTwo3${compteur3}`),
        document.querySelector(`.categoriesDotsThree3${compteur3}`)
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

      //when the user click on the button yes make the 3 dots move x time and during 3 secondes
      // chargingDotsThree.style.marginTop = "-214px";
      {
        functionMakeDotsMoveCounter % 2
          ? (chargingDotsThree.style.marginTop = "-142px")
          : (chargingDotsThree.style.marginTop = "-214px");
      }
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
        //
      }, 1000);
      //After X secondes stop the dot movement and make them invisible
      setTimeout(function () {
        dotsOne.style.visibility = "hidden";
        dotsTwo.style.visibility = "hidden";
        dotsThree.style.visibility = "hidden";
        //
        clearInterval(intervalDotMOving);
      }, 2000);
    }
    // //
    makeDotsMove();

    // //4_i retreive the html element to the DOM where i want to push my scolarity details
    let experienceDetails = document.querySelector(
      `#experienceDetails${compteur3}`
    );
    //5_i make the element which is initially invisible => visible and if the user choose scolarity show him what is inside scolarityDetails array
    setTimeout(function () {
      experienceDetails.classList.remove("invisible");
      experienceDetails.style.marginTop = "-84px";
      experienceDetails.style.marginTop = "-84px";
      experienceDetails.style.border = `2px solid#dbdeea`;
      // (experienceDetails.style.backgroundColor = "#dbdeea"),
      experienceDetails.style.width = "229px";
      experienceDetails.style.borderRadius = "6px";
      experienceDetails.style.paddingLeft = "22px";
      experienceDetails.style.paddingRight = "13px";
      experienceDetails.style.marginLeft = "126px";
      experienceDetails.innerHTML = professionalExperiencesDetails[0];
    }, 1500);

    setTimeout(function () {
      scrollToTheBottom();
    }, 2000);

    //6_when the scolarity experience his shown, the user can choose an other experience again
    setTimeout(function () {
      makeDotsMove();
    }, 4000);

    setTimeout(function () {
      scrollToTheBottom();
    }, 6000);

    //7_
    function chooseAnOtherExperience() {
      setTimeout(function () {
        //request to the DOM of the user response html element
        let otherExperiencesRequest = document.querySelector(
          `#experiences${compteur3}`
        );
        let yesQuestion = document.querySelector(`#yesButton${compteur3}`);
        let noQuestion = document.querySelector(`#noButton${compteur3}`);

        setTimeout(function () {
          //after 7500ms move the answer to the top so they can be space for the following questions
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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions10[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();

    //
  }
});
