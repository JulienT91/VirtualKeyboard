/*Virtual Keyboard JS*/
/*Récuperer les touches , les faire correspondre*/
window.addEventListener("load", () => {
  const kbdKey = document.querySelectorAll(".kbd-key");
  const textWriting = document.querySelector("#textWriting");
  const upperCase = document.querySelector("#shiftkey");
  const nightMode = document.querySelector("#changeMode");
  let newValue = "";
  let isUppercase = false;
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
  // Delete function
  const deleteValue = (val) => {
    const lastCharDelete = val.slice(-1); // on utilise slice(-1) pour supprimer la dernière valeur
    textWriting.value = val.replace(lastCharDelete, ""); // on remplace la dernière valeur par une string vide
  };

  // space Function
});
