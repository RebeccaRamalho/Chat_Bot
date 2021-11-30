let experienceDetailsTexte9 = [
  [
    "-Je sais développer un site de bout en bout (côté front-end comme côté back-end) avec le langage <b>Javascript<b/>,l'écosystème de <b>Node.js</b> et la librairie React.<br/>-Je sais concevoir et manipuler une base de donnée via les outils <b>MySQL<b/> et les <b>ORM Sequelize et Mongoose.<b/><br/> -Je sais gérer mes projets via le gestionnaire de version <b>GIT</b> et via <b>GITHUB</b>",
    ,
  ],
];
let compteur3 = 1;

document.querySelector("body").addEventListener("click", (event) => {
  let questions9 = [
    [`Quelles expériences souhaitez-vous découvrir?`],
    [`Souhaitez-vous découvrir une autre expérience?`],
  ];
  // let compteur3 = 1;
  let compteurCompetence = 1;
  let yes = ["oui", "OUI"];
  let inputVal = document.querySelector("#userAnswers").value;
  let emptyString = "";
  let otherExperienceChoice = document.querySelector("#otherExperienceChoice");
  let categorieAnswer = document.querySelector("#categoriesAnswer");
  let genericSkills = document.querySelectorAll(".genericSkills").length - 1;
  let genericSkillsAndYesButtonAll = document.querySelectorAll(
    ".genericSkillsAndYes"
  );
  let genericSkillsAndYes =
    document.querySelectorAll(".genericSkillsAndYes").length - 1;
  let functionMakeDotsMoveCounter = 0;

  //
  function scrollToTheBottom() {
    const chatBotContainer = document.querySelector("#chatBotContainer");
    chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
  }
  //
  function makeDotsMoves() {
    let compteurSkillsAndYesInt = Number(
      document
        .querySelectorAll(".genericSkillsAndYes")
        [genericSkillsAndYes].attributes[0].textContent.slice(12)
    );

    compteurCompetence = compteurSkillsAndYesInt;

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
        `.yesPlusCategoryChargingDots${compteurCompetence}`
      ),
      document.querySelector(`.yesPlusCategoryDots${compteurCompetence}`),
      document.querySelector(`.dotsOneYesPlusCategory${compteurCompetence}`),
      document.querySelector(`.dotsTwoYesPlusCategory${compteurCompetence}`),
      document.querySelector(`.dotsThreeYesPlusCategory${compteurCompetence}`)
    );
    const secondeGroupeOfDots = new Chargement(
      document.querySelector(
        `.yesPlusCategoryChargingDots2${compteurCompetence}`
      ),
      document.querySelector(`.yesPlusCategoryDots2${compteurCompetence}`),
      document.querySelector(`.dotsOneYesPlusCategory2${compteurCompetence}`),
      document.querySelector(`.dotsTwoYesPlusCategory2${compteurCompetence}`),
      document.querySelector(`.dotsThreeYesPlusCategory2${compteurCompetence}`)
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
  //
  function cleartext() {
    document.querySelector("#form").reset();
  }
  //transformation of UpperCase into LowerCase
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
    //SKILLS
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
    let compteurSkillsAndYesInt = Number(
      document
        .querySelectorAll(".genericSkillsAndYes")
        [genericSkillsAndYes].attributes[0].textContent.slice(12)
    );

    compteurCompetence = compteurSkillsAndYesInt;

    let yesAndCatAnswer = document.querySelector(
      `#yesAndCatAnswer${compteurCompetence}`
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
        `#experienceDetailsSub${compteurCompetence}`
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
      experienceDetailsSub.innerHTML = `<p class="font">${experienceDetailsTexte9[0]}</p>`;
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
          `#experiencesSub${compteurCompetence}`
        );
        let yesQuestion = document.querySelector(
          `#yesButton${compteurCompetence}`
        );
        let noQuestion = document.querySelector(
          `#noButton${compteurCompetence}`
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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions9[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();
    //
    return;
  }
  //2)if user use on of the category keyword (here relative to Scolarity)
  else if (
    event.target.matches("button[class='genericSkills']>p") ||
    (event.target.matches("#submitMessage") &&
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
        finalInputVal.includes("environnement de développement intégré")))
  ) {
    {
      document
        .querySelectorAll(".genericSkills")
        [genericSkills].attributes[1].textContent.slice(6)
        ? (compteur3 = Number(
            document
              .querySelectorAll(".genericSkills")
              [genericSkills].attributes[1].textContent.slice(6)
          ))
        : (compteur3 = Number(
            event.target.parentElement.attributes[1].textContent.slice(6)
          ));
    }
    let categorieAnswer = document.querySelector(
      `#categoriesAnswer${compteur3}`
    );
    let skills = document.querySelector(`#skills${compteur3}`);

    {
      !inputVal
        ? ((skills.style.marginLeft = "254px"),
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
    //1_dom request
    let scolarity = document.querySelector(`#scolarity${compteur3}`);
    let professionalExperience = document.querySelector(
      `#professionalExperience${compteur3}`
    );
    let hobbies = document.querySelector(`#hobbies${compteur3}`);
    let languages = document.querySelector(`#languages${compteur3}`);

    //2_make the other experiences categories invisibles
    professionalExperience.classList.add("invisible");
    hobbies.classList.add("invisible");
    scolarity.classList.add("invisible");
    languages.classList.add("invisible");
    //2_push the scolarity categories to the right

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
      // const thirdGroupeOfDots = new Chargement(
      //   document.querySelector(`.categoriesChargingDots3${compteur3}`),
      //   document.querySelector(`.categoriesDots3${compteur3}`),
      //   document.querySelector(`.categoriesDotsOne3${compteur3}`),
      //   document.querySelector(`.categoriesDotsTwo3${compteur3}`),
      //   document.querySelector(`.categoriesDotsThree3${compteur3}`)
      // );

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
      experienceDetails.style.border = `2px solid#dbdeea`;
      // (experienceDetails.style.backgroundColor = "#dbdeea"),
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
        otherExperiencesRequest.innerHTML = `<p class="font">${questions9[1]}</p>`;
      }, 5000);
    }
    chooseAnOtherExperience();
  }
});
