/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
       } 
    });
}

$("select[name=txtForca]").change(function(){    
    $("select[name=txtEstadoForca]").val("0");
    $('select[name=txtEstadoForca] option:not(:selected)').remove();
    
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    
    $("input[name=txtAbrevOM]").val('');
    montaSelectDependenteForca(this.value);
    
});

$("select[name=txtEstadoForca]").change(function(){
    $("select[name=txtNomeOM]").val("0");
    $('select[name=txtNomeOM] option:not(:selected)').remove();
    
    $("input[name=txtAbrevOM]").val('');
    var idForca = $("select[name=txtForca]").val();
    montaSelectDependenteEstadoForca(idForca, this.value);
    
});

$("select[name=txtNomeOM]").change(function(){
    montaSelectDependenteOM(this.value);
});

