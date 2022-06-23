/**
 * @file main.js is the js file to the root of the project
 * @see <a href="https://github.com/RebeccaRamalho/Chat_Bot">Github</a>
 */
let rebeccaBoot = document.getElementById("rebeccaBoot");
let chatBot = document.getElementById("chatBot");
let container2 = document.getElementById("container2");
let answer = document.querySelector(".answer");

rebeccaBoot.addEventListener("click", () => {
  container2.innerHTML = `
<div id="chatBot">

            <!------------BOT HEADER------------->

        <div id="botHeader">           
          <a href=""><img src="assets/img/close(1).png" class="cross" /></a>     
        </div>
        
  <div id="chatBotContainer" class="scrollBar">
    

        <div id="logoAndBotTextArea">

            <!-------REBECCA BOT------------->

            <div id="rebeccaBoot rebeccaBootAfterClick"> 

              <div class="cercle cercleAfterClick bootAfterClick">

                  <div class="head headAfterClick">

                    <!--------------ears------------->
                    <div class="firstEar firstEarAfterClick"></div>
                    <div class="secondEar secondEarAfterClick"></div>

                    <!--------------nose------------->
                    <div class="nose noseAfterClick"></div>

                    <!-------Glasses and eyes-------->
                    <div class="firstGlassesWindow firstGlassesWindowAfterClick">
                      <div class="firstEyesAfterClick">.</div>
                    </div>

                    <!-------glasses frame-------->
                    <hr class="hrAfterClick" />
                    

                    <div class="secondGlassesWindow secondGlassesWindowAfterClick">
                      <div class="secondEyesAfterClick">.</div> 
                    </div>

                  </div>
              </div>
            </div>

              <!-------BOT TEXT AREA------------->
            <div class="botTextArea botTextAreaAfterClick">
                 <p>Bonjour 🤓, je m'appelle Rebecca, ma passion pour le code accompagné de ma motivation m'a permis d'apprendre à créer différents types d'applications web.
                 Stimulée par l'apprentissage, j'aimerais pousser les limites de mes connaissances grâce à votre école. 
                 Souhaitez vous en savoir plus sur moi?<br/>
                 <p>
            </div>

        </div> 

      <!--------------BUTTON-------------->

          <!----->
          
       
          <!----->
          
          <div id="button">
                <button type="button" class="yes yesEvent">Oui</button>
                <button type="button" class="no noEvent">Non</button>
          </div>

          <div id="firstSubmitedAnswer" class="userSubmitedAnswer">      
            <div id="firstErrorPLaceholder" class="error"></div>
          </div>
 
    <!----Choose an other experience------> 

      <div id="otherExperienceChoices"></div> 

    

  </div>

      <!------------USER INPUT-------------------->
      <div class="answer">
            <form id="form" onSubmit="return false;">
              <input
                type="text"
                id="userAnswers"
                name="answer"
                placeholder="Ecrivez votre réponse ici"
                onfocus="this.value=''"
              />

          
            </form> 
      </div>

      <div class="sendLogo">
        <img src="assets/img/send(1).png" id="submitMessage"/>
      </div>

      <div id="emoji">
        <div>😀</div>
        <div>😁</div>
        <div>😂</div>
        <div>🤣</div>
        <div>😃</div>
        <div>😄</div>
        <div>😅</div>
        <div>😆</div>
        <div>😉</div>
        <div>😊</div>
        <div>😋</div>
        <div>😇</div>
        <div>😊</div>
        <div>🙂</div>
        <div>🙃</div>
        <div>😉</div>
        <div>😌</div>
        <div>😍</div>

        <div>🥰</div>
        <div>😘</div>
        <div>😗</div>
        <div>😙</div>
        <div>😚</div>
        <div>😋</div>
        <div>😛</div>
        <div>😝</div>
        <div>😜</div>
        <div>🤪</div>
        <div>🤨</div>
        <div>🧐</div>
        <div>🤓</div>
        <div>😎</div>
        <div>🤩</div>
        <div>🥳</div>
        <div>😏</div>
        <div>😒</div>

        <div>😞</div>
        <div>😔</div>
        <div>😟</div>
        <div>😕</div>
        <div>😣</div>
        <div>😖</div>
        <div>😫</div>
        <div>😩</div>
        <div>🥺</div>
        <div>😢</div>
        <div>😭</div>
        <div>😤</div>
        <div>😠</div>
        <div>😡</div>
        <div>🤬</div>
        <div>😱</div>
        <div>😨</div>
        <div>😓</div>

        <div>🤗</div>
        <div>🤔</div>
        <div>🤭</div>
        <div>🤫</div>
        <div>🤥</div>
        <div>😶</div>
        <div>😐</div>
        <div>😑</div>
        <div>😬</div>
        <div>🥱</div>
        <div>😴</div>
        <div>🤢</div>
        <div>🤮</div>
        <div>😈</div>
        <div>💀</div>
        <div>☠️</div>
        <div>👽</div>
        <div>👾</div>

        <div>🤖</div>
        <div>😺</div>
        <div>😹</div>
        <div>😻</div>
        <div>🙀</div>
        <div>😿</div>
        <div>👌</div>
        <div>👏</div>
        <div>🙏</div>
        <div>🕵️‍♀️</div>
        <div>🕵🏿‍♀️</div>
        <div>👩🏾‍🔬</div>
        <div>🧑🏾‍🎨</div>
        <div>👩🏿‍🏫</div>
        <div>👩🏿‍🦱</div>
        <div>🦸</div>
        <div>🦹‍♀️</div>
        <div>💃</div>
        <div>👩‍❤️‍💋‍👨</div>

        <div>🐙</div>
        <div>🦕</div>
        <div>🐬</div>
        <div>🦧</div>
        <div>🦍</div>
      </div>

      <div class="invisible keyCodePressedEntity"></div>

</div>`;
});

//Emoji

rebeccaBoot.addEventListener("click", () => {
  const htmlEmo = Array.from(document.getElementById("emoji").children);
  htmlEmo.forEach((element, index) => {
    let emoInDiv = htmlEmo[index];
    let emoInString = htmlEmo[index].textContent;

    emoInDiv.addEventListener("click", function () {
      let boxMessage = document.getElementById("userAnswers").value;
      const tweets = boxMessage + emoInString;

      document.getElementById("userAnswers").value = tweets;
    });
  });

  const originalEmo = document.getElementById("appearEmo");
  const EmojiId = document.getElementById("emoji");
  let counter = 0;

  originalEmo.addEventListener("click", function () {
    counter += 1;
    if (counter % 2) EmojiId.style.visibility = "visible";
    else EmojiId.style.visibility = "hidden";
  });
});
