$(document).ready(function(){
    $('#cp').on('keyup',function(){
        let code = $(this).val();
        if (code.length >= 2){
            $.getJSON('codes-postaux.json', function(data){

                //Pour affcher plusieurs villes ayant le même code postal

            data.forEach(function(element){
                if(element.codePostal === code){
                    tableauVille.push(element.nomCommune);

                }
            });
            if(tableauVille.length > 0)
            {
                    element.nomCommune.forEach(function(ville){
                        $('#ville').appendTo('<option value="' + ville + '">' + ville + '</option>');
                    });
                }
            

                /*const villeTrouve = data.find(function(element){
                    return element.codePostal === code;
                });
                if (villeTrouve){
                    $('#ville').empty().html('<option value="' + villeTrouve.nomCommune + '">' + villeTrouve.nomCommune + '</option>');
                } else {
                    $('#ville').empty();
                }
            });
        }
    });
});