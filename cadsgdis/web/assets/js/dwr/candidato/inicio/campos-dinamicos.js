FacadeAjax.getCursos(montaSelectCurso);
function montaSelectCurso(listBeans){
    //var select = document.getElementById("#forca");
    dwr.util.removeAllOptions("txtCurso");
    dwr.util.addOptions("txtCurso", [{id: "0", nome: "Selecione um Curso..."}], "id", "nome");
    dwr.util.addOptions("txtCurso", listBeans, "id", "nome");
}
function montaSelectDependenteCurso(idCurso){
    FacadeAjax.getCategoriasByCurso(idCurso, {
       callback: function(list){
           dwr.util.removeAllOptions("txtCategoria");
           dwr.util.addOptions("txtCategoria", [{id: "0", nome: "Selecione uma Categoria..."}], "id", "nome");
           dwr.util.addOptions("txtCategoria", list, "id", "nome");
       } 
    });
}

var cellFuncsTentativas = [
    function(data){ return data.ano;},
    function(data){ return data.mtvDeslg;},
    function(data){ return data.faseDeslg;}
];

function qtdeTentativas(idtCandidato){
    FacadeAjax.getQtdeTentativasCand(idtCandidato, {
       callback:function(qtdeTentativas){
            if(qtdeTentativas == 0){
                $("#info-tent-success-0").show();
            }
            if(qtdeTentativas == 1){
                $("#info-tent-success-1").show();
            }
            else if(qtdeTentativas == 2){
                $("#info-tent-success-2").show();
            }
            else if(qtdeTentativas == 3){
                $("#info-tent-danger-3").show();
            }
       }
    });    
}



function getTentativasByCand(idtCandidato){
    FacadeAjax.getTentativasByCand(idtCandidato, {
        callback:function(data){ 
            dwr.util.removeAllRows("tentativas");
            dwr.util.addRows("tentativas", data, cellFuncsTentativas, { escapeHtml: false });
        }
    });
    
    qtdeTentativas('1207151111');
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