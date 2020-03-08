/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//VARIÁVEIS AUXILIARES
var camposOk = 0; //testar se todos campos foram preenchidos corretamente
var cpfOk = 0; //testar validade do cpf

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

//FONE
function validFone(campo){
    var foneOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(foneOM == ''){
    }
    else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
            foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
            foneOM == '8888888888' || foneOM == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-fone").html("Fone Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//FONE CEL
function validFoneCel(campo){  
    var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(foneCel == ''){
    }
    else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
            foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
            foneCel == '88888888888' || foneCel == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-foneCel").html("Fone Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//CEP
function validCEP(campo){  
    var endCepOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    if(endCepOM == ''){
    }
    else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
            endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
            endCepOM == '88888888' || endCepOM == '99999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cep").html("CEP Inválido!");
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//DATA DE NASCIMENTO
function validDataNascAl(campo){
    var dataNascAl = $(campo).val();
    var dataNascAlSplit = dataNascAl.split('-');        
    var diaNascAl = dataNascAlSplit[2];
    var mesNascAl = dataNascAlSplit[1];
    var anoNascAl = dataNascAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataNascAl == ''){
    }       
    else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoNascAl > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
    }       
    else if((anoAtual - anoNascAl) < 18){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//IDENTIDADE MILITAR
function validIdtMilAl(campo){  
    var idtMilAl = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
    
    if(idtMilAl == ''){
    }
    else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
            idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
            idtMilAl == '8888888888' || idtMilAl == '9999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-idtMilAl").html("Identidade Militar Inválida!");
        camposOk = 0;
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
        camposOk = 1;
    }
};

//CPF
function validCPF(campo){
    var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
    
    if(cpf == ''){
        cpfOk = 0;
    }
    else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
            cpf == '88888888888' || cpf == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpf").html("CPF Inválido!");
        cpfOk = 0;
    }else{
        // Valida 1o digito	
        var add = 0;	
        for (var i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }
        // Valida 2o digito	
        add = 0;	
        for (var i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10))){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
            cpfOk = 1;
        }    
    } 
};

//CPF
function validCPFAl(campo){
    var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
    
    if(cpf == ''){
        cpfOk = 0;
    }
    else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
            cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
            cpf == '88888888888' || cpf == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-cpf").html("CPF Inválido!");
        cpfOk = 0;
    }else{
        // Valida 1o digito	
        var add = 0;	
        for (var i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }
        // Valida 2o digito	
        add = 0;	
        for (var i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10))){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
            cpfOk = 1;
        }    
    } 
};

//DATA DE PRAÇA
function validDataPracaAl(campoDataPraca, campoDataNasc){ 
    var dataNascAl = $(campoDataNasc).val();
    var dataNascAlSplit = dataNascAl.split('-');        
    var diaNascAl = dataNascAlSplit[2];
    var mesNascAl = dataNascAlSplit[1];
    var anoNascAl = dataNascAlSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataPracaAl == ''){
    }       
    else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }       
    else if((anoPracaAl > anoAtual)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
    }       
    else if((anoPracaAl < anoNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
    }
    else if((anoPracaAl - anoNascAl) < 18){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }   
    else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
        $(campoDataPraca).removeClass("is-valid");
        $(campoDataPraca).addClass("is-invalid");
        $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
    }
    else{
        $(campoDataPraca).removeClass("is-invalid");
        $(campoDataPraca).addClass("is-valid");
    }
};

//TITULO ELEITOR
function validTituloEleitorAl(campo){
    var titEleitorNumAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorNumAl == ''){
    }
    else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
            titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
            titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//TITULO ELEITOR - ZONA
function validTitEleitorZonaAl(campo){
    var titEleitorZonaAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorZonaAl == ''){
    }
    else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//TITULO ELEITOR - SEÇÃO
function validTitEleitorSecaoAl(campo){
    var titEleitorSecaoAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(titEleitorSecaoAl == ''){
    }
    else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-titEleitorSecaoAl").html("A Seção é formada por 4 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//ANO
function validAno(campo){
    var ano = $(campo).val();
    if(ano == ''){
    }
    else if((ano != '') && (ano.length < 4)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-ano").html("O ano é formado 4 caracteres!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//EMAIL
function validEmailAl(campo){
    var email = $(campo).val();
    var usuario = $(campo).val().substring(0, $(campo).val().value.indexOf("@"));
    var dominio = $(campo).val().value.substring($(campo).val().value.indexOf("@")+ 1, $(campo).val().value.length);

    if(email == ''){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-emailAl").html("Campo Obrigatório!");
    } 
    else if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) &&
             (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1)&& 
             (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-emailAl").html("Email Inválido!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//NÚMERO CNH
function validNumCNH(campo){
    var numCNH = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
    if(numCNH == ''){
    }
    else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
            numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
            numCNH == '88888888888' || numCNH == '99999999999'){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-numCNH").html("CNH Inválida!");   
    }
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//DATA DE VALIDADE CNH
function validDataValidadeCNH(campo){
    var dataValCNH = $(campo).val();
    var dataValCNHSplit = dataValCNH.split('-');        
    var diaValCNH = dataValCNHSplit[2];
    var mesValCNH = dataValCNHSplit[1];
    var anoValCNH = dataValCNHSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();

    if(dataValCNH == ''){
    }       
    else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
    }       
    else if((anoValCNH == anoAtual) && (mesValCNH > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
    }       
    else if((anoValCNH > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
    }     
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

//DATA DA ÚTLIMA PROMOÇÃO
function validDataUltProm(campoDataPraca, campoDataUltProm){ 
    var dataUltProm = $(campoDataUltProm).val();
    var dataUltPromSplit = dataUltProm.split('-');        
    var diaUltProm = dataUltPromSplit[2];
    var mesUltProm = dataUltPromSplit[1];
    var anoUltProm = dataUltPromSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataUltProm == ''){
    }       
    else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }       
    else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }       
    else if((anoUltProm > anoAtual)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoUltProm < anoPracaAl)){
        $(campoDataUltProm).removeClass("is-valid");
        $(campoDataUltProm).addClass("is-invalid");
        $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
    }        
    else{
        $(campoDataUltProm).removeClass("is-invalid");
        $(campoDataUltProm).addClass("is-valid");
    }
};

//DATA QA PARA PROMOÇÃO
function validDataQaQuando(campoDataUltProm, campoDataQaQuando){ 
    var dataUltProm = $(campoDataUltProm).val();
    var dataUltPromSplit = dataUltProm.split('-');        
    var diaUltProm = dataUltPromSplit[2];
    var mesUltProm = dataUltPromSplit[1];
    var anoUltProm = dataUltPromSplit[0];

    var dataQaQuando = $(campoDataQaQuando).val();
    var dataQaQuandoSplit = dataQaQuando.split('-');        
    var diaQaQuando = dataQaQuandoSplit[2];
    var mesQaQuando = dataQaQuandoSplit[1];
    var anoQaQuando = dataQaQuandoSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataQaQuando == ''){
    }       
    else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando > diaAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }       
    else if((anoQaQuando == anoAtual) && (mesQaQuando > mesAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }       
    else if((anoQaQuando > anoAtual)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
    }       
    else if((anoQaQuando < anoUltProm)){
        $(campoDataQaQuando).removeClass("is-valid");
        $(campoDataQaQuando).addClass("is-invalid");
        $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
    }        
    else{
        $(campoDataQaQuando).removeClass("is-invalid");
        $(campoDataQaQuando).addClass("is-valid");
    }
};

//DATA DO ÚTLIMO TAF
function validDataUltTAF(campoDataPraca, campoDataUltTAF){ 
    var dataUltTAF = $(campoDataUltTAF).val();
    var dataUltTAFSplit = dataUltTAF.split('-');        
    var diaUltTAF = dataUltTAFSplit[2];
    var mesUltTAF = dataUltTAFSplit[1];
    var anoUltTAF = dataUltTAFSplit[0];

    var dataPracaAl = $(campoDataPraca).val();
    var dataPracaAlSplit = dataPracaAl.split('-');        
    var diaPracaAl = dataPracaAlSplit[2];
    var mesPracaAl = dataPracaAlSplit[1];
    var anoPracaAl = dataPracaAlSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();
    if(dataUltTAF == ''){
    }       
    else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }       
    else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }       
    else if((anoUltTAF > anoAtual)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
    }       
    else if((anoUltTAF < anoPracaAl)){
        $(campoDataUltTAF).removeClass("is-valid");
        $(campoDataUltTAF).addClass("is-invalid");
        $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
    }        
    else{
        $(campoDataUltTAF).removeClass("is-invalid");
        $(campoDataUltTAF).addClass("is-valid");
    }
};

function validDInOMSvAmz(campo){
    var dataInicio = $(campo).val();
    var dataInicioSplit = dataInicio.split('-');        
    var diaInicio = dataInicioSplit[2];
    var mesInicio = dataInicioSplit[1];
    var anoInicio = dataInicioSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();        

    if(dataInicio == ''){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Campo Obrigatório!");
    }       
    else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }       
    else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }       
    else if((anoInicio > anoAtual)){
        $(campo).removeClass("is-valid");
        $(campo).addClass("is-invalid");
        $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
    }         
    else{
        $(campo).removeClass("is-invalid");
        $(campo).addClass("is-valid");
    }
};

function validDFimOMSvAmz(campoDataInicio, campoDataFim){
    var dataInicio = $(campoDataInicio).val();
    var dataInicioSplit = dataInicio.split('-');        
    var diaInicio = dataInicioSplit[2];
    var mesInicio = dataInicioSplit[1];
    var anoInicio = dataInicioSplit[0];

    var dataFim = $(campoDataFim).val();
    var dataFimSplit = dataFim.split('-');        
    var diaFim = dataFimSplit[2];
    var mesFim = dataFimSplit[1];
    var anoFim = dataFimSplit[0];

    var dataAtual = new Date();
    var diaAtual = dataAtual.getDate();
    var mesAtual = (dataAtual.getMonth() + 1);
    var anoAtual = dataAtual.getFullYear();        

    if(dataFim == ''){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Campo Obrigatório!");
    }       
    else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }       
    else if((anoFim == anoAtual) && (mesFim > mesAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }       
    else if((anoFim > anoAtual)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
    }         
    else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }       
    else if((anoFim == anoInicio) && (mesFim < mesInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }       
    else if((anoFim < anoInicio)){
        $(campoDataFim).removeClass("is-valid");
        $(campoDataFim).addClass("is-invalid");
        $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
    }         
    else{
        $(campoDataFim).removeClass("is-invalid");
        $(campoDataFim).addClass("is-valid");
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
function validInputNTReal(campo){
    $(campo).change(function(){
        if($(campo).val() != ''){
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }else{
            $(campo).removeClass("is-valid");
            $(campo).removeClass("is-invalid");
        }
    });
};

//FONE
function validFoneTReal(campo){  
    $(campo).change(function(){
        var foneOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneOM == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-fone").html("Campo Obrigatório!");
        }
        else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
                foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
                foneOM == '8888888888' || foneOM == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-fone").html("Fone Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//FONE CEL
function validFoneCelTReal(campo){  
    $(campo).change(function(){
        var foneCel = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(foneCel == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                foneCel == '88888888888' || foneCel == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//CEP
function validCEPTReal(campo){  
    $(campo).change(function(){
        var endCepOM = $(campo).val().replace("-","").replace("(","").replace(")","").replace(" ","");
        if(endCepOM == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
                endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
                endCepOM == '88888888' || endCepOM == '99999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cep").html("CEP Inválido!");       
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//DATA DE NASCIMENTO
function validDataNascAlTReal(campo){ 
    $(campo).change(function(){
        var dataNascAl = $(campo).val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataNascAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Campo Obrigatório!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};

//IDENTIDADE MILITAR
function validIdtMilAlTReal(campo){ 
    $(campo).change(function(){
        var idtMilAl = $(campo).val().replace("-","").replace(" ","");
        if(idtMilAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMilAl").html("Campo Obrigatório!");
        }
        else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
                idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
                idtMilAl == '8888888888' || idtMilAl == '9999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-idtMilAl").html("Identidade Militar Inválida!");  
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//CPF
function validCPFTReal(campo){
    $(campo).change(function(){
        var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
        if(cpf == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("Campo Obrigatório!");
            cpfOk = 0;
        }
        else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                cpf == '88888888888' || cpf == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpf").html("CPF Inválido!");
                    cpfOk = 0;
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                    cpfOk = 1;
                }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }    
        }        
    });
};

//CPF
function validCPFAlTReal(campo){
    $(campo).change(function(){
        var cpf = $(campo).val().replace(".","").replace(".","").replace("-","");
        if(cpf == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("Campo Obrigatório!");
            cpfOk = 0;
        }
        else if(cpf == '00000000000' || cpf == '11111111111' || cpf == '22222222222' || cpf == '33333333333' ||                 
                cpf == '44444444444' || cpf == '55555555555' || cpf == '66666666666' || cpf == '77777777777' ||                 
                cpf == '88888888888' || cpf == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-cpf").html("CPF Inválido!");
            cpfOk = 0;
        }else{
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpf.charAt(i)) * (10 - i);	
                var rev = 11 - (add % 11);	
                if (rev == 10 || rev == 11)		
                    rev = 0;	
                if (rev != parseInt(cpf.charAt(9))){
                    $(campo).removeClass("is-valid");
                    $(campo).addClass("is-invalid");
                    $(".invalid-cpf").html("CPF Inválido!");
                    cpfOk = 0;
                }else{
                    $(campo).removeClass("is-invalid");
                    $(campo).addClass("is-valid");
                    cpfOk = 1;
                }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpf.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpf.charAt(10))){
                $(campo).removeClass("is-valid");
                $(campo).addClass("is-invalid");
                $(".invalid-cpf").html("CPF Inválido!");
                cpfOk = 0;
            }else{
                $(campo).removeClass("is-invalid");
                $(campo).addClass("is-valid");
                cpfOk = 1;
            }    
        }        
    });
};

//DATA DE PRAÇA
function validDataPracaAlTReal(campoDataPraca, campoDataNasc){ 
    $(campoDataPraca).change(function(){
        var dataNascAl = $(campoDataNasc).val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataPracaAl == ''){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Campo Obrigatório!");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl > anoAtual)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl < anoNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }
        else if((anoPracaAl - anoNascAl) < 18){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
            $(campoDataPraca).removeClass("is-valid");
            $(campoDataPraca).addClass("is-invalid");
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else{
            $(campoDataPraca).removeClass("is-invalid");
            $(campoDataPraca).addClass("is-valid");
        }
    });    
};

//TITULO ELEITOR
function validTituloEleitorAlTReal(campo){
    $(campo).change(function(){
        var titEleitorNumAl = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
        if(titEleitorNumAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNumAl").html("Campo Obrigatório!");
        }
        else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
                titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
                titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//TITULO ELEITOR - ZONA
function validTitEleitorZonaAlTReal(campo){
    $(campo).change(function(){
        var titEleitorZonaAl = $(campo).val();
        if(titEleitorZonaAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZonaAl").html("Campo Obrigatório!");
        }
        else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//TITULO ELEITOR - SEÇÃO
function validTitEleitorSecaoAlTReal(campo){
    $(campo).change(function(){
        var titEleitorSecaoAl = $(campo).val();
        if(titEleitorSecaoAl == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecaoAl").html("Campo Obrigatório!");
        }
        else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-titEleitorSecaoAl").html("A Secao é formada por 4 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//ANO
function validAnoTReal(campo){
    $(campo).change(function(){
        var ano = $(campo).val();
        if(ano == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-ano").html("Campo Obrigatório!");
        }
        else if((ano != '') && (ano.length < 4)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-ano").html("O ano é formado 4 caracteres!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//EMAIL
function validEmailAlTReal(campo){
    $(campo).change(function(){
        
        var email = $(campo).val();
        var exclude="/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/";
        var check="/@[w-]+./";
        var checkend="/.[a-zA-Z]{2,3}$/";
        if(email == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-emailAl").html("Campo Obrigatório!");
        }
        else if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-emailAl").html("Email Inválido!");
        }
        /*var usuario = $(campo).val().substring(0, $(campo).val().value.indexOf("@"));
        var dominio = $(campo).val().value.substring($(campo).val().value.indexOf("@")+ 1, $(campo).val().value.length);
        
        if(email == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-emailAl").html("Campo Obrigatório!");
        } 
        else if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) && (dominio.search("@") == -1) &&
                 (usuario.search(" ") == -1) && (dominio.search(" ") == -1) && (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1)&& 
                 (dominio.lastIndexOf(".") < dominio.length - 1)) {
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-emailAl").html("Email Inválido!");   
        }*/
        else{
            alert(email);
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//NÚMERO CNH
function validNumCNHTReal(campo){
    $(campo).change(function(){
        var numCNH = $(campo).val().replace(" ","").replace(" ","").replace(" ","");
        if(numCNH == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-numCNH").html("Campo Obrigatório!");
        }
        else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                numCNH == '88888888888' || numCNH == '99999999999'){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-numCNH").html("CNH Inválida!");   
        }
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//DATA DE VALIDADE CNH
function validDataValidadeCNHTReal(campo){
    $(campo).change(function(){
        var dataValCNH = $(campo).val();
        var dataValCNHSplit = dataValCNH.split('-');        
        var diaValCNH = dataValCNHSplit[2];
        var mesValCNH = dataValCNHSplit[1];
        var anoValCNH = dataValCNHSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();

        if(dataValCNH == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("Campo Obrigatório!");
        }       
        else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
        }       
        else if((anoValCNH == anoAtual) && (mesValCNH > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
        }       
        else if((anoValCNH > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
        }   
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });
};

//FORM CNH
function acionamentoForm(select, div){
    if($(select).val() == 's'){
        $(div).css("display", "block");  
    }
};

//FORM VEÍCULOS
function validSelectVeiculos(traraVeiculo){
    if($(traraVeiculo).val() == 's'){
        $("#divVeiculos").css("display", "block");  
    }
};

//DATA DA ÚTLIMA PROMOÇÃO
function validDataUltPromTReal(campoDataPraca, campoDataUltProm){ 
    $(campoDataUltProm).change(function(){
        var dataUltProm = $(campoDataUltProm).val();
        var dataUltPromSplit = dataUltProm.split('-');        
        var diaUltProm = dataUltPromSplit[2];
        var mesUltProm = dataUltPromSplit[1];
        var anoUltProm = dataUltPromSplit[0];

        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataUltProm == ''){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Campo Obrigatório!");
        }       
        else if((anoUltProm == anoAtual) && (mesUltProm == mesAtual) && (diaUltProm > diaAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm == anoPracaAl) && (mesUltProm == mesPracaAl) && (diaUltProm < diaPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }       
        else if((anoUltProm == anoAtual) && (mesUltProm > mesAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm == anoPracaAl) && (mesUltProm < mesPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }       
        else if((anoUltProm > anoAtual)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoUltProm < anoPracaAl)){
            $(campoDataUltProm).removeClass("is-valid");
            $(campoDataUltProm).addClass("is-invalid");
            $(".invalid-dataUltProm").html("Data Inválida! Última promoção antes da data de praça.");
        }        
        else{
            $(campoDataUltProm).removeClass("is-invalid");
            $(campoDataUltProm).addClass("is-valid");
        }
    });    
};

//DATA QA PARA PROMOÇÃO
function validDataQaQuandoTReal(campoDataUltProm, campoDataQaQuando){
    $(campoDataQaQuando).change(function(){
        var dataUltProm = $(campoDataUltProm).val();
        var dataUltPromSplit = dataUltProm.split('-');        
        var diaUltProm = dataUltPromSplit[2];
        var mesUltProm = dataUltPromSplit[1];
        var anoUltProm = dataUltPromSplit[0];

        var dataQaQuando = $(campoDataQaQuando).val();
        var dataQaQuandoSplit = dataQaQuando.split('-');        
        var diaQaQuando = dataQaQuandoSplit[2];
        var mesQaQuando = dataQaQuandoSplit[1];
        var anoQaQuando = dataQaQuandoSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataQaQuando == ''){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Campo Obrigatório!");
        }       
        else if((anoQaQuando == anoAtual) && (mesQaQuando == mesAtual) && (diaQaQuando > diaAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoQaQuando == anoUltProm) && (mesQaQuando == mesUltProm) && (diaQaQuando < diaUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }       
        else if((anoQaQuando == anoAtual) && (mesQaQuando > mesAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoQaQuando == anoUltProm) && (mesQaQuando < mesUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }       
        else if((anoQaQuando > anoAtual)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! Última promoção após data atual.");
        }       
        else if((anoQaQuando < anoUltProm)){
            $(campoDataQaQuando).removeClass("is-valid");
            $(campoDataQaQuando).addClass("is-invalid");
            $(".invalid-dataQaQuando").html("Data Inválida! QA antes da última promoção.");
        }        
        else{
            $(campoDataQaQuando).removeClass("is-invalid");
            $(campoDataQaQuando).addClass("is-valid");
        }
    });
};

//DATA DO ÚTLIMO TAF
function validDataUltTAFTReal(campoDataPraca, campoDataUltTAF){ 
    $(campoDataUltTAF).change(function(){
        var dataUltTAF = $(campoDataUltTAF).val();
        var dataUltTAFSplit = dataUltTAF.split('-');        
        var diaUltTAF = dataUltTAFSplit[2];
        var mesUltTAF = dataUltTAFSplit[1];
        var anoUltTAF = dataUltTAFSplit[0];

        var dataPracaAl = $(campoDataPraca).val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];

        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        if(dataUltTAF == ''){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Campo Obrigatório!");
        }       
        else if((anoUltTAF == anoAtual) && (mesUltTAF == mesAtual) && (diaUltTAF > diaAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF == anoPracaAl) && (mesUltTAF == mesPracaAl) && (diaUltTAF < diaPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }       
        else if((anoUltTAF == anoAtual) && (mesUltTAF > mesAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF == anoPracaAl) && (mesUltTAF < mesPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }       
        else if((anoUltTAF > anoAtual)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF após data atual.");
        }       
        else if((anoUltTAF < anoPracaAl)){
            $(campoDataUltTAF).removeClass("is-valid");
            $(campoDataUltTAF).addClass("is-invalid");
            $(".invalid-dataUltTAF").html("Data Inválida! Último TAF antes da data de praça.");
        }        
        else{
            $(campoDataUltTAF).removeClass("is-invalid");
            $(campoDataUltTAF).addClass("is-valid");
        }
    });
};


function validDInOMSvAmzTReal(campo){ 
    $(campo).change(function(){
        var dataInicio = $(campo).val();
        var dataInicioSplit = dataInicio.split('-');        
        var diaInicio = dataInicioSplit[2];
        var mesInicio = dataInicioSplit[1];
        var anoInicio = dataInicioSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataInicio == ''){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Campo Obrigatório!");
        }       
        else if((anoInicio == anoAtual) && (mesInicio == mesAtual) && (diaInicio > diaAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }       
        else if((anoInicio == anoAtual) && (mesInicio > mesAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }       
        else if((anoInicio > anoAtual)){
            $(campo).removeClass("is-valid");
            $(campo).addClass("is-invalid");
            $(".invalid-dataInicio").html("Data Inválida! Início após data atual.");
        }         
        else{
            $(campo).removeClass("is-invalid");
            $(campo).addClass("is-valid");
        }
    });    
};

function validDFimOMSvAmzTReal(campoDataInicio, campoDataFim){ 
    $(campoDataFim).change(function(){
        var dataInicio = $(campoDataInicio).val();
        var dataInicioSplit = dataInicio.split('-');        
        var diaInicio = dataInicioSplit[2];
        var mesInicio = dataInicioSplit[1];
        var anoInicio = dataInicioSplit[0];
        
        var dataFim = $(campoDataFim).val();
        var dataFimSplit = dataFim.split('-');        
        var diaFim = dataFimSplit[2];
        var mesFim = dataFimSplit[1];
        var anoFim = dataFimSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();        
        
        if(dataFim == ''){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Campo Obrigatório!");
        }       
        else if((anoFim == anoAtual) && (mesFim == mesAtual) && (diaFim > diaAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }       
        else if((anoFim == anoAtual) && (mesFim > mesAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }       
        else if((anoFim > anoAtual)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim após data atual.");
        }         
        else if((anoFim == anoInicio) && (mesFim == mesInicio) && (diaFim < diaInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }       
        else if((anoFim == anoInicio) && (mesFim < mesInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }       
        else if((anoFim < anoInicio)){
            $(campoDataFim).removeClass("is-valid");
            $(campoDataFim).addClass("is-invalid");
            $(".invalid-dataFim").html("Data Inválida! Fim antes da data de início.");
        }         
        else{
            $(campoDataFim).removeClass("is-invalid");
            $(campoDataFim).addClass("is-valid");
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

    //Campo Input Fone OM
    validFone("input[name=txtFoneOM]"); 
    validFoneTReal("input[name=txtFoneOM]");    


    //Campo Input Número
    validInput("input[name=txtEndNumOM]");
    validInputTReal("input[name=txtEndNumOM]");
    
    //Campo Input Ponto Referência
    validInput("input[name=txtEndPtRefOM]");
    validInputNTReal("input[name=txtEndPtRefOM]");    
    
    //Campo Select Posto/Graduação Cmt OM
    validSelect("select[name=txtPGradCmtOM]");
    validSelectTReal("select[name=txtPGradCmtOM]");

    //Campo Input Nome Cmt OM
    validInput("input[name=txtNomeCmtOM]"); 
    validInputTReal("input[name=txtNomeCmtOM]"); 

    //Campo Input Sobrenome Cmt OM
    validInput("input[name=txtSobrenomeCmtOM]");
    validInputTReal("input[name=txtSobrenomeCmtOM]");

    //Campo Input Nome de Guerra Cmt OM
    validInput("input[name=txtNomeGuerraCmtOM]");
    validInputTReal("input[name=txtNomeGuerraCmtOM]");

    //Campo Select Posto/Graduação Ch Imediato
    validSelect("select[name=txtPGradChImtoOM]");
    validSelectTReal("select[name=txtPGradChImtoOM]");

    //Campo Input Nome Ch Imediato
    validInput("input[name=txtNomeChImtoOM]");
    validInputTReal("input[name=txtNomeChImtoOM]");

    //Campo Input Sobrenome Ch Imediato
    validInput("input[name=txtSobrenomeChImtoOM]");
    validInputTReal("input[name=txtSobrenomeChImtoOM]");

    //Campo Input Nome de Guerra Ch Imediato
    validInput("input[name=txtNomeGuerraChImtoOM]");
    validInputTReal("input[name=txtNomeGuerraChImtoOM]");
    
    //Etapa 2: DADOS INDIVIDUAIS
    //Campo Select Posto/Graduação
    validSelect("select[name=txtPGradAl]");
    validSelectTReal("select[name=txtPGradAl]");
    
    //Campo Select Arma
    validSelect("select[name=txtArmaAl]");
    validSelectTReal("select[name=txtArmaAl]");
    
    //Campo Input Data de Nascimento
    validDataNascAl("input[name=txtDataNascAl]");
    validDataNascAlTReal("input[name=txtDataNascAl]");
    
    //Campo Input Nome
    validInput("input[name=txtNomeAl]");
    validInputTReal("input[name=txtNomeAl]");
    
    //Campo Input Sobrenome
    validInput("input[name=txtSobrenomeAl]");
    validInputTReal("input[name=txtSobrenomeAl]");
    
    //Campo Input Nome de Guerra
    validInput("input[name=txtNomeGuerraAl]");
    validInputTReal("input[name=txtNomeGuerraAl]");
    
    //Campo Input Identidade Militar
    validIdtMilAl("input[name=txtIdtMilAl]");
    validIdtMilAlTReal("input[name=txtIdtMilAl]");
    
    //Campo Input CPF
    validCPFAl("input[name=txtCpfAl]");
    validCPFAlTReal("input[name=txtCpfAl]");
    
    //Campo Input Última Data de Praça
    validDataPracaAl("input[name=txtUltDataPracaAl]", "input[name=txtDataNascAl]");
    validDataPracaAlTReal("input[name=txtUltDataPracaAl]", "input[name=txtDataNascAl]");
    
    //Campo Select Naturalidade (Estado)
    validSelect("select[name=txtNatEstAl]");
    validSelectTReal("select[name=txtNatEstAl]");
    
    //Campo Select Naturalidade (Cidade)
    validSelect("select[name=txtNatCidAl]");
    validSelectTReal("select[name=txtNatCidAl]");
    
    //Campo Select Estado Civil
    validSelect("select[name=txtEstCivilAl]");
    validSelectTReal("select[name=txtEstCivilAl]");
    
    //Campo Select Sexo
    validSelect("select[name=txtSexoAl]");
    validSelectTReal("select[name=txtSexoAl]");
    
    //Campo Select Tipo Sanguíneo
    validSelect("select[name=txtTSAl]");
    validSelectTReal("select[name=txtTSAl]");
    
    //Campo Select Fator RH
    validSelect("select[name=txtFatorRHAl]");
    validSelectTReal("select[name=txtFatorRHAl]");
    
    //Campo Input Titulo Eleitoral
    validTituloEleitorAl("input[name=txtTitEleitorNumAl]");
    validTituloEleitorAlTReal("input[name=txtTitEleitorNumAl]");
    
    //Campo Input Zona Eleitoral
    validTitEleitorZonaAl("input[name=txtTitEleitorZonaAl]");
    validTitEleitorZonaAlTReal("input[name=txtTitEleitorZonaAl]");
    
    //Campo Input Seção Eleitoral
    validTitEleitorSecaoAl("input[name=txtTitEleitorSecaoAl]");
    validTitEleitorSecaoAlTReal("input[name=txtTitEleitorSecaoAl]");
    
    //Campo Select Titulo Eleitor Estado
    validSelect("select[name=txtTitEleitorEstAl]");
    validSelectTReal("select[name=txtTitEleitorEstAl]");
    
    //Campo Select Titulo Eleitor Cidade
    validSelect("select[name=txtTitEleitorCidAl]");
    validSelectTReal("select[name=txtTitEleitorCidAl]");
    
    //Campo Input Banco
    validInput("input[name=txtBancoAl]");
    validInputTReal("input[name=txtBancoAl]");
    
    //Campo Input Agência
    validInput("input[name=txtAgenciaAl]");
    validInputTReal("input[name=txtAgenciaAl]");
    
    //Campo Input Conta
    validInput("input[name=txtContaAl]");
    validInputTReal("input[name=txtContaAl]");
    
    //Campo Input Email
    //validEmailAl("input[name=txtEmailAl]");
    //validEmailAlTReal("input[name=txtEmailAl]");
    
    //Campo Input Fone
    validFoneCel("input[name=txtFoneAl]");
    validFoneCelTReal("input[name=txtFoneAl]");
    
    //Campo Select Número Coturno
    validSelect("select[name=txtNumCoturnoAl]");
    validSelectTReal("select[name=txtNumCoturnoAl]");
    
    //Campo Select Tamanho Gandola
    validSelect("select[name=txtTamGandAl]");
    validSelectTReal("select[name=txtTamGandAl]");
    
    //Campo Select Tamanho Calça
    validSelect("select[name=txtTamCalcaAl]");
    validSelectTReal("select[name=txtTamCalcaAl]");
    
    //Campo Select Tamanho Camuflada
    validSelect("select[name=txtTamCamCmfAl]");
    validSelectTReal("select[name=txtTamCamCmfAl]");
    
    //Campo Select Possui CNH
    validSelect("select[name=txtPossuiCNH]");
    validSelectTReal("select[name=txtPossuiCNH]");    
    acionamentoForm("select[name=txtPossuiCNH]", "#divCNH");  
    
    validNumCNH("input[name=txtCNHNumAl]");
    validNumCNHTReal("input[name=txtCNHNumAl]");
    
    validSelect("select[name=txtCNHCatgAl]");
    validSelectTReal("select[name=txtCNHCatgAl]");
    
    validDataValidadeCNH("input[name=txtCNHDataValAl]");
    validDataValidadeCNHTReal("input[name=txtCNHDataValAl]");
    
    //Campo Select Trará veículo para o CIGS
    validSelect("select[name=txtTraraVeiculo]");
    validSelectTReal("select[name=txtTraraVeiculo]");   
    validSelectVeiculos("select[name=txtTraraVeiculo]");
    
    //Etapa 3: SAÚDE
    //Campo Select Fumante
    validSelect("select[name=txtFumante]");
    validSelectTReal("select[name=txtFumante]");
    
    //Campo Select Alergico
    validSelect("select[name=txtAlergico]");
    validSelectTReal("select[name=txtAlergico]");
    acionamentoForm("select[name=txtAlergico]", "#divAlergias");
    
    //Campo Select Medicamentos Controlados
    validSelect("select[name=txtUsoMtoCt]");
    validSelectTReal("select[name=txtUsoMtoCt]");
    acionamentoForm("select[name=txtUsoMtoCt]", "#divMtoCt");
    
    //Campo Select Termogênicos, Ergogênicos ou Suplementos Alimentares
    validSelect("select[name=txtUsoTermErgSupAli]");
    validSelectTReal("select[name=txtUsoTermErgSupAli]");
    acionamentoForm("select[name=txtUsoTermErgSupAli]", "#divTermErgSupAli");
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
        else if(foneOM == ''){
            $("input[name=txtFoneOM]").removeClass("is-valid");
            $("input[name=txtFoneOM]").addClass("is-invalid");
            $("input[name=txtFoneOM]").focus();
            $(".invalid-fone").html("Campo Obrigatório!");            
        }
        else if(foneOM == '0000000000' || foneOM == '1111111111' || foneOM == '2222222222' || foneOM == '3333333333' ||                 
                 foneOM == '4444444444' || foneOM == '5555555555' || foneOM == '6666666666' || foneOM == '7777777777' ||                 
                 foneOM == '8888888888' || foneOM == '9999999999'){             
            $("input[name=txtFoneOM]").removeClass("is-valid");
            $("input[name=txtFoneOM]").addClass("is-invalid");
            $("input[name=txtFoneOM]").focus();
            $(".invalid-fone").html("Fone Inválido!");            
        }
        else if(endCepOM == ''){
            $("input[name=txtEndCepOM]").removeClass("is-valid");
            $("input[name=txtEndCepOM]").addClass("is-invalid");
            $("input[name=txtEndCepOM]").focus();
            $(".invalid-cep").html("Campo Obrigatório!");
        }
        else if(endCepOM == '00000000' || endCepOM == '11111111' || endCepOM == '22222222' || endCepOM == '33333333' ||                 
                endCepOM == '44444444' || endCepOM == '55555555' || endCepOM == '66666666' || endCepOM == '77777777' ||                 
                endCepOM == '88888888' || endCepOM == '99999999'){
            $("input[name=txtEndCepOM]").removeClass("is-valid");
            $("input[name=txtEndCepOM]").addClass("is-invalid");
            $("input[name=txtEndCepOM]").focus();
            $(".invalid-cep").html("CEP Inválido!");            
        } 
        else if($("input[name=txtEndNomeOM]").val() == ''){
            $("input[name=txtEndNomeOM]").removeClass("is-valid");
            $("input[name=txtEndNomeOM]").addClass("is-invalid");
            $("input[name=txtEndNomeOM]").focus();
        }
        else if($("input[name=txtEndNumOM]").val() == ''){
            $("input[name=txtEndNumOM]").removeClass("is-valid");
            $("input[name=txtEndNumOM]").addClass("is-invalid");
            $("input[name=txtEndNumOM]").focus();
        }
        else if($("select[name=txtEndEstadoOM]").val() == '0'){
            $("select[name=txtEndEstadoOM]").removeClass("is-valid");
            $("select[name=txtEndEstadoOM]").addClass("is-invalid");
            $("select[name=txtEndEstadoOM]").focus();
        }
        else if($("select[name=txtEndCidadeOM]").val() == '0'){
            $("select[name=txtEndCidadeOM]").removeClass("is-valid");
            $("select[name=txtEndCidadeOM]").addClass("is-invalid");
            $("select[name=txtEndCidadeOM]").focus();
        }
        else if($("select[name=txtEndBairroOM]").val() == '0'){
            $("select[name=txtEndBairroOM]").removeClass("is-valid");
            $("select[name=txtEndBairroOM]").addClass("is-invalid");
            $("select[name=txtEndBairroOM]").focus();
        }
        else if($("select[name=txtPGradCmtOM]").val() == '0'){
            $("select[name=txtPGradCmtOM]").removeClass("is-valid");
            $("select[name=txtPGradCmtOM]").addClass("is-invalid");
            $("select[name=txtPGradCmtOM]").focus();
        }
        else if($("input[name=txtNomeCmtOM]").val() == ''){
            $("input[name=txtNomeCmtOM]").removeClass("is-valid");
            $("input[name=txtNomeCmtOM]").addClass("is-invalid");
            $("input[name=txtNomeCmtOM]").focus();
        }
        else if($("input[name=txtSobrenomeCmtOM]").val() == ''){
            $("input[name=txtSobrenomeCmtOM]").removeClass("is-valid");
            $("input[name=txtSobrenomeCmtOM]").addClass("is-invalid");
            $("input[name=txtSobrenomeCmtOM]").focus();
        }
        else if($("input[name=txtNomeGuerraCmtOM]").val() == ''){
            $("input[name=txtNomeGuerraCmtOM]").removeClass("is-valid");
            $("input[name=txtNomeGuerraCmtOM]").addClass("is-invalid");
            $("input[name=txtNomeGuerraCmtOM]").focus();
        }
        else if($("select[name=txtPGradChImtoOM]").val() == '0'){
            $("select[name=txtPGradChImtoOM]").removeClass("is-valid");
            $("select[name=txtPGradChImtoOM]").addClass("is-invalid");
            $("select[name=txtPGradChImtoOM]").focus();
        }
        else if($("input[name=txtNomeChImtoOM]").val() == ''){
            $("input[name=txtNomeChImtoOM]").removeClass("is-valid");
            $("input[name=txtNomeChImtoOM]").addClass("is-invalid");
            $("input[name=txtNomeChImtoOM]").focus();
        }
        else if($("input[name=txtSobrenomeChImtoOM]").val() == ''){
            $("input[name=txtSobrenomeChImtoOM]").removeClass("is-valid");
            $("input[name=txtSobrenomeChImtoOM]").addClass("is-invalid");
            $("input[name=txtSobrenomeChImtoOM]").focus();
        }
        else if($("input[name=txtNomeGuerraChImtoOM]").val() == ''){
            $("input[name=txtNomeGuerraChImtoOM]").removeClass("is-valid");
            $("input[name=txtNomeGuerraChImtoOM]").addClass("is-invalid");
            $("input[name=txtNomeGuerraChImtoOM]").focus();
        }
               
        //Próxima Etapa
        else{
            proximo($(this));
        }
    });
        
    //Etapa 2: DADOS INDIVIDUAIS
    $("button[name=btnProximo3]").click(function(){         
        
        var dataNascAl = $("input[name=txtDataNascAl]").val();
        var dataNascAlSplit = dataNascAl.split('-');        
        var diaNascAl = dataNascAlSplit[2];
        var mesNascAl = dataNascAlSplit[1];
        var anoNascAl = dataNascAlSplit[0];
        
        var dataAtual = new Date();
        var diaAtual = dataAtual.getDate();
        var mesAtual = (dataAtual.getMonth() + 1);
        var anoAtual = dataAtual.getFullYear();
        
        var idtMilAl = $("input[name=txtIdtMilAl]").val().replace("-","").replace(" ","");
        var cpfAl = $("input[name=txtCpfAl]").val().replace(".","").replace(".","").replace("-","");
        
        var dataPracaAl = $("input[name=txtUltDataPracaAl]").val();
        var dataPracaAlSplit = dataPracaAl.split('-');        
        var diaPracaAl = dataPracaAlSplit[2];
        var mesPracaAl = dataPracaAlSplit[1];
        var anoPracaAl = dataPracaAlSplit[0];
        
        var titEleitorNumAl = $("input[name=txtTitEleitorNumAl]").val().replace(" ","").replace(" ","").replace(" ","");
        var titEleitorZonaAl = $("input[name=txtTitEleitorZonaAl]").val().replace(" ","").replace(" ","").replace(" ","");        
        var titEleitorSecaoAl = $("input[name=txtTitEleitorSecaoAl]").val().replace(" ","").replace(" ","").replace(" ","");
        
        var foneCel = $("input[name=txtFoneAl]").val().replace("-","").replace("(","").replace(")","").replace(" ","");
        
        var numCNH = $("input[name=txtCNHNumAl]").val().replace(" ","").replace(" ","").replace(" ","");        
        var dataValCNH = $("input[name=txtCNHDataValAl]").val();
        var dataValCNHSplit = dataValCNH.split('-');        
        var diaValCNH = dataValCNHSplit[2];
        var mesValCNH = dataValCNHSplit[1];
        var anoValCNH = dataValCNHSplit[0];
        
        if($("select[name=txtPGradAl]").val() == '0'){
            $("select[name=txtPGradAl]").removeClass("is-valid");
            $("select[name=txtPGradAl]").addClass("is-invalid");
            $("select[name=txtPGradAl]").focus();
        }
        else if($("select[name=txtArmaAl]").val() == '0'){
            $("select[name=txtArmaAl]").removeClass("is-valid");
            $("select[name=txtArmaAl]").addClass("is-invalid");
            $("select[name=txtArmaAl]").focus();
        }        
        else if(dataNascAl == ''){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Campo Obrigatório!");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl == mesAtual) && (diaNascAl > diaAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl == anoAtual) && (mesNascAl > mesAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoNascAl > anoAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("Data Inválida! Nascimento após data atual.");
        }       
        else if((anoAtual - anoNascAl) < 18){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl < mesAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoAtual - anoNascAl) === 18) && (mesNascAl === mesAtual) && (diaNascAl < diaAtual)){
            $("input[name=txtDataNascAl]").removeClass("is-valid");
            $("input[name=txtDataNascAl]").addClass("is-invalid");
            $("input[name=txtDataNascAl]").focus();
            $(".invalid-dataNascAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else if($("input[name=txtNomeAl]").val() == ''){
            $("input[name=txtNomeAl]").removeClass("is-valid");
            $("input[name=txtNomeAl]").addClass("is-invalid");
            $("input[name=txtNomeAl]").focus();
        }
        else if($("input[name=txtSobrenomeAl]").val() == ''){
            $("input[name=txtSobrenomeAl]").removeClass("is-valid");
            $("input[name=txtSobrenomeAl]").addClass("is-invalid");
            $("input[name=txtSobrenomeAl]").focus();
        }
        else if($("input[name=txtNomeGuerraAl]").val() == ''){
            $("input[name=txtNomeGuerraAl]").removeClass("is-valid");
            $("input[name=txtNomeGuerraAl]").addClass("is-invalid");
            $("input[name=txtNomeGuerraAl]").focus();
        }        
        else if(idtMilAl == ''){
            $("input[name=txtIdtMilAl]").removeClass("is-valid");
            $("input[name=txtIdtMilAl]").addClass("is-invalid");
            $("input[name=txtIdtMilAl]").focus();
            $(".invalid-idtMilAl").html("Campo Obrigatório!");
        }
        else if(idtMilAl == '0000000000' || idtMilAl == '1111111111' || idtMilAl == '2222222222' || idtMilAl == '3333333333' ||                 
                idtMilAl == '4444444444' || idtMilAl == '5555555555' || idtMilAl == '6666666666' || idtMilAl == '7777777777' ||                 
                idtMilAl == '8888888888' || idtMilAl == '9999999999'){
            $("input[name=txtIdtMilAl]").removeClass("is-valid");
            $("input[name=txtIdtMilAl]").addClass("is-invalid");
            $("input[name=txtIdtMilAl]").focus();
            $(".invalid-idtMilAl").html("Identidade Militar Inválida!");  
        }        
        else if(cpfAl == ''){
            $("input[name=txtCpfAl]").removeClass("is-valid");
            $("input[name=txtCpfAl]").addClass("is-invalid");
            $("input[name=txtCpfAl]").focus();
            $(".invalid-cpfAl").html("Campo Obrigatório!");
        }
        else if(cpfAl == '00000000000' || cpfAl == '11111111111' || cpfAl == '22222222222' || cpfAl == '33333333333' ||                 
                cpfAl == '44444444444' || cpfAl == '55555555555' || cpfAl == '66666666666' || cpfAl == '77777777777' ||                 
                cpfAl == '88888888888' || cpfAl == '99999999999'){
            $("input[name=txtCpfAl]").removeClass("is-valid");
            $("input[name=txtCpfAl]").addClass("is-invalid");
            $("input[name=txtCpfAl]").focus();
            $(".invalid-cpfAl").html("CPF Inválido!");
        }        
        else if(cpfOk == 0){
            // Valida 1o digito	
            var add = 0;	
            for (var i=0; i < 9; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (10 - i);	
            var rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(9))){
                $("input[name=txtCpfAl]").removeClass("is-valid");
                $("input[name=txtCpfAl]").addClass("is-invalid");
                $("input[name=txtCpfAl]").focus();
                $(".invalid-cpfAl").html("CPF Inválido!");

            }else{
                $("input[name=txtCpfAl]").removeClass("is-invalid");
                $("input[name=txtCpfAl]").addClass("is-valid");
                cpfOk=1;
            }
            // Valida 2o digito	
            add = 0;	
            for (var i = 0; i < 10; i ++)		
                add += parseInt(cpfAl.charAt(i)) * (11 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)	
                rev = 0;	
            if (rev != parseInt(cpfAl.charAt(10))){
                $("input[name=txtCpfAl]").removeClass("is-valid");
                $("input[name=txtCpfAl]").addClass("is-invalid");
                $("input[name=txtCpfAl]").focus();
                $(".invalid-cpfAl").html("CPF Inválido!");
                
            }else{
                $("input[name=txtCpfAl]").removeClass("is-invalid");
                $("input[name=txtCpfAl]").addClass("is-valid");
                cpfOk=1;
            }    
        }
        else if(dataPracaAl == ''){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Campo Obrigatório!");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl == mesAtual) && (diaPracaAl > diaAtual)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl == mesNascAl) && (diaPracaAl < diaNascAl)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl == anoAtual) && (mesPracaAl > mesAtual)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl == anoNascAl) && (mesPracaAl < mesNascAl)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }       
        else if((anoPracaAl > anoAtual)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça após data atual.");
        }       
        else if((anoPracaAl < anoNascAl)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("Data Inválida! Praça antes do nascimento.");
        }
        else if((anoPracaAl - anoNascAl) < 18){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl < mesNascAl)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }   
        else if(((anoPracaAl - anoNascAl) === 18) && (mesPracaAl === mesNascAl) && (diaPracaAl < diaNascAl)){
            $("input[name=txtUltDataPracaAl]").removeClass("is-valid");
            $("input[name=txtUltDataPracaAl]").addClass("is-invalid");
            $("input[name=txtUltDataPracaAl]").focus();
            $(".invalid-dataPracaAl").html("O Militar deve ter uma idade mínima de 18 anos!!");
        }
        else if($("select[name=txtNatEstAl]").val() == '0'){
            $("select[name=txtNatEstAl]").removeClass("is-valid");
            $("select[name=txtNatEstAl]").addClass("is-invalid");
            $("select[name=txtNatEstAl]").focus();
        }
        else if($("select[name=txtNatCidAl]").val() == '0'){
            $("select[name=txtNatCidAl]").removeClass("is-valid");
            $("select[name=txtNatCidAl]").addClass("is-invalid");
            $("select[name=txtNatCidAl]").focus();
        }
        else if($("select[name=txtEstCivilAl]").val() == '0'){
            $("select[name=txtEstCivilAl]").removeClass("is-valid");
            $("select[name=txtEstCivilAl]").addClass("is-invalid");
            $("select[name=txtEstCivilAl]").focus();
        }
        else if($("select[name=txtSexoAl]").val() == '0'){
            $("select[name=txtSexoAl]").removeClass("is-valid");
            $("select[name=txtSexoAl]").addClass("is-invalid");
            $("select[name=txtSexoAl]").focus();
        }
        else if($("select[name=txtTSAl]").val() == '0'){
            $("select[name=txtTSAl]").removeClass("is-valid");
            $("select[name=txtTSAl]").addClass("is-invalid");
            $("select[name=txtTSAl]").focus();
        }
        else if($("select[name=txtFatorRHAl]").val() == '0'){
            $("select[name=txtFatorRHAl]").removeClass("is-valid");
            $("select[name=txtFatorRHAl]").addClass("is-invalid");
            $("select[name=txtFatorRHAl]").focus();
        }        
        else if(titEleitorNumAl == ''){
            $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorNumAl]").focus();
            $(".invalid-titEleitorNumAl").html("Campo Obrigatório!");
        }
        else if(titEleitorNumAl == '000000000000' || titEleitorNumAl == '111111111111' || titEleitorNumAl == '222222222222' || titEleitorNumAl == '333333333333' ||                 
                titEleitorNumAl == '444444444444' || titEleitorNumAl == '555555555555' || titEleitorNumAl == '666666666666' || titEleitorNumAl == '777777777777' ||                 
                titEleitorNumAl == '888888888888' || titEleitorNumAl == '999999999999'){
            $("input[name=txtTitEleitorNumAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorNumAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorNumAl]").focus();
            $(".invalid-titEleitorNumAl").html("Título de Eleitor Inválido!");   
        }        
        else if(titEleitorZonaAl == ''){
            $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorZonaAl]").focus();
            $(".invalid-titEleitorZonaAl").html("Campo Obrigatório!");
        }
        else if((titEleitorZonaAl != '') && (titEleitorZonaAl.length < 3)){
            $("input[name=txtTitEleitorZonaAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorZonaAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorZonaAl]").focus();
            $(".invalid-titEleitorZonaAl").html("A Zona é formada por 3 caracteres!");   
        }
        else if(titEleitorSecaoAl == ''){
            $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorSecaoAl]").focus();
            $(".invalid-titEleitorSecaoAl").html("Campo Obrigatório!");
        }
        else if((titEleitorSecaoAl != '') && (titEleitorSecaoAl.length < 4)){
            $("input[name=txtTitEleitorSecaoAl]").removeClass("is-valid");
            $("input[name=txtTitEleitorSecaoAl]").addClass("is-invalid");
            $("input[name=txtTitEleitorSecaoAl]").focus();
            $(".invalid-titEleitorSecaoAl").html("A Secao é formada por 4 caracteres!");   
        }
        else if($("select[name=txtTitEleitorEstAl]").val() == '0'){
            $("select[name=txtTitEleitorEstAl]").removeClass("is-valid");
            $("select[name=txtTitEleitorEstAl]").addClass("is-invalid");
            $("select[name=txtTitEleitorEstAl]").focus();
        }
        else if($("select[name=txtTitEleitorCidAl]").val() == '0'){
            $("select[name=txtTitEleitorCidAl]").removeClass("is-valid");
            $("select[name=txtTitEleitorCidAl]").addClass("is-invalid");
            $("select[name=txtTitEleitorCidAl]").focus();
        }
        else if($("input[name=txtBancoAl]").val() == ''){
            $("input[name=txtBancoAl]").removeClass("is-valid");
            $("input[name=txtBancoAl]").addClass("is-invalid");
            $("input[name=txtBancoAl]").focus();
        }
        else if($("input[name=txtAgenciaAl]").val() == ''){
            $("input[name=txtAgenciaAl]").removeClass("is-valid");
            $("input[name=txtAgenciaAl]").addClass("is-invalid");
            $("input[name=txtAgenciaAl]").focus();
        }
        else if($("input[name=txtContaAl]").val() == ''){
            $("input[name=txtContaAl]").removeClass("is-valid");
            $("input[name=txtContaAl]").addClass("is-invalid");
            $("input[name=txtContaAl]").focus();
        }
        //Email
        else if(foneCel == ''){
            $("input[name=txtFoneAl]").removeClass("is-valid");
            $("input[name=txtFoneAl]").addClass("is-invalid");
            $("input[name=txtFoneAl]").focus();
            $(".invalid-foneCel").html("Campo Obrigatório!");
        }
        else if(foneCel == '00000000000' || foneCel == '11111111111' || foneCel == '22222222222' || foneCel == '33333333333' ||                 
                foneCel == '44444444444' || foneCel == '55555555555' || foneCel == '66666666666' || foneCel == '77777777777' ||                 
                foneCel == '88888888888' || foneCel == '99999999999'){
            $("input[name=txtFoneAl]").removeClass("is-valid");
            $("input[name=txtFoneAl]").addClass("is-invalid");
            $("input[name=txtFoneAl]").focus();
            $(".invalid-foneCel").html("Fone Inválido!");
        }
        else if($("select[name=txtNumCoturnoAl]").val() == '0'){
            $("select[name=txtNumCoturnoAl]").removeClass("is-valid");
            $("select[name=txtNumCoturnoAl]").addClass("is-invalid");
            $("select[name=txtNumCoturnoAl]").focus();
        }
        else if($("select[name=txtTamGandAl]").val() == '0'){
            $("select[name=txtTamGandAl]").removeClass("is-valid");
            $("select[name=txtTamGandAl]").addClass("is-invalid");
            $("select[name=txtTamGandAl]").focus();
        }
        else if($("select[name=txtTamCalcaAl]").val() == '0'){
            $("select[name=txtTamCalcaAl]").removeClass("is-valid");
            $("select[name=txtTamCalcaAl]").addClass("is-invalid");
            $("select[name=txtTamCalcaAl]").focus();
        }
        else if($("select[name=txtTamCamCmfAl]").val() == '0'){
            $("select[name=txtTamCamCmfAl]").removeClass("is-valid");
            $("select[name=txtTamCamCmfAl]").addClass("is-invalid");
            $("select[name=txtTamCamCmfAl]").focus();
        }
        else if($("select[name=txtPossuiCNH]").val() == '0'){
            $("select[name=txtPossuiCNH]").removeClass("is-valid");
            $("select[name=txtPossuiCNH]").addClass("is-invalid");
            $("select[name=txtPossuiCNH]").focus();
        }
        else if($("select[name=txtTraraVeiculo]").val() == '0'){
            $("select[name=txtTraraVeiculo]").removeClass("is-valid");
            $("select[name=txtTraraVeiculo]").addClass("is-invalid");
            $("select[name=txtTraraVeiculo]").focus();
        } 
         
        //Não possui CNH
        else if($("select[name=txtPossuiCNH]").val() == 'n'){  
            //Não possui Veículo
            if($("select[name=txtTraraVeiculo]").val() == 'n'){
                proximo($(this));
            }
            //Possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 's'){
                for(var i=0;i<($("input[name=txtPlacaVeiculoAl").length);i++){
                    if($("select[name=txtTipoVeiculoAl]").eq(i).val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").eq(i).removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).focus();
                        break;
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtModeloVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtModeloVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtCorVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtCorVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if(($("input[name=txtPlacaVeiculoAl]").eq($("input[name=txtPlacaVeiculoAl]").length-1).val()) != ''){
                        proximo($(this));
                    }
                }                       
            }
        }        
        //Possui CNH
       else if($("select[name=txtPossuiCNH]").val() == 's'){            
            if(numCNH == ''){
                $("input[name=txtCNHNumAl]").removeClass("is-valid");
                $("input[name=txtCNHNumAl]").addClass("is-invalid");
                $("input[name=txtCNHNumAl]").focus();
                $(".invalid-numCNH").html("Campo Obrigatório!");
            }
            else if(numCNH == '00000000000' || numCNH == '11111111111' || numCNH == '22222222222' || numCNH == '33333333333' ||                 
                    numCNH == '44444444444' || numCNH == '55555555555' || numCNH == '66666666666' || numCNH == '77777777777' ||                 
                    numCNH == '88888888888' || numCNH == '99999999999'){
                $("input[name=txtCNHNumAl]").removeClass("is-valid");
                $("input[name=txtCNHNumAl]").addClass("is-invalid");
                $("input[name=txtCNHNumAl]").focus();
                $(".invalid-numCNH").html("CNH Inválida!");   
            }
            else if($("select[name=txtCNHCatgAl]").val() == '0'){
                $("select[name=txtCNHCatgAl]").removeClass("is-valid");
                $("select[name=txtCNHCatgAl]").addClass("is-invalid");
                $("select[name=txtCNHCatgAl]").focus();
            }
            else if(dataValCNH == ''){
                $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                $("input[name=txtCNHDataValAl]").focus();
                $(".invalid-dataValCNH").html("Campo Obrigatório!");
            }       
            else if((anoValCNH == anoAtual) && (mesValCNH == mesAtual) && (diaValCNH > diaAtual)){
                $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                $("input[name=txtCNHDataValAl]").focus();
                $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
            }       
            else if((anoValCNH == anoAtual) && (mesValCNH > mesAtual)){
                $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                $("input[name=txtCNHDataValAl]").focus();
                $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
            }       
            else if((anoValCNH > anoAtual)){
                $("input[name=txtCNHDataValAl]").removeClass("is-valid");
                $("input[name=txtCNHDataValAl]").addClass("is-invalid");
                $("input[name=txtCNHDataValAl]").focus();
                $(".invalid-dataValCNH").html("Data Inválida! Validade após data atual.");
            }
            //Não possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 'n'){
                proximo($(this));
            }
            //Possui Veículo
            else if($("select[name=txtTraraVeiculo]").val() == 's'){
                for(var i=0;i<($("input[name=txtPlacaVeiculoAl").length);i++){
                    if($("select[name=txtTipoVeiculoAl]").eq(i).val() == '0' ){
                        $("select[name=txtTipoVeiculoAl]").eq(i).removeClass("is-valid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).addClass("is-invalid");
                        $("select[name=txtTipoVeiculoAl]").eq(i).focus();
                        break;
                    }                    
                    else if($("input[name=txtMarcaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtMarcaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtMarcaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtModeloVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtModeloVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtModeloVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtCorVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtCorVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtCorVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtCorVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if($("input[name=txtPlacaVeiculoAl]").eq(i).val() == ''){
                        $("input[name=txtPlacaVeiculoAl]").eq(i).removeClass("is-valid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).addClass("is-invalid");
                        $("input[name=txtPlacaVeiculoAl]").eq(i).focus();
                        break;
                    }
                    else if(($("input[name=txtPlacaVeiculoAl]").eq($("input[name=txtPlacaVeiculoAl]").length-1).val()) != ''){
                        proximo($(this));
                    }
                }
            }
        }
        //Próxima Etapa
        else{
            proximo($(this));
        }
    });
    
    //Etapa 3: SAÚDE
    $("button[name=btnProximo4]").click(function(){
        if($("select[name=txtFumante]").val() == '0'){
            $("select[name=txtFumante]").removeClass("is-valid");
            $("select[name=txtFumante]").addClass("is-invalid");
            $("select[name=txtFumante]").focus();
        }
        else if($("select[name=txtAlergico]").val() == '0'){
            $("select[name=txtAlergico]").removeClass("is-valid");
            $("select[name=txtAlergico]").addClass("is-invalid");
            $("select[name=txtAlergico]").focus();
        }
        else if($("select[name=txtUsoMtoCt]").val() == '0'){
            $("select[name=txtUsoMtoCt]").removeClass("is-valid");
            $("select[name=txtUsoMtoCt]").addClass("is-invalid");
            $("select[name=txtUsoMtoCt]").focus();
        }
        else if($("select[name=txtUsoTermErgSupAli]").val() == '0'){
            $("select[name=txtUsoTermErgSupAli]").removeClass("is-valid");
            $("select[name=txtUsoTermErgSupAli]").addClass("is-invalid");
            $("select[name=txtUsoTermErgSupAli]").focus();
        }        
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            proximo($(this));
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    proximo($(this));
                }
            }
        }
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    proximo($(this));
                }
            }
        }
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    proximo($(this));
                }
            }
        }        
        else if(($("select[name=txtAlergico]").val() == 'n') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoMtoCt = 0;
            var prontoTermErgSupAli = 0;
            
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }             
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoMtoCt == 1) && (prontoTermErgSupAli == 1)){
                proximo($(this));
            }
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 'n') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoAlergico = 0;
            var prontoTermErgSupAli = 0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoAlergico == 1) && (prontoTermErgSupAli == 1)){
                proximo($(this));
            }
        }
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 'n')){
            var prontoAlergico = 0;
            var prontoMtoCt = 0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }            
            if((prontoAlergico == 1) && (prontoMtoCt == 1)){
                proximo($(this));
            }
        }
        
        else if(($("select[name=txtAlergico]").val() == 's') && ($("select[name=txtUsoMtoCt]").val() == 's') && ($("select[name=txtUsoTermErgSupAli]").val() == 's')){
            var prontoAlergico = 0;
            var prontoMtoCt = 0;
            var prontoTermErgSupAli =0;
            
            for(var i=0;i<($("input[name=txtAlergia").length);i++){
                if($("input[name=txtAlergia]").eq(i).val() == '' ){
                    $("input[name=txtAlergia]").eq(i).removeClass("is-valid");
                    $("input[name=txtAlergia]").eq(i).addClass("is-invalid");
                    $("input[name=txtAlergia]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtAlergia]").eq($("input[name=txtAlergia]").length-1).val()) != ''){
                    prontoAlergico = 1;
                }
            }             
            for(var i=0;i<($("select[name=txtTpMtoCt").length);i++){
                if($("input[name=txtNomeMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtNomeMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeMtoCt]").eq(i).focus();
                    break;
                }
                else if($("input[name=txtFrqMtoCt]").eq(i).val() == '' ){
                    $("input[name=txtFrqMtoCt]").eq(i).removeClass("is-valid");
                    $("input[name=txtFrqMtoCt]").eq(i).addClass("is-invalid");
                    $("input[name=txtFrqMtoCt]").eq(i).focus();
                    break;
                }
                else if($("select[name=txtTpMtoCt]").eq(i).val() == '0' ){
                    $("select[name=txtTpMtoCt]").eq(i).removeClass("is-valid");
                    $("select[name=txtTpMtoCt]").eq(i).addClass("is-invalid");
                    $("select[name=txtTpMtoCt]").eq(i).focus();
                    break;
                }
                else if(($("select[name=txtTpMtoCt]").eq($("select[name=txtTpMtoCt]").length-1).val()) != '0'){
                    prontoMtoCt=1;
                }
            }            
            for(var i=0;i<($("input[name=txtNomeTermErgSupAli").length);i++){
                if($("input[name=txtNomeTermErgSupAli]").eq(i).val() == '' ){
                    $("input[name=txtNomeTermErgSupAli]").eq(i).removeClass("is-valid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).addClass("is-invalid");
                    $("input[name=txtNomeTermErgSupAli]").eq(i).focus();
                    break;
                }
                else if(($("input[name=txtNomeTermErgSupAli]").eq($("input[name=txtNomeTermErgSupAli]").length-1).val()) != ''){
                    prontoTermErgSupAli = 1;
                }
            }            
            if((prontoAlergico == 1) && (prontoMtoCt == 1) && (prontoTermErgSupAli == 1)){
                proximo($(this));
            }
        }        
    });
});