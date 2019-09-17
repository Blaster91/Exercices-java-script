

/*function clicOn() {
    onclick=document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
    console.log("clic !");


function clicOff() {
    onclick=document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
    console.log("clic !");
}

let bouton1Elt = document.getElementById("bouton1");
bouton1Elt.addEventListener("click", clicOn);
let bouton2Elt = document.getElementById("bouton2");
bouton2Elt.addEventListener("click", clicOff); */
let buttonElt = document.getElementById('bouton1');
buttonElt.addEventListener("click", clicOnOff);
// ajout d'un événement qui éxécute la fonction
let myImageElt = document.getElementById('myImage');


// fonction qui gére le on off
function clicOnOff() {
  if (myImageElt.src=="https://www.w3schools.com/js/pic_bulboff.gif") {
    myImageElt.src='https://www.w3schools.com/js/pic_bulbon.gif';
    console.log("clic !");
  } else {
    myImageElt.src='https://www.w3schools.com/js/pic_bulboff.gif';
    console.log("clic !");
  }
}
