/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function limpaFormEndOM(){
    $("input[name=txtEndCepOM]").val('');
    $("input[name=txtEndCepOM]").removeClass("is-valid");
    $("input[name=txtEndCepOM]").removeClass("is-invalid");
    $("input[name=txtEndCepOM]").prop("readonly", true);
    
    $("input[name=txtEndNomeOM]").val('');
    $("input[name=txtEndNomeOM]").removeClass("is-valid");
    $("input[name=txtEndNomeOM]").removeClass("is-invalid");
    $("input[name=txtEndNomeOM]").prop("readonly", true);
    
    $("input[name=txtEndNumOM]").val('');
    $("input[name=txtEndNumOM]").removeClass("is-valid");
    $("input[name=txtEndNumOM]").removeClass("is-invalid");
    $("input[name=txtEndNumOM]").prop("readonly", true);
    
    $("input[name=txtEndEstadoOM]").val('');
    $("input[name=txtEndEstadoOM]").removeClass("is-valid");
    $("input[name=txtEndEstadoOM]").removeClass("is-invalid");
    $("input[name=txtEndEstadoOM]").prop("readonly", true);
    
    $("input[name=txtEndCidadeOM]").val('');
    $("input[name=txtEndCidadeOM]").removeClass("is-valid");
    $("input[name=txtEndCidadeOM]").removeClass("is-invalid");
    $("input[name=txtEndCidadeOM]").prop("readonly", true);
    
    $("input[name=txtEndBairroOM]").val('');
    $("input[name=txtEndBairroOM]").removeClass("is-valid");
    $("input[name=txtEndBairroOM]").removeClass("is-invalid");
    $("input[name=txtEndBairroOM]").prop("readonly", true);
    
    $("input[name=txtEndCompOM]").val('');
    $("input[name=txtEndCompOM]").removeClass("is-valid");
    $("input[name=txtEndCompOM]").removeClass("is-invalid");
    $("input[name=txtEndCompOM]").prop("readonly", true);
    
    $("input[name=txtEndPtRefOM]").val('');
    $("input[name=txtEndPtRefOM]").removeClass("is-valid");
    $("input[name=txtEndPtRefOM]").removeClass("is-invalid");
    $("input[name=txtEndPtRefOM]").prop("readonly", true);
}

function readonlyFormEndOM(){
    if(($("input[name=txtEndCepOM]").val()=="")||($("input[name=txtEndCepOM]").val()==null)){
        $("input[name=txtEndCepOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCepOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndNomeOM]").val()=="")||($("input[name=txtEndNomeOM]").val()==null)){
        $("input[name=txtEndNomeOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndNomeOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndNumOM]").val()=="")||($("input[name=txtEndNumOM]").val()==null)){
        $("input[name=txtEndNumOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndNumOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndEstadoOM]").val()=="")||($("input[name=txtEndEstadoOM]").val()==null)){
        $("input[name=txtEndEstadoOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndEstadoOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndCidadeOM]").val()=="")||($("input[name=txtEndCidadeOM]").val()==null)){
        $("input[name=txtEndCidadeOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCidadeOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndBairroOM]").val()=="")||($("input[name=txtEndBairroOM]").val()==null)){
        $("input[name=txtEndBairroOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndBairroOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndCompOM]").val()=="")||($("input[name=txtEndCompOM]").val()==null)){
        $("input[name=txtEndCompOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndCompOM]").prop("readonly", true);
    }
    
    if(($("input[name=txtEndPtRefOM]").val()=="")||($("input[name=txtEndPtRefOM]").val()==null)){
        $("input[name=txtEndPtRefOM]").prop("readonly", false);
    }else{
        $("input[name=txtEndPtRefOM]").prop("readonly", true);
    }
}
FacadeAjax.getForcas(montaSelectForca);
function montaSelectForca(forcas){
    dwr.util.removeAllOptions("txtForca");
    dwr.util.addOptions("txtForca", [{id: "0", nome: "Selecione uma Força..."}], "id", "nome");
    dwr.util.addOptions("txtForca", forcas, "id", "nome");
}
function montaSelectDependenteForca(idForca){
    FacadeAjax.getEstadosByForca(idForca, {
       callback: function(list){
           dwr.util.removeAllOptions("txtEstadoForca");
           dwr.util.addOptions("txtEstadoForca", [{id: "0", nome: "Selecione um Estado..."}], "id", "nome");
           dwr.util.addOptions("txtEstadoForca", list, "id", "nome");
       } 
    });
}

function montaSelectDependenteEstadoForca(idForca, idEstado){
    FacadeAjax.getOmsByForcaAndEstado(idForca, idEstado, {
       callback: function(list){
           dwr.util.removeAllOptions("txtNomeOM");
           dwr.util.addOptions("txtNomeOM", [{id: "0", nome: "Selecione uma OM..."}], "id", "nome");
           dwr.util.addOptions("txtNomeOM", list, "id", "nome");
       } 
    });
}
function montaSelectDependenteOM(idOM){
    FacadeAjax.getAbreviaturaOM(idOM, {
       callback: function(abreviatura){
           dwr.util.setValues({txtAbrevOM: abreviatura});
           if((abreviatura != "") || (abreviatura != null)){
                $("input[name=txtAbrevOM]").addClass("is-valid");
                $("input[name=txtAbrevOM]").removeClass("is-invalid");
           }
       } 
    });
    
    FacadeAjax.getEnderecoByOM(idOM, {
       callback: function(endereco){
           dwr.util.setValues({txtEndCepOM: endereco.cep});
           $("#txtEndCepOM").trigger('change');
       } 
    });
}

$(function(){
    $("input[name=txtAbrevOM]").prop("readonly", true);
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    //ENDEREÇO OM
    limpaFormEndOM();
    readonlyFormEndOM();
    
});

$("select[name=txtForca]").change(function(){    
    $("select[name=txtEstadoForca]").val("0");
    $("select[name=txtEstadoForca] option:not(:selected)").remove();
    $("select[name=txtEstadoForca]").removeClass("is-valid");
    $("select[name=txtEstadoForca]").removeClass("is-invalid");
    
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    $("select[name=txtNomeOM]").removeClass("is-valid");
    $("select[name=txtNomeOM]").removeClass("is-invalid");
    
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    limpaFormEndOM();
    montaSelectDependenteForca(this.value);
    
});

$("select[name=txtEstadoForca]").change(function(){
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    $("select[name=txtNomeOM]").removeClass("is-valid");
    $("select[name=txtNomeOM]").removeClass("is-invalid");
    
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    limpaFormEndOM();
    var idForca = $("select[name=txtForca]").val();
    montaSelectDependenteEstadoForca(idForca, this.value);
    
});

$("select[name=txtNomeOM]").change(function(){
    $("input[name=txtAbrevOM]").val('');
    $("input[name=txtAbrevOM]").removeClass("is-valid");
    $("input[name=txtAbrevOM]").removeClass("is-invalid");
    
    limpaFormEndOM();
    readonlyFormEndOM();
    montaSelectDependenteOM(this.value);
});

