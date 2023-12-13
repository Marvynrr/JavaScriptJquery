// Cet algorithme remplace toutes les occurrences d'un élément donné par un autre élément dans un tableau en utilisant une boucle qui parcourt le tableau et effectue le remplacement lorsque l'élément est trouvé.

function remplacerElement(tableau, ancienElement, nouvelElement) {
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === ancienElement) {
            tableau[i] = nouvelElement;
        }
    }
    return tableau
}

// Exemple d'utilisation
const monTableau = [1, 2, 3, 2, 4, 2, 5];
const ancienElement = 2;
const nouvelElement = parseFloat(prompt("Saisir le nouvel élément pour remplacer le chiffre 2"));
const resultat = remplacerElement(monTableau, ancienElement, nouvelElement);

alert("Tableau après le remplacement : " + resultat.join(", "));