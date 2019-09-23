
//liste des liens a afficher 
var listeLiens = [
    {
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
// appelle de cette fonction
creerBoutton();
creerFormulaire();

// on creer ici une fonction qui va prendre en paramétre 
// les liens a afficher
function creerElementLien(lien){

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
    let divElt = document.createElement("div")
    divElt.style.backgroundColor = "white";
    divElt.classList.add("lien")
    divElt.appendChild(titreElt);
    divElt.appendChild(auteurElt);
    document.body.appendChild(divElt);

    // on retourne divElt qui va contenir tout les éléments
    return divElt;
}
// les problémes sont resolu notre usine a lien est terminé :)



// on déclare la variable "contenu" pour qu'on puisse 
// par la suite inserrer les éléments lien plusieurs fois
let contenu = document.getElementById("contenu");



// ici grace à la fonction forEach on gagne quelques lignes de code :)
// Car elle va parcourir tout les éléments du tableau pour nous.
// comme une boucle For ;)
// on fini par creer un dernière variable pour que celle ci creer
// les éléments en boucle sans oublier le paramétre a prendre en compte!  
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});




//maintenant on creer un nouveau boutton qui va creer un événement
function creerBoutton() {
    let contenu = document.getElementById("contenu");
    let buttonElt = document.createElement("button");
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
    buttonElt.addEventListener("click", function(){
        if(document.querySelector("form").style.display == "none"){
            document.querySelector("form").style.display = "flex";
        }
        if(buttonElt.style.display == "block"){
            buttonElt.style.display = "none";
        }
    })

    return buttonElt;
}






// on ajoute un nouveau formulaire
function creerFormulaire() {

    //création du formulaire
    let formElt = document.createElement("form");
    formElt.style.display = "none";
    formElt.style.alignItems = "center";
    let contenu = document.getElementById("contenu");
    contenu.appendChild(formElt);

    //création du premier champ
    let p1Elt = document.createElement("p");
    p1Elt.style.width = "20%";
    p1Elt.style.marginRight = "15px";
    formElt.appendChild(p1Elt);
    let label1Elt = document.createElement("label");
    label1Elt.for = "pseudo";
    p1Elt.appendChild(label1Elt);
    let input1Elt = document.createElement("input");
    input1Elt.type = "text";
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
    input3Elt.required = "true";
    input3Elt.style.borderRadius = "3px";
    input3Elt.style.border = "1px solid #c5c5c5";
    input3Elt.style.height = "30px";
    input3Elt.style.width = "100%";
    input3Elt.placeholder = " Entrez L'URL du lien";
    p3Elt.appendChild(input3Elt);
    let span3Elt = document.createElement("span");
    p3Elt.appendChild(span3Elt);

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

    //vérification des données saisi lors de l'envoi



    return formElt;
    
}






// on creer le nouveau lien a afficher