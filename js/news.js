const NEWS_PAGE = 4;

var noticias = 
[
	{titleEn: "Test",
	titlePt: "Teste",
	bodyEn: "Body",
	bodyPt: "Corpo",
	imgUrl: "www.google.com.br",
	tags: "Tag"},
	
	{titleEn: "Test1",
	titlePt: "Teste1",
	bodyEn: "Body1",
	bodyPt: "Corpo1",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"},
	
	{titleEn: "Test2",
	titlePt: "Teste2",
	bodyEn: "Body2",
	bodyPt: "Corpo2",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"},
	
	{titleEn: "Test3",
	titlePt: "Teste3",
	bodyEn: "Body3",
	bodyPt: "Corpo3",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"},
	
	{titleEn: "Test4",
	titlePt: "Teste4",
	bodyEn: "Body4",
	bodyPt: "Corpo4",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"},
	
	{titleEn: "Test5",
	titlePt: "Teste5",
	bodyEn: "Body5",
	bodyPt: "Corpo5",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"},
	
	{titleEn: "Test6",
	titlePt: "Teste6",
	bodyEn: "Body6",
	bodyPt: "Corpo6",
	imgUrl: "www.google.com.br1",
	tags: "Tag1"}
];


function loadPagination(lang){
	for(let i = (Math.round(noticias.length / 4)); i >= 1; i--){
		$('#paginationFirst').after('<li class="waves-effect"><a href="#!" onclick="getNewsByPage('+ i + ',\'' + lang + '\')">' + i + '</a></li>');
	}
}

function getNewsByPage(page, lang){
	let numberMaxNews = NEWS_PAGE * page;
	let numberMinNews = numberMaxNews - NEWS_PAGE;
	let arrayNews = noticias.slice(numberMinNews, numberMaxNews);
	
	if(lang == "PT"){
		if(arrayNews[0]){
			document.getElementById('titleCardOne').innerHTML = arrayNews[0].titlePt;
			document.getElementById('bodyCardOne').innerHTML = arrayNews[0].bodyPt;
			$('#cardOne').show();
		} else {
			$('#cardOne').hide();
		}
		
		if(arrayNews[1]){
			document.getElementById('titleCardTwo').innerHTML = arrayNews[1].titlePt;
			document.getElementById('bodyCardTwo').innerHTML = arrayNews[1].bodyPt;
			$('#cardTwo').show();
		} else {
			$('#cardTwo').hide();
		}
		
		if(arrayNews[2]){
			document.getElementById('titleCardThree').innerHTML = arrayNews[2].titlePt;
			document.getElementById('bodyCardThree').innerHTML = arrayNews[2].bodyPt;
			$('#cardThree').show();
		} else {
			$('#cardThree').hide();
		}
		
		if(arrayNews[3]){
			document.getElementById('titleCardFour').innerHTML = arrayNews[3].titlePt;
			document.getElementById('bodyCardFour').innerHTML = arrayNews[3].bodyPt;
			$('#cardFour').show();
		} else {
			$('#cardFour').hide();
		}
	} else {
		if(arrayNews[0]){
			document.getElementById('titleCardOne').innerHTML = arrayNews[0].titleEn;
			document.getElementById('bodyCardOne').innerHTML = arrayNews[0].bodyEn;
			$('#cardOne').show();
		} else {
			$('#cardOne').hide();
		}
		
		if(arrayNews[1]){
			document.getElementById('titleCardTwo').innerHTML = arrayNews[1].titleEn;
			document.getElementById('bodyCardTwo').innerHTML = arrayNews[1].bodyEn;
			$('#cardTwo').show();
		} else {
			$('#cardTwo').hide();
		}
		
		if(arrayNews[2]){
			document.getElementById('titleCardThree').innerHTML = arrayNews[2].titleEn;
			document.getElementById('bodyCardThree').innerHTML = arrayNews[2].bodyEn;
			$('#cardThree').show();
		} else {
			$('#cardThree').hide();
		}
		
		if(arrayNews[3]){
			document.getElementById('titleCardFour').innerHTML = arrayNews[3].titleEn;
			document.getElementById('bodyCardFour').innerHTML = arrayNews[3].bodyEn;
			$('#cardFour').show();
		} else {
			$('#cardFour').hide();
		}
	}
	
}