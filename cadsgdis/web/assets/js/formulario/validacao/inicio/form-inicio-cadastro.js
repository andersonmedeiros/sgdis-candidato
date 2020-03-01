/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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

//IDENTIDADE MILITAR
function validIdtCandidato(campo){  
    var idtCandidato = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    
    if(idtCandidato == ''){
    }
    else if(idtCandidato == '0000000000' || idtCandidato == '1111111111' || idtCandidato == '2222222222' || idtCandidato == '3333333333' ||                 
            idtCandidato == '4444444444' || idtCandidato == '5555555555' || idtCandidato == '6666666666' || idtCandidato == '7777777777' ||                 
            idtCandidato == '8888888888' || idtCandidato == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-idtCandidato").html("Identidade Militar Inválida!");
        camposOk = 0;
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
        camposOk = 1;
    }
};

//IDENTIDADE MILITAR
function validIdtCandidatoTReal(campo){ 
    $(campo).change(function(){
        var idtCandidato = $(campo).val().replace("-","").replace(" ","");
        if(idtCandidato == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtCandidato").html("Campo Obrigatório!");
        }
        else if(idtCandidato == '0000000000' || idtCandidato == '1111111111' || idtCandidato == '2222222222' || idtCandidato == '3333333333' ||                 
                idtCandidato == '4444444444' || idtCandidato == '5555555555' || idtCandidato == '6666666666' || idtCandidato == '7777777777' ||                 
                idtCandidato == '8888888888' || idtCandidato == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtCandidato").html("Identidade Militar Inválida!");  
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};


$(document).ready(function(){
    //Campo Input Identidade Militar
    validIdtCandidato("input[name=txtIdtCandidato]");
    validIdtCandidatoTReal("input[name=txtIdtCandidato]");
    
    //Campo Select Curso
    validSelect("select[name=txtCurso]");
    validSelectTReal("select[name=txtCurso]");
    
    $("select[name=txtCurso]").change(function(){
        if($("select[name=txtCurso]").val() == "0"){
            $("select[name=txtCategoria]").val('0');
            $("select[name=txtCategoria]").removeClass("is-valid");
            $("select[name=txtCategoria]").removeClass("is-invalid");
        }
        else{
            //Campo Select Curso
            validSelect("select[name=txtCategoria]");
            validSelectTReal("select[name=txtCategoria]");         
        }
    });
});

$("button[name=btnInicioCad]").click(function(){
    var idtCandidato = $("input[name=txtIdtCandidato]").val().replace("-","").replace(" ","");
    
    if(idtCandidato == ''){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        $("input[name=txtIdtCandidato]").focus();
        $(".invalid-idtCandidato").html("Campo Obrigatório!");
        
        return false;
    }
    else if(idtCandidato == '0000000000' || idtCandidato == '1111111111' || idtCandidato == '2222222222' || idtCandidato == '3333333333' ||                 
            idtCandidato == '4444444444' || idtCandidato == '5555555555' || idtCandidato == '6666666666' || idtCandidato == '7777777777' ||                 
            idtCandidato == '8888888888' || idtCandidato == '9999999999'){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        $("input[name=txtIdtCandidato]").focus();
        $(".invalid-idtCandidato").html("Identidade Militar Inválida!");
        
        return false;
    }
    else if($("select[name=txtCurso]").val() == '0'){
        $("select[name=txtCurso]").removeClass("is-valid");
        $("select[name=txtCurso]").addClass("is-invalid");
        $("select[name=txtCurso]").focus();
        
        return false;
    }
    else if($("select[name=txtCategoria]").val() == '0'){
        $("select[name=txtCategoria]").removeClass("is-valid");
        $("select[name=txtCategoria]").addClass("is-invalid");
        $("select[name=txtCategoria]").focus();
        
        return false;
    }    
});

$("button[name=btnTentativa]").click(function(){
    var idtCandidato = $("input[name=txtIdtCandidato]").val().replace("-","").replace(" ","");
    
    if(idtCandidato == ''){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        $("input[name=txtIdtCandidato]").focus();
        $(".invalid-idtCandidato").html("Campo Obrigatório!");
        
        return false;
    }
    else if(idtCandidato == '0000000000' || idtCandidato == '1111111111' || idtCandidato == '2222222222' || idtCandidato == '3333333333' ||                 
            idtCandidato == '4444444444' || idtCandidato == '5555555555' || idtCandidato == '6666666666' || idtCandidato == '7777777777' ||                 
            idtCandidato == '8888888888' || idtCandidato == '9999999999'){
        $("input[name=txtIdtCandidato]").removeClass("is-valid");
        $("input[name=txtIdtCandidato]").addClass("is-invalid");
        $("input[name=txtIdtCandidato]").focus();
        $(".invalid-idtCandidato").html("Identidade Militar Inválida!");
        
        return false;
    }
    else if($("select[name=txtCurso]").val() == '0'){
        $("select[name=txtCurso]").removeClass("is-valid");
        $("select[name=txtCurso]").addClass("is-invalid");
        $("select[name=txtCurso]").focus();
        
        return false;
    }
    else if($("select[name=txtCategoria]").val() == '0'){
        $("select[name=txtCategoria]").removeClass("is-valid");
        $("select[name=txtCategoria]").addClass("is-invalid");
        $("select[name=txtCategoria]").focus();
        
        return false;
    }
    else{        
        var idtCandidato = $("#txtIdtCandidato").val().replace("-","");
        var idCurso = $("#txtCurso").val();
        getTentativasByCandidatoAndCurso(idtCandidato, idCurso);
        
    }
    //qtdeTentativas($("#txtIdtCandidato").val().replace("-",""));
    /*if(q < 3){
        $("#infoTent").show();
    }*/
    
});