// Je déclare un tableau
let donnees = [12,5,8,18,10,13,69];
// Fonction pour calculer la somme
function calculerSomme(tableau){
    // Identique à reduce
let somme =0;
for(i=0 ; i<=tableau.length ; i++){
    somme += tableau[i];
}
    // Reduce
    //return tableau.reduce((acc,valeur) => acc + valeur,0); 
}
// Fonction pour calculer la moyenne
function calculMoyenne(tableau){
    let somme = calculerSomme(tableau);
    return somme/tableau.length;
}
// Fonction pour trouver le maximum (de vitesse)
function trouverMaximum(tableau){
    return Math.max(...tableau);
}
// Exemple d'utilisation
let somme = calculerSomme(donnees);
console.log('Somme des données :', somme);
let moyenne = calculMoyenne(donnees);
console.log('Moyenne des données :', moyenne);
let maximum = trouverMaximum(donnees);
console.log('Valeur maximale des données :', maximum);