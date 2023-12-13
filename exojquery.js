// CONSEILLE
$(document).ready(function(){

// solution tout d'un coup
// on sélectionne tout les champs dans lesquelles on veut faire la vérification
/* $('#nom, #prenom, #email, #password, #password2, #date').on("blur", function(){
    // on récupère l'élément courant
    let element = $(this);
    // on vérifie si il y a une valeur (différent a vide != '')
    if(element.val() != ''){
        element.css('border', '1px solid green');
    } else {
        element.css('border', '1px solid red');
    }
}); */

// nom 
    $('#nom').on("blur",function(){
        let val = $('#nom').val();
        if (val == ''){
            $('#nom').css("border", "solid red 2px");       
        } else {
            $('#nom').css("border", "solid green 2px");
        }
    });
});

// prenom
$('#prenom').on("blur",function(){
    let val = $('#prenom').val();
    if (val == ''){
        $('#prenom').css("border", "solid red 2px");       
    } else {
        $('#prenom').css("border", "solid green 2px");
    }
});

// email
$('#email').on("blur",function(){
    let val = $('#email').val();
    if (val == ''){
        $('#email').css("border", "solid red 2px");       
    } else {
        $('#email').css("border", "solid green 2px");
    }
});

// password
$('#password').on("blur",function(){
    let val = $('#password').val();
    if (val == ''){
        $('#password').css("border", "solid red 2px");       
    } else {
        $('#password').css("border", "solid green 2px");
    }
});

// password2
$('#password2').on("blur",function(){
    let val = $('#password2').val();
    if (val == ''){
        $('#password2').css("border", "solid red 2px");       
    } else {
        $('#password2').css("border", "solid green 2px");
    }
});

// date
$('#date').on("blur",function(){
    let val = $('#date').val();
    if (val == ''){
        $('#date').css("border", "solid red 2px");       
    } else {
        $('#date').css("border", "solid green 2px");
    }
});/*

// au clic sur le bouton generer password
/*  $("genererPassword").on("click", function(){
    // on définit le mot de passe dans une variable
    let chaine = "motdepasse";
    $("#password, #password2").css('border', '2px solid green').val(chaine);
});
 */

// generation mdp
$('button[type="button"]').on("click", function(){
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let slice = '1234567890';
    let password = Math.random().toString(36).slice(-10);
    $('#password').css('border', '2px solid green').val(password);
    $('#password2').css('border', '2px solid green').val(password);
});

// activation du bouton submit si l'ensemble des champs ont une valeur
$('#submit').on("mouseover", function(){
    if(verifForm()){
        $('#message').addClass('succes').css('border', '2px solid blue').html('Formulaire valide').show();
    } else{
        // si un champ est vide
        $('#message').addClass('error').css('border', '2px solid red').html('Formulaire invalide').show();
    }
});

// au clic sur le bouton submit
$('#submit').on('click', function(e){
    e.preventDefault(); // empêcher le comportement par défaut du bouton
    // on crée k'objet formulaire avec l'ensemble des données
    let formData = new FormData($('#jquery')[0]);
    // on va effectuer notre requête AJAX
    $.ajax({
        url: 'traitement.php', // url qui ba traiter le formulaire
        type: 'POST', // le type, GET ou POST
        dtata: formData, // les données à envoyer
        processData: false, // pour ne pas traiter les données
        contentType: false, // pour laisser le type de donnée par défault
        // gestion de la barre de progression
        xhr: function(){
            let xhr = new window.XMLHttpRequest(); // je crée un objet XMLHttpRequest
            // ecoute l'évènement progress sur l'envoi du fichier (xhr = temps réel)
            xhr.upload.addEventListener('progress', function(e){
                if(e.lengthComputable){
                    // calculer le pourcentage de progression d'envoi
                    let pourcent = Math.round((e.loaded/e.total)*100);
                    $('#barre').attr('value', pourcent); // je met à jour la value de la barre
                    $('#status').text(pourcent+'%'); // on met à jour la span avec le pourcentage
                }
            });
            return xhr; // je retourne mon objet XMLHttpRequest modifié
        },
        success: function(response){
            $('#message').addClass('success').html('Formulaire envoyé :' + response).show();
        },

        // si il y a une erreur
        error: function(xhr, status, error){
            $('#message').addClass('error').html('Une erreur est survenue :' + error).show();
        },
        // fonction à appeler avant l'envoi de la requête AJAX
        beforeSend: function(){
            $('#progression').show(); // on affiche la barre de progression 
        },
        // fonction à appeler une fois la requête terminée, peu importe si success ou error
        complete: function(){
            //$('#barre').hide(); // on masque la barre de progression
        }
    });
});

function verifForm(){
    let boolean = false;
    if($('#nom').val() != ''
        && $('#prenom').val() != ''
        && $('#email').val() != ''
        && $('#password').val() != ''
        && $('#password2').val() != ''
        && $('#date').val() != ''){
        boolean = true;
    $('#submit').removeAttr('disabled');
        } else{
        boolean = false;
    $('#submit').attr('disabled', 'disabled');
        }
        return boolean;
}