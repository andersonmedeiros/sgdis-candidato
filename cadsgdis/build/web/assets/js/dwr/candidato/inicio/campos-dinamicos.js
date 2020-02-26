FacadeAjax.getCursos(montaSelectCurso);
function montaSelectCurso(listBeans){
    //var select = document.getElementById("#forca");
    dwr.util.removeAllOptions("txtCurso");
    //dwr.util.addOptions("forca", [{id:"0", nome:"select"}], "id", "nome");
    dwr.util.addOptions("txtCurso", listBeans, "id", "nome");
}
/*FacadeAjax.selectAllForca(montaSelectForca);
function montaSelectForca(listBeans){
    var select = document.getElementById("#forca");
    dwr.util.removeAllOptions("forca");
    dwr.util.addOptions("forca", [{id:"0", nome:"select"}], "id", "nome");
    dwr.util.addOptions("forca", listBeans, "id", "nome");
}
/*function montaselectDependentesForca(idForca){
    FacadeAjax.selectAllEstadoByForca(idForca,{
        callback:function(list){
        dwr.util.removeAllOptions("estForca");
        dwr.util.addOptions("estForca", [{id:"0", nome:"select"}], "id", "nome");
        dwr.util.addOptions("estForca", list, "id", "nome");
        }
    });
    FacadeAjax.selectAllPostoGraduacao(idForca,{
        callback:function(list){
        dwr.util.removeAllOptions("pg");
        dwr.util.addOptions("pg", [{id:"0", nome:"select"}], "id", "nome");
        dwr.util.addOptions("pg", list, "id", "nome");
        }
    });
}
function montaselectDependentesEstadoForca(idForca){
    FacadeAjax.selectAllOmByEstadoForca(idForca,{
        callback:function(list){
        dwr.util.removeAllOptions("om");
        dwr.util.addOptions("om", [{id:"0", nome:"select"}], "id", "nome");
        dwr.util.addOptions("om", list, "id", "nome");
        }
    });
}
function montaAbrevOm(idOm){
    FacadeAjax.selectOM(idOm,{
        callback:function(om){
        dwr.util.setValues({"abrevOM": om.abreviatura, "cepOM": "69033000"});
        $("#cepOM").trigger('change');
        }
    });
}

function carregaCombo1_2(){
    FacadeAjax.selectAllMilitar(montaCombo1_2);
}
function montaCombo1_2(listBeans){
    dwr.util.removeAllOptions("combo1_2");
    dwr.util.addOptions("combo1_2", listBeans, "identidade", "nome");
}
function carregaCombo3(){
    FacadeAjax.selectAllMilitar(montaCombo3);
}
function montaCombo3(listBeans){
    dwr.util.removeAllOptions("combo3");
    dwr.util.addOptions("combo3", listBeans, "identidade", "nome");
}
function selectMil(idValue){
    FacadeAjax.selectAllMilitar({
        callback:function(list){
        dwr.util.removeAllOptions("combo3");
        dwr.util.addOptions("combo3", list,"identidade", "nome");
    },
    errorHandler:function(errorString, exception) {
       alert(errorString + " " + exception);

    },
    timeout:50000
});*/