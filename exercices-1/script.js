
let buttonElt = document.getElementById('bouton1');
// création d'une variable qui contient l'élément bouton1
buttonElt.addEventListener("click", clicOnOff);
// ajout d'un événement qui éxécute la fonction clicOnOff lors du clic sur le boutton
let myImageElt = document.getElementById('myImage');
// ajout d'une variable qui va contenir l'éléments myimage

// fonction qui gére le on off
function clicOnOff() {
  // si myImage.src est égale a l'image éteinte alors allume la!
  if (myImageElt.src=="https://www.w3schools.com/js/pic_bulboff.gif") {
    myImageElt.src='https://www.w3schools.com/js/pic_bulbon.gif';
    console.log("clic !");
    //sinon éteint la
  } else {
    myImageElt.src='https://www.w3schools.com/js/pic_bulboff.gif';
    console.log("clic !");
  }
}
