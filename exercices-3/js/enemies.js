document.body.onload = addEnemies;

function addEnemies(){
  for (var i = 0; i < 3; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'enemies');
    document.getElementById("conteneur").appendChild(div);
    randomPos(div);
  }
}
function getRandomPosition(){
  var randomX = Math.floor(Math.random()*(15));
  var randomY = Math.floor(Math.random()*(30));
  return [randomX,randomY];
}


function randomPos(elem){
  var xy = getRandomPosition();
  var x = xy[0]*40;
  var y = xy[1]*40;
  elem.style.top = x + 'px';
  elem.style.left = y + 'px';
}
