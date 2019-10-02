var bombe = document.createElement("div");
bombe.style.height = "40px";
bombe.id = "bombe";
bombe.style.width = "40px";
bombe.style.position = "absolute";
bombe.style.display = "none";
conteneur.appendChild(bombe);
var blastCenter = document.createElement('div');
blastCenter.id = "blastCenter";
var blastLeft = document.createElement('div');
blastLeft.id = "blastLeft";
var blastTop = document.createElement('div');
blastTop.id = "blastTop";
var blastBottom = document.createElement('div');
blastBottom.id = "blastBottom";
var blastRight = document.createElement('div');
blastRight.id = "blastRight";

document.addEventListener("keydown", function (event){

  if(event.keyCode == 32){
    if(bombe.style.display == "none"){
      var positionBombeTop = playerElt.offsetTop;
      var positionBombeLeft = playerElt.offsetLeft;
      bombe.style.top = positionBombeTop + "px";
      bombe.style.left = positionBombeLeft + "px";
      bombe.style.display = "block";
      var tempBombeExploseEffet = setTimeout(function(){
        Explosion();
      }, 1650);
      var tempBombeExplose = setTimeout(function(){
        bombe.style.display = "none";
      }, 1700);
    }
}

});

function Explosion(){
    conteneur.appendChild(blastCenter);
    blastCenter.style.display="block";
    blastCenter.style.backgroundColor = "red";
    blastCenter.style.top= bombe.offsetTop + "px";
    blastCenter.style.left= bombe.offsetLeft + "px";
    blastCenter.style.height="40px";
    blastCenter.style.width="40px";
    blastCenter.style.position = "absolute";


    conteneur.appendChild(blastTop);
    blastTop.style.display="block";
    blastTop.style.backgroundColor = "red";
    blastTop.style.top=bombe.offsetTop - 40 + "px";
    blastTop.style.left=bombe.offsetLeft + "px";
    blastTop.style.height="40px";
    blastTop.style.width="40px";
    blastTop.style.position = "absolute";
    console.log(positionLeft);
    console.log(positionTop);
    if (bombe.offsetTop + 40 == positionTop && bombe.offsetLeft == positionLeft){
      player.style.display = "none";
    }

    conteneur.appendChild(blastBottom);
    blastBottom.style.display="block";
    blastBottom.style.backgroundColor = "red";
    blastBottom.style.top=bombe.offsetTop + 40 + "px";
    blastBottom.style.left=bombe.offsetLeft + "px";
    blastBottom.style.height="40px";
    blastBottom.style.width="40px";
    blastBottom.style.position = "absolute";

    conteneur.appendChild(blastLeft);
    blastLeft.style.display="block";
    blastLeft.style.backgroundColor = "red";
    blastLeft.style.top=bombe.offsetTop + "px";
    blastLeft.style.left=bombe.offsetLeft - 40 + "px";
    blastLeft.style.height="40px";
    blastLeft.style.width="40px";
    blastLeft.style.position = "absolute";

    conteneur.appendChild(blastRight);
    blastRight.style.display="block";
    blastRight.style.backgroundColor = "red";
    blastRight.style.top= bombe.offsetTop + "px";
    blastRight.style.left= bombe.offsetLeft + 40 + "px";
    console.log(bombe.offsetLeft);
    blastRight.style.height="40px";
    blastRight.style.width="40px";
    blastRight.style.position = "absolute";

    ExplosionDisparition()
}
function ExplosionDisparition(){
  setTimeout( function(){
    blastCenter.style.display="none";
    blastRight.style.display="none";
    blastLeft.style.display="none";
    blastBottom.style.display="none";
        blastTop.style.display="none";
  },300)

}
