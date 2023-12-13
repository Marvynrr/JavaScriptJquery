const bouton = document.getElementById('bouton');
bouton.addEventListener('click',function(){
    let civilite = document.getElementById('civilite');
    let prenom = document.getElementById('prenom');
    let nom = document.getElementById('nom');
    const message =document.getElementById('message');

    // On va vérifier si les informations sont saisies
    if(civilite.value != '' && prenom.value != '' && nom.value != ''){

        //On écrit dans le DOM
        message.innerHTML = 'Bonjour <strong>' + civilite.value + ' ' + prenom.value + ' ' + nom.value + '<strong>';
        civilite.value = '';
        prenom.value = '';
        nom.value = '';
    }
});
function chargeListe(tableau){
    let str = '';
    for(i=0 ; i <= tableau.length ; i++){
        str += '<option value="' + tableau[i] + '">' + tableau[i] + '</option>';
    }
    return str;
}
const enfants = document.getElementById('enfants');

// On va charger la liste au click de la souris
enfants.addEventListener('mousedown', function(){
    let tranche = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let liste = chargeListe(tranche);
    enfants.innerHTML = liste;
});
const region = document.getElementById('regions');
region.addEventListener('mousedown', function(){
    let regions = ['Auvergne', 'Bretagne', 'Centre', 'Ile de France', 'Guyane', 'Vierzon']
    region.innerHTML = chargeListe(regions);
});

// Fonction qui va compter le nombre de caractères
const texte = document.getElementById('texte');
texte.addEventListener('keyup', function(){
    let nb = document.getElementById('nb');
    let nb_texte = texte.value.length;
    nb.innerText = nb_texte;

    // On vérifie si le nombre de cracatère est suffisant pour valider le formulaire
    if(nb_texte >= 100){
        document.getElementById('bouton').removeAttribute('disabled', '');
        document.getElementById('bouton').style.backgroundColor = 'green';
        document.getElementById('bouton').style.color = 'white';
    }  else{
        document.getElementById('bouton').setAttribute('disabled', 'disabled');
        document.getElementById('bouton').style.backgroundColor = 'red';
        document.getElementById('bouton').style.color = 'white'; 
    }
});
bouton.addEventListener('mouseover', function(){

    // On va générer une position aléatoire
    const largeur = screen.width;
    const hauteur = screen.height;
    let random = Math.floor(Math.random()*largeur);
    let random_h = Math.floor(Math.random()*hauteur);

    // On place notre bouton en CSS
    bouton.style.position = 'absolute';
    bouton.style.top = random_h + 'px';
    bouton.style.left = random + 'px';
});