/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    
 
    
    //Quando o campo cep perde o foco.
    $("#cepOM").change(function() {
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#endOM").val("...");
                $("#estOM").val("...");
                $("#cidOM").val("...");
                $("#bairroOM").val("...");
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta
                            $("#endOM").val(dados.logradouro);
                            $("#estOM").val(dados.uf);
                            $("#cidOM").val(dados.localidade);
                            $("#bairroOM").val(dados.bairro);    
                    }
                    else {
                        //CEP pesquisado não foi encontrado.
                        alert("CEP não encontrado!");
                    }
                });
            }
            else {
                alert("CEP Inválido!");
            }
        }
        else {
            //cep sem valor, limpa formulário.
            alert("CEP Inválido!");
        }
    });
});