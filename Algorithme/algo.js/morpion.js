// Le petit morpion

let morpion = [
    ['X', 'O', 'X'],
    ['O', 'X', 'X'],
    ['O', 'X', 'O']
];
let coord1 = parseInt(prompt('Saississez un chiffre entre 1 et 3'));
let coord2 = parseInt(prompt('Saississez un deuxième chiffre entre 1 et 3'));
if((coord1 >= 1 && coord1 <= 3) && (coord2 >= 1 && coord2 <= 3)){
    coord1 = coord1-1;
    coord2 = coord2-1;
    alert('La valeur de la case est ' + morpion[coord1][coord2]);
}