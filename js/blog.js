(function($){
  $(function(){
    $('.sidenav').sidenav();
	$("#emailtext").hide();
	getNewsByPage(1, "PT");
	loadPagination(lang);
  }); 
})(jQuery); 

var lang = "PT";

// ----


var route = '';
function changeEN(){
  lang = "EN";
  putTextInLabels();
}

function changePT(){
  lang = "PT";
  putTextInLabels();
}

$(document).ready(function(){
  $('.modal').modal();
});

function saveRoute(route){
  this.route = route;
  let redirectText, redirectUser;
  if(lang === "PT"){
    redirectText = "Caso você queira, será redirecionado para o meu " + route + ".";
    redirectUser = "Ir para " + route;
  } else {
    redirectText = "If you want, you will be redirected to my " + route + " page.";
    redirectUser = "Go to " + route;
  }
  document.getElementById("redirectText").innerHTML = redirectText;
  document.getElementById("redirectUser").innerHTML = redirectUser;
}

function redirectTo(locale){
  if(locale == 'facebook'){
    window.location.replace("https://www.facebook.com/danielmariadasilva");
  } else if(locale == 'instagram'){
    window.location.replace("https://www.instagram.com/dan_maria/");
  } else if(locale == 'github'){
    window.location.replace("https://github.com/danielmaria");
  } else if(locale == 'twitter'){
    window.location.replace("https://twitter.com/daniel_maria");
  } else if(locale == 'linkedin'){
    window.location.replace("https://www.linkedin.com/in/danielmariadasilva/");
  }
}

$("#emailBtn").click(function(){
  showOrHideEmail();
});

function showOrHideEmail(){ 
  $("#emailtext").toggle("slow"); 
}