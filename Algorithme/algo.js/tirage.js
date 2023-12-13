// lister les 12 apprenants
const apprenants = [
    'Jérémie',
    'Abdallah',
    'Julian',
    'Séphora',
    'Christine',
    'Cécile',
    'Denis',
    'Gurvan',
    'Thomas',
    'Marvyn',
    'Gilles',
    'Jean-François'
];

//Fonction qui va mélanger aléatoirement un tableau
function melanger(tableau) {
    for(let i = tableau.length-1; i >0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]]; // Fisher Yates
    }
}
// On mélange le tableau
melanger(apprenants);

//Création des paires de 2 personnes
const paires = [];
for(let i = 0; i < apprenants.length; i+=2) {
    if(i + 1 < apprenants.length) {
        paires.push([apprenants[i], apprenants[i+1]]);
    }
}

// Afficher les groupes
let resultat = '';
for(let i = 0; i < paires.length; i++) {
    // alert(paires[i][0]+ " et " + paires[i][1]);
    resultat+= '<tr><td>' + paires[i][0] + '</td><td>' + paires[i][1] + '</td></tr>';
}

document.getElementById('bretagne').innerHTML += resultat;