// Demandez à l'utilisateur de saisir 2 nombres
let premierNombre = parseFloat(prompt("Entrez le premier nombre :"));
let deuxiemeNombre = parseFloat(prompt("Entrez le deuxième nombre :"));

// Vérifiez si la saisie est valide
if (isNaN(premierNombre) || isNaN(deuxiemeNombre)) {
    console.log("veuillez saisir des nombres valides.");
} else {

    // Additionnez des 2 nombres
    let somme = premierNombre + deuxiemeNombre;

    // Affichez le résultat
    console.log("La somme de " + premierNombre + " et " + deuxiemeNombre + " est : " + somme);
}