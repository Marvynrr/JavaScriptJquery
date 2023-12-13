// Cet algorithme est une méthode simple pour inverser une 
// chaîne de caractères en JavaScript en utilisant les fonctions 
// de manipulation de chaînes. 
// Il peut être utile dans diverses situations, 
// notamment pour inverser des mots ou des phrases.

function inverserChaine(chaine) {
    const chaineInverse = chaine.split('').reverse().join('');
    return chaineInverse;
}

const maChaine = ("j'ai faim");
const chaineInverse = inverserChaine(maChaine);
alert("Chaine inversée : " + chaineInverse);