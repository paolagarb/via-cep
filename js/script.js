$(function() {
    $("#consultar").on("click",  function() {
        $.ajax({
            url: "https://viacep.com.br/ws/13414020/json/",
            type: "GET",
            success: function(response) {
                console.log(response);
            }
        })
    })
})