$(document).ready(function(){
    // au clic sur le bouton submit
    $('button[type="submit"]').on('click', function(e){
        e.preventDefault(); // pour supprimer l'évènement par défaut du bouton

        let formData = new FormData($("#connexion")[0]); // création de l'objet du formulaire

        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response){
                $('#modal').attr('title', 'Information').html(response);
            },
            error: function(xhr, status, error){
                $('#modal').attr('title', 'Erreur').html('Une erreure est survenue: ' + xhr + 'erreur: ' + error);
            },
            complete:function(){
                $('#modal').dialog();
            }
        });
    });
});