for (let b = 0; b < 7; b++) {
let tableau = [];
    
    function ajouterAuTableau(element){
        tableau.push(element);
    }
    let element = prompt('saisir un élément');
    ajouterAuTableau(element);
    if (tableau.length > 0){
        for (let i = 0; i < tableau.length; i++) {
            document.getElementById('tablo').innerHTML += "<tr><td>" + tableau[i] + "</td></tr>";
        }
    }
}