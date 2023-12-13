// L'opérateur modulo (%) en JavaScript permet de calculer 
// le reste de la division entre deux nombres. 
// Voici un exemple d'algorithme en JavaScript utilisant 
// l'opérateur modulo pour déterminer si un nombre est pair ou impair :

function estPairOuImpair(nombre) {
    if (nombre % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

const nombre1 = prompt("Saisir un premier nombre");
const nombre2 = prompt("Saisir un deuxieme nombre");

alert( + nombre1 + " est un nombre " + estPairOuImpair(nombre1) + " et " + nombre2 + " est un nombre " + estPairOuImpair(nombre2) + "." );