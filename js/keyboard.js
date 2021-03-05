/*Virtual Keyboard JS*/
/*Récuperer les touches , les faire correspondre*/
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".text-write-key");
  const textWriting = document.querySelector("#textWriting");
  const nightMode = document.querySelector("#changeMode");
  const capLock = document.querySelector("#caplock");
  const deleteBtn = document.querySelector("#delete");
  const enterKbd = document.querySelector("#enterKbd");
  const space = document.querySelector("#space-key");

  let newValue = "";
  let isUpperCase = false;
  let isNightMode = false;

  // Enter
  enterKbd.addEventListener("click", () => {
    textWriting.value += "\n";
  });
  // space
  space.addEventListener("click", () => {
    textWriting.value += " ";
  });
  // upperCase/lowerCase
  capLock.addEventListener("click", () => {
    if (!isUpperCase) {
      capLock.value = "MIN";
      isUpperCase = true;

      kbdKey.forEach((btn) => {
        btn.value = btn.value.toUpperCase();
      });
    } else {
      capLock.value = "MAJ";
      isUpperCase = false;
      kbdKey.forEach((btn) => {
        btn.value = btn.value.toLowerCase();
      });
    }
  });
  // delete

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
});
// a faire  function pour delete ( suppression dernier char) + function pour le shift ;
// Finaliser la fonction avec le caplock ( changement de style)
