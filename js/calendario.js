var contadorEventos = 1;

(function($){
  $(function(){
    $('.sidenav').sidenav();
  });
})(jQuery);

$(document).ready(() => {
	 $('.collapsible').collapsible();
})


function downloadCSV(){
	let csv = "data:text/csv;charset=utf-8,";
	let nomeArquivo = $('#nome-arquivo').val() || "meu_calendario";
	csv += "Subject,Description,Start Date, All Day Event\r\n";
	csv += percorreInputs();
	
	var encodedUri = encodeURI(csv);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", nomeArquivo + ".csv");
	document.body.appendChild(link); 

	link.click();
}

function adicionarEvento(){
	let html;
	html = ' <form class="col s12" id="conteudo-' + contadorEventos + '">'
	html += '	<div class="row">';
	html += addTituloEvento(contadorEventos);
	html += addDescricaoEvento(contadorEventos);
	html += addDataEvento(contadorEventos);
	html += addCheckTodoDia(contadorEventos);
	html +=' 	</div>'
    html +=' </form>'
	contadorEventos++;
	$(".formulario").last().append(html);
	html = "";
}
function addTituloEvento(contadorEventos){
	let html =' 	<div class="input-field col s12 m4 l4">';
	html +=' 		<input id="titulo-evento-' + contadorEventos + '" type="text" class="validate">';
	html +=' 		<label for="titulo-evento-' + contadorEventos + '">Título</label>';
	html +=' 	</div>';
	return html;
}
function addDescricaoEvento(contadorEventos){
	let html = ' 	<div class="input-field col s12 m4 l4">';
		html +=' 		<input id="descricao-evento-' + contadorEventos + '" type="text" class="validate">';
		html +=' 		<label for="descricao-evento-' + contadorEventos + '">Descrição</label>';
		html +=' 	</div>';
	return html;
}

function addDataEvento(contadorEventos){
	let html = ' 	<div class="input-field col s7 m2 l2">';
		html +=' 		<input id="data-evento-' + contadorEventos + '" type="text" class="validate" onblur="adicionaCampoAutomaticamente(this.id)">';
		html +=' 		<label for="data-evento-' + contadorEventos + ']">Data</label>';
		html +=' 	</div>';
	return html;
}

function addCheckTodoDia(contadorEventos){
	let html =' <div class="input-field col s5 m2 l2">';
		html +=' 		<label>';
		html +=' 			<input type="checkbox" id="dia-todo-' + contadorEventos + ']"/>';
		html +=' 			<span>Dia todo</span>';
		html +=' 		</label>';
		html +=' 	</div>';
	return html;
}
function validaCampoTexto(campo){
	if(campo.trim() != "") {
		return true;
	} else {
		return false;
	}
}

function validaCampoData(campo){
	let dataPura = campo.replace("/", "");
	if(dataPura.length == 4 || dataPura.length == 6 || dataPura.length == 8){
		if(dataPura.substring(0,2) <= 31 && dataPura.substring(2,4) <= 12){
			if(dataPura.length == 6 && dataPura.substring(4,6) < 18){
				return false;
			} else if (dataPura.length == 8 && dataPura.substring(4,8) < new Date().getFullYear()) {
				return false;
			}
		} else {
			return false;
		}
		return true;
	} else {
		return false;
	}
}


function percorreInputs(){
	let retorno = "";
	for(var i = 0; i < $("form").length; i++) {
		if(!validaCampoTexto($('#conteudo-' + i + ' input')[0].value)){
			continue;
		}
		retorno += $('#conteudo-' + i + ' input')[0].value + ',';
		retorno += $('#conteudo-' + i + ' input')[1].value + ',';
		retorno += $('#conteudo-' + i + ' input')[2].value + ',';
		retorno += $('#conteudo-' + i + ' input')[3].checked + "\r\n";
	}
	return retorno;
}

function adicionaCampoAutomaticamente(campo){
	let numeroCampo = campo.substring(campo.length - 1);
	let campoDescricaoOK = validaCampoTexto($('#conteudo-' + numeroCampo + ' input')[0].value);
	let campoDataOK =  validaCampoData($('#conteudo-' + numeroCampo + ' input')[2].value);
	if(campoDescricaoOK && campoDataOK) {
		adicionarEvento();
		colocaMascaraData(numeroCampo);
	} else if (!campoDescricaoOK){
		M.toast({html: 'O campo descrição é obrigatório!'});
	} else if(!campoDataOK) {
		M.toast({html: 'O formato da data está inválido!'});
		//$('#conteudo-' + numeroCampo + ' input')[2].value = "";
		$('#conteudo-' + numeroCampo + ' input')[2].focus();
	}
}

function colocaMascaraData(numeroCampo){
	let campo = $('#conteudo-' + numeroCampo + ' input')[2];
	let dataCampo = $('#conteudo-' + numeroCampo + ' input')[2].value.replace("/", "");
	
	if(dataCampo.length >= 6){
		if(dataCampo.length == 6) {
			dataCampo = dataCampo.substring(0,4) + '20' + dataCampo.substring(4, dataCampo.length);
		}			
		dataCampo = dataCampo.substring(0,4) + '/' + dataCampo.substring(4, dataCampo.length);
		
	} else {
		dataCampo = dataCampo + '/' + new Date().getFullYear();
	}
	
	campo.value = dataCampo.substring(0,2) + '/' + dataCampo.substring(2, dataCampo.length);
}

function reload(){
	location.reload();
}