function calculIMC(poids, taille) {
    // Formule de l'IMC : poids (en kg) / (taille (en m) * taille (en m))
    const imc = poids / (taille * taille);
    return imc;
}

// Demande à l'utiliseur de saisir son poids (en kg)
let poids = parseFloat(prompt("Entrez votre poids en kilogrammes :"));

// Demande à l'utilisateur de saisir sa taille (en m)
let taille = parseFloat(prompt("Entrez votre taille en mètres :"));

// Calcul l'IMC
const imc = calculIMC(poids, taille);

//On affiche l'IMC
console.log("votre IMC est " + imc);

// Interprétation de l'IMC
if(imc < 18.5) {
    alert("Mangez des Kouign-Amann");
} else if(imc >= 18.5 && imc < 24.9) {
    alert("N'abusez pas des bonnes choses vous êtes bien")
} else if(imc >= 25 && imc < 29.9) {
    alert("Le gras c'est la vie");
} else {
    alert("La bretagne ça vous gagne");
}