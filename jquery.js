$(document).ready(function(){
    $('button[name="action1"]').click(function(){
        // Je sélectionne la div ayant la classe toto
        $('.toto p').empty().text('Vive titi !');
    });
    // Changer la couleur du body
    $('input[type="color"]').on('blur', function(){
        let couleur = $(this).val();
        if(couleur == '#000000'){
            $('body').addClass('dark');
        } else{
            $('body').removeClass('dark');
        }
        $('body').css('background-color', couleur);
    });
    $('.faq').click(function(){
        $('p', this).toggle();
    });
    $('button[name="action2"]').click(function(){
        $('.rouge').animate({
            width: "50%",
            height: "450px",
        }, 5000, function(){
            $('.rouge').animate({
                width: '100%',
                height: '50px',
            }, 5000);
        });
    });
    $('#slide').click(function(){
        $('.animation').slideToggle(1000);
    });
    $('#fade').click(function(){
        $('.animation').fadeToggle(2000);
    });
    // Ajax
    $('#btn-ajax').click(function(){
        $('#ajax').load('ajax.html');
    });
});