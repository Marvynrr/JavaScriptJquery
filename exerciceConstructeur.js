//Exercice 1
function Produit(nom, prix, description){
    this.nom = nom;
    this.prix = prix;
    this.description = description;

    // Exercice 2
    this.infosProduit = function(){
        return "le produit se nommant " + this.nom + " au prix de " + this.prix +" ayant comme description : " + this.description
    };
}

// Exercice 3
let produit1 = new Produit("PlayStation", "500 euros", "Pour les gamers")
let produit2 = new Produit("Mustang Shelby gt350", "80 000 euros", "Meilleur voiture ever")

console.log(produit1.infosProduit());
console.log(produit2.infosProduit());

// Exercice 4
function Etudiant(nom, age, niveau){
    this.nom = nom;
    this.age = age;
    this.niveau = niveau;

    // Exercice 5
    this.presentationEtendue = function(){
        return "Je suis " + this.nom +", j'ai " + this.age + " et j'étudie en " + this.niveau
    }
};

// Exercice 6
let etudiant1 = new Etudiant("JF", "30 ans", "6ème");
let etudiant2 = new Etudiant("Denis", "30 ans", "5ème");

console.log(etudiant1.presentationEtendue());
console.log(etudiant2.presentationEtendue());

// Exercice 7
function Voiture(marque, année, couleur){
    this.marque = marque;
    this.année = année;
    this.couleur = couleur;

    this.afficherDetails = function(){
        return "Cette voiture de la marque " + this.marque + " de l'année " + this.année + " de couleur " + this.couleur + ".";
    }
};

//suite ?
let voiture1 = new Voiture("Hyundai", "2011", "rouge");
let voiture2 = new Voiture("MG", "2005", "noire");

console.log(voiture1.afficherDetails());
console.log(voiture2.afficherDetails());