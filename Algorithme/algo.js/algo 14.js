// Cet algorithme calcule le produit de tous les éléments d'un tableau en utilisant une boucle qui itère à travers les éléments du tableau et multiplie chaque élément par le produit partiel.

function multiplicationElementsTableau(tableau) {
    if (tableau.length === 0) {
        return 0; // Si le tableau est vide, le produit est 0
    }

    let produit = 1; // Initialise le produit à 1

    for (let i = 0; i < tableau.length; i++) {
        produit *= tableau[i]; // Mulitplie le produit par l'élément actuel
    }

    return produit;
}

// Exemple d'utilisation
const monTableau = [2, 3, 4, 5];
const produit = multiplicationElementsTableau(monTableau);

console.log("Le produit des éléments du tableau est : " + produit);