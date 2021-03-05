/*Virtual Keyboard JS*/
/*Récuperer les touches , les faire correspondre*/
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".text-write-key");
  const textWriting = document.querySelector("#textWriting");
  const toUpperCase = document.querySelector("#shiftKey");
  const nightMode = document.querySelector("#changeMode");
  const capLock = document.querySelector("#caplock");
  const deleteBtn = document.querySelector("#delete");
  const enterKbd = document.querySelector("#enterKbd");
  const space = document.querySelector("#space-key");

  let newValue = "";
  let isUpperCase = false;
  let isNightMode = false;

  // Night Mode function
  // on créer un évenement au click

  nightMode.addEventListener("click", () => {
    if (!isNightMode) {
      nightMode.value = "NIGHT / OFF";
      // on crée un nouveau lien pour ajouter le css night mode
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "css/keyboard-night.css";
      // on va chercher ce lien dans l'index 0 des lien de HEAD
      document.getElementsByTagName("HEAD")[0].appendChild(link);
      isNightMode = true;
    } else {
      isNightMode = false;
      nightMode.value = "NIGHT / ON";
      // on remove le lien qu'on viens de créer
      document.getElementsByTagName("link")[2].remove();
    }
  });

  // text writing
  kbdKey.forEach((val) => {
    val.addEventListener("click", (event) => {
      newValue = event.target.value;
      textWriting.value += newValue;
    });
  });

  // Enter
  // à chaque fois que je clique sur la touche enter , je dois produire un saut de ligne ( /n );
  // récuperer le contenu de texte aréa , ajouter un saut de ligne à chaque évenement click;
  enterKbd.addEventListener("click", (e) => {
    let textOnTextArea = textWriting.innerHTML;
    e.value = textOnTextArea += "/n";
  });
});
// a faire : fonction pour la touche entrée(retour ligne) , fonction pour la touche capLock(texte en upperCase + style qui change) , function pour delete ( suppression dernier char)
// fonction espace (+= " ");
