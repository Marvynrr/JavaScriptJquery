function factorielle(n) {
    if (n < 0) {
        return "La factorielle n'est définie que pour les nombres positifs. ";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultat = 1;
        for (let i = 2; i<= n; i++) {
            resultat *= i;
        }
        return resultat;
    }
}

// Demande à l'utilisateur de saisir un nombre
let nombre = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));

// Calcule la factorielle
let resultatFactorielle = factorielle(nombre);

alert("La factorielle de " + nombre + " est : " + resultatFactorielle);