/**
 * categories counter for two type of response: either the user only respond the catgory choice either he answer yes + a category
 *
 * @type {number}
 */

let compteur = 0;
let compteurYesPlusCat = 0;
let otherExperienceQuestion = [
  [`<p>Quelle catégorie de mon profil souhaitez-vous découvrir?</p>`],
  [`<p>Souhaitez-vous découvrir une autre catégorie?</p>`],
];
let otherExperiencesCategories = [
  "<p>Scolarité</p>",
  "<p>Hobbies</p>",
  "<p>Compétences</p>",
  "<p>Expériences professionelles</p>",
  "<p>Langues</p>",
];

let sendCounterSubmit = 0;

function animateYesAnswers() {
  let genericYes = document.querySelectorAll(".genericYes").length - 1;
  let inputVal = document.querySelector("#userAnswers").value;
  let firstYesButton = document.querySelectorAll(".yesEvent")[0];
  let firstNoButton = document.querySelectorAll(".noEvent")[0];
  let noEventButton;
  let yesEventButton;

  sendCounterSubmit = Number(
    document
      .querySelectorAll(".genericYes")
      [genericYes].attributes[1].textContent.slice(9)
  );

  let yesAns = document.querySelector(`#yesAns${sendCounterSubmit}`);

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
        yesAns.classList.add("invisible");

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
      // yesAns.classList.add("invisible");

      firstYesButton.classList.add("invisible");
      firstNoButton.classList.add("invisible");

      yesEventButton = document.querySelector(".yes");

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

        yesEventButton.classList.add("invisible");
        noEventButton.classList.add("invisible");
      }
    }
  }
}
function makeDotsMove2() {
  //Parent div
  let chargingDotsThree = document.querySelector(
    `.chargingDots${sendCounterSubmit}`
  );
  //Same class for all dot div
  let dots = document.querySelector(`.dots${sendCounterSubmit}`);
  //Different class for every dot div
  let dotsOne = document.querySelector(`.dotsOne${sendCounterSubmit}`);
  let dotsTwo = document.querySelector(`.dotsTwo${sendCounterSubmit}`);
  let dotsThree = document.querySelector(`.dotsThree${sendCounterSubmit}`);

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
    //
  }, 1000);
  //After X secondes stop the dot movement and make them invisible
  setTimeout(function () {
    dotsOne.style.visibility = "hidden";
    dotsTwo.style.visibility = "hidden";
    dotsThree.style.visibility = "hidden";
    //
    clearInterval(intervalDotMOving);
  }, 3000);
}

function nowChooseAnExperience2() {
  let experiences = document.querySelector(
    `#experiencesQuestion${sendCounterSubmit}`
  );
  let logoAndBotTextArea = document.querySelector("#logoAndBotTextArea");
  //
  let scolarity = document.querySelector(`#scolarity${sendCounterSubmit}`);
  let professionalExperience = document.querySelector(
    `#professionalExperience${sendCounterSubmit}`
  );
  let hobbies = document.querySelector(`#hobbies${sendCounterSubmit}`);
  let skills = document.querySelector(`#skills${sendCounterSubmit}`);
  let languages = document.querySelector(`#languages${sendCounterSubmit}`);

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
  professionalExperience.style.marginTop = "-51px";
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
  /* border: 2px solid #0e2356; */
  hobbies.style.backgroundColor = "#e7e6e3";
  hobbies.style.borderRadius = "5px";
  hobbies.style.marginLeft = "137px";
  hobbies.style.marginTop = "-21px";
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

document.querySelector("body").addEventListener("click", async (event) => {
  let inputVal = document.querySelector("#userAnswers").value;
  let error = document.querySelector(".error");
  let errorParent = document.querySelector("#firstSubmitedAnswer");
  let otherExperienceChoice = document.querySelector("#otherExperienceChoices");
  let emptyString = "";
  let severalKeyWords = document.querySelector(".severalKeyWords");
  let severalKeyWordsSecondPlaceholder = document.querySelector(
    ".severalKeyWordsSecondPlaceholder"
  );

  //_
  function cleartext() {
    document.querySelector("#form").reset();
  }
  //_
  function scrollToTheBottom() {
    const chatBotContainer = document.querySelector("#chatBotContainer");
    chatBotContainer.scrollTop = chatBotContainer.scrollHeight;
  }
  //_input transformation into lowerCase if necessary
  let finalInputVal;
  finalInputVal = inputVal.toLowerCase();
  //YES + CATEGORIES ON CLICK
  if (
    event.target.matches("#submitMessage") && //oui
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
    compteurYesPlusCat += 2;

    // setTimeout(function () {
    otherExperienceChoice.insertAdjacentHTML(
      "beforeend",

      `
      <div id="yesAndCatAnswer${compteurYesPlusCat}"></div>
 
      <div class="yesPlusCategoryChargingDots${compteurYesPlusCat}">
            <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsOneYesPlusCategory${compteurYesPlusCat}"></div>
            <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsTwoYesPlusCategory${compteurYesPlusCat}"></div>
            <div class="yesPlusCategoryDots${compteurYesPlusCat} dotsThreeYesPlusCategory${compteurYesPlusCat}"></div>
      </div>

      <p id="scolariyAndYes${compteurYesPlusCat}" class="genericscolariyAndYes"></p>
      <p id="skillsAndYes${compteurYesPlusCat}" class="genericSkillsAndYes"></p>
      <p id="hobbiesAndYes${compteurYesPlusCat}" class="genericHobbiesAndYes"></p>
      <p id="languagesAndYes${compteurYesPlusCat}" class="genericLanguagesAndYes"></p>
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

    setTimeout(function () {
      cleartext();
      scrollToTheBottom();
    }, 100);
    setTimeout(function () {
      scrollToTheBottom();
    }, 4500);
    setTimeout(function () {
      scrollToTheBottom();
    }, 5600);

    return;
  }
  //YES ON CLICK
  else if (
    event.target.matches(".yesEvent") ||
    (event.target.matches("#submitMessage") &&
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
        finalInputVal.includes("bien évidemment")))
  ) {
    compteurYesPlusCat += 2;

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

    animateYesAnswers();
    makeDotsMove2();

    setTimeout(function () {
      scrollToTheBottom();
    }, 3000);
    
    setTimeout(function () {
      nowChooseAnExperience2();
    }, 4000);

    setTimeout(function () {
      cleartext();
    }, 100);
    setTimeout(function () {
      scrollToTheBottom();
    }, 4500);

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
    }, 200);
  }
});
