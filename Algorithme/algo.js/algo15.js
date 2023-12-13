// Cet algorithme calcule la somme de tous les entiers entre deux nombres A et B en utilisant une boucle qui itère de A à B et ajoute chaque nombre à la somme.

function sommeEntreAetB(A, B) {
    if (A > B) {
        // Echange A et B si A est supérieur à B
        [A, B] = [B, A];
    }

    let somme = 0;

    for (let i = A; i <= B; i++) {
        somme += i; // Ajoute chaque nombre de A à B à la somme
    }

    return somme;
}

// Exemple d'utilisation
const nombreA = parseFloat(prompt("Saisir un nombreA"));
const nombreB = parseFloat(prompt("Saisir un nombreB"));
const resultat = sommeEntreAetB(nombreA, nombreB);

alert(`La somme des entiers entre ${nombreA} et ${nombreB} est : ${resultat}`);