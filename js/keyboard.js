/*Virtual Keyboard JS*/
/*Récuperer les touches , les faire correspondre*/
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".text-write-key");
  const textWriting = document.querySelector("#textWriting");
  const nightMode = document.querySelector("#changeMode");
  const capLock = document.querySelector("#caplock");
  const capLockLed = document.querySelector(".majColor");
  const padLock = document.querySelector(".fa-lock-open");
  const shiftKey = document.querySelector("#shiftKey");
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
      capLockLed.classList.replace("majColor", "ledOn");
      padLock.classList.replace("fa-lock-open", "fa-lock");
      kbdKey.forEach((btn) => {
        btn.value = btn.value.toUpperCase();
        shiftKey.value = "MAJ";
      });
    } else {
      capLock.value = "MAJ";
      isUpperCase = false;
      capLockLed.classList.replace("ledOn", "majColor");
      padLock.classList.replace("fa-lock", "fa-lock-open");
      kbdKey.forEach((btn) => {
        btn.value = btn.value.toLowerCase();
        shiftKey.value = "MIN";
      });
    }
  });

  //ShiftKey
  shiftKey.addEventListener("click", () => {
    if (!isUpperCase) {
      textWriting.value = textWriting.value.toUpperCase();
      shiftKey.value = "MAJ";
      isUpperCase = true;
    } else {
      isUpperCase = false;
      shiftKey.value = "MIN";
    }
  });
  // delete ( à finaliser (suppression de toute la chaine de caractère et problème lorsqu'il reste qu'un seul caractère))
  deleteBtn.addEventListener("click", () => {
    textWriting.value = textWriting.value.substr(" ", -1);
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

  // text writing
  kbdKey.forEach((val) => {
    val.addEventListener("click", (event) => {
      newValue = event.target.value;
      textWriting.value += newValue;
    });
  });
});

// voir pour faire des event avec les keypress / keyup
