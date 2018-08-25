const NEWS_PAGE = 4;

var noticias = 
[

	{id: 1,
	titleEn: "Or, or, or",
	titlePt: "Ou, ou, ou - Elegância com café",
	bodyEn: "[I'm sorry, but this text wasen't translat yet]",
	bodyPt: "Muitas e muitas vezes já me deparei com o seguinte cenário: um milhão de possibilidades para se considerar para entrar ou não em uma condição if. Por exemplo, “se o id do tipo de funcionário for 1, 3, 4, 6, 12 ou 18, faça isso”. E muitas e muitas vezes ví a seguinte solução:<br><br> <pre><code> if(funcionario.getTipoFuncionario().getId() == 1  || funcionario.getTipoFuncionario().getId() == 3 || <br>   funcionario.getTipoFuncionario().getId() == 4  || funcionario.getTipoFuncionario().getId() == 6 ||<br>   funcionario.getTipoFuncionario().getId() == 12 || funcionario.getTipoFuncionario().getId() == 18){<br>	System.out.println('Pode entrar!');<br> } </code></pre> <br> Não que esteja errado, muito pelo contrário. Funciona e muito bem. Mas por que não fazer de uma forma um pouco mais legível?<br><pre><code>List<Integer> tiposPermitidos = Arrays.asList(1, 3, 4, 6, 12, 18);<br>if(tiposPermitidos.contains(funcionario.getTipoFuncionario().getId())){<br>	System.out.println('Pode entrar!);<br>}</code></pre><br>Não esqueça a tipagem dos dados, tanto do ID do usuário quanto do ID que está sendo usado para popular a lista e comparar no linha posterior.<br>É claro que existem outras formas de realizar essa seleção, mas para mim esta ainda é a mais elegante.<br><br><i>“Elegância com café” é um conjunto de pequenos artigos escrito por mim, onde dou minha opinião em relação a práticas que uso no desenvolvimento de códigos. Deixo claro que não tenho a pretensão de afirmar que esta é, ou não, a forma mais correta de se fazer.</i>",
	imgUrl: "https://media.licdn.com/mpr/mpr/gcrc/dms/image/C5112AQEjK7X50mblNw/article-cover_image-shrink_600_2000/0?e=1540425600&v=beta&t=Kn2WmK47eQA-ZAIytD7DVU4P9ZidxHO5Y_kBVeCiy6Q",
	tags: "Elegância com café, Code review",
	dataNews: '31/05/2018'},
		
	{id: 0,
	titleEn: "VarArgs",
	titlePt: "VarArgs - Elegância com café",
	bodyEn: "[I'm sorry, but this text wasen't translat yet]",
	bodyPt: "Varargs é um recurso disponível no Java desde a sua versão 5 e permite que o desenvolvedor crie um método que receba uma quantidade variável de parâmetros, podendo receber um, dois, vinte, trinta parâmetros. Para versões anteriores ao Java 5, é necessário que você receba um array daquele tipo específico.<br>Na prática as coisas não mudaram muito, e você ainda pode receber no seu método uma List do tipo específico como parâmetro, mas lembre-se: elegância é tudo!<br><pre><code>public static boolean datasMesmaCompetencia(LocalDateTime... datas){<br>    int mesControle = -1;<br>    for(LocalDateTime data : datas)<br>        if(data.getMonthValue() != mesControle){<br>        	mesControle = data.getMonthValue();<br>        } else if(mesControle != data.getMonthValue()){<br>        	return false;<br>        }<br>    return true;<br>}</pre></code><br>É lógico que você não deveria passar duzentos parâmetros para o seu método, cada caso é um caso e, caso você precise de muitos parâmetros você deve considerar popular uma lista e passá-la por parâmetro.<br>Importante lembrar que caso faça uso de mais de um parâmetro no seu método, o último deles deve ser o com uso do Varargs.<br><br><i>“Elegância com café” é um conjunto de pequenos artigos escrito por mim, onde dou minha opinião em relação a práticas que uso no desenvolvimento de códigos. Deixo claro que não tenho a pretensão de afirmar que esta é, ou não, a forma mais correta de se fazer.</i>	",
	imgUrl: "https://media.licdn.com/mpr/mpr/gcrc/dms/image/C5112AQG_Cb9dCo9_QA/article-cover_image-shrink_720_1280/0?e=1540425600&v=beta&t=WH7Y9OynjmRs5OTy1BZlHCDjDdww-hQZuVkweLFEvSU",
	tags: "Elegância com café, Code review",
	dataNews: '03/01/2018'}

];


function loadPagination(lang){
	for(let i = (Math.ceil(noticias.length / 4)); i >= 1; i--){
		$('#paginationFirst').after('<li class="waves-effect"><a href="#!" onclick="getNewsByPage('+ i + ',\'' + lang + '\')">' + i + '</a></li>');
	}
}

function getNewsByPage(page, lang){
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
		cardNews += '				<br/> <span style="font-size: 11px;"> Tags: ' + element.tags + '</span>';
		cardNews += '			</div>';
		cardNews += '			<div class="card-action">';
		cardNews += '				<a class="modal-trigger" href="#modalNews" onclick="changeTextNewsPopup(' + (element.id) + ')">Continuar lendo</a>';
		cardNews += '			</div>';
		cardNews += '		</div>';
		cardNews += '	</div>';
		$('#news').append(cardNews);
	});
}

function changeTextNewsPopup(index){
	document.getElementById('titleNewsModal').innerHTML = noticias[index].titlePt;
	document.getElementById('bodyNewsModal').innerHTML = noticias[index].bodyPt;
}

String.prototype.trunc = 
	function(n){
		return this.substr(0,n-1)+(this.length>n?'&hellip;':'');
};