let tableau = [1, 2 ,3 ,4];

function rechercherElement(tableau, elementRecherche){
    for(let i=0 ; i<tableau.length ; i++){
        if(tableau[i] === elementRecherche){
            return i;
        }
    }
    return -1;
}

let recherche = prompt("Entrez un chiffre jusqu'à 4 à rechercher");

let resultat = rechercherElement(tableau, recherche);

if (resultat !== -1) {
    alert(recherche + " a été trouvé à l'indice " + resultat + " dans le tableau.");
 } else {
    alert(recherche + " n'a pas été trouvé dans le tableau.");
}