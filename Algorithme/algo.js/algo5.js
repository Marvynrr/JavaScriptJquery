function triBulles(tableau) {
    let n = tableau. length;
    let permutation;

    do {
        permutation = false;

        for (let i = 0; i < n-1; i++) {
            if (tableau[i] > tableau [i + 1]) {
                // Echange les éléments si ils sont dans le mauvais ordre
                let temp = tableau[i]; // = tableau mis dans temp (temporaire)
                tableau[i] = tableau[i + 1]; // = tableau écrasé par tableau 1 = permute sur la suivante etc
                tableau[i + 1] = temp;
                permutation = true;
            }                
        }
    } while (permutation);

    return tableau;
}

//  On va créer un tableau avec des nombres non triés
let tableauDesordre = [78, 84, 45, 54, 62, 32, 14, 49, 33, 33]

// Tri du tableau à bulles
let tableauTri = triBulles(tableauDesordre);

console.log("Tableau trié : " + tableauTri);