// Exercice 1
let voiture = {
    marque : 'Hyundai',
    année : 2011,
    estNouvelle : true
};
console.log(voiture.marque, voiture.année, voiture.estNouvelle)

// Exercice 2 et 3
let livre = {
    titre : "Lanfeust des étoiles",
    auteur : "Arleston Tarquin",
    pages : 80,
    informations: function(){
        return "Le livre est " + this.titre + " de " + this.auteur + " composé de " + this.pages + " pages.";
    }
};
console.log(livre.informations());

// Exercice 4 et 5
let personne = {
    nom : "Hebus",
    age : 28,
    adresse : "12 rue des étoiles",
    anniversaire: function(){
        this.age += 1;
        return "Notre Hero " + this.nom + " est agé de " + this.age + " ans."
    }
};
console.log(personne.anniversaire());
console.log(personne.anniversaire());

// Exercice 6 et 7
let produit = {
    nom : "PLayStation",
    prix : "499.99",
    quantite : 20,
    achat: function(acheter){
        this.quantite -= acheter;
        return "La " + this.nom + " est disponible au prix de " + this.prix + " et de quantité : " + this.quantite + " unités."
    }
};
console.log(produit.achat(5));

let cercle = {
    rayon : 10.5,
    circonference : '',
    surface : '',
    calculer: function(){
        this.circonference += (2 * Math.PI * this.rayon)
        this.surface += (Math.PI * this.rayon ^2)
        return "Le cercle de rayon " + this.rayon + "cm à une circonférence de : " + this.circonference + "cm et une surface de : " + this.surface + "cm."
    }
};
console.log(cercle.calculer());