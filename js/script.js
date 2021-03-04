

$(function() {

    $("#cepTitulo").hide();
    $("#consultar").on("click",  function() {
        var cep = $('#cep').val();
        var url = "https://viacep.com.br/ws/"+cep+"/json/";
        $('#cepTitulo').show();

        $.ajax({
            url: url,
            type: "GET",
            success: function(response) {
                console.log(response);
                $("#cepTitulo").html(response.cep);
                $('#ddd').html(response.ddd);
                $('#rua').html(response.logradouro);
                $('#bairro').html(response.bairro);
                $('#cidade').html(response.localidade);
                $('#uf').html(response.uf);
            }
        })
    }) 
})