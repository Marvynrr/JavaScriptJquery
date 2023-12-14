$(document).ready(function(){
    $("#submit").on("click", function(e){
        e.preventDefault(); // annuler l'effet submit du bouton

        let recherche = new FormData($('recherche')[0]);
        $.ajax({
            url:"rechercheExercice.php",
            type: "POST",
            data: recherche,
            processData: false,
            contentType: false,
            succes: function(response){
                $(".retour").html(response);
            },
            error: function(xhr, status, error){
                $('.retour').html('Erreur');
            }
        });
    });
});