// Cet algorithme prend un tableau de chaînes de caractères 
// et les concatène pour former une seule chaîne en utilisant 
// une boucle pour parcourir le tableau et ajouter chaque 
// chaîne à la chaîne résultante.

function concatenerTableaudeChaines(tableau) {
    let resultat = "";

    for (let i = 0; i < tableau.length; i++) {
        resultat += tableau[i];
    }

    return resultat;
}

// Exemple d'utilisation
const monTableau = ["Bonjour, ", "comment ", "ça va ", "?"];
const resultat = concatenerTableaudeChaines(monTableau);

alert("Résultat de la concaténation : " + resultat);