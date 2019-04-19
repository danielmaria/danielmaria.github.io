var lang = "PT";

(function($){
  $(function(){
    $("#emailtext").hide(); 
    putTextInLabels();
    contTimeExperience();
    $('#loopWordsEnglish').hide();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
  }); 
})(jQuery); 

$("#emailBtn").click(function(){
  showOrHideEmail();
});

function putTextInLabels(){
  let apresentation, time, theRoadSoFarTitle, theRoadSoFar, aboutMeTitle, aboutMe;
  if(lang === "PT"){
    apresentation = "OI, ME CHAMO DANIEL & SOU";
    time = " de experiência, desenvolvendo, estudando e aprimorando a forma de criar soluções.";
    theRoadSoFarTitle = "A estrada até aqui";
    theRoadSoFar = "Em 2015 me formei bacharel em educação física pela PUCRS. Tive a certeza de que esta, apesar de ser uma área incrível, não era minha paixão. Enquanto estudava sobre agachamento e bioquímica, realizava cursos de programação. Iniciei em 2016 o curso de Sistemas de Informação e, após 3 meses fui contratado como desenvolvedor.";
    aboutMeTitle = "Sobre mim";
    aboutMe = "Eu sou um backend por profissão e um frontend por hobby. Sou completamente viciado em desenvolvimento de software. Em meu dia a dia, profissionalmente utilizo Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) e Oracle como banco de dados. Apesar disto, muitas outras tecnologias me agradam. Como diversão gosto de aprender sobre outras tecnologias, como NodeJS, Vanilla JavaScript, JQuery, MongoDB, etc.";
    $('.loopWordsEnglish').hide();
    $('.loopWordsPortuguese').show();
  } else {
    apresentation = "HI, MY NAME IS DANIEL & I AM A";
    time = "of experience, developing softwares, studying and impriving a way to create solutions.";
    theRoadSoFarTitle = "The Road So Far";
    theRoadSoFar = "In 2015 I undergraduated Bachelor in Physical Education at PUCRS. I was sure that this area was incredible, despite I still interested about it, I wanted to do something different. While I studied about squat and biochemistry, I made some courses on programming. So, in 2016 I started Information Systems course at University (it's kind of mixed of administration and thecnology in Brazil). Three moths later, I was hired to work with programming.";
    aboutMeTitle = "About Me";
    aboutMe = "I am a backend in my profession and a frontend by hobby. I am completly addicted in software development. Daily in my job, I use Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) and Oracle for database. Despite this, I like a lot of others technologies. For fun, I like to learn NodeJS, Vanilla JavaScript, JQuery, MongoDB, etc.";
    $('.loopWordsEnglish').show();
    $('.loopWordsPortuguese').hide();
  }
  document.getElementById("apresentation").innerHTML = apresentation;
  document.getElementById("timeText").innerHTML = time;
  document.getElementById("theRoadSoFarTitle").innerHTML = theRoadSoFarTitle;
  document.getElementById("theRoadSoFar").innerHTML = theRoadSoFar;
  document.getElementById("aboutMe").innerHTML = aboutMe;
  document.getElementById("aboutMeTitle").innerHTML = aboutMeTitle;
}

function contTimeExperience(){
  let dataInicio = new Date('2016/05/16');
  let timeDiff = Math.abs(new Date().getTime() - dataInicio.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  let months = Math.trunc(diffDays/30);
  let dayAndMoths = diffDays/30;
  let days = Math.trunc((dayAndMoths % 1) * 30);
  if(lang == "EN"){
    let month = months + (months != 1 ? ' months' : ' month');
    let day = days + (days != 1 ? ' days' : ' day');
    document.getElementById("time").innerHTML = month + ' and ' + day;
  } else {
    let month = months + (months != 1 ? ' meses' : ' mês');
    let day = days + (days != 1 ? ' dias' : ' dia');
    document.getElementById("time").innerHTML = month + ' e ' + day;
  }
  
}

function changeEN(){
  lang = "EN";
  contTimeExperience();
  putTextInLabels();
}

function changePT(){
  lang = "PT";
  contTimeExperience();
  putTextInLabels();
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



function showOrHideEmail(){ 
  $("#emailtext").toggle("slow"); 
}

$(document).ready(function(){
  $('.modal').modal();
});