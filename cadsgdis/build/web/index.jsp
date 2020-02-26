<%-- 
    Document   : index
    Created on : 22/02/2020, 16:06:11
    Author     : anderson
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Anderson de Paula Andrade Medeiros">
        
        <link rel="icon" type="image/x-icon" href="assets/img/logo_sgdis.png" />
        <title>SGDIS</title>
        
        <link rel="stylesheet" type="text/css" href="assets/node_modules/bootstrap/compiler/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_universal.css">
        <link rel="stylesheet" type="text/css" href="assets/css/estilo_cadastroCurso.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script type='text/javascript' src='enderecodinamico.js'></script>
        <script type='text/javascript' src='<%=request.getContextPath() %>/dwr/engine.js'></script>
        <script type='text/javascript' src='<%=request.getContextPath() %>/dwr/interface/FacadeAjax.js'></script>
        

        <script type='text/javascript' src='<%=request.getContextPath() %>/dwr/util.js'></script> 
        <script type="text/javascript">
            FacadeAjax.selectAllForca(montaSelectForca);
            function montaSelectForca(listBeans){
                var select = document.getElementById("#forca");
                dwr.util.removeAllOptions("forca");
                dwr.util.addOptions("forca", [{id:"0", nome:"select"}], "id", "nome");
                dwr.util.addOptions("forca", listBeans, "id", "nome");
            }
            function montaselectDependentesForca(idForca){
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
            });            

}   
        </script>
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        Força: <select id="forca" onchange="montaselectDependentesForca(this.value);"><option selected>selecione...</option></select><br>
        Estado: <select id="estForca" onchange="montaselectDependentesEstadoForca(this.value);"></select><br>
        OM: <select id="om" onchange="montaAbrevOm(this.value);"></select><br>
        Abreviatura: <input id="abrevOM" type="text"><br><br>
        Cep: <input id="cepOM" type="text"><br>
        Endereço: <input id="endOM" type="text"><br>
        Estado: <input id="estOM" type="text"><br>
        Cidade: <input id="cidOM" type="text"><br>
        Bairro: <input id="bairroOM" type="text"><br>
        Posto/Graduação: <select id="pg"></select>
        <br>
        <br>
        <input id="isso" type="text">
        <strong id="teste">1,2 - DWRUtil.addOptions("combo1_2", listBeans, "nome");</strong><br>
        Exemplo combo 1 e 2:
        <button onclick="carregaCombo1_2()" value="click">Carregar</button> /
        <a href="javascript:cleanAddOptions('combo1_2')" >Limpar</a>
        <select id="combo1_2" onchange="selectMil(this.value);">
        </select>
        <br>
        <strong>3 - DWRUtil.addOptions("combo3", listBeans, "id", "nome");</strong><br>
        Exemplo combo 3:
        <a href="javascript:carregaCombo3()" >Carregar</a> /
        <a href="javascript:cleanAddOptions('combo3')" >Limpar</a>
        <select id="combo3"></select>
        <button class="btn btn-danger my-2 my-sm-0" type="submit">Sair</button>
        <a href="inicio.jsp" >Início Cadastro</a>
        <script src="assets/node_modules/jquery/dist/jquery.js"></script>
        <script src="assets/node_modules/popper.js/dist/popper.js"></script>
        <script src="assets/node_modules/bootstrap/dist/js/bootstrap.js"></script>
    </body>
</html>
