let taches = [];
// Fonction pour ajouter une tache
function ajouterTache(nouvelleTache){
    taches.push(nouvelleTache);
}
// Fonction pour supprimer une tache
function supprimerTache(index){
    taches.splice(index,1);
}
// Fonction pour afficher les taches
function afficherTaches(){
    console.log('liste des tâches');
    taches.forEach((tache, index) => {
        console.log(`${index+1}, ${tache}`);
    });
}
// Exemples d'utilisation
ajouterTache('Faire les courses');
ajouterTache('Aller à la couisine');
afficherTaches();
// On va supprimer la première tache
supprimerTache(0);
// On affiche la liste des taches MAJ
afficherTaches();