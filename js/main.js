function consultaCep(){
    $(".progres").show();
    var cep =document.getElementById("cep").value;
    var url="https://viacep.com.br/ws/"+cep+"/json/"
   
    $.ajax({
        url: url,
        type:"GET",
        success: function(response){
            // $("#logradouro").html(response.logradouro);
            // logradouro.innerHTML=response.logradouro+"<br>";
            // bairro.innerHTML+=response.bairro+"<br>";
            // cidade.innerHTML+=response.localidade+"<br>";
            // uf.innerHTML+=response.uf+"<br>";
            $("#cepdig").html("CEP "+response.cep)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#cidade").html(response.localidade)
            $("#uf").html(response.uf)
            console.log(response);    
            $(".cep").show();
            $(".progres").hide();
            // alert(response.logradouro)
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".progres").hide();
})