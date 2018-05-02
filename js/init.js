// Textos em português
apresentationPT = "OI, ME CHAMO DANIEL & SOU";
timePT = " de experiência, desenvolvendo, estudando e aprimorando a forma de criar soluções.";
theRoadSoFarTitlePT = "A estrada até aqui";
theRoadSoFarPT = "Em 2015 me formei bacharel em educação física pela PUCRS. Tive a certeza de que esta, apesar de ser uma área incrível, não era minha paixão. Enquanto estudava sobre agachamento e bioquímica, realizava cursos de programação. Iniciei em 2016 o curso de Sistemas de Informação e, após 3 meses fui contratado como desenvolvedor.";
aboutMeTitlePT = "Sobre mim";
aboutMePT = "Eu sou um backend por profissão e um frontend por hobby. Sou completamente viciado em desenvolvimento de software. Em meu dia a dia, profissionalmente utilizo Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) e Oracle como banco de dados. Apesar disto, muitas outras tecnologias me agradam. Como diversão gosto de aprender sobre outras tecnologias, como NodeJS, Vanilla JavaScript e JQuery, MongoDB, etc.";
myCourseTitlePT = "Iniciando como programador com JAVA";
myCoursePT = "O curso está em processo de criação. É um projeto feito por mim com o intuito de disseminar conhecimento para novos programadores, onde o aluno poderá iniciar seus estudos sem nenhum conhecimento prévio e ter uma noção do que é programação, passando desde os conhecimentos básicos de operadores aritiméticos até testes unitários e orientação a objeto. Em forma de retribuição aos milhares de criadores de conteúdo na internet o curso será sempre gratuito.";
downloadTextPT = "Se você quiser, você pode fazer o download do meu curriculum vitae ou resume:";

// Textos em inglês
apresentationEN = "HI, MY NAME IS DANIEL & I AM A";
timeEN = "of experience, developing softwares, studying and impriving a way to create solutions.";
theRoadSoFarTitleEN = "The Road So Far";
theRoadSoFarEN = "In 2015 I undergraduated Bachelor in Physical Education at PUCRS. I was sure that this area was incredible, despite I still interested about it, I wanted to do something different. While I studied about squat and biochemistry, I made some courses on programming. So, in 2016 I started Information Systems course at University (it's kind of mixed of administration and thecnology in Brazil). Three moths later, I was hired to work with programming.";
aboutMeTitleEN = "About Me";
aboutMeEN = "I am a backend in my profession and a frontend by hobby. I am completly addicted in software development. Daily in my job, I use Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) and Oracle for database. Despite this, I like a lot of others technologies. For fun, I like to learn NodeJS, Vanilla JavaScript and JQuery, MongoDB, etc.";
myCourseTitleEN = "Starting as a developer with JAVA";
myCourseEN = "The course is in construction process. It is a project made by myself, aiming to multiply knowledge for new programmers. The student will be able to start their studies without any previously knowledge in programming, since the basic knologie, from the basic knowledge of arithmetic operators to unit tests and object orientation. In order to reward the thousands creators of content in the internet, the course will always be free.";
downloadTextEN = "If you want, you can make a download of my curriculum vitae or resume:";
(function($){
  $(function(){
    document.getElementById("apresentation").innerHTML = apresentationEN;
    document.getElementById("timeText").innerHTML = timeEN;
    document.getElementById("theRoadSoFarTitle").innerHTML = theRoadSoFarTitleEN;
    document.getElementById("theRoadSoFar").innerHTML = theRoadSoFarEN;
    document.getElementById("aboutMe").innerHTML = aboutMeEN;
    document.getElementById("aboutMeTitle").innerHTML = aboutMeTitleEN;
    document.getElementById("myCourseTitle").innerHTML = myCourseTitleEN;
    document.getElementById("myCourse").innerHTML = myCourseEN;
    document.getElementById("downloadText").innerHTML = downloadTextEN;
    contTimeExperience("EN");
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
  }); 
})(jQuery); 

function contTimeExperience(lang){
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
  contTimeExperience("EN");
  document.getElementById("apresentation").innerHTML = apresentationEN;
  document.getElementById("timeText").innerHTML = timeEN;
  document.getElementById("theRoadSoFarTitle").innerHTML = theRoadSoFarTitleEN;
  document.getElementById("theRoadSoFar").innerHTML = theRoadSoFarEN;
  document.getElementById("aboutMe").innerHTML = aboutMeEN;
  document.getElementById("aboutMeTitle").innerHTML = aboutMeTitleEN;
  document.getElementById("myCourseTitle").innerHTML = myCourseTitleEN;
  document.getElementById("myCourse").innerHTML = myCourseEN;
  document.getElementById("downloadText").innerHTML = downloadTextEN;
}

function changePT(){
  contTimeExperience("PT");
  document.getElementById("apresentation").innerHTML = apresentationPT;
  document.getElementById("timeText").innerHTML = timePT;
  document.getElementById("theRoadSoFarTitle").innerHTML = theRoadSoFarTitlePT;
  document.getElementById("theRoadSoFar").innerHTML = theRoadSoFarPT;
  document.getElementById("aboutMe").innerHTML = aboutMePT;
  document.getElementById("aboutMeTitle").innerHTML = aboutMeTitlePT;
  document.getElementById("myCourseTitle").innerHTML = myCourseTitlePT;
  document.getElementById("myCourse").innerHTML = myCoursePT;
  document.getElementById("downloadText").innerHTML = downloadTextPT;
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
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };