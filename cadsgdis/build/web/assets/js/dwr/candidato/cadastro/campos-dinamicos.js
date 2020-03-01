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

$("select[name=txtForca]").change(function(){
    montaSelectDependenteForca(this.value);
});

