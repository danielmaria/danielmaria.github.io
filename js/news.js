const NEWS_PAGE = 4;
var lang = "PT";
var pageSelected = 1;

var noticias = 
[
	{id: 3,
		titleEn: "MessageFormat",
		titlePt: "MessageFormat - Elegância com café",
		bodyEn: "[I'm sorry, but this text wasen't translat yet]",
		bodyPt: "Você precisa construir uma mensagem fixa, utilizando parâmetros em locais específicos. Parece uma tarefa simples. Por que não fazer no melhor estilo primeiro semestre de concatenação de string?<br><br> <pre><code>String texto = 'Este filme é de ' + estiloFilme + '. E tem a duração de ' + duracaoFilme + ' minutos. O diretor é ' + nomeDiretor;</code></pre><br> Funciona? Claro que funciona! É elegante, bonito e legível? Nem tanto.<br>A forma como uso é um pouco diferente, pois não vai 'sujar' a String independente do tamanho do nome da variável.<br> <pre><code>String texto = MessageFormat.format('Este filme é de {0}. E tem a duração de {1} minutos. O diretor é {2}', estiloFilme, duracaoFilme, nomeDiretor);</code></pre><br>Óbvio que estamos falando aqui de uma String simples. Sem muitos parâmetros e que tenham um local específico de localização das suas substituições. Desta forma este método não deveria ser usado para SQLs complexos, por exemplo, onde, nestes casos o StringBuilder normalmente é a melhor opção.<br><br><i>“Elegância com café” é um conjunto de pequenos artigos escrito por mim, onde dou minha opinião em relação a práticas que uso no desenvolvimento de códigos. Deixo claro que não tenho a pretensão de afirmar que esta é, ou não, a forma mais correta de se fazer.</i>",
		imgUrl: "img/blog/messageformat.jpeg",
		dataNews: '25/02/2019'},

	{id: 2,
		titleEn: "Retrô Poker",
		titlePt: "Retrô Poker",
		bodyEn: "[I'm sorry, but this text wasen't translat yet]",
		bodyPt: "Não sou nenhum Agile Coach, ou Scrum Master, mas apenas um entusiasta do mundo Agil. Dando uma fuçada pela internet afora me deparei com um material diferente: Retrô Poker. O 'jogo' conta com 8 cartas que são jogadas a partir de um cenário apresentado. Isso faz com que a retrospectiva seja muito mais que um momento de reflexão e que as pessoas sejam forçadas a dizer o que realmente pensam, semelhante ao planning poker, e não falem aquilo que a maioria afirmar.<br/> O criador foi Samuel Cavalcante e está disponível em <a src='http://www.knowledge21.com.br/blog/retro-poker/'> knowledge21</a>. O download das cartas pode ser feito no site deles e está disponível apenas em português.",
		imgUrl: "https://www.knowledge21.com.br/escondido/wp-content/uploads/2017/07/16-300x167.png",
		dataNews: '01/10/2018'},

	{id: 1,
		titleEn: "Or, or, or",
		titlePt: "Ou, ou, ou - Elegância com café",
		bodyEn: "Oftentimes I come across with this scenario: a lot of possibilities to think about use or not use a determinat conditon 'if'. For exemple: 'this employee id is '1', or '3', or '4', or '6', or '12', or '18'? So, do something.'. Some times I've seen this solution: <br><br> <pre><code> if(employee.getType().getId() == 1  || employee.getType().getId() == 3 || <br>   employee.getType().getId() == 4  || employee.getType().getId() == 6 ||<br>   employee.getType().getId() == 12 || employee.getType().getId() == 18){<br>	System.out.println('Do something!');<br> } </code></pre> <br> It isn't wrong. I mean, its work fine, but, why don't we use this conditional with more readable form? <br><pre><code>List<Long> permissionTypes = List.of(1, 3, 4, 6, 12, 18);<br>if(permissionTypes.contains(funcionario.employee.getType().getId())){<br>	System.out.println('Do something!);<br>}</code></pre><br> Of course the type of the 'Employee Type' need to be the Long, in this case. <br> It exists another forms to do this conditional, but in my opinion these is the more refined<br><br><i>",
		bodyPt: "Muitas e muitas vezes já me deparei com o seguinte cenário: um milhão de possibilidades para se considerar para entrar ou não em uma condição if. Por exemplo, “se o id do tipo de funcionário for 1, 3, 4, 6, 12 ou 18, faça isso”. E muitas e muitas vezes ví a seguinte solução:<br><br> <pre><code> if(funcionario.getTipoFuncionario().getId() == 1  || funcionario.getTipoFuncionario().getId() == 3 || <br>   funcionario.getTipoFuncionario().getId() == 4  || funcionario.getTipoFuncionario().getId() == 6 ||<br>   funcionario.getTipoFuncionario().getId() == 12 || funcionario.getTipoFuncionario().getId() == 18){<br>	System.out.println('Pode entrar!');<br> } </code></pre> <br> Não que esteja errado, muito pelo contrário. Funciona e muito bem. Mas por que não fazer de uma forma um pouco mais legível?<br><pre><code>List<Integer> tiposPermitidos = Arrays.asList(1, 3, 4, 6, 12, 18);<br>if(tiposPermitidos.contains(funcionario.getTipoFuncionario().getId())){<br>	System.out.println('Pode entrar!);<br>}</code></pre><br>Não esqueça a tipagem dos dados, tanto do ID do usuário quanto do ID que está sendo usado para popular a lista e comparar no linha posterior.<br>É claro que existem outras formas de realizar essa seleção, mas para mim esta ainda é a mais elegante.<br><br><i>“Elegância com café” é um conjunto de pequenos artigos escrito por mim, onde dou minha opinião em relação a práticas que uso no desenvolvimento de códigos. Deixo claro que não tenho a pretensão de afirmar que esta é, ou não, a forma mais correta de se fazer.</i>",
		imgUrl: "img/blog/ororor.jpeg",
		dataNews: '31/05/2018'},
		
	{id: 0,
		titleEn: "VarArgs",
		titlePt: "VarArgs - Elegância com café",
		bodyEn: "[I'm sorry, but this text wasen't translat yet]",
		bodyPt: "Varargs é um recurso disponível no Java desde a sua versão 5 e permite que o desenvolvedor crie um método que receba uma quantidade variável de parâmetros, podendo receber um, dois, vinte, trinta parâmetros. Para versões anteriores ao Java 5, é necessário que você receba um array daquele tipo específico.<br>Na prática as coisas não mudaram muito, e você ainda pode receber no seu método uma List do tipo específico como parâmetro, mas lembre-se: elegância é tudo!<br><pre><code>public static boolean datasMesmaCompetencia(LocalDateTime... datas){<br>    int mesControle = -1;<br>    for(LocalDateTime data : datas)<br>        if(data.getMonthValue() != mesControle){<br>        	mesControle = data.getMonthValue();<br>        } else if(mesControle != data.getMonthValue()){<br>        	return false;<br>        }<br>    return true;<br>}</pre></code><br>É lógico que você não deveria passar duzentos parâmetros para o seu método, cada caso é um caso e, caso você precise de muitos parâmetros você deve considerar popular uma lista e passá-la por parâmetro.<br>Importante lembrar que caso faça uso de mais de um parâmetro no seu método, o último deles deve ser o com uso do Varargs.<br><br><i>“Elegância com café” é um conjunto de pequenos artigos escrito por mim, onde dou minha opinião em relação a práticas que uso no desenvolvimento de códigos. Deixo claro que não tenho a pretensão de afirmar que esta é, ou não, a forma mais correta de se fazer.</i>	",
		imgUrl: "img/blog/varargs.jpeg",
		dataNews: '03/01/2018'}

];


function loadPagination(lang){
	for(let i = (Math.ceil(noticias.length / 4)); i >= 1; i--){
		$('#paginationFirst').after('<li class="waves-effect number-pagination"><a href="#!" onclick="getNewsByPage('+ i + ',\'' + lang + '\')">' + i + '</a></li>');
	}
}

function getNewsByPage(page, lang){
	pageSelected = page;
	$('.divCards').remove();
	let numberMaxNews = NEWS_PAGE * page;
	let numberMinNews = numberMaxNews - NEWS_PAGE;
	let arrayNews = noticias.slice(numberMinNews, numberMaxNews);
	arrayNews.forEach(element => {
		let cardNews = '<div class="col s12 m6 divCards">';
		cardNews += '		<div class="card">';
		cardNews += '			<div class="card-image">';
		cardNews += '				<img src="' + (element.imgUrl == '' ? 'logo.png' : element.imgUrl) + '" >';
		cardNews += '				<span class="card-title">' + (lang == 'PT' ? element.titlePt : element.titleEn) + '</span>';
		cardNews += '			</div>';
		cardNews += '			<div class="card-content">';
		cardNews += '				<p class="dataNews">' + element.dataNews + '</span><p>';
		cardNews += '				<p class="justifyText">' + (lang == 'PT' ? element.bodyPt.trunc(185) : element.bodyEn.trunc(185)) + '</p>'
		cardNews += '			</div>';
		cardNews += '			<div class="card-action">';
		cardNews += '				<a class="modal-trigger" href="#modalNews" onclick="changeTextNewsPopup(' + (element.id) + ')">' + (lang == 'PT' ? "Continuar lendo" : "Read more") + ' </a>';
		cardNews += '			</div>';
		cardNews += '		</div>';
		cardNews += '	</div>';
		$('#news').append(cardNews);
	});
}

function changeTextNewsPopup(index){
	var noticia = noticias.filter(noticia => { return noticia.id === index });
	if(lang == 'PT'){
		document.getElementById('titleNewsModal').innerHTML = noticia[0].titlePt;
		document.getElementById('bodyNewsModal').innerHTML = noticia[0].bodyPt;
	} else {
		document.getElementById('titleNewsModal').innerHTML = noticia[0].titleEn;
		document.getElementById('bodyNewsModal').innerHTML = noticia[0].bodyEn;
	}
}

function getNoticiaById(id){
	noticias.filter(noticia => { return noticia.id === id })
}

String.prototype.trunc = 
	function(n){
		return this.substr(0,n-1)+(this.length>n?'&hellip;':'');
};


function changeEN(){
	lang = "EN";
	$(".number-pagination").remove();
	getNewsByPage(pageSelected, lang);
	loadPagination(lang);
  }
  
  function changePT(){
	lang = "PT";
	$(".number-pagination").remove();
	getNewsByPage(pageSelected, lang);
	loadPagination(lang);
  }
