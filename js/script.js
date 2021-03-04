

$(function() {
    $("#consultar").on("click",  function() {
        
    var cep = $('#cep').val();
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    
        $.ajax({
            url: url,
            type: "GET",
            success: function(response) {
                console.log(response);
            }
        })
    })
})