var lang = "PT";

(function($){
  $(function(){
    $("#emailtext").hide(); 
    putTextInLabels();
    contTimeExperience();
    $('#loopWordsEnglish').hide();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); 
})(jQuery); 

var route = '';
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

function putTextInLabels(){
  let apresentation, time, theRoadSoFarTitle, theRoadSoFar, aboutMeTitle, aboutMe, myCourseTitle, myCourse, downloadText, redirectHeader, stayHere;
  if(lang === "PT"){
    apresentation = "OI, ME CHAMO DANIEL & SOU";
    time = " de experiência, desenvolvendo, estudando e aprimorando a forma de criar soluções.";
    theRoadSoFarTitle = "A estrada até aqui";
    theRoadSoFar = "Em 2015 me formei bacharel em educação física pela PUCRS. Tive a certeza de que esta, apesar de ser uma área incrível, não era minha paixão. Enquanto estudava sobre agachamento e bioquímica, realizava cursos de programação. Iniciei em 2016 o curso de Sistemas de Informação e, após 3 meses fui contratado como desenvolvedor.";
    aboutMeTitle = "Sobre mim";
    aboutMe = "Eu sou um backend por profissão e um frontend por hobby. Sou completamente viciado em desenvolvimento de software. Em meu dia a dia, profissionalmente utilizo Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) e Oracle como banco de dados. Apesar disto, muitas outras tecnologias me agradam. Como diversão gosto de aprender sobre outras tecnologias, como NodeJS, Vanilla JavaScript, JQuery, MongoDB, etc.";
    myCourseTitle = "Iniciando como programador com JAVA";
    myCourse = "O curso está em processo de criação. É um projeto feito por mim com o intuito de disseminar conhecimento para novos programadores, onde o aluno poderá iniciar seus estudos sem nenhum conhecimento prévio e ter uma noção do que é programação, passando desde os conhecimentos básicos de operadores aritiméticos até testes unitários e orientação a objeto. Em forma de retribuição aos milhares de criadores de conteúdo na internet o curso será sempre gratuito.";
    downloadText = "Se você quiser, você pode fazer o download do meu curriculum vitae ou resume:";
    redirectHeader = "Você será redirecionado";
    stayHere = "Permanecer na página";
    $('#loopWordsEnglish').hide();
    $('#loopWordsPortuguese').show();
  } else {
    apresentation = "HI, MY NAME IS DANIEL & I AM A";
    time = "of experience, developing softwares, studying and impriving a way to create solutions.";
    theRoadSoFarTitle = "The Road So Far";
    theRoadSoFar = "In 2015 I undergraduated Bachelor in Physical Education at PUCRS. I was sure that this area was incredible, despite I still interested about it, I wanted to do something different. While I studied about squat and biochemistry, I made some courses on programming. So, in 2016 I started Information Systems course at University (it's kind of mixed of administration and thecnology in Brazil). Three moths later, I was hired to work with programming.";
    aboutMeTitle = "About Me";
    aboutMe = "I am a backend in my profession and a frontend by hobby. I am completly addicted in software development. Daily in my job, I use Java (JSF, RichFaces, JSP, Servlets, Hibernate, Spring) and Oracle for database. Despite this, I like a lot of others technologies. For fun, I like to learn NodeJS, Vanilla JavaScript, JQuery, MongoDB, etc.";
    myCourseTitle = "Starting as a developer with JAVA";
    myCourse = "The course is in construction process. It is a project made by myself, aiming to multiply knowledge for new programmers. The student will be able to start their studies without any previously knowledge in programming, since the basic knologie, from the basic knowledge of arithmetic operators to unit tests and object orientation. In order to reward the thousands creators of content in the internet, the course will always be free.";
    downloadText = "It is only in Portuguese, but if you want, you can make a download of my curriculum vitae or resume:";
    stayHere = "Stay in this page";
    redirectHeader = "You will be redirected";
    $('#loopWordsEnglish').show();
    $('#loopWordsPortuguese').hide();
  }
  document.getElementById("apresentation").innerHTML = apresentation;
  document.getElementById("timeText").innerHTML = time;
  document.getElementById("theRoadSoFarTitle").innerHTML = theRoadSoFarTitle;
  document.getElementById("theRoadSoFar").innerHTML = theRoadSoFar;
  document.getElementById("aboutMe").innerHTML = aboutMe;
  document.getElementById("aboutMeTitle").innerHTML = aboutMeTitle;
  document.getElementById("myCourseTitle").innerHTML = myCourseTitle;
  document.getElementById("myCourse").innerHTML = myCourse;
  document.getElementById("downloadText").innerHTML = downloadText;
  document.getElementById("redirectHeader").innerHTML = redirectHeader;
  document.getElementById("stayHere").innerHTML = stayHere;
  
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

function generateResume(){ 
  var h = 30; 
  var doc = new jsPDF(); 
  var idade = Math.abs(new Date(Date.now() - new Date('02/10/1993').getTime()).getUTCFullYear() - 1970); 
  doc.addFont('ArialMS', 'Arial', 'normal'); 
  doc.setFont('Arial'); 
 
  doc.setFontSize(25); 
  doc.text("Daniel Maria da Silva", 23, h+=5); 
 
  doc.setFontSize(9); 
  doc.text("Brasileiro, Solteiro, " + idade + " anos", 25, h+=5); 
  doc.text("Avenida Ipiranga, 7020", 25, h+=5); 
  doc.text("Jardim Botânico – Porto Alegre – Rio Grande do Sul", 25, h+=5); 
  doc.text("Telefone: 51 99314-1835 – E-mail: danielmariadasilva@gmail.com", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("RESUMO", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("Trabalho profissionalmente com programação de software desde 2016, utilizando diariamente tecnologias" ,25, h+=5); 
  doc.text("Java, Spring MVC, JPA, JSF, Hibernate, Oracle. Busco o aperfeiçoamento de meus conhecimentos, bem", 25, h+=5); 
  doc.text("como a multiplicação dela ao trocá-la com meus colegas de trabalho.", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("FORMAÇÃO", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("Sistema de informação – PUCRS (2016 - cursando)", 25, h+=5); 
  doc.text("Bacharelado em Educação Física e Ciências do Desporto - PUCRS (concluído 2015).", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("EXPERIÊNCIA PROFISSIONAL", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("06/16 - 02/18 – Gerência da Tecnologia da Informação e Telecomunicação - PUCRS", 25, h+=5); 
  doc.text("Cargo: Programador", 25, h+=5); 
  doc.setFontSize(10); 
  doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, elaboração e criação" ,25, h+=5); 
  doc.text("de novos. Utilizando, principalmente Java como linguagem de programação back-end e utilizando os ", 25, h+=5); 
  doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão utilizamos o banco de dados Oracle.", 25, h+=5); 

  doc.text("02/18 - atual – DBC Company", 25, h+=10); 
  doc.text("Cargo: Programador", 25, h+=5); 
  doc.setFontSize(10); 
  doc.text("Principais atividades: Realizar a construção de sistemas utilizando Java como linguagem programação" ,25, h+=5); 
  doc.text("back-end e frameworks Primefaces e Hibernate, auxiliando na customização do front-end, utilizando ", 25, h+=5); 
  doc.text("Bootstrap, JavaScript e JQuery para isso.", 25, h+=5); 
  
 
  doc.setFontSize(13); 
  doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  //doc.text("- HTML5 e CSS3 I: Suas primeiras páginas da Web (Alura.com, 2015);", 25, h+=5); 
  doc.text("- HTML5 e CSS3 II: Turbinando as suas páginas (Alura.com, 2015);", 25, h+=5); 
 // doc.text("- Java I: Primeiros passos (Alura.com, 2015);", 25, h+=5); 
 // doc.text("- Java II: Orientação a Objetos (Alura.com, 2015);", 25, h+=5); 
 // doc.text("- Java III: Principais APIs e bibliotecas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java 8: Tire proveito dos novos recursos da linguagem (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java: Dominando as Collections (Alura.com, 2016);", 25, h+=5); 
  // doc.text("- Java e JDBC: Trabalhando com um banco de dados (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- Eclipse: Produtividade Extrema na IDE com Java (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Design Patterns Java I: Boas práticas de programação (Alura.com, 2015);", 25, h+=5); 
  doc.text("- SQL Completo (Softblue, 2015);", 25, h+=5); 
 // doc.text("- MySQL I: Iniciando suas consultas (Alura.com, 2015);", 25, h+=5); 
 // doc.text("- MySQL II: Consultas poderosas (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- Oracle I: Aprenda SQL usando esse famoso banco de dados (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Lean Startup: Primeiros passos da sua startup enxuta (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- Métodos Ágeis: Introdução (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- Refatorando na prática (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Clojure: Introdução a programação funcional (Alura.com, 2015);", 25, h+=5); 
  doc.text("- JavaScript : Programando na linguagem da web (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- Redis I: Armazenando chaves e valores (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Redis II: Estruturas e recursos na sua base NoSQL (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- SQLServer I: desvendando o banco de dados (Alura.com, 2015);", 25, h+=5); 
  // doc.text("- SQLServer II: Consultas poderosas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Oracle II: Consultas Complexas (Alura.com, 2016);", 25, h+=5);
  doc.text("- UML: Uma introdução à modelagem  (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Android I: Crie sua App fantástica com Android Studio (Alura.com, 2016);", 25, h+=5); 
  // doc.text("- Jogos com Android: Desenvolva seu próprio Flappy Bird (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Scrum: Agilidade em seu projeto (Alura.com, 2016);", 25, h+=5); 
  // doc.text("- Android I: Crie sua App fantástica no Eclipse (Alura.com, 2016)", 25, h+=5); 
  doc.text("- Jogos com Android I: Desenvolvimento de jogos 2D (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Testes: TDD com Java (Alura.com, 2016);", 25, h+=5); 
  // doc.text("- Orientação a Objetos: Melhores técnicas com Java  (Alura.com, 2016)", 25, h+=5); 
  doc.text("- Threads I : Programação paralela em Java  (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Desenvolvedor NodeJS e MongoDB. (Udemy, 2017);", 25, h+=5); 
  doc.text("- Git Completo: Do Básico ao Avançado. (Udemy, 2017);", 25, h+=5); 
  doc.text("- Introdução à Business Intelligence e Data Warehouse (BI do Brasil, 2018).", 25, h+=5); 
  var today = new Date(); 
  // doc.addPage(); 
  // h = 30; 
  today.setHours(0, 0, 0, 0); 
  doc.text(today.toLocaleDateString(), 175, h+=5); 
  doc.save('Resume_DanielMariaDaSilva.pdf'); 
} 
 
function generateCV(){ 
  var h = 30; 
  var doc = new jsPDF(); 
  var idade = Math.abs(new Date(Date.now() - new Date('02/10/1993').getTime()).getUTCFullYear() - 1970); 
  doc.addFont('ArialMS', 'Arial', 'normal'); 
  doc.setFont('Arial'); 
 
  doc.setFontSize(25); 
  doc.text("Daniel Maria da Silva", 23, h+=5); 
 
  doc.setFontSize(9); 
  doc.text("Brasileiro, Solteiro, " + idade + " anos", 25, h+=5); 
  doc.text("Avenida Ipiranga, 7020", 25, h+=5); 
  doc.text("Jardim Botânico – Porto Alegre – Rio Grande do Sul", 25, h+=5); 
  doc.text("Telefone: 51 99314-1835 – E-mail: danielmariadasilva@gmail.com", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("RESUMO", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  var resumo = doc.splitTextToSize("Desde 2016 com experiência profissional em desenvolvimento de software utilizando principalmente " + 
                                   "tecnologias Java, Spring MVC, JPA, Hibernate, Oracle, HTML, JavaScript, sem esquecer de estudar " + 
                                   "tecnologias que tem sido destaque no mercado de trabalho, como NodeJS, MongoDB, etc. "+ 
                                   "Procurando o aperfeiçoamento de meus conhecimentos, visando otimizar meu trabalho com boas práticas em "+ 
                                   "programação, lembrando sempre que, nem só de código vive o programador, tento obter o máximo de "+ 
                                   "conhecimento possível em frameworks de métodos ágeis e Design Thinking, áreas de muito interesse pessoal. "+ 
                                   "Busco trabalhar em equipe, ajudando da melhor maneira possível. Considero-me comunicativo, proativo e " + 
                                   "adaptativo à novas experiências e rotinas, procurando o maior aprendizado destas novas práticas." 
  , 165); 
  doc.text(resumo, 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("FORMAÇÃO", 23, h+=40); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("Sistema de informação – PUCRS (2016 - cursando)", 25, h+=5); 
  doc.text("Bacharelado em Educação Física e Ciências do Desporto - PUCRS (concluído 2015).", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("EXPERIÊNCIA PROFISSIONAL", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("06/16 - 02/18 – Gerência da Tecnologia da Informação e Telecomunicação - PUCRS", 25, h+=5); 
  doc.text("Cargo: Programador", 25, h+=5); 
  doc.setFontSize(10); 
  doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, elaboração e criação" ,25, h+=5); 
  doc.text("de novos. Utilizando, principalmente Java como linguagem de programação back-end e utilizando os ", 25, h+=5); 
  doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão utilizamos o banco de dados Oracle.", 25, h+=5); 

  doc.text("02/18 - atual – DBC Company", 25, h+=10); 
  doc.text("Cargo: Programador", 25, h+=5); 
  doc.setFontSize(10); 
  doc.text("Principais atividades: Realizar a construção de sistemas utilizando Java como linguagem programação" ,25, h+=5); 
  doc.text("back-end e frameworks Primefaces e Hibernate, auxiliando na customização do front-end, utilizando ", 25, h+=5); 
  doc.text("Bootstrap, JavaScript e JQuery para isso.", 25, h+=5); 
 
  doc.setFontSize(13); 
  doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10); 
  doc.rect(23, h, 165, 0.1, 'F'); 
  doc.setFontSize(10); 
  doc.text("- HTML5 e CSS3 I: Suas primeiras páginas da Web (Alura.com, 2015);", 25, h+=5); 
  doc.text("- HTML5 e CSS3 II: Turbinando as suas páginas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java I: Primeiros passos (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java II: Orientação a Objetos (Alura.com, 2015)", 25, h+=5); 
  doc.text("- Java III: Principais APIs e bibliotecas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java 8: Tire proveito dos novos recursos da linguagem (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Java: Dominando as Collections (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Java e JDBC: Trabalhando com um banco de dados (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Eclipse: Produtividade Extrema na IDE com Java (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Design Patterns Java I: Boas práticas de programação (Alura.com, 2015);", 25, h+=5); 
  doc.text("- SQL Completo (Softblue, 2015);", 25, h+=5); 
  doc.text("- MySQL I: Iniciando suas consultas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- MySQL II: Consultas poderosas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Oracle I: Aprenda SQL usando esse famoso banco de dados (Alura.com, 2015);", 25, h+=5); 
  doc.addPage(); 
  h = 30; 
  doc.text("- Oracle II: Consultas Complexas (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Lean Startup: Primeiros passos da sua startup enxuta (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Métodos Ágeis: Introdução (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Refatorando na prática (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Clojure: Introdução a programação funcional (Alura.com, 2015);", 25, h+=5); 
  doc.text("- JavaScript : Programando na linguagem da web (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Redis I: Armazenando chaves e valores (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Redis II: Estruturas e recursos na sua base NoSQL (Alura.com, 2015);", 25, h+=5); 
  doc.text("- SQLServer I: desvendando o banco de dados (Alura.com, 2015);", 25, h+=5); 
  doc.text("- SQLServer II: Consultas poderosas (Alura.com, 2015);", 25, h+=5); 
  doc.text("- UML: Uma introdução à modelagem  (Alura.com, 2015);", 25, h+=5); 
  doc.text("- Android I: Crie sua App fantástica com Android Studio (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Jogos com Android: Desenvolva seu próprio Flappy Bird (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Scrum: Agilidade em seu projeto (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Android I: Crie sua App fantástica no Eclipse (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Jogos com Android I: Desenvolvimento de jogos 2D (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Testes: TDD com Java (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Orientação a Objetos: Melhores técnicas com Java  (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Threads I : Programação paralela em Java  (Alura.com, 2016);", 25, h+=5); 
  doc.text("- Desenvolvedor NodeJS e MongoDB. (Udemy, 2017);", 25, h+=5); 
  doc.text("- Git Completo: Do Básico ao Avançado. (Udemy, 2017);", 25, h+=5); 
  doc.text("- Introdução à Business Intelligence e Data Warehouse (BI do Brasil, 2018).", 25, h+=5); 
 
  var today = new Date(); 
  today.setHours(0, 0, 0, 0); 
  doc.text(today.toLocaleDateString(), 175, h+=5); 
  doc.save('CV_DanielMariaDaSilva.pdf'); 
}

function showOrHideEmail(){ 
  $("#emailtext").toggle("slow"); 
}

$(document).ready(function(){
  $('.modal').modal();
});