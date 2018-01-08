var introHelloEN = "HI, MY NAME IS DANIEL & I AM A";
var introIAmOneEN = "SOFTWARE DEVELOPER";
var introIAmTwoEN = "CURIOUS PERSON";
var introIAmThreeEN = "STUDENT";
var btnPTEN = "Portuguese";
var btnENEN = "English";

var introHelloPT = "OI, MEU NOME É DANIEL & EU SOU";
var introIAmOnePT = "DESENVOLVEDOR DE SOFTWARE";
var introIAmTwoPT = "CURIOSO";
var introIAmThreePT = "ESTUDANTE";
var btnPTPT = "Portugês";
var btnENPT = "Inglês";

$(document).ready(function(){
     $(".ptlanguage").hide();
     $("#introPresentation").text(introHelloEN);
     $("#introIAmOne").text(introIAmOneEN);
     $("#introIAmTwo").text(introIAmTwoEN);
     $("#introIAmThree").text(introIAmThreeEN);
     $("#emailtext").hide();
});

function changeLanguageBR(){
     $("#introPresentation").text(introHelloPT);
     $("#introIAmOne").text(introIAmOnePT);
     $("#introIAmTwo").text(introIAmTwoPT);
     $("#introIAmThree").text(introIAmThreePT);
     $("#btnEN").text(btnENPT);
     if(btnPTPT == 'Ok, vamos lá!'){
       $(window.document.location).attr('href','sobremim.pt.html');
       btnPTPT = "Portugês";
     } else {
       btnPTPT = 'Ok, vamos lá!';
       $("#btnPT").text(btnPTPT);
       $(".enlanguage").hide("slow");
       $(".ptlanguage").fadeIn(1000);
     }
}

function changeLanguageEN(){
     $("#introPresentation").text(introHelloEN);
     $("#introIAmOne").text(introIAmOneEN);
     $("#introIAmTwo").text(introIAmTwoEN);
     $("#introIAmThree").text(introIAmThreeEN);
     $("#btnPT").text(btnPTEN);
     if(btnENEN == "Ok, let's go!"){
       $(window.document.location).attr('href','sobremim.en.html');
       btnENEN = "English";
     } else {
       btnENEN = "Ok, let's go!";
       $("#btnEN").text(btnENEN);
       $(".ptlanguage").hide("slow");
       $(".enlanguage").fadeIn(1000);
     }
}

function showOrHideEmail(){
     $("#emailtext").toggle("slow");
}

window.onload = function(){
     var dataInicio = new Date('2016/05/16');
     var timeDiff = Math.abs(new Date().getTime() - dataInicio.getTime());
     var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
     var months = Math.trunc(diffDays/30);
     var dayAndMoths = diffDays/30;
     var days = Math.trunc((dayAndMoths % 1) * 30);
     document.getElementById("months").innerHTML = months + (months != 1 ? ' months' : ' month');
     document.getElementById("meses").innerHTML = months + (months != 1 ? ' mesês' : ' mês');
     document.getElementById("days").innerHTML = days + (days != 1 ? ' days' : ' day');
     document.getElementById("dias").innerHTML = days + (days != 1 ? ' dias' : ' dia');

}
