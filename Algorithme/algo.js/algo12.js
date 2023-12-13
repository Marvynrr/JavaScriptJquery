// Cet algorithme calcule la somme de tous les nombres premiers dans un tableau de nombres. 
// Il itère à travers les éléments du tableau, 
// vérifie si chaque élément est un nombre premier à l'aide d'un algorithme de vérification de nombre premier, 
// et ajoute les nombres premiers à la somme.​

function estNombrePremier(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function sommeNombresPremiers(N) {
    let somme = 0;
    for (let i = 2; i <= N; i++) {
        if (estNombrePremier(i)) {
            somme += i;
        }
    }
    return somme;
}

//Exemple d'utilisation avec N = 10
const N = prompt("saisir une valeur");
const resultat = sommeNombresPremiers(N);
alert(`La somme des nombres premiers jusqu'à ${N} est : ${resultat}`);