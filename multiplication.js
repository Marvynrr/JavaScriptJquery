// On va demander le nombre à l'utilisateur
let nombre = parseInt(prompt("Quel nombre voulez-vous multiplier ?"));
// Condition pour vérifier si c'est bien un nombre
if(Number.isInteger(nombre)){
    if(nombre >= 1 && nombre <= 50){
        // Je sélectionne mon document dans le DOM
        let table = document.getElementById('table');
        for (let i = 1; i<=10; i++){
            //console.log(i*nombre);
            // Je vais afficher dans le dom l'opération et le résultat
            table.innerHTML+= '<tr><td>'+nombre+'*'+i+'</td><td>'+nombre*i+'</td></tr>';
        }
    } else {
        alert('Veuillez entrer un nombre entre 1 et 50');
    }
} else {
    alert('Veuillez entrer un nombre !!');
}
// Affichage des tables de multiplication de 1 à 10
for(let l=1 ; l<=10 ; l++){
    console.log('Table de multiplication pour' +l);
    // On fait les multiplications
    for(let j=1 ; j<=10 ; j++){
        console.log(l+"*"+j+"="+l*j);
    }
}
let star ='';
for (let s=0 ; s<5 ; s++){
    star += '*';
    console.log(star);
}
for(let a=10 ; a>0 ; a--){
    console.log(a);
}