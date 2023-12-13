document.addEventListener('DOMContentLoaded', function(){
    const card = document.querySelector('.scratch-card');
    const overlay = document.querySelector('.scratch-overlay');
    let isScratching = false;

    // Détection de la touche de la souris
    overlay.addEventListener('mousedown', function(){
        isScratching = true;
    });

    // Relache de la touche de la souris
    overlay.addEventListener('mouseup', function(){
        isScratching = false;
    });

    // On va détecter le mouvement de la souris
    overlay.addEventListener('mousemove', function(e){
        
        // On vérifie si on peut gratter
        if(isScratching){
            const percentScratched = getPercentScratched(e.offsetX,e.offsetY);
            removeOverlay(e.offsetX,e.offsetY);
            if(percentScratched > 80){
                // Si la partie est supérieur à 80%
                afficherLot();
            }
        }
    });
    //Fonction qui va enlever les pixels
    function removeOverlay(x, y){
        const radius = 15; // Rayon du pointeur
        const diametre = radius/2;
        overlay.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
        overlay.style.webkitClipPath = `circle(${radius}px at ${x}px ${y}px)`;
    }
    // Fonction qui va retourner la valeur en %
    function getPercentScratched(x, y){
        const totalArea = card.offsetWidth*card.offsetHeight;
        const scratchedArea = x*y;
        return (scratchedArea/totalArea)*100;
    }
    // Fonction pour afficher le lot
    function afficherLot(){
        alert("C'était la voiture au meilleur bruit possible et inimaginable");
    }
});