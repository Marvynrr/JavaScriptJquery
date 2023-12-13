// Cet algorithme recherche et identifie les éléments en double dans un tableau. 
// Il utilise un ensemble (ou tableau auxiliaire) pour suivre les éléments déjà vus, 
// et pour chaque nouvel élément du tableau, 
// il vérifie s'il est déjà présent dans l'ensemble.​

function rechercherDoublons(tableau) {
    const elementsEnDouble = {}; // contrairement au tableau, il est initialisé avec les accolades
    const doublons = [];

    for (let i = 0; i < tableau.length; i++) {
        const element = tableau[i];
        if (elementsEnDouble[element] === undefined) {
            // Si l'élément n'a pas été rencontré auparavant, le marquer comme vu
            elementsEnDouble[element] = i;
        } else {
            // Si l'élément a déjà été rencontré, ajouter à la liste des doublons
            if (!doublons.includes(element)) {
                doublons.push(element);
            }
        }
    }

    return doublons;
}

// Exemple d'utilisation
const monTableau = [1, 2, 3, 4, 2, 5, 6, 4];
const doublons = rechercherDoublons(monTableau);

console.log("Les éléments en double sont : " + doublons.join(", "));