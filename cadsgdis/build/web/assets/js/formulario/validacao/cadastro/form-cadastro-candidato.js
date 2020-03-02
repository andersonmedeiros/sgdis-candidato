/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//AO CARREGAR OU RECARREGAR A PÁGINA
//FUNÇÕES
//SELECT
function validSelect(campo){
    if($(campo).val() != '0'){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//INPUT
function validInput(campo){
    if($(campo).val() != ''){
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};


//AO MUDAR O VALOR DO CAMPO
//FUNÇÕES
//SELECT
function validSelectTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != '0'){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });    
};

//INPUT
function validInputTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
        }
    });
};

$(document).ready(function(){   
    //Etapa 1: OM ATUAL
    //Campo Select Força
    validSelect("select[name=txtForca]");
    validSelectTReal("select[name=txtForca]");
    
    //Campo Input EstadoForca
    validSelect("select[name=txtEstadoForca]");
    validSelectTReal("select[name=txtEstadoForca]");

    //Campo Input Nome OM
    validSelect("select[name=txtNomeOM]"); 
    validSelectTReal("select[name=txtNomeOM]"); 

    //Campo Input Abreviatura OM
    validInput("input[name=txtAbrevOM]"); 
    validInputTReal("input[name=txtAbrevOM]"); 
});


$(function(){
    var atual_fs, prox_fs, anterior_fs;
    
    function proximo(elemento){
        atual_fs = $(elemento).parent();
        prox_fs = $(elemento).parent().next();

        $('#progress li').eq($('fieldset').index(prox_fs)).addClass('ativo');
        atual_fs.hide(800);
        prox_fs.show(800);
    }

    $('.anterior').click(function(){
        atual_fs = $(this).parent();
        anterior_fs = $(this).parent().prev();
        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo');
        atual_fs.hide(800);
        anterior_fs.show(800);

    });

    $('#formCadCandidato button[type=button]').click(function(){
       return false; 
    });
    
    //OBRIGATORIEDADE
    //Etapa 1: OM ATUAL
    $("button[name=btnProximo2]").click(function(){
        var foneOM = $("input[name=txtFoneOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        var endCepOM = $("input[name=txtEndCepOM]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if($("select[name=txtForca]").val() == '0'){
            $("select[name=txtForca]").removeClass("is-valid");
            $("select[name=txtForca]").addClass("is-invalid");
            $("select[name=txtForca]").focus();
        }
        else if($("select[name=txtEstadoForca]").val() == '0'){
            $("select[name=txtEstadoForca]").removeClass("is-valid");
            $("select[name=txtEstadoForca]").addClass("is-invalid");
            $("select[name=txtEstadoForca]").focus();
        }
        else if($("select[name=txtNomeOM]").val() == '0'){
            $("select[name=txtNomeOM]").removeClass("is-valid");
            $("select[name=txtNomeOM]").addClass("is-invalid");
            $("select[name=txtNomeOM]").focus();
        }
        else if($("input[name=txtAbrevOM]").val() == ''){
            $("input[name=txtAbrevOM]").removeClass("is-valid");
            $("input[name=txtAbrevOM]").addClass("is-invalid");
            $("input[name=txtAbrevOM]").focus();
        }
    });
});