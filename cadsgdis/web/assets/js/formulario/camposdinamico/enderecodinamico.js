/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#txtNomeEndResid").val("");
        $("#txtNomeEndResid").removeClass("is-invalid");
        $("#txtNomeEndResid").removeClass("is-valid");
        $("#txtNomeEndResid").prop("readonly", false);

        $("#txtNumEndResid").val("");
        $("#txtNumEndResid").removeClass("is-invalid");
        $("#txtNumEndResid").removeClass("is-valid");
        $("#txtNumEndResid").prop("readonly", false);

        $("#txtEstadoEndResid").val("");
        $("#txtEstadoEndResid").removeClass("is-invalid");
        $("#txtEstadoEndResid").removeClass("is-valid");
        $("#txtEstadoEndResid").prop("readonly", false);

        $("#txtCidadeEndResid").val("");
        $("#txtCidadeEndResid").removeClass("is-invalid");
        $("#txtCidadeEndResid").removeClass("is-valid");
        $("#txtCidadeEndResid").prop("readonly", false);

        $("#txtBairroEndResid").val("");
        $("#txtBairroEndResid").removeClass("is-invalid");
        $("#txtBairroEndResid").removeClass("is-valid");
        $("#txtBairroEndResid").prop("readonly", false);

        $("#txtCompEndResid").val("");
        $("#txtCompEndResid").removeClass("is-invalid");
        $("#txtCompEndResid").removeClass("is-valid");
        $("#txtCompEndResid").prop("readonly", false);

        if(($("#txtEndCurso").val() == "resid") || ($("#txtEndCurso").val() == "0")){
            $("#txtEndCurso").val("0");
            $("#txtEndCurso").removeClass("is-invalid");
            $("#txtEndCurso").removeClass("is-valid");

            $("input[name=txtCepEndCurso]").val("");
            $("input[name=txtCepEndCurso]").removeClass("is-invalid");
            $("input[name=txtCepEndCurso]").removeClass("is-valid");
            $("input[name=txtCepEndCurso]").prop("readonly", false);

            $("input[name=txtNomeEndCurso]").val("");
            $("input[name=txtNomeEndCurso]").removeClass("is-invalid");
            $("input[name=txtNomeEndCurso]").removeClass("is-valid");
            $("input[name=txtNomeEndCurso]").prop("readonly", false);

            $("input[name=txtNumEndCurso]").val("");
            $("input[name=txtNumEndCurso]").removeClass("is-invalid");
            $("input[name=txtNumEndCurso]").removeClass("is-valid");
            $("input[name=txtNumEndCurso]").prop("readonly", false);

            $("input[name=txtEstadoEndCurso]").val("");
            $("input[name=txtEstadoEndCurso]").removeClass("is-invalid");
            $("input[name=txtEstadoEndCurso]").removeClass("is-valid");
            $("input[name=txtEstadoEndCurso]").prop("readonly", false);

            $("input[name=txtCidadeEndCurso]").val("");
            $("input[name=txtCidadeEndCurso]").removeClass("is-invalid");
            $("input[name=txtCidadeEndCurso]").removeClass("is-valid");
            $("input[name=txtCidadeEndCurso]").prop("readonly", false);

            $("input[name=txtBairroEndCurso]").val("");
            $("input[name=txtBairroEndCurso]").removeClass("is-invalid");
            $("input[name=txtBairroEndCurso]").removeClass("is-valid");
            $("input[name=txtBairroEndCurso]").prop("readonly", false);

            $("input[name=txtCompEndCurso]").val("");
            $("input[name=txtCompEndCurso]").removeClass("is-invalid");
            $("input[name=txtCompEndCurso]").removeClass("is-valid");
            $("input[name=txtCompEndCurso]").prop("readonly", false);

            $("input[name=txtPtRefEndCurso]").val("");
            $("input[name=txtPtRefEndCurso]").removeClass("is-invalid");
            $("input[name=txtPtRefEndCurso]").removeClass("is-valid");
        }
    }
    function limpa_formulário_cep_om(campo_end, campo_num, campo_est, campo_cid, campo_bairro, campo_comp) {
        // Limpa valores do formulário de cep.
        $(campo_end).val("");
        $(campo_end).removeClass("is-invalid");
        $(campo_end).removeClass("is-valid");

        $(campo_num).val("");
        $(campo_num).removeClass("is-invalid");
        $(campo_num).removeClass("is-valid");

        $(campo_est).val("");
        $(campo_est).removeClass("is-invalid");
        $(campo_est).removeClass("is-valid");

        $(campo_cid).val("");
        $(campo_cid).removeClass("is-invalid");
        $(campo_cid).removeClass("is-valid");

        $(campo_bairro).val("");
        $(campo_bairro).removeClass("is-invalid");
        $(campo_bairro).removeClass("is-valid");

        $(campo_comp).val("");
        $(campo_comp).removeClass("is-invalid");
        $(campo_comp).removeClass("is-valid");
    }

    //Quando o campo cep perde o foco.
    $("#txtCepEndResid").change(function() {
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#txtNomeEndResid").val("...");
                $("#txtEstadoEndResid").val("...");
                $("#txtCidadeEndResid").val("...");
                $("#txtBairroEndResid").val("...");
                $("#txtCompEndResid").val("...");
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        if($("#txtEndCurso").val() == "resid"){
                            $("#txtCepEndCurso").val($("#txtCepEndResid").val());
                            $("#txtCepEndCurso").removeClass("is-invalid");
                            $("#txtCepEndCurso").addClass("is-valid");
                            $("#txtCepEndCurso").prop("readonly", true);
                        }
                        //Atualiza os campos com os valores da consulta.
                        if(dados.logradouro != ""){
                            $("#txtNomeEndResid").val(dados.logradouro);
                            $("#txtNomeEndResid").removeClass("is-invalid");
                            $("#txtNomeEndResid").addClass("is-valid");
                            $("#txtNomeEndResid").prop("readonly", true);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtNomeEndCurso").val(dados.logradouro);
                                $("#txtNomeEndCurso").removeClass("is-invalid");
                                $("#txtNomeEndCurso").addClass("is-valid");
                                $("#txtNomeEndCurso").prop("readonly", true);
                            }
                        }
                        else{
                            $("#txtNomeEndResid").val('');
                            $("#txtNomeEndResid").removeClass("is-invalid");
                            $("#txtNomeEndResid").removeClass("is-valid");
                            $("#txtNomeEndResid").prop("readonly", false);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtNomeEndCurso").val('');
                                $("#txtNomeEndCurso").removeClass("is-invalid");
                                $("#txtNomeEndCurso").removeClass("is-valid");
                                $("#txtNomeEndCurso").prop("readonly", false);
                            }
                        }

                        if(dados.uf != ""){
                            $("#txtEstadoEndResid").val(dados.uf);
                            $("#txtEstadoEndResid").removeClass("is-invalid");
                            $("#txtEstadoEndResid").addClass("is-valid");
                            $("#txtEstadoEndResid").prop("readonly", true);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtEstadoEndCurso").val(dados.uf);
                                $("#txtEstadoEndCurso").removeClass("is-invalid");
                                $("#txtEstadoEndCurso").addClass("is-valid");
                                $("#txtEstadoEndCurso").prop("readonly", true);
                            }
                        }
                        else{
                            $("#txtEstadoEndResid").val('');
                            $("#txtEstadoEndResid").removeClass("is-invalid");
                            $("#txtEstadoEndResid").removeClass("is-valid");
                            $("#txtEstadoEndResid").prop("readonly", false);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtEstadoEndCurso").val('');
                                $("#txtEstadoEndCurso").removeClass("is-invalid");
                                $("#txtEstadoEndCurso").removeClass("is-valid");
                                $("#txtEstadoEndCurso").prop("readonly", false);
                            }
                        }

                        if(dados.localidade != ""){
                            $("#txtCidadeEndResid").val(dados.localidade);
                            $("#txtCidadeEndResid").removeClass("is-invalid");
                            $("#txtCidadeEndResid").addClass("is-valid");
                            $("#txtCidadeEndResid").prop("readonly", true);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtCidadeEndCurso").val(dados.localidade);
                                $("#txtCidadeEndCurso").removeClass("is-invalid");
                                $("#txtCidadeEndCurso").addClass("is-valid");
                                $("#txtCidadeEndCurso").prop("readonly", true);
                            }
                        }
                        else{
                            $("#txtCidadeEndResid").val('');
                            $("#txtCidadeEndResid").removeClass("is-invalid");
                            $("#txtCidadeEndResid").removeClass("is-valid");
                            $("#txtCidadeEndResid").prop("readonly", false);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtCidadeEndCurso").val('');
                                $("#txtCidadeEndCurso").removeClass("is-invalid");
                                $("#txtCidadeEndCurso").removeClass("is-valid");
                                $("#txtCidadeEndCurso").prop("readonly", false);
                            }
                        }                            

                        if(dados.bairro != ""){
                            $("#txtBairroEndResid").val(dados.bairro);
                            $("#txtBairroEndResid").removeClass("is-invalid");
                            $("#txtBairroEndResid").addClass("is-valid");
                            $("#txtBairroEndResid").prop("readonly", true);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtBairroEndCurso").val(dados.bairro);
                                $("#txtBairroEndCurso").removeClass("is-invalid");
                                $("#txtBairroEndCurso").addClass("is-valid");
                                $("#txtBairroEndCurso").prop("readonly", true);
                            }
                        }
                        else{
                            $("#txtBairroEndResid").val('');
                            $("#txtBairroEndResid").removeClass("is-invalid");
                            $("#txtBairroEndResid").removeClass("is-valid");
                            $("#txtBairroEndResid").prop("readonly", false);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtBairroEndCurso").val('');
                                $("#txtBairroEndCurso").removeClass("is-invalid");
                                $("#txtBairroEndCurso").removeClass("is-valid");
                                $("#txtBairroEndCurso").prop("readonly", false);
                            }
                        }                            

                        if(dados.complemento != ""){
                            $("#txtCompEndResid").val(dados.complemento);
                            $("#txtCompEndResid").removeClass("is-invalid");
                            $("#txtCompEndResid").addClass("is-valid");
                            $("#txtCompEndResid").prop("readonly", true);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtCompEndCurso").val(dados.complemento);
                                $("#txtCompEndCurso").removeClass("is-invalid");
                                $("#txtCompEndCurso").addClass("is-valid");
                                $("#txtCompEndCurso").prop("readonly", true);
                            }
                        }
                        else{
                            $("#txtCompEndResid").val('');
                            $("#txtCompEndResid").removeClass("is-invalid");
                            $("#txtCompEndResid").removeClass("is-valid");
                            $("#txtCompEndResid").prop("readonly", false);

                            if($("#txtEndCurso").val() == "resid"){
                                $("#txtCompEndCurso").val('');
                                $("#txtCompEndCurso").removeClass("is-invalid");
                                $("#txtCompEndCurso").removeClass("is-valid");
                                $("#txtCompEndCurso").prop("readonly", false);
                            }
                        }
                    }
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        $("#txtCepEndResid").removeClass("is-valid");
                        $("#txtCepEndResid").addClass("is-invalid");
                        $(".invalid-cep").html("CEP não encontrado!");
                    }
                });
            }
            else {
                //cep é inválido.
                limpa_formulário_cep();
                $("#txtCepEndResid").removeClass("is-valid");
                $("#txtCepEndResid").addClass("is-invalid");
                $(".invalid-cep").html("CEP Inválido!");;
            }
        }
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
    
    //Quando o campo cep perde o foco.
    $("#txtEndCepOM").change(function() {
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#txtEndNomeOM").val("...");
                $("#txtEndEstadoOM").val("...");
                $("#txtEndCidadeOM").val("...");
                $("#txtEndBairroOM").val("...");
                $("#txtEndCompOM").val("...");
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta
                        if(dados.logradouro != ""){
                            $("#txtEndNomeOM").val(dados.logradouro);
                            $("#txtEndNomeOM").removeClass("is-invalid");
                            $("#txtEndNomeOM").addClass("is-valid");
                        }
                        else{
                            $("#txtEndNomeOM").val('');
                            $("#txtEndNomeOM").removeClass("is-invalid");
                            $("#txtEndNomeOM").removeClass("is-valid");
                        }

                        if(dados.uf != ""){
                            $("#txtEndEstadoOM").val(dados.uf);
                            $("#txtEndEstadoOM").removeClass("is-invalid");
                            $("#txtEndEstadoOM").addClass("is-valid");
                        }
                        else{
                            $("#txtEndEstadoOM").val('');
                            $("#txtEndEstadoOM").removeClass("is-invalid");
                            $("#txtEndEstadoOM").removeClass("is-valid");
                        }

                        if(dados.localidade != ""){
                            $("#txtEndCidadeOM").val(dados.localidade);
                            $("#txtEndCidadeOM").removeClass("is-invalid");
                            $("#txtEndCidadeOM").addClass("is-valid");
                        }
                        else{
                            $("#txtEndCidadeOM").val('');
                            $("#txtEndCidadeOM").removeClass("is-invalid");
                            $("#txtEndCidadeOM").removeClass("is-valid");
                        }                            

                        if(dados.bairro != ""){
                            $("#txtEndBairroOM").val(dados.bairro);
                            $("#txtEndBairroOM").removeClass("is-invalid");
                            $("#txtEndBairroOM").addClass("is-valid");
                        }
                        else{
                            $("#txtEndBairroOM").val('');
                            $("#txtEndBairroOM").removeClass("is-invalid");
                            $("#txtEndBairroOM").removeClass("is-valid");
                        }                            

                        if(dados.complemento != ""){
                           $("#txtEndCompOM").val(dados.complemento);
                            $("#txtEndCompOM").removeClass("is-invalid");
                            $("#txtEndCompOM").addClass("is-valid");
                        }
                        else{
                            $("#txtEndCompOM").val('');
                            $("#txtEndCompOM").removeClass("is-invalid");
                            $("#txtEndCompOM").removeClass("is-valid");
                            $("#txtEndCompOM").prop("readonly", false);
                        }
                    }
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep_om("#txtEndNomeOM", "#txtEndEstadoOM", "#txtEndCidadeOM", "#txEndBairroOM", "#txtEndCompOM");
                        $("#txtEndCepOM").removeClass("is-valid");
                        $("#txtEndCepOM").addClass("is-invalid");
                        $(".invalid-cep").html("CEP não encontrado!");
                    }
                });
            }
            else {
                //cep é inválido.
                limpa_formulário_cep_om("#txtEndNomeOM", "#txtEndEstadoOM", "#txtEndCidadeOM", "#txEndBairroOM", "#txtEndCompOM");
                $("#txtEndCepOM").removeClass("is-valid");
                $("#txtEndCepOM").addClass("is-invalid");
                $(".invalid-cep").html("CEP Inválido!");;
            }
        }
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep_om("#txtEndNomeOM", "#txtEndEstadoOM", "#txtEndCidadeOM", "#txEndBairroOM", "#txtEndCompOM");
        }
    });

    $("#txtNumEndResid").change(function(){
        num = $(this).val();
        if($("#txtEndCurso").val() == "resid"){
            if(num != ""){
                $("#txtNumEndCurso").val(num);
                $("#txtNumEndCurso").removeClass("is-invalid");
                $("#txtNumEndCurso").addClass("is-valid");
                $("#txtNumEndCurso").prop("readonly", true);
            }
            else{
                $("#txtNumEndCurso").val('');
                $("#txtNumEndCurso").removeClass("is-invalid");
                $("#txtNumEndCurso").removeClass("is-valid");
                $("#txtNumEndCurso").prop("readonly", false);
            }
        }
    });
    
    $(function(){
        if($("#txtCepEndResid").val() != 0){
            if($("#txtNomeEndResid").val() != ""){
                $("#txtNomeEndResid").prop("readonly", true);
            }
            else{
                $("#txtNomeEndResid").prop("readonly", false);
            }
            if($("#txtEstadoEndResid").val() != ""){
                $("#txtEstadoEndResid").prop("readonly", true);
            }
            else{
                $("#txtEstadoEndResid").prop("readonly", false);
            }
            if($("#txtCidadeEndResid").val() != ""){
                $("#txtCidadeEndResid").prop("readonly", true);
            }
            else{
                $("#txtCidadeEndResid").prop("readonly", false);
            }
            if($("#txtBairroEndResid").val() != ""){
                $("#txtBairroEndResid").prop("readonly", true);
            }
            else{
                $("#txtBairroEndResid").prop("readonly", false);
            }
            if($("#txtCompEndResid").val() != ""){
                $("#txtCompEndResid").prop("readonly", true);
            }
            else{
                $("#txtCompEndResid").prop("readonly", false);
            }
            if(($("#txtEndCurso").val() == "resid") || ($("#txtEndCurso").val() == "cigs")){
                if($("#txtCepEndCurso").val() != ""){
                    $("#txtCepEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtCepEndCurso").prop("readonly", false);
                }
                if($("#txtNomeEndCurso").val() != ""){
                    $("#txtNomeEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtNomeEndCurso").prop("readonly", false);
                }
                if($("#txtNumEndCurso").val() != ""){
                    $("#txtNumEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtNumEndCurso").prop("readonly", false);
                }
                if($("#txtEstadoEndCurso").val() != ""){
                    $("#txtEstadoEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtEstadoEndCurso").prop("readonly", false);
                }
                if($("#txtCidadeEndCurso").val() != ""){
                    $("#txtCidadeEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtCidadeEndCurso").prop("readonly", false);
                }
                if($("#txtBairroEndCurso").val() != ""){
                    $("#txtBairroEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtBairroEndCurso").prop("readonly", false);
                }
                if($("#txtCompEndCurso").val() != ""){
                    $("#txtCompEndCurso").prop("readonly", true);
                }
                else{
                    $("#txtCompEndCurso").prop("readonly", false);
                }
            }
        }
    });
});