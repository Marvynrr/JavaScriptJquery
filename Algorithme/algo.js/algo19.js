// Vous pouvez utiliser cette fonction avec n'importe quel 
// tableau pour calculer le produit de ses éléments.

function trouverMaximum(tableau) {
    let maximum = tableau[0];
    for(let i = 1; i < tableau.length; i++) {
        if (tableau[i] > maximum) {
            maximum = tableau[i];
        }
    }
    return maximum;
}

const monTableau = [5, 3, 9, 1, 8, 2, 38, 14, 78];
const maximum = trouverMaximum(monTableau);
console.log("Le maximum du tableau est : " + maximum);