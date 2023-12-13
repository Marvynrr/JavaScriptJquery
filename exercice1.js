let donnees = [1, 26, 84, 51, 97];

function calculerSomme(tableau){
    let somme=0;
    return tableau.reduce((acc,valeur) => acc + valeur,0);     
}
let somme = calculerSomme(donnees);
console.log('La somme de tous les éléments du tableau est ', somme);
