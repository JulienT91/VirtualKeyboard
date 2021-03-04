/*Virtual Keyboard JS*/
/*Récuperer les touches , les faire correspondre*/
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".text-write-key");
  const textWriting = document.querySelector("#textWriting");
  const toUpperCase = document.querySelector("#shiftkey");
  const nightMode = document.querySelector("#changeMode");
  const capLock = document.querySelector("#caplock");
  const enterKbd = document.querySelector("#enterKbd");

  let newValue = "";
  let isUpperCase = false;
  let isNightMode = false;

  // text writing
  kbdKey.forEach((val) => {
    val.addEventListener("click", (event) => {
      newValue = event.target.value;
      textWriting.value += newValue;
    });
  });

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

  // upperCase
  toUpperCase.addEventListener("click", () => {
    if (!isUpperCase) {
      toUpperCase.value = "MIN";
      isUpperCase = true;
      document.querySelectorAll("#text-writing-key").forEach((kbd) => {
        kbdKey.value.toUpperCase;
        kbd.value = kbd.value.toUpperCase();
      });
    } else {
      toUpperCase.value = "MAJ";
      isUpperCase = false;
      document.querySelectorAll("#text-writing-key").forEach((kbd) => {
        kbd.value = kbd.value.toLowerCase();
      });
    }
  });

  // space
  const space = (value) => {
    value.value += " ";
  };
});
// a faire : fonction pour la touche entrée , fonction pour la touche capLock
