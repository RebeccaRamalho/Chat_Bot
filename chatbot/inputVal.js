//OUI
//1_NORMAL INPUT
finalInputVal.includes("oui") ||
  finalInputVal.includes("ok") ||
  finalInputVal.includes("okay") ||
  finalInputVal.includes("ouais") ||
  finalInputVal.includes("dacc") ||
  finalInputVal.includes("tout") || //ajouté
  finalInputVal.includes("toute") || //ajouté
  finalInputVal.includes("entier") || //ajouté
  finalInputVal.includes("intégral") || //ajouté
  finalInputVal.includes("l'entièreté") || //ajouté
  finalInputVal.includes("tous") || //ajouté
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
  finalInputVal.includes("bien-sûr") || //AJOUTÉ
  finalInputVal.includes("tout à fait") ||
  finalInputVal.includes("affirmatif") ||
  finalInputVal.includes("bien entendu") ||
  finalInputVal.includes("évidemment") ||
  finalInputVal.includes("en effet") ||
  finalInputVal.includes("naturellement") ||
  finalInputVal.includes("bien évidemment");

//2_ERROR
(!finalInputVal.includes("oui") &&
  !finalInputVal.includes("ok") &&
  !finalInputVal.includes("okay") &&
  !finalInputVal.includes("ouais") &&
  !finalInputVal.includes("dacc") &&
  !finalInputVal.includes("yep") &&
  !finalInputVal.includes("yes") &&
  !finalInputVal.includes("ouep") &&
  !finalInputVal.includes("si") &&
  !finalInputVal.includes("tous") && //ajouté
  !finalInputVal.includes("tout") && //ajouté
  !finalInputVal.includes("toute") && //ajouté
  !finalInputVal.includes("entier") && //ajouté
  !finalInputVal.includes("intégral") && //ajouté
  !finalInputVal.includes("l'entièreté") && //ajouté
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
  !finalInputVal.includes("bien-sûr") && //AJOUTÉ
  !finalInputVal.includes("tout à fait") &&
  !finalInputVal.includes("affirmatif") &&
  !finalInputVal.includes("bien entendu") &&
  !finalInputVal.includes("évidemment") &&
  !finalInputVal.includes("en effet") &&
  !finalInputVal.includes("naturellement") &&
  !finalInputVal.includes("bien évidemment") &&
  //LANGUES
  //1_NORMAL INPUT
  finalInputVal.includes("langues")) ||
  finalInputVal.includes("langue") ||
  finalInputVal.includes("parlé") ||
  finalInputVal.includes("parler") ||
  finalInputVal.includes("parle") ||
  finalInputVal.includes("parles") ||
  finalInputVal.includes("s'exprimer") ||
  finalInputVal.includes("s'exprime") ||
  finalInputVal.includes("s'exprimes") ||
  finalInputVal.includes("exprime") ||
  finalInputVal.includes("exprimes") ||
  finalInputVal.includes("dialecte") ||
  finalInputVal.includes("dialectes") ||
  finalInputVal.includes("français") || //AJOUTÉ
  finalInputVal.includes("anglais") || //AJOUTÉ
  //2_ERROR
  (!finalInputVal.includes("langues") &&
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
    !finalInputVal.includes("français") && //AJOUTÉ
    !finalInputVal.includes("anglais") && //AJOUTÉ
    //HOBBIES
    //1_NORMAL INPUT
    finalInputVal.includes("centre d'intérêt")) ||
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
  finalInputVal.includes("temps libre") || //nouveau
  finalInputVal.includes("temps libres") || //nouveau
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
  //2_ERROR
  (!finalInputVal.includes("centre d'intérêt") &&
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
    //SCOLARITÉ
    //1_NORMAL INPUT
    finalInputVal.includes("scolarité")) ||
  finalInputVal.includes("scolarités") ||
  finalInputVal.includes("étude") ||
  finalInputVal.includes("études") ||
  finalInputVal.includes("étudié") ||
  finalInputVal.includes("étudie") || //AJOUTER
  finalInputVal.includes("étudiés") ||
  finalInputVal.includes("étudiés") ||
  finalInputVal.includes("cursus") ||
  finalInputVal.includes("diplome") ||
  finalInputVal.includes("diplomé") || //AJOUTER
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
  finalInputVal.includes("facultés");

//2_ERREUR
!finalInputVal.includes("scolarité") &&
  !finalInputVal.includes("scolarités") &&
  !finalInputVal.includes("étudie") && //AJOUTER
  !finalInputVal.includes("étude") &&
  !finalInputVal.includes("études") &&
  !finalInputVal.includes("étudié") &&
  !finalInputVal.includes("étudiés") &&
  !finalInputVal.includes("étudiés") &&
  !finalInputVal.includes("cursus") &&
  !finalInputVal.includes("diplome") &&
  !finalInputVal.includes("diplomé") && //AJOUTER
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
  !finalInputVal.includes("facultés");

//EXPÉRIENCES PRO
//1_NORMAL INPUT
finalInputVal.includes("expériences") ||
  finalInputVal.includes("expérience") ||
  finalInputVal.includes("expériences professionnelles") ||
  finalInputVal.includes("expérience professionnelles") ||
  finalInputVal.includes("expériences professionelles") ||
  finalInputVal.includes("expérience professionelles") ||
  finalInputVal.includes("expériences professionneles") ||
  finalInputVal.includes("expérience professionneles") ||
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
  //ERROR

  (!finalInputVal.includes("expériences") &&
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
    !finalInputVal.includes("startups"));

//SKILLS
//NORMAL INPUT
finalInputVal.includes("compétences") ||
  finalInputVal.includes("s'est") || //AJOUTÉ
  finalInputVal.includes("compétence") ||
  finalInputVal.includes("competences") ||
  finalInputVal.includes("competence") ||
  finalInputVal.includes("aptitude") ||
  finalInputVal.includes("aptitudes") ||
  finalInputVal.includes("savoir") ||
  finalInputVal.includes("faire") ||
  finalInputVal.includes("savoir") ||
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
  finalInputVal.includes("environnement de développement intégré") ||
  //ERROR
  (!finalInputVal.includes("compétences") &&
    !finalInputVal.includes("s'est") && //AJOUTÉ
    !finalInputVal.includes("compétence") &&
    !finalInputVal.includes("competences") &&
    !finalInputVal.includes("competence") &&
    !finalInputVal.includes("aptitude") &&
    !finalInputVal.includes("aptitudes") &&
    !finalInputVal.includes("savoir") &&
    !finalInputVal.includes("faire") &&
    !finalInputVal.includes("savoir") &&
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
    !finalInputVal.includes("environnement de développement intégré"));

//NON
//NORMAL INPUT
(finalInputVal.includes("non") || finalInputVal.includes("n'ai"))(
  //ERROR
  !finalInputVal.includes("non") && !finalInputVal.includes("n'ai")
);
