// L'algorithme de la suite de Collatz est une séquence de nombres où chaque nombre est divisé par 2 s'il est pair, 
// ou multiplié par 3 et ajouté 1 s'il est impair. 
// L'algorithme se poursuit jusqu'à ce que le nombre atteigne 1. 
// Il est souvent utilisé pour étudier le comportement des nombres dans la théorie des nombres.​

function suiteCollatz(n) {
    // Crée un tableau pour stocker les termes de la suite
    const sequence = [n];

    // Tant que n n'est pas égal à 1, continue à calculer le terme suivant
    while (n !==1) {
        if (n % 2 === 0) {
            // Si n est pair, divise -le par 2
            n = n / 2;
        } else {
            // Si n est impair, multiplie-le par 3 et ajoute 1
            n = 3 * n + 1;
        }
        // Ajoute le terme à la suite
        sequence.push(n);
        }

        return sequence;
    }


    // Exemple d'utilisation de la fonction pour la valuer initiale 6
    const valeurInitiale = prompt("Saisir votre valeur");
    const resultat = suiteCollatz(valeurInitiale);
    alert(`La suite de Collatz pour n = ${valeurInitiale}: ${resultat.join(' -> ')}`);