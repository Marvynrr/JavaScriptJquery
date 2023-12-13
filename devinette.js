// Génération d'un nombre aléatoire
const random = Math.floor(Math.random()*100)+1;
// Fonction pour vérifier le nombre saisi par l'utilisateur
function checkNombre(){
    const nombre = parseInt(document.getElementById('nombre').value);
    const message = document.getElementById('message');

    if(isNaN(nombre) || nombre < 1 || nombre > 100){
        message.textContent = 'Veuillez entrer un nombre valide';
        return;
    }
    if(nombre === random){
        message.textContent = 'Félicitations ! Vous avez trouvé le bon numéro !';
    }
    else if(nombre < random){
        message.textContent = 'Le nombre est trop petit. Essayez encore !';
    }
    else{
        message.textContent = 'Le nombre est trop grand. Essayez encore !';
    }
}