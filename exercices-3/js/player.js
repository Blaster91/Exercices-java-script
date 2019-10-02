var playerElt = document.getElementById('player');
var conteneurElt = document.getElementById('conteneur');
var allSize = 40;
var conteneurRect = conteneurElt.getBoundingClientRect();
var playerRect = playerElt.getBoundingClientRect();
var positionLeft = (playerElt.offsetLeft - allSize);
var positionTop = (playerElt.offsetTop + allSize);


// ajout d'un événement qui va récupéré les touches appuyer pour faire bouger le cube
    document.addEventListener("keydown", function(event){

// si l'événement(qui récupère les valeurs du clavier) est égale à fléche du haut alors éxecute ce code {...}
          if (event.code == 'ArrowUp') {
            //si playerRect.top est supérieur a divRect.top alors éxecute ce code {...}
            if(playerRect.top > conteneurRect.top){
                playerElt.style.top = (playerElt.offsetTop - allSize) + "px";
            }

          }
          else if (event.code == 'ArrowRight') {
            if(playerRect.right < conteneurRect.right){
                playerElt.style.left = (playerElt.offsetLeft + allSize) + "px";
            }

          }
          else if (event.code == 'ArrowDown') {
            if(playerRect.bottom < conteneurRect.bottom){
                playerElt.style.top = (playerElt.offsetTop + allSize)+"px";
            }

          }
          else if (event.code == 'ArrowLeft') {
            if(playerRect.left > conteneurRect.left){
                playerElt.style.left = (playerElt.offsetLeft - allSize)+"px";
            }
          }

          // console.log("conteneurRect = left : " + conteneurRect.left + " top : " + conteneurRect.top + " right : " + conteneurRect.right + " bottom : " + conteneurRect.bottom);
          // console.log("playerRect = left : " + playerRect.left + " top : " + playerRect.top + " right : " + playerRect.right + " bottom : " + playerRect.bottom);
          conteneurRect = conteneurElt.getBoundingClientRect();
          playerRect = playerElt.getBoundingClientRect();
    });
