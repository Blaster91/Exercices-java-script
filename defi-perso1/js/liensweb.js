// ici je déclare le container ou la div temporaire va apparaitre
let divContainer = document.createElement("div");
divContainer.style.display = "flex";
divContainer.style.justifyContent = "center";
divContainer.style.flexDirection = "column";
divContainer.style.alignItems = "center";

// ici le titre
let titreActivity = document.createElement('h1');
titreActivity.textContent = "Activité 2";
divContainer.appendChild(titreActivity);
document.body.appendChild(divContainer);

//liste des liens a afficher
var listeLiens = [{
    titre: "So Foot",
    url: "http://sofoot.com",
    auteur: "yann.usaille"
  },
  {
    titre: "Guide d'autodéfense numérique",
    url: "http://guide.boum.org",
    auteur: "paulochon"
  },
  {
    titre: "L'encyclopédie en ligne Wikipedia",
    url: "http://Wikipedia.org",
    auteur: "annie.zette"
  }
];
// appelle de ces fonctions
bodyChangeCss();
creerBoutton();
creerFormulaire();

// on creer ici une fonction qui va prendre en paramétre
// les liens a afficher
function creerElementLien(lien) {

  //creation du titre et de l'url + un peu de css
  let titreElt = document.createElement("h4");
  titreElt.style.margin = "0px";
  let titreLienElt = document.createElement("a");
  titreLienElt.textContent = lien.titre;
  titreLienElt.href = lien.url;
  titreLienElt.style.marginRight = "5px";
  titreLienElt.style.textDecoration = "none";
  titreLienElt.style.color = "#428bca";
  titreElt.appendChild(titreLienElt);
  let titreUrlElt = document.createElement("span");
  titreUrlElt.textContent = lien.url;
  titreElt.appendChild(titreUrlElt);

  //création de l'auteur du lien
  let auteurElt = document.createElement("span");
  auteurElt.textContent = "Ajouté par " + lien.auteur;

  //création du conteneur qui va tenir les éléments creer juste avant
  let sousDiv = document.createElement("div");
  sousDiv.style.backgroundColor = "white";
  sousDiv.classList.add("lien");
  sousDiv.appendChild(titreElt);
  sousDiv.appendChild(auteurElt);
  document.body.appendChild(divElt);
  divElt.appendChild(sousDiv);

  // on retourne divElt qui va contenir tout les éléments
  return divElt;
}
// on déclare la variable "contenu" pour qu'on puisse
// par la suite inserrer les éléments lien plusieurs fois
let contenu = document.getElementById("contenu");
let divElt = document.createElement("div");
divElt.style.display = "flex";
divElt.style.flexDirection = "column-reverse";
divElt.id = "sous-div";

// ici grace à la fonction forEach on gagne quelques lignes de code
// Car elle va parcourir tout les éléments du tableau pour nous.
// un peu comme une boucle For
// on fini par creer un dernière variable pour que celle ci creer
// les éléments en boucle sans oublier le paramétre a prendre en compte
listeLiens.forEach(function(lien) {
  var elementLien = creerElementLien(lien);
  contenu.appendChild(elementLien);
})
//maintenant on creer un nouveau boutton qui sera en add event listener "click" c'est a dire
// que si on clic sur le bouton addEventListener pourra executer la fonction qui suit.
function creerBoutton() {
  let contenu = document.getElementById("contenu");
  let buttonElt = document.createElement("button");
  buttonElt.id = "button-ajouter-lien";
  buttonElt.textContent = "Ajouter un lien";
  buttonElt.style.display = "block";
  buttonElt.style.fontWeight = "bold";
  buttonElt.style.height = "21px";
  buttonElt.style.width = "150px";
  buttonElt.style.margin = "30px 0 37px 0";
  buttonElt.style.backgroundColor = "white";
  buttonElt.style.border = "1px solid rgb(197, 197, 197)";
  buttonElt.style.borderRadius = "6px";
  buttonElt.style.boxShadow = "0px 1px 2px dimgrey";
  contenu.appendChild(buttonElt);
  buttonElt.addEventListener("click", function() {
    if (document.querySelector("form").style.display == "none") {
      document.querySelector("form").style.display = "flex";
    }
    if (buttonElt.style.display == "block") {
      buttonElt.style.display = "none";
    }
  })
  return buttonElt;
}
// la je déclare la div temporaire pour qu'elle soit accessible dans la fonction qui la rendra temporaire
let divTempElt = document.createElement("div");
divTempElt.id = "temparyDiv";
divContainer.appendChild(divTempElt);

// ici j'ajoute une fonction qui va creer le formulaire
function creerFormulaire() {

  //création de la balise form
  let formElt = document.createElement("form");
  formElt.id = "formulaireLien";
  formElt.style.display = "none";
  formElt.style.margin = "0px 0px 22px";
  formElt.style.alignItems = "center";
  let contenu = document.getElementById("contenu");
  contenu.appendChild(formElt);

  //création des champs input
  let p1Elt = document.createElement("p");
  p1Elt.style.width = "20%";
  p1Elt.style.marginRight = "15px";
  formElt.appendChild(p1Elt);
  let label1Elt = document.createElement("label");
  p1Elt.appendChild(label1Elt);
  let input1Elt = document.createElement("input");
  input1Elt.type = "text";
  input1Elt.id = "nom";
  input1Elt.required = "true";
  input1Elt.style.borderRadius = "3px";
  input1Elt.style.border = "1px solid #c5c5c5";
  input1Elt.style.height = "30px";
  input1Elt.style.width = "100%";
  input1Elt.placeholder = " Entrez votre nom";
  p1Elt.appendChild(input1Elt);
  let span1Elt = document.createElement("span");
  p1Elt.appendChild(span1Elt);

  let p2Elt = document.createElement("p");
  p2Elt.style.width = "30%";
  p2Elt.style.marginRight = "15px";
  formElt.appendChild(p2Elt);
  let label2Elt = document.createElement("label");
  p2Elt.appendChild(label2Elt);
  let input2Elt = document.createElement("input");
  input2Elt.id = "titre-lien";
  input2Elt.type = "text";
  input2Elt.required = "true";
  input2Elt.style.borderRadius = "3px";
  input2Elt.style.border = "1px solid #c5c5c5";
  input2Elt.style.height = "30px";
  input2Elt.style.width = "100%";
  input2Elt.placeholder = " Entrez le titre du lien";
  p2Elt.appendChild(input2Elt);
  let span2Elt = document.createElement("span");
  p2Elt.appendChild(span2Elt);

  let p3Elt = document.createElement("p");
  p3Elt.style.width = "30%";
  p3Elt.style.marginRight = "15px";
  formElt.appendChild(p3Elt);
  let label3Elt = document.createElement("label");
  p3Elt.appendChild(label3Elt);
  let input3Elt = document.createElement("input");
  input3Elt.type = "text";
  input3Elt.id = "lien";
  input3Elt.required = "true";
  input3Elt.style.borderRadius = "3px";
  input3Elt.style.border = "1px solid #c5c5c5";
  input3Elt.style.height = "30px";
  input3Elt.style.width = "100%";
  input3Elt.placeholder = " Entrez L'URL du lien";
  p3Elt.appendChild(input3Elt);
  let span3Elt = document.createElement("span");
  p3Elt.appendChild(span3Elt);

// création du boutton submit
  let submitElt = document.createElement("input");
  submitElt.type = "submit";
  submitElt.value = "Ajouter";
  submitElt.style.backgroundColor = "white";
  submitElt.style.border = "1px solid rgb(197, 197, 197)";
  submitElt.style.height = "21px";
  submitElt.style.width = "80px";
  submitElt.style.borderRadius = "6px";
  submitElt.style.fontWeight = "bold";
  submitElt.style.boxShadow = "0px 1px 2px dimgrey";
  formElt.appendChild(submitElt);
  //ici on annule ce qui ce passe par défault quand on clic sur le boutton submit. c'est a dire que le bouton ne cherchera pas à envoyé les //infos sur une page php
  formElt.addEventListener("submit", function(e) {
    e.preventDefault();
    //la je déclare les varables qui vont contenir les valeurs inscrite dans le formulaire lors de l'événement submit
    let nom = document.getElementById("nom");
    let titre = document.getElementById("titre-lien");
    let lien = document.getElementById("lien");
//ici les valeur récupéré du formulaire son push dans listeLien
    listeLiens.push({
      titre: titre.value,
      url: lien.value,
      auteur: nom.value
    })
    //on fait disparaitre le formulaire
    formElt.style.display = "none";
//on efface un par un les éléments
    listeLiens.forEach(function(lien) {
      let divRefresh = document.getElementById('sous-div');
      divRefresh.innerHTML = "";
    })
    //on recreer un par un les éléments suivi du nouveau
    listeLiens.forEach(function(lien) {
      var elementLien = creerElementLien(lien);
      contenu.appendChild(elementLien);
    })

    function divTemporaire() {
      divTempElt.style.width = "100%";
      divTempElt.style.display = "flex";
      divTempElt.style.justifyContent = "center";
      let sousDivTempEly = document.createElement("div")
      sousDivTempEly.id = "sous-div-temp";
      sousDivTempEly.style.marginBottom = "20px";
      sousDivTempEly.style.display = "flex";
      sousDivTempEly.style.justifyContent = "center";
      sousDivTempEly.style.flexDirection = "column";
      sousDivTempEly.style.height = "100px";
      sousDivTempEly.style.width = "80%";
      sousDivTempEly.style.backgroundColor = "#d6ecf6";
      sousDivTempEly.style.borderRadius = "5px";
      sousDivTempEly.style.paddingLeft = "50px";
      sousDivTempEly.style.boxShadow = "0px 0px 15px #d6d6d6";
      divTempElt.appendChild(sousDivTempEly);
      let texteDivTempElt = document.createElement("p");
      texteDivTempElt.textContent = 'Le lien "' + titre.value + '" a bien été ajouté ';
      texteDivTempElt.style.color = "#2c7aac";
      texteDivTempElt.style.fontSize = "1.1em";
      sousDivTempEly.appendChild(texteDivTempElt);
      return divContainer;
    }
divTemporaire();
divHidden();
function divHidden() {
  intervalID = setTimeout(function(){
    let selectDiv = document.getElementById("temparyDiv");
    selectDiv.innerHTML = "";
    // ici je récupére le bouton ajouter un lien pour qu'il puisse réaparaitre que maintenant car il est inutilisable tant que la div
    //temporaire ne réaparait pas
        let buttonAjouterLienREfresh = document.getElementById("button-ajouter-lien");
        buttonAjouterLienREfresh.style.display = "block";
  }, 2000);
}
  })
  //comparé si http:// ou https:// est bien écrit sinon rajouté http://
  document.getElementById("lien").addEventListener("input", function(e) {
    var httpElt = "http://, https://";
    if (e.target.value.indexOf("http://") === -1) {
      // le text saisi ne contiens pas http:// alors:
      console.log("il n'y a pas de http://");
    }
    if (e.target.value.indexOf("https://") === -1) {
      // le text saisi ne contiens pas http:// alors:
      console.log("il n'y a pas de https://");
    }
  })
  return formElt;
}
// ici je change quelques propriété CSS sur body
function bodyChangeCss() {
  bodyElt = document.body;
  bodyElt.style.display = "flex";
  bodyElt.style.flexDirection = "column-reverse";
  return bodyElt;
}
