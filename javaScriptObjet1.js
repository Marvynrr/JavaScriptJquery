// exemple d'un objet représentant une personne
let personne = {
    nom: "David",
    age: '30ans',
    email: 'david@exemple.com', // propriété email avec la valeur 'david@exemple.com'
    adresse: {
        rue: '123 Rue Principale',
        ville: 'Nevers'
    },
    parler: function() {
        return 'Bonjour, je suis ' + this.nom + '!';
    }
};

// accès aux propriétés et à la méthode de l'objet personne
console.log(personne.nom, personne.age); // affiche 'David'
console.log(personne.adresse.rue, personne.adresse.ville); // affiche '123 Rue Principale', 'Nevers'
console.log(personne.parler()); // appelle la méthode parler et affiche le message

// création d'un objet voiture avec une méthode
let voiture = {
    marque: 'Alfa',
    vitesseActuelle: 0,
    accelerer: function(acceleration){
        this.vitesseActuelle += acceleration;
        return 'La voiture accélère à ' + this.vitesseActuelle + ' km/h.';
    },
    degat: 0,
    accidenter: function(accident){
        let retour = '';
        this.degat += accident;
        if(this.degat >= 80){
            retour += ('la voiture est bonne pour la casse !')
        }
        retour += 'La voiture est accidenté à hauteur de ' + this.degat + '%.';

        return retour
    }
};

// modifier une propriété
voiture.marque = 'Hyundai';


console.log(voiture.marque);
console.log(voiture.accelerer(80));
console.log(voiture.accidenter(80));

// création constructeur (moule) constructeur
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
    this.presentation = function (){
        return "Je m'appelle " + this.nom + " et j'ai " + this.age + ' ans.';
    };
}
// je crée deux personnes
let personne1 = new Personne('Denis', 30);
let personne2 = new Personne('Jean François alias Vameng', 30);

console.log(personne1.presentation()) // affiche la première personne
console.log(personne2.presentation()) // affiche la deuxième personne

// prototype
// création d'un objet vide
let objet = {}; // création d'un objet vide
console.log(objet.__proto__===Object.prototype); // true

// fonction constructeur et prototype
function Individu(nom) {
    this.nom = nom;
}

Individu.prototype.presentation = function() {
    return 'Je suis ' + this.nom;
};

let individu1 = new Individu('Alice');
let individu2 = new Individu('Bob');

console.log(individu1.presentation()); // affiche "Je suis Alice"
console.log(individu2.presentation()); // affiche "Je suis Bob"

// exemple d'heritage
// constructeur
function Somebody(nom){
    this.nom = nom;
};

Somebody.prototype.presentation = function(){
    return 'Je suis ' + this.nom;
};

function Etudiant(nom, niveau){
    Somebody.call(this, nom);
    this.niveau = niveau;
};

Etudiant.prototype = Object.create(Somebody.prototype);
Etudiant.prototype.constructor = Etudiant;

// on retrouve l'heritage dans la presentationEtendue
Etudiant.prototype.presentationEtendue = function (){
    return 'Je suis ' + this.nom + ' et je suis en ' + this.niveau + 'ème année.';
};

// on crée un etudiant
let etudiant1 = new Etudiant('Alice', '3');
console.log(etudiant1.presentationEtendue()); // affiche "Je suis Alice et je suis en 3ème année."
console.log(etudiant1.presentation()); // affiche "Je suis Alice"