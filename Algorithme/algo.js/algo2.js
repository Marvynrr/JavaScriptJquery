function estPalindrome(chaine) {
    // Convertion de la chaine en minuscule et suppression des espaces
    chaine = chaine.toLowerCase().replace(/ /g, '');

    // On inverse la chaîne
    const chaineInverse = chaine.split('').reverse().join('');

    // On compare la chaîne originale avec la chaîne inversée
    if (chaine === chaineInverse) {
        return true;
    } else {
        return false;
    }
}

// On demande à l'utilisateur de saisir une chaine
let saisie = prompt("Entrez une chaine de caractères :");

// On vérifie si la saisie est un palindrome
if (estPalindrome(saisie)) {
    alert(saisie + " est un palindrome.");
} else {
    alert(saisie + " n'est pas un palindrome.");
}