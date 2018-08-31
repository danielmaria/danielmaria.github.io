(function($){
  $(function(){
    $('.sidenav').sidenav();
	$("#emailtext").hide();
	getNewsByPage(1, "PT");
	loadPagination(lang);
  }); 
})(jQuery); 

$(document).ready(function(){
  $('.modal').modal();
});

$("#emailBtn").click(function(){
  showOrHideEmail();
});

function showOrHideEmail(){ 
  $("#emailtext").toggle("slow"); 
}