/**
 * 
 * @param {number} errorCounterOneEnterSubmit 
 * the function make the dots dom element move dynamically depending of a timer
 */
function makeDotsMove(errorCounterOneEnterSubmit) {

  let chargingDotsThree = document.querySelector(
    `.errorCategoriesChargingDots${errorCounterOneEnterSubmit}`
  );

  let dots = document.querySelector(
    `.errorCategoriesDots${errorCounterOneEnterSubmit}`
  );

  let dotsOne = document.querySelector(
    `.errorCategoriesDotsOne${errorCounterOneEnterSubmit}`
  );
  let dotsTwo = document.querySelector(
    `.errorCategoriesDotsTwo${errorCounterOneEnterSubmit}`
  );
  let dotsThree = document.querySelector(
    `.errorCategoriesDotsThree${errorCounterOneEnterSubmit}`
  );

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
      }, pairTimer);
      setTimeout(function () {
        clearInterval(intervalSecondEarMoving);
      }, 400);
    }
    //second dot
    for (let impairTimer = 300; impairTimer <= 400; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsTwo.style.marginTop = "214px";
      }, impairTimer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 400);
    }
    for (let impairTimer = 400; impairTimer <= 500; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
        dotsTwo.style.marginTop = "224px";
      }, impairTimer);
      setTimeout(function () {
        clearInterval(intervalEearMoving);
      }, 500);
    }
    //third dot
    for (let impairTimer = 400; impairTimer <= 500; impairTimer += 100) {
      const intervalEearMoving = setInterval(function () {
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
  }, 3000);
}
function nowChooseAnExperience(errorCounterOneEnterSubmit) {
  let experiences = document.querySelector(
    `#experiencesQuestion${errorCounterOneEnterSubmit}`
  );
  let logoAndBotTextArea = document.querySelector("#logoAndBotTextArea");
  let scolarity = document.querySelector(
    `#scolarity${errorCounterOneEnterSubmit}`
  );
  let professionalExperience = document.querySelector(
    `#professionalExperience${errorCounterOneEnterSubmit}`
  );
  let hobbies = document.querySelector(`#hobbies${errorCounterOneEnterSubmit}`);
  let skills = document.querySelector(`#skills${errorCounterOneEnterSubmit}`);
  let languages = document.querySelector(
    `#languages${errorCounterOneEnterSubmit}`
  );

  experiences.style.visibility = "visible";
  experiences.style.marginTop = "7px";
  logoAndBotTextArea.style.marginTop = "40px";
  scolarity.classList.remove("invisible");
  professionalExperience.classList.remove("invisible");
  hobbies.classList.remove("invisible");
  skills.classList.remove("invisible");
  languages.classList.remove("invisible");
  scolarity.innerHTML = otherExperiencesCategories1[0];
  professionalExperience.innerHTML = otherExperiencesCategories1[3];
  hobbies.innerHTML = otherExperiencesCategories1[1];
  skills.innerHTML = otherExperiencesCategories1[2];
  languages.innerHTML = otherExperiencesCategories1[4];
}

let errorCounterOneEnterSubmit = 1000;

document.addEventListener("keydown", logKey);

function logKey(e) {
  var answersPlaceholder = document.querySelector("#userAnswers");
  let emptyString = "";
  let inputVal = document.querySelector("#userAnswers").value;
  let error = document.querySelector(".error");
  let errorParent = document.querySelector("#firstSubmitedAnswer");
  let secondTypeUserError = document.querySelector(".secondTypeUserError");
  let resubmitOtherExperienceChoices = document.querySelector(
    "#resubmitOtherExperienceChoices"
  );
  let otherExperienceChoice = document.querySelector("#otherExperienceChoices");
  let noEvent;
  let yesEvent;

  let finalInputVal;
  finalInputVal = document.querySelector("#userAnswers").value.toLowerCase();
  if (
    //TOUT INPUT AYANT UN CONTENU
    //   inputVal !== emptyString &&
    e.code == "Enter" &&
    //SCOLARITÉ
    !finalInputVal.includes("scolarité") &&
    !finalInputVal.includes("scolarités") &&
    !finalInputVal.includes("étude") &&
    !finalInputVal.includes("études") &&
    !finalInputVal.includes("étudié") &&
    !finalInputVal.includes("étudiés") &&
    !finalInputVal.includes("étudiés") &&
    !finalInputVal.includes("cursus") &&
    !finalInputVal.includes("diplome") &&
    !finalInputVal.includes("diplomes") &&
    !finalInputVal.includes("diplômes") &&
    !finalInputVal.includes("diplôme") &&
    !finalInputVal.includes("parcours") &&
    !finalInputVal.includes("scolaire") &&
    !finalInputVal.includes("scolaires") &&
    !finalInputVal.includes("instruction") &&
    !finalInputVal.includes("instructions") &&
    !finalInputVal.includes("enseignement") &&
    !finalInputVal.includes("enseignements") &&
    !finalInputVal.includes("enseignemment") &&
    !finalInputVal.includes("enseignemments") &&
    !finalInputVal.includes("discpline") &&
    !finalInputVal.includes("disciplines") &&
    !finalInputVal.includes("discplinne") &&
    !finalInputVal.includes("disciplinnes") &&
    !finalInputVal.includes("cours") &&
    !finalInputVal.includes("projets") &&
    !finalInputVal.includes("projet") &&
    !finalInputVal.includes("branche") &&
    !finalInputVal.includes("branches") &&
    !finalInputVal.includes("spécialité") &&
    !finalInputVal.includes("spécialités") &&
    !finalInputVal.includes("certificat") &&
    !finalInputVal.includes("certificats") &&
    !finalInputVal.includes("université") &&
    !finalInputVal.includes("universités") &&
    !finalInputVal.includes("unniversité") &&
    !finalInputVal.includes("unniversités") &&
    !finalInputVal.includes("bac +") &&
    !finalInputVal.includes("apprentissage") &&
    !finalInputVal.includes("apprentissages") &&
    !finalInputVal.includes("aprentissage") &&
    !finalInputVal.includes("aprentissages") &&
    !finalInputVal.includes("éducations") &&
    !finalInputVal.includes("éducation") &&
    !finalInputVal.includes("formation") &&
    !finalInputVal.includes("formations") &&
    !finalInputVal.includes("formmation") &&
    !finalInputVal.includes("formmations") &&
    !finalInputVal.includes("établissements") &&
    !finalInputVal.includes("établissement") &&
    !finalInputVal.includes("établissemments") &&
    !finalInputVal.includes("établissemment") &&
    !finalInputVal.includes("faculté") &&
    !finalInputVal.includes("facultés") &&
    //LANGUES
    !finalInputVal.includes("langues") &&
    !finalInputVal.includes("langue") &&
    !finalInputVal.includes("parlé") &&
    !finalInputVal.includes("parler") &&
    !finalInputVal.includes("parle") &&
    !finalInputVal.includes("parles") &&
    !finalInputVal.includes("s'exprimer") &&
    !finalInputVal.includes("s'exprime") &&
    !finalInputVal.includes("s'exprimes") &&
    !finalInputVal.includes("exprime") &&
    !finalInputVal.includes("exprimes") &&
    !finalInputVal.includes("dialecte") &&
    !finalInputVal.includes("dialectes") &&
    //HOBBIES
    !finalInputVal.includes("hobbies") &&
    !finalInputVal.includes("centre d'intérêt") &&
    !finalInputVal.includes("centre d'intérêts") &&
    !finalInputVal.includes("centres d'intérêts") &&
    !finalInputVal.includes("centres d'intérêt") &&
    !finalInputVal.includes("loisir") &&
    !finalInputVal.includes("loisirs") &&
    !finalInputVal.includes("passe temps") &&
    !finalInputVal.includes("passes temps") &&
    !finalInputVal.includes("passe-temps") &&
    !finalInputVal.includes("passes-temps") &&
    !finalInputVal.includes("temps-libre") &&
    !finalInputVal.includes("temps-libres") &&
    !finalInputVal.includes("passion") &&
    !finalInputVal.includes("passions") &&
    !finalInputVal.includes("détente") &&
    !finalInputVal.includes("détentes") &&
    !finalInputVal.includes("détent") &&
    !finalInputVal.includes("détens") &&
    !finalInputVal.includes("relaxe") &&
    !finalInputVal.includes("relaxes") &&
    !finalInputVal.includes("délasser") &&
    !finalInputVal.includes("délasse") &&
    !finalInputVal.includes("délasses") &&
    !finalInputVal.includes("s'amuse") &&
    !finalInputVal.includes("s'amuses") &&
    !finalInputVal.includes("temps-libre") &&
    !finalInputVal.includes("temps-libres") &&
    !finalInputVal.includes("en dehors du travail") &&
    !finalInputVal.includes("distrait") &&
    !finalInputVal.includes("distractions") &&
    !finalInputVal.includes("distraction") &&
    !finalInputVal.includes("divertit") &&
    !finalInputVal.includes("divertis") &&
    !finalInputVal.includes("diverti") &&
    !finalInputVal.includes("divertissement") &&
    !finalInputVal.includes("divertissements") &&
    !finalInputVal.includes("s'occuper") &&
    !finalInputVal.includes("s'occupe") &&
    !finalInputVal.includes("s'occupes") &&
    !finalInputVal.includes("occupation") &&
    !finalInputVal.includes("occupations") &&
    !finalInputVal.includes("repos") &&
    !finalInputVal.includes("sport") &&
    !finalInputVal.includes("sports") &&
    !finalInputVal.includes("instrument") &&
    !finalInputVal.includes("instruments") &&
    !finalInputVal.includes("danses") &&
    !finalInputVal.includes("danse") &&
    !finalInputVal.includes("danses") &&
    !finalInputVal.includes("association") &&
    !finalInputVal.includes("associations") &&
    //SKILLS
    !finalInputVal.includes("compétences") &&
    !finalInputVal.includes("compétence") &&
    !finalInputVal.includes("competences") &&
    !finalInputVal.includes("competence") &&
    !finalInputVal.includes("aptitude") &&
    !finalInputVal.includes("aptitudes") &&
    !finalInputVal.includes("faire") &&
    !finalInputVal.includes("faires") &&
    !finalInputVal.includes("savoir faires") &&
    !finalInputVal.includes("savoir faire") &&
    !finalInputVal.includes("savoir-faires") &&
    !finalInputVal.includes("savoir-faire") &&
    !finalInputVal.includes("capacité") &&
    !finalInputVal.includes("capacités") &&
    !finalInputVal.includes("qualification") &&
    !finalInputVal.includes("qualifications") &&
    !finalInputVal.includes("connaissance") &&
    !finalInputVal.includes("connaissances") &&
    !finalInputVal.includes("connaisances") &&
    !finalInputVal.includes("connaisance") &&
    !finalInputVal.includes("conaissance") &&
    !finalInputVal.includes("conaissances") &&
    !finalInputVal.includes("connaissances") &&
    !finalInputVal.includes("faire") &&
    !finalInputVal.includes("habilité") &&
    !finalInputVal.includes("habilités") &&
    !finalInputVal.includes("habillités") &&
    !finalInputVal.includes("habillité") &&
    !finalInputVal.includes("expértise") &&
    !finalInputVal.includes("expértises") &&
    !finalInputVal.includes("soft skills") &&
    !finalInputVal.includes("hard skills") &&
    !finalInputVal.includes("soft-skills") &&
    !finalInputVal.includes("hard-skills") &&
    !finalInputVal.includes("savoir-être") &&
    !finalInputVal.includes("savoir-êtres") &&
    !finalInputVal.includes("savoir être") &&
    !finalInputVal.includes("savoir êtres") &&
    !finalInputVal.includes("qualité") &&
    !finalInputVal.includes("qualités") &&
    !finalInputVal.includes("spécialité") &&
    !finalInputVal.includes("spécialités") &&
    !finalInputVal.includes("notions") &&
    !finalInputVal.includes("notion") &&
    !finalInputVal.includes("techniques") &&
    !finalInputVal.includes("technique") &&
    !finalInputVal.includes("technicité") &&
    !finalInputVal.includes("languages") &&
    !finalInputVal.includes("language") &&
    !finalInputVal.includes("stack") &&
    !finalInputVal.includes("stacks") &&
    !finalInputVal.includes("javascript") &&
    !finalInputVal.includes("react") &&
    !finalInputVal.includes("node") &&
    !finalInputVal.includes("express") &&
    !finalInputVal.includes("css") &&
    !finalInputVal.includes("site") &&
    !finalInputVal.includes("base de donnée") &&
    !finalInputVal.includes("sass") &&
    !finalInputVal.includes("mvc") &&
    !finalInputVal.includes("jwt") &&
    !finalInputVal.includes("back") &&
    !finalInputVal.includes("front") &&
    !finalInputVal.includes("architecture") &&
    !finalInputVal.includes("natif") &&
    !finalInputVal.includes("native") &&
    !finalInputVal.includes("sql") &&
    !finalInputVal.includes("mysql") &&
    !finalInputVal.includes("vanilla") &&
    !finalInputVal.includes("design") &&
    !finalInputVal.includes("pattern") &&
    !finalInputVal.includes("soft skills") &&
    !finalInputVal.includes("qualité") &&
    !finalInputVal.includes("agilité") &&
    !finalInputVal.includes("agile") &&
    !finalInputVal.includes("agiles") &&
    !finalInputVal.includes("librairies") &&
    !finalInputVal.includes("librairie") &&
    !finalInputVal.includes("library") &&
    !finalInputVal.includes("framework") &&
    !finalInputVal.includes("os") &&
    !finalInputVal.includes("système d'exploitation") &&
    !finalInputVal.includes("système d'exploitations") &&
    !finalInputVal.includes("systeme d'exploitation") &&
    !finalInputVal.includes("systeme d'exploitations") &&
    !finalInputVal.includes("workflow") &&
    !finalInputVal.includes("développement") &&
    !finalInputVal.includes("web") &&
    !finalInputVal.includes("axios") &&
    !finalInputVal.includes("linux") &&
    !finalInputVal.includes("mac") &&
    !finalInputVal.includes("postman") &&
    !finalInputVal.includes("slack") &&
    !finalInputVal.includes("discord") &&
    !finalInputVal.includes("cli") &&
    !finalInputVal.includes("command line inter!face") &&
    !finalInputVal.includes("trello") &&
    !finalInputVal.includes("méthodes agiles") &&
    !finalInputVal.includes("méthodes agile") &&
    !finalInputVal.includes("es5") &&
    !finalInputVal.includes("es6") &&
    !finalInputVal.includes("github") &&
    !finalInputVal.includes("ide") &&
    !finalInputVal.includes("visual code") &&
    !finalInputVal.includes("sublime text") &&
    !finalInputVal.includes("gestionnaire de base de donnée") &&
    !finalInputVal.includes("gestionaire de base de donnée") &&
    !finalInputVal.includes("gestionnaire de base de données") &&
    !finalInputVal.includes("gestionaire de base de données") &&
    !finalInputVal.includes("gestionnaire de base de donée") &&
    !finalInputVal.includes("gestionaire de base de donnée") &&
    !finalInputVal.includes("gestionnaire de base de donées") &&
    !finalInputVal.includes("gestionaire de base de données") &&
    !finalInputVal.includes("environnement de développement intégré") &&
    //PROFESSIONAL EXPERIENCES
    !finalInputVal.includes("expériences") &&
    !finalInputVal.includes("expérience") &&
    !finalInputVal.includes("travaillé") &&
    !finalInputVal.includes("travaillés") &&
    !finalInputVal.includes("travailés") &&
    !finalInputVal.includes("travailé") &&
    !finalInputVal.includes("professionnelles") &&
    !finalInputVal.includes("professionnelle") &&
    !finalInputVal.includes("professionelle") &&
    !finalInputVal.includes("professionnele") &&
    !finalInputVal.includes("profesionelle") &&
    !finalInputVal.includes("professionele") &&
    !finalInputVal.includes("professionelles") &&
    !finalInputVal.includes("professionneles") &&
    !finalInputVal.includes("profesionelles") &&
    !finalInputVal.includes("professioneles") &&
    !finalInputVal.includes("accomplissement ") &&
    !finalInputVal.includes("accomplissements") &&
    !finalInputVal.includes("accomplissemment") &&
    !finalInputVal.includes("accomplissemments") &&
    !finalInputVal.includes("accomplisemment") &&
    !finalInputVal.includes("accomplisemments") &&
    !finalInputVal.includes("acomplisemment") &&
    !finalInputVal.includes("acomplisemments") &&
    !finalInputVal.includes("acomplissement") &&
    !finalInputVal.includes("acomplissements") &&
    !finalInputVal.includes("acomplissemments") &&
    !finalInputVal.includes("acomplissemment") &&
    !finalInputVal.includes("activité professionnelle") &&
    !finalInputVal.includes("activité professionnelles") &&
    !finalInputVal.includes("activités professionnelle") &&
    !finalInputVal.includes("activités professionnelles") &&
    !finalInputVal.includes("accomplissement") &&
    !finalInputVal.includes("accomplissements") &&
    !finalInputVal.includes("accomplissemment") &&
    !finalInputVal.includes("accomplissemments") &&
    !finalInputVal.includes("expérience") &&
    !finalInputVal.includes("expériences") &&
    !finalInputVal.includes("profession") &&
    !finalInputVal.includes("professions") &&
    !finalInputVal.includes("profesion") &&
    !finalInputVal.includes("profesions") &&
    !finalInputVal.includes("poste") &&
    !finalInputVal.includes("postes") &&
    !finalInputVal.includes("métier") &&
    !finalInputVal.includes("métiers") &&
    !finalInputVal.includes("fonction") &&
    !finalInputVal.includes("fonctions") &&
    !finalInputVal.includes("travail") &&
    !finalInputVal.includes("travails") &&
    !finalInputVal.includes("emploi") &&
    !finalInputVal.includes("emplois") &&
    !finalInputVal.includes("boulot") &&
    !finalInputVal.includes("boulots") &&
    !finalInputVal.includes("job") &&
    !finalInputVal.includes("jobs") &&
    !finalInputVal.includes("gagne pain") &&
    !finalInputVal.includes("gagne pains") &&
    !finalInputVal.includes("gagnes-pain") &&
    !finalInputVal.includes("gagnes-pains") &&
    !finalInputVal.includes("stage") &&
    !finalInputVal.includes("stages") &&
    !finalInputVal.includes("carrières") &&
    !finalInputVal.includes("carrière") &&
    !finalInputVal.includes("carière") &&
    !finalInputVal.includes("carières") &&
    !finalInputVal.includes("carièrres") &&
    !finalInputVal.includes("carièrre") &&
    !finalInputVal.includes("fonction") &&
    !finalInputVal.includes("fonctions") &&
    !finalInputVal.includes("positions") &&
    !finalInputVal.includes("position") &&
    !finalInputVal.includes("place") &&
    !finalInputVal.includes("places") &&
    !finalInputVal.includes("entreprise") &&
    !finalInputVal.includes("entreprises") &&
    !finalInputVal.includes("domaines") &&
    !finalInputVal.includes("domaine") &&
    !finalInputVal.includes("dommaines") &&
    !finalInputVal.includes("dommaine") &&
    !finalInputVal.includes("charge") &&
    !finalInputVal.includes("charge") &&
    !finalInputVal.includes("chargés") &&
    !finalInputVal.includes("chargé") &&
    !finalInputVal.includes("startup") &&
    !finalInputVal.includes("startups") &&
    //YES
    !finalInputVal.includes("oui") &&
    !finalInputVal.includes("ok") &&
    !finalInputVal.includes("okay") &&
    !finalInputVal.includes("ouais") &&
    !finalInputVal.includes("dacc") &&
    !finalInputVal.includes("yep") &&
    !finalInputVal.includes("yes") &&
    !finalInputVal.includes("ouep") &&
    !finalInputVal.includes("si") &&
    !finalInputVal.includes("d'accord") &&
    !finalInputVal.includes("effectivement") &&
    !finalInputVal.includes("certainement") &&
    !finalInputVal.includes("absolument") &&
    !finalInputVal.includes("totalement") &&
    !finalInputVal.includes("complètement") &&
    !finalInputVal.includes("exactement") &&
    !finalInputVal.includes("assurément") &&
    !finalInputVal.includes("parfaitement") &&
    !finalInputVal.includes("clairement") &&
    !finalInputVal.includes("incontestablement") &&
    !finalInputVal.includes("indéniablement") &&
    !finalInputVal.includes("bien sûr") &&
    !finalInputVal.includes("tout à fait") &&
    !finalInputVal.includes("affirmatif") &&
    !finalInputVal.includes("bien entendu") &&
    !finalInputVal.includes("évidemment") &&
    !finalInputVal.includes("en effet") &&
    !finalInputVal.includes("naturellement") &&
    !finalInputVal.includes("bien évidemment") &&
    //NO
    !finalInputVal.includes("non")
  ) {
    noEvent = document.querySelector(".noEvent");
    noEvent.classList.remove("no");
    yesEvent = document.querySelector(".yesEvent");
    yesEvent.classList.remove("yes");

    if (error) {
      errorCounterOneEnterSubmit += 2000;

      error.insertAdjacentHTML(
        "beforeend",
        `<p class="errorInputVal font inputStyle">${
          document.querySelector("#userAnswers").value
        }</p>
      `
      );

      setTimeout(function () {
        scrollToTheBottom();
      }, 100);

      noEvent.style.marginTop = "12px";
      noEvent.style.marginLeft = "10px";

      setTimeout(function () {
        cleartext();
      }, 1000);

      setTimeout(function () {
        error.insertAdjacentHTML(
          "beforeend",
          `
        <div class="errorCategoriesChargingDots${errorCounterOneEnterSubmit}">

            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsOne${errorCounterOneEnterSubmit}"></div>
            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsTwo${errorCounterOneEnterSubmit}"></div>
            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsThree${errorCounterOneEnterSubmit}"></div>
        </div>

        <div id="yesCounter${errorCounterOneEnterSubmit}" class="yesCounter invisible genericCounter"></div>

        `
        );
      }, 900);

      setTimeout(function () {
        makeDotsMove(errorCounterOneEnterSubmit);
      }, 905);

      setTimeout(function () {
        error.insertAdjacentHTML(
          "beforeend",
          ` 
          <p class="font errorBotAnswer">Je n'ai pas compris...je souhaiterais vous faire découvrir mes expériences professionnelles, êtes vous intéressé?<p>
           <div id="button">
           <button type="button" id="yesButton${errorCounterOneEnterSubmit}" class="yesEvent genericYes">Oui</button>
           <button type="button" id="noButton${errorCounterOneEnterSubmit}" class="noEvent genericNo errorButton">Non</button>
           
           </div>
        `
        );
      }, 7000);

      setTimeout(function () {
        scrollToTheBottom();
      }, 9000);

      return;
    } else {
      if (
        e.code == "Enter" &&
        //TOUT INPUT AYANT UN CONTENU
        //   inputVal !== emptyString &&
        //SCOLARITÉ
        !finalInputVal.includes("scolarité") &&
        !finalInputVal.includes("scolarités") &&
        !finalInputVal.includes("étude") &&
        !finalInputVal.includes("études") &&
        !finalInputVal.includes("étudié") &&
        !finalInputVal.includes("étudiés") &&
        !finalInputVal.includes("étudiés") &&
        !finalInputVal.includes("cursus") &&
        !finalInputVal.includes("diplome") &&
        !finalInputVal.includes("diplomes") &&
        !finalInputVal.includes("diplômes") &&
        !finalInputVal.includes("diplôme") &&
        !finalInputVal.includes("parcours") &&
        !finalInputVal.includes("scolaire") &&
        !finalInputVal.includes("scolaires") &&
        !finalInputVal.includes("instruction") &&
        !finalInputVal.includes("instructions") &&
        !finalInputVal.includes("enseignement") &&
        !finalInputVal.includes("enseignements") &&
        !finalInputVal.includes("enseignemment") &&
        !finalInputVal.includes("enseignemments") &&
        !finalInputVal.includes("discpline") &&
        !finalInputVal.includes("disciplines") &&
        !finalInputVal.includes("discplinne") &&
        !finalInputVal.includes("disciplinnes") &&
        !finalInputVal.includes("cours") &&
        !finalInputVal.includes("projets") &&
        !finalInputVal.includes("projet") &&
        !finalInputVal.includes("branche") &&
        !finalInputVal.includes("branches") &&
        !finalInputVal.includes("spécialité") &&
        !finalInputVal.includes("spécialités") &&
        !finalInputVal.includes("certificat") &&
        !finalInputVal.includes("certificats") &&
        !finalInputVal.includes("université") &&
        !finalInputVal.includes("universités") &&
        !finalInputVal.includes("unniversité") &&
        !finalInputVal.includes("unniversités") &&
        !finalInputVal.includes("bac +") &&
        !finalInputVal.includes("apprentissage") &&
        !finalInputVal.includes("apprentissages") &&
        !finalInputVal.includes("aprentissage") &&
        !finalInputVal.includes("aprentissages") &&
        !finalInputVal.includes("éducations") &&
        !finalInputVal.includes("éducation") &&
        !finalInputVal.includes("formation") &&
        !finalInputVal.includes("formations") &&
        !finalInputVal.includes("formmation") &&
        !finalInputVal.includes("formmations") &&
        !finalInputVal.includes("établissements") &&
        !finalInputVal.includes("établissement") &&
        !finalInputVal.includes("établissemments") &&
        !finalInputVal.includes("établissemment") &&
        !finalInputVal.includes("faculté") &&
        !finalInputVal.includes("facultés") &&
        //LANGUES
        !finalInputVal.includes("langues") &&
        !finalInputVal.includes("langue") &&
        !finalInputVal.includes("parlé") &&
        !finalInputVal.includes("parler") &&
        !finalInputVal.includes("parle") &&
        !finalInputVal.includes("parles") &&
        !finalInputVal.includes("s'exprimer") &&
        !finalInputVal.includes("s'exprime") &&
        !finalInputVal.includes("s'exprimes") &&
        !finalInputVal.includes("exprime") &&
        !finalInputVal.includes("exprimes") &&
        !finalInputVal.includes("dialecte") &&
        !finalInputVal.includes("dialectes") &&
        //HOBBIES
        !finalInputVal.includes("hobbies") &&
        !finalInputVal.includes("centre d'intérêt") &&
        !finalInputVal.includes("centre d'intérêts") &&
        !finalInputVal.includes("centres d'intérêts") &&
        !finalInputVal.includes("centres d'intérêt") &&
        !finalInputVal.includes("loisir") &&
        !finalInputVal.includes("loisirs") &&
        !finalInputVal.includes("passe temps") &&
        !finalInputVal.includes("passes temps") &&
        !finalInputVal.includes("passe-temps") &&
        !finalInputVal.includes("passes-temps") &&
        !finalInputVal.includes("temps-libre") &&
        !finalInputVal.includes("temps-libres") &&
        !finalInputVal.includes("passion") &&
        !finalInputVal.includes("passions") &&
        !finalInputVal.includes("détente") &&
        !finalInputVal.includes("détentes") &&
        !finalInputVal.includes("détent") &&
        !finalInputVal.includes("détens") &&
        !finalInputVal.includes("relaxe") &&
        !finalInputVal.includes("relaxes") &&
        !finalInputVal.includes("délasser") &&
        !finalInputVal.includes("délasse") &&
        !finalInputVal.includes("délasses") &&
        !finalInputVal.includes("s'amuse") &&
        !finalInputVal.includes("s'amuses") &&
        !finalInputVal.includes("temps-libre") &&
        !finalInputVal.includes("temps-libres") &&
        !finalInputVal.includes("en dehors du travail") &&
        !finalInputVal.includes("distrait") &&
        !finalInputVal.includes("distractions") &&
        !finalInputVal.includes("distraction") &&
        !finalInputVal.includes("divertit") &&
        !finalInputVal.includes("divertis") &&
        !finalInputVal.includes("diverti") &&
        !finalInputVal.includes("divertissement") &&
        !finalInputVal.includes("divertissements") &&
        !finalInputVal.includes("s'occuper") &&
        !finalInputVal.includes("s'occupe") &&
        !finalInputVal.includes("s'occupes") &&
        !finalInputVal.includes("occupation") &&
        !finalInputVal.includes("occupations") &&
        !finalInputVal.includes("repos") &&
        !finalInputVal.includes("sport") &&
        !finalInputVal.includes("sports") &&
        !finalInputVal.includes("instrument") &&
        !finalInputVal.includes("instruments") &&
        !finalInputVal.includes("danses") &&
        !finalInputVal.includes("danse") &&
        !finalInputVal.includes("danses") &&
        !finalInputVal.includes("association") &&
        !finalInputVal.includes("associations") &&
        //PROFESSIONAL EXPERIENCES
        !finalInputVal.includes("expériences") &&
        !finalInputVal.includes("expérience") &&
        !finalInputVal.includes("travaillé") &&
        !finalInputVal.includes("travaillés") &&
        !finalInputVal.includes("travailés") &&
        !finalInputVal.includes("travailé") &&
        !finalInputVal.includes("professionnelles") &&
        !finalInputVal.includes("professionnelle") &&
        !finalInputVal.includes("professionelle") &&
        !finalInputVal.includes("professionnele") &&
        !finalInputVal.includes("profesionelle") &&
        !finalInputVal.includes("professionele") &&
        !finalInputVal.includes("professionelles") &&
        !finalInputVal.includes("professionneles") &&
        !finalInputVal.includes("profesionelles") &&
        !finalInputVal.includes("professioneles") &&
        !finalInputVal.includes("accomplissement ") &&
        !finalInputVal.includes("accomplissements") &&
        !finalInputVal.includes("accomplissemment") &&
        !finalInputVal.includes("accomplissemments") &&
        !finalInputVal.includes("accomplisemment") &&
        !finalInputVal.includes("accomplisemments") &&
        !finalInputVal.includes("acomplisemment") &&
        !finalInputVal.includes("acomplisemments") &&
        !finalInputVal.includes("acomplissement") &&
        !finalInputVal.includes("acomplissements") &&
        !finalInputVal.includes("acomplissemments") &&
        !finalInputVal.includes("acomplissemment") &&
        !finalInputVal.includes("activité professionnelle") &&
        !finalInputVal.includes("activité professionnelles") &&
        !finalInputVal.includes("activités professionnelle") &&
        !finalInputVal.includes("activités professionnelles") &&
        !finalInputVal.includes("accomplissement") &&
        !finalInputVal.includes("accomplissements") &&
        !finalInputVal.includes("accomplissemment") &&
        !finalInputVal.includes("accomplissemments") &&
        !finalInputVal.includes("expérience") &&
        !finalInputVal.includes("expériences") &&
        !finalInputVal.includes("profession") &&
        !finalInputVal.includes("professions") &&
        !finalInputVal.includes("profesion") &&
        !finalInputVal.includes("profesions") &&
        !finalInputVal.includes("poste") &&
        !finalInputVal.includes("postes") &&
        !finalInputVal.includes("métier") &&
        !finalInputVal.includes("métiers") &&
        !finalInputVal.includes("fonction") &&
        !finalInputVal.includes("fonctions") &&
        !finalInputVal.includes("travail") &&
        !finalInputVal.includes("travails") &&
        !finalInputVal.includes("emploi") &&
        !finalInputVal.includes("emplois") &&
        !finalInputVal.includes("boulot") &&
        !finalInputVal.includes("boulots") &&
        !finalInputVal.includes("job") &&
        !finalInputVal.includes("jobs") &&
        !finalInputVal.includes("gagne pain") &&
        !finalInputVal.includes("gagne pains") &&
        !finalInputVal.includes("gagnes-pain") &&
        !finalInputVal.includes("gagnes-pains") &&
        !finalInputVal.includes("stage") &&
        !finalInputVal.includes("stages") &&
        !finalInputVal.includes("carrières") &&
        !finalInputVal.includes("carrière") &&
        !finalInputVal.includes("carière") &&
        !finalInputVal.includes("carières") &&
        !finalInputVal.includes("carièrres") &&
        !finalInputVal.includes("carièrre") &&
        !finalInputVal.includes("fonction") &&
        !finalInputVal.includes("fonctions") &&
        !finalInputVal.includes("positions") &&
        !finalInputVal.includes("position") &&
        !finalInputVal.includes("place") &&
        !finalInputVal.includes("places") &&
        !finalInputVal.includes("entreprise") &&
        !finalInputVal.includes("entreprises") &&
        !finalInputVal.includes("domaines") &&
        !finalInputVal.includes("domaine") &&
        !finalInputVal.includes("dommaines") &&
        !finalInputVal.includes("dommaine") &&
        !finalInputVal.includes("charge") &&
        !finalInputVal.includes("charge") &&
        !finalInputVal.includes("chargés") &&
        !finalInputVal.includes("chargé") &&
        !finalInputVal.includes("startup") &&
        !finalInputVal.includes("startups") &&
        //SKILLS
        !finalInputVal.includes("compétences") &&
        !finalInputVal.includes("compétence") &&
        !finalInputVal.includes("competences") &&
        !finalInputVal.includes("competence") &&
        !finalInputVal.includes("aptitude") &&
        !finalInputVal.includes("aptitudes") &&
        !finalInputVal.includes("faire") &&
        !finalInputVal.includes("faires") &&
        !finalInputVal.includes("savoir faires") &&
        !finalInputVal.includes("savoir faire") &&
        !finalInputVal.includes("savoir-faires") &&
        !finalInputVal.includes("savoir-faire") &&
        !finalInputVal.includes("capacité") &&
        !finalInputVal.includes("capacités") &&
        !finalInputVal.includes("qualification") &&
        !finalInputVal.includes("qualifications") &&
        !finalInputVal.includes("connaissance") &&
        !finalInputVal.includes("connaissances") &&
        !finalInputVal.includes("connaisances") &&
        !finalInputVal.includes("connaisance") &&
        !finalInputVal.includes("conaissance") &&
        !finalInputVal.includes("conaissances") &&
        !finalInputVal.includes("connaissances") &&
        !finalInputVal.includes("faire") &&
        !finalInputVal.includes("habilité") &&
        !finalInputVal.includes("habilités") &&
        !finalInputVal.includes("habillités") &&
        !finalInputVal.includes("habillité") &&
        !finalInputVal.includes("expértise") &&
        !finalInputVal.includes("expértises") &&
        !finalInputVal.includes("soft skills") &&
        !finalInputVal.includes("hard skills") &&
        !finalInputVal.includes("soft-skills") &&
        !finalInputVal.includes("hard-skills") &&
        !finalInputVal.includes("savoir-être") &&
        !finalInputVal.includes("savoir-êtres") &&
        !finalInputVal.includes("savoir être") &&
        !finalInputVal.includes("savoir êtres") &&
        !finalInputVal.includes("qualité") &&
        !finalInputVal.includes("qualités") &&
        !finalInputVal.includes("spécialité") &&
        !finalInputVal.includes("spécialités") &&
        !finalInputVal.includes("notions") &&
        !finalInputVal.includes("notion") &&
        !finalInputVal.includes("techniques") &&
        !finalInputVal.includes("technique") &&
        !finalInputVal.includes("technicité") &&
        !finalInputVal.includes("languages") &&
        !finalInputVal.includes("language") &&
        !finalInputVal.includes("stack") &&
        !finalInputVal.includes("stacks") &&
        !finalInputVal.includes("javascript") &&
        !finalInputVal.includes("react") &&
        !finalInputVal.includes("node") &&
        !finalInputVal.includes("express") &&
        !finalInputVal.includes("css") &&
        !finalInputVal.includes("site") &&
        !finalInputVal.includes("base de donnée") &&
        !finalInputVal.includes("sass") &&
        !finalInputVal.includes("mvc") &&
        !finalInputVal.includes("jwt") &&
        !finalInputVal.includes("back") &&
        !finalInputVal.includes("front") &&
        !finalInputVal.includes("architecture") &&
        !finalInputVal.includes("natif") &&
        !finalInputVal.includes("native") &&
        !finalInputVal.includes("sql") &&
        !finalInputVal.includes("mysql") &&
        !finalInputVal.includes("vanilla") &&
        !finalInputVal.includes("design") &&
        !finalInputVal.includes("pattern") &&
        !finalInputVal.includes("soft skills") &&
        !finalInputVal.includes("qualité") &&
        !finalInputVal.includes("agilité") &&
        !finalInputVal.includes("agile") &&
        !finalInputVal.includes("agiles") &&
        !finalInputVal.includes("librairies") &&
        !finalInputVal.includes("librairie") &&
        !finalInputVal.includes("library") &&
        !finalInputVal.includes("framework") &&
        !finalInputVal.includes("os") &&
        !finalInputVal.includes("système d'exploitation") &&
        !finalInputVal.includes("système d'exploitations") &&
        !finalInputVal.includes("systeme d'exploitation") &&
        !finalInputVal.includes("systeme d'exploitations") &&
        !finalInputVal.includes("workflow") &&
        !finalInputVal.includes("développement") &&
        !finalInputVal.includes("web") &&
        !finalInputVal.includes("axios") &&
        !finalInputVal.includes("linux") &&
        !finalInputVal.includes("mac") &&
        !finalInputVal.includes("postman") &&
        !finalInputVal.includes("slack") &&
        !finalInputVal.includes("discord") &&
        !finalInputVal.includes("cli") &&
        !finalInputVal.includes("command line inter!face") &&
        !finalInputVal.includes("trello") &&
        !finalInputVal.includes("méthodes agiles") &&
        !finalInputVal.includes("méthodes agile") &&
        !finalInputVal.includes("es5") &&
        !finalInputVal.includes("es6") &&
        !finalInputVal.includes("github") &&
        !finalInputVal.includes("ide") &&
        !finalInputVal.includes("visual code") &&
        !finalInputVal.includes("sublime text") &&
        !finalInputVal.includes("gestionnaire de base de donnée") &&
        !finalInputVal.includes("gestionaire de base de donnée") &&
        !finalInputVal.includes("gestionnaire de base de données") &&
        !finalInputVal.includes("gestionaire de base de données") &&
        !finalInputVal.includes("gestionnaire de base de donée") &&
        !finalInputVal.includes("gestionaire de base de donnée") &&
        !finalInputVal.includes("gestionnaire de base de donées") &&
        !finalInputVal.includes("gestionaire de base de données") &&
        !finalInputVal.includes("environnement de développement intégré") &&
        //YES
        !finalInputVal.includes("oui") &&
        !finalInputVal.includes("ok") &&
        !finalInputVal.includes("okay") &&
        !finalInputVal.includes("ouais") &&
        !finalInputVal.includes("dacc") &&
        !finalInputVal.includes("yep") &&
        !finalInputVal.includes("yes") &&
        !finalInputVal.includes("ouep") &&
        !finalInputVal.includes("si") &&
        !finalInputVal.includes("d'accord") &&
        !finalInputVal.includes("effectivement") &&
        !finalInputVal.includes("certainement") &&
        !finalInputVal.includes("absolument") &&
        !finalInputVal.includes("totalement") &&
        !finalInputVal.includes("complètement") &&
        !finalInputVal.includes("exactement") &&
        !finalInputVal.includes("assurément") &&
        !finalInputVal.includes("parfaitement") &&
        !finalInputVal.includes("clairement") &&
        !finalInputVal.includes("incontestablement") &&
        !finalInputVal.includes("indéniablement") &&
        !finalInputVal.includes("bien sûr") &&
        !finalInputVal.includes("tout à fait") &&
        !finalInputVal.includes("affirmatif") &&
        !finalInputVal.includes("bien entendu") &&
        !finalInputVal.includes("évidemment") &&
        !finalInputVal.includes("en effet") &&
        !finalInputVal.includes("naturellement") &&
        !finalInputVal.includes("bien évidemment") &&
        //NO
        !finalInputVal.includes("non")
      ) {
        errorCounterOneEnterSubmit += 2000;

        otherExperienceChoice.insertAdjacentHTML(
          "beforeend",
          `          
          <p class="font inputStyle">${
            document.querySelector("#userAnswers").value
          }</p>

          `
        );

        setTimeout(function () {
          cleartext();
        }, 1000);

        setTimeout(function () {
          otherExperienceChoice.insertAdjacentHTML(
            "beforeend",
            ` 
          <div class="errorCategoriesChargingDots${errorCounterOneEnterSubmit}">
            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsOne${errorCounterOneEnterSubmit}"></div>
            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsTwo${errorCounterOneEnterSubmit}"></div>
            <div class="errorCategoriesDots${errorCounterOneEnterSubmit} errorCategoriesDotsThree${errorCounterOneEnterSubmit}"></div>
          </div>`
          );
        }, 900);

        setTimeout(function () {
          makeDotsMove(errorCounterOneEnterSubmit);
        }, 905);

        setTimeout(function () {
          otherExperienceChoice.insertAdjacentHTML(
            "beforeend",
            `<div class="font secondeErrorIpnutStyle">Veuillez-m'excuser mais je n'ai pas compris votre réponse...</div>`
          );
        }, 1000);

        setTimeout(function () {
          otherExperienceChoice.insertAdjacentHTML(
            "beforeend",
            `

          <!------------>

          <div id="experiencesQuestion${errorCounterOneEnterSubmit}" class="font secondeErrorIpnutStyle">Si vous le souhaitez, je peux vous faire découvrir une autre catégorie. Quelle autre catégorie de mon profil souhaiteriez-vous découvrir?</div>

          <div id="categoriesAnswer${errorCounterOneEnterSubmit}"></div>

          <div id="curriculumCategories${errorCounterOneEnterSubmit}">

            <div id="firstRow2">
                <button type="button" id="scolarity${errorCounterOneEnterSubmit}" class="genericScolarity" style=" cursor: pointer;
                height: 40px;
                width: 128px;
                font-family: OpenSans-Light;
                background-color: rgb(231, 230, 227);
                border-radius: 5px;
                padding-left: 3px;
                font-size: 0.8rem;
                text-decoration: none;
                color: black;
                text-align: center; 
                margin-left: 134px;
                ">
                </button>
                <button type="button" id="professionalExperience${errorCounterOneEnterSubmit}" class="genericProfessionalExperience" style=" cursor: pointer;
                height: 62px;
                width: 128px;
                font-family: OpenSans-Light;
                background-color: rgb(231, 230, 227);
                border-radius: 5px;
                padding-left: 3px;
                font-size: 0.8rem;
                text-decoration: none;
                color: black;
                text-align: center; 
                margin-left: 270px;
                margin-top: -51px;
                ">
                </button>
            </div>

            <div id="secondRow2">
                <button type="button" id="hobbies${errorCounterOneEnterSubmit}" class="genericHobbies" style=" cursor: pointer;
                height: 40px;
                width: 128px;
                font-family: OpenSans-Light;
                background-color: rgb(231, 230, 227);
                border-radius: 5px;
                padding-left: 3px;
                font-size: 0.8rem;
                text-decoration: none;
                color: black;
                text-align: center; 
                margin-left: 126px;
                margin-top: -19px;
                ">
                </button>
                <button type="button" id="skills${errorCounterOneEnterSubmit}" class="genericSkills" style=" cursor: pointer;
                height: 40px;
                width: 128px;
                font-family: OpenSans-Light;
                background-color: rgb(231, 230, 227);
                border-radius: 5px;
                padding-left: 3px;
                font-size: 0.8rem;
                text-decoration: none;
                color: black;
                text-align: center; 
                margin-left: 8px;
                margin-top: 5px;
                ">
                </button>
            </div>

            <button type="button" id="languages${errorCounterOneEnterSubmit}" class="genericLanguages" style=" cursor: pointer;
            height: 40px;
            width: 128px;
            font-family: OpenSans-Light;
            background-color: rgb(231, 230, 227);
            border-radius: 5px;
            padding-left: 3px;
            font-size: 0.8rem;
            text-decoration: none;
            color: black;
            text-align: center; 
            margin-left: 134px;
            margin-top: -45px;
            "></button>

            <div class="categoriesChargingDots${errorCounterOneEnterSubmit}">
              <div class="categoriesDots${errorCounterOneEnterSubmit} categoriesDotsOne${errorCounterOneEnterSubmit}"></div>
              <div class="categoriesDots${errorCounterOneEnterSubmit} categoriesDotsTwo${errorCounterOneEnterSubmit}"></div>
              <div class="categoriesDots${errorCounterOneEnterSubmit} categoriesDotsThree${errorCounterOneEnterSubmit}"></div>
            </div>

            <div id="experienceDetails${errorCounterOneEnterSubmit}" class="invisible font" ></div>


          </div>

          <!------>


          <div class="categoriesChargingDots3${errorCounterOneEnterSubmit}">
            <div class="categoriesDots3${errorCounterOneEnterSubmit} categoriesDotsOne3${errorCounterOneEnterSubmit}"></div>
            <div class="categoriesDots3${errorCounterOneEnterSubmit} categoriesDotsTwo3${errorCounterOneEnterSubmit}"></div>
            <div class="categoriesDots3${errorCounterOneEnterSubmit} categoriesDotsThree3${errorCounterOneEnterSubmit}"></div>
          </div>

          <!------>

          <div id="experiences${errorCounterOneEnterSubmit}" class="invisible font"></div>

          <button type="button" id="yesButton${errorCounterOneEnterSubmit}" class="yesEvent invisible genericYes">Oui</button>
          <button type="button" id="noButton${errorCounterOneEnterSubmit}" class="noEvent invisible genericNo">Non</button>

          `
          );
        }, 2000);

        setTimeout(function () {
          nowChooseAnExperience(errorCounterOneEnterSubmit);
        }, 2005);
        setTimeout(function () {
          scrollToTheBottom();
        }, 9000);
      }
    }
  }
}

