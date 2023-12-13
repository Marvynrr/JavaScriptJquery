function compterVoyelles(chaine){
    chaine = chaine.toLowerCase();
    let compteur = 0;
    let voyelles = 'aeiouy';
    for(let i=0; i < chaine.length; i++){
        console.log(chaine[i] + '' + voyelles.indexOf(chaine[i]));
        if(voyelles.indexOf(chaine[i]) !== -1){
            compteur++;
        }
    }
    return compteur;
}
function verifierPersonne(){
    let age = parseFloat(prompt("quel est votre age"));
    if(age > 5){
        let sexe = prompt('quel est votre genre?');
        let prenom = prompt('quel est votre prénom');

        // On vérifie si le prénom comporte au moins 2 voyelles et arrête le code si il y en a moins
        let nbVoyelle = compterVoyelles(prenom);
        if(nbVoyelle < 2){
            return false;
        }
        alert('Bonjour ' + prenom + ', votre prénom comporte ' + compterVoyelles(prenom) + ' voyelles.');
        if(sexe == 'femme'){
            if(age <= 10){
                alert('Bonjour Fillette');
            } 
            else if(age > 10 && age <= 18){
                alert('Bonjour Mademoiselle');
            } 
            else if(age > 18 && age <= 60){
                alert('Bonjour Madame');
            } 
            else{
                alert('Bonjour Mamie');
            }
        }
        else if(sexe == 'homme'){
            if(age <= 11){
                alert('Bonjour petit garçon');
            }
            else if(age > 11 && age <= 15){
                alert('Bonjour jeune garçon');
            }
            else if(age > 15 && age <= 17){
                alert('Bonjour jeune homme');
            }
            else if(age == 18){
                alert('Bienvenue dans la vie adulte');
            }
            else if(age > 18 && age <= 30){
                alert('Bonjour Monsieur');
            }
            else if(age > 30 && age <= 40){
                alert('Bonjour le trentenaire');
            }
            else if(age > 40 && age <= 50){
                alert('Bonjour le quadragénaire');
            }
            else if(age == 50){
                alert("Le demi siècle c'est sympa ?");
            }
            else if(age > 50 && age <=60){
                alert('Bonjour le quinquagénaire');
            }
            else
            {
                alert('Bonjour Papy');
            }
        }
        else if(sexe == 'autre'){
            let question = prompt('qui êtes vous ?');
            switch(question){
                case 'non-binaire' :
                    alert('0 ou 1 mon coeur balance');
                break;
                case 'asexuel' :
                    alert('Ici nous aimons tout le monde');
                break;
                case 'transgenre' :
                    alert('Bien à vous');
                break;
                default:
                    alert('on ne connait pas votre genre mais nous sommes heureux de vous voir');
            }
        }
    }
        else{
            alert('Impossible de vous accueillir');
    }
}
verifierPersonne();