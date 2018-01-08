$(document).ready(function(){
  $('#redirect').hide();
});

var socialLinkedin = 'Linkedin';
var socialGithub = 'Github';

function redirectLinkedin(){
  $("#socialmedia").text(socialLinkedin);
  $('#redirect').show();
}

function redirectGithub(){
  $("#socialmedia").text(socialGithub);
  $('#redirect').show();
}

function redirectClose(){
  $('#redirect').hide();
}

function redirectNow(){
  if($("#socialmedia").text() == socialLinkedin){
    $(window.document.location).attr('href','https://www.linkedin.com/in/danielmariadasilva/detail/recent-activity/posts/');
  } else if($("#socialmedia").text() == socialGithub){
    $(window.document.location).attr('href','https://github.com/danielmaria');
  }
}
