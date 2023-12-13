const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// Fonction qui va générer un mot aléatoire
function genererMotAleatoire(longueurMot){
    let mot = '';
    for(let i=0 ; i<longueurMot ; i++){
        let indexAleatoire = Math.floor(Math.random() * alphabet.length);
        mot += alphabet[indexAleatoire];
    }
    return mot;
}
// Exemple d'utilisation
let MotAleatoire1 = genererMotAleatoire(12);
console.log('Mot aléatoire 1 :', MotAleatoire1);
let MotAleatoire2 = genererMotAleatoire(7);
console.log('Mot aléatoire 2 :', MotAleatoire2);