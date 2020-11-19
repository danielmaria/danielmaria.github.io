var cursosList = [
    {title:"Android I: Crie sua App fantástica no Eclipse", titleTransaled: "Android I: Create your fantastic App in Eclipse", date: new Date("03/22/2016"), duracao:720, showCV: false, company: "Alura.com", certification: "alura_android1eclipse"},
    {title:"Jogos com Android: Desenvolva seu próprio Flappy Bird", titleTransaled: "Android games: Develop your own Flappy Bird", date: new Date("04/08/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_fluppy"},
    {title:"Jogos com Android I: Desenvolvimento de jogos 2D", titleTransaled: "Games with Android I: 2D game development", date: new Date("03/31/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_androidjogo"},
    {title:"Android I: Crie sua App fantástica com Android Studio", titleTransaled: "Android I: Create your fantastic App with Android Studio", date: new Date("03/11/2016"), duracao:600, showCV: true, company: "Alura.com",  certification: "alura_android1"},
    {title:"Design Patterns Java I: Boas práticas de programação", titleTransaled: "Design Patterns Java I: Good programming practices", date: new Date("10/29/2015"), duracao:1200, showCV: true, company: "Alura.com",  certification: "alura_designpattern"},
    {title:"Eclipse: Produtividade Extrema na IDE com Java", titleTransaled: "", date: new Date("11/18/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Orientação a Objetos: Melhores técnicas com Java", titleTransaled: "", date: new Date("03/01/2016"), duracao:1200, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Testes: TDD com Java", titleTransaled: "", date: new Date("02/23/2016"), duracao:720, showCV: true, company: "Alura.com",  certification: ""},
    {title:"Java I: Primeiros passos", titleTransaled: "", date: new Date("08/25/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Java e JDBC: Trabalhando com um banco de dados", titleTransaled: "", date: new Date("10/15/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Refatorando na prática", titleTransaled: "", date: new Date("11/17/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Java II: Orientação a Objetos", titleTransaled: "", date: new Date("08/28/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Java III: Principais APIs e bibliotecas", titleTransaled: "", date: new Date("09/30/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Java 8: Tire proveito dos novos recursos da linguagem", titleTransaled: "", date: new Date("11/13/2015"), duracao:720, showCV: true, company: "Alura.com",  certification: ""},
    {title:"Clojure: Introdução a programação funcional", titleTransaled: "", date: new Date("11/30/2015"), duracao:480, showCV: true, company: "Alura.com",  certification: ""},
    {title:"Threads I : Programação paralela em Java", titleTransaled: "", date: new Date("05/18/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Java: Dominando as Collections", titleTransaled: "", date: new Date("08/01/2016"), duracao:1200, showCV: true, company: "Alura.com",  certification: ""},
    {title:"JavaScript : Programando na linguagem da web", titleTransaled: "", date: new Date("09/04/2015"), duracao:1200, showCV: false, company: "Alura.com",  certification: ""},
    {title:"HTML5 e CSS3 I: Suas primeiras páginas da Web", titleTransaled: "", date: new Date("09/01/2015"), duracao:1920, showCV: false, company: "Alura.com",  certification: ""},
    {title:"HTML5 e CSS3 II: Turbinando as suas páginas", titleTransaled: "", date: new Date("10/15/2015"), duracao:2400, showCV: true, company: "Alura.com",  certification: ""},
    {title:"Métodos Ágeis: Introdução", titleTransaled: "", date: new Date("11/13/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: ""},
    {title:"UML Introdução: Modelagem de soluçõe", titleTransaled: "", date: new Date("08/24/2015"), duracao: 480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Scrum: Agilidade em seu projeto", titleTransaled: "", date: new Date("01/14/2016"), duracao:600, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Lean Startup: Primeiros passos da sua startup enxuta", titleTransaled: "", date: new Date("10/26/2015"), duracao:60, showCV: true, company: "Alura.com",  certification: ""},
    {title:"MySQL II: Consultas poderosas", titleTransaled: "", date: new Date("11/18/2015"), duracao:960, showCV: false, company: "Alura.com",  certification: ""},
    {title:"MySQL I: Iniciando suas consultas", titleTransaled: "", date: new Date("09/12/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Oracle I: Aprenda SQL usando esse famoso banco de dados", titleTransaled: "", date: new Date("12/01/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Redis I: Armazenando chaves e valores", titleTransaled: "", date: new Date("11/25/2015"), duracao:1200, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Redis II: Estruturas e recursos na sua base NoSQL", titleTransaled: "", date: new Date("11/27/2015"), duracao:600, showCV: true, company: "Alura.com",  certification: ""},
    {title:"SQLServer I: desvendando o banco de dados", titleTransaled: "", date: new Date("12/01/2015"), duracao:540, showCV: false, company: "Alura.com",  certification: ""},
    {title:"SQLServer II: Consultas poderosas", titleTransaled: "", date: new Date("12/04/2015"), duracao:600, showCV: false, company: "Alura.com",  certification: ""},
    {title:"Oracle II: Consultas Complexas", titleTransaled: "", date: new Date("02/05/2016"), duracao:480, showCV: true, company: "Alura.com",  certification: ""},
    {title:"SQL Completo", titleTransaled: "", date: new Date("08/05/2015"), duracao:1200, showCV: false, company: "Softblue",  certification: ""},
    {title:"Desenvolvedor NodeJS e MongoDB", titleTransaled: "", date: new Date("07/27/2017"), duracao:930, showCV: true,  company: "Udemy.com",  certification: "nodejs"},
    {title:"Git Completo: Do Básico ao Avançado", titleTransaled: "", date: new Date("07/27/2017"), duracao:120, showCV: true,  company: "Udemy.com",  certification: "git"},
    {title:"Criar aplicativos com Ionic 3, Spring, OAuth2, REST e MongoDB", titleTransaled: "", date: new Date("12/12/2018"), duracao:300, showCV: true,  company: "Udemy.com",  certification: "ionic"},
    {title:"Design Thinking com Crianças e Jovens: Aplicação e Exemplos", titleTransaled: "", date: new Date("04/02/2019"), duracao:42, showCV: false,  company: "Udemy.com",  certification: ""},
    {title:"API RESTful com Spring Boot e Java 8", titleTransaled: "", date: new Date("04/06/2019"), duracao:930, showCV: true,  company: "Udemy.com",  certification: "api_restful"},
    {title:"Testes unitários em JAVA: Domine JUnit, Mockito e TDD", titleTransaled: "", date: new Date("04/17/2019"), duracao:480, showCV: true,  company: "Udemy.com",  certification: "testes_unitarios"},
    {title:"Treinamento Scrum Developer", titleTransaled: "", date: new Date("01/01/2018"), duracao:480, showCV: true,  company: "DBCCompany",  certification: ""},
    {title:"Certificado CLF (Certified Lean Inception Facilitator", titleTransaled: "", date: new Date("08/01/2018"), duracao:480, showCV: true, company: "Caroli.org",  certification: "LeanInception"},
    {title:"Introdução à Business Intelligence e Data Warehouse", titleTransaled: "", date: new Date("02/14/2018"), duracao:300, showCV: false, company: "BI do Brasil",  certification: "bida"},
    {title:"Angular 7 e  integração de APIs", titleTransaled: "", date: new Date("04/21/2019"), duracao:150, showCV: true, company: "Udemy.com",  certification: "angular"},
    {title:"Docker: Ferramenta essencial para Desenvolvedores", titleTransaled: "", date: new Date("05/02/2019"), duracao:330, showCV: true, company: "Udemy.com",  certification: "docker"},
    {title:"Terminal Linux", titleTransaled: "Linux terminal", date: new Date("03/23/2020"), duracao:60, showCV: true, company: "Udemy.com",  certification: "terminal_linux"},
    {title:"Apache Kafka and Spring Boot (Consumer, Producer)", titleTransaled: "", date: new Date("05/20/2020"), duracao:60, showCV: true, company: "Udemy.com",  certification: ""},
    {title:"Reactive Programming with Spring Framework 5", titleTransaled: "", date: new Date("10/04/2020"), duracao:240, showCV: true, company: "Udemy.com",  certification: "webflux"},
    {title:"Quarkus com Panache, GraalVM, GitlabCI e AWS", titleTransaled: "Quarkus with Panache, GraalVM, GitlabCI and AWS", date: new Date("07/08/2020"), duracao:90, showCV: true, company: "Udemy.com",  certification: "quarkus"}
];

Array.prototype.sumIgnoring = function (prop, ignore) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        if(!this[i][ignore]){
            total += this[i][prop]
        }
    }
    return total
}
function getSortedCursos(){ 
    return cursosList.sort(function(a, b) {
            dateOne = new Date(a.date);
            dateTwo = new Date(b.date);
            return dateOne>dateTwo ? -1 : dateOne<dateTwo ? 1 : 
                a.title>b.title ? 1 : a.title<b.title ? -1 : 0;
        });
}

function printClasses(ignoreVar){
    var htmlCursos = "<ul>";
    getSortedCursos().forEach(element => {
        if(ignoreVar || element.showCV){
            htmlCursos += "<li>";
            htmlCursos += element.title + '  - ' + Math.round(element.duracao/60) + 'h (' + element.company + ', ' + element.date.getFullYear() + '); ' + buildExternalLink(element) + ' ' + transale(element) ;
            htmlCursos += "</li>";
        }
    });
    htmlCursos += "</ul>";
    document.getElementById("cursos-qualificacoes").innerHTML = htmlCursos;
    if(!ignoreVar){
        let tempoCurso = cursosList.sumIgnoring('duracao', 'showCV');
        let qtdCursos = cursosList.filter( curso => !curso.showCV).length
        document.getElementById("cursos-qualificacoes").innerHTML += "<p style='text-align: right;'> E mais " + qtdCursos + " outros cursos. (" + Math.round(tempoCurso/60) + " horas)</p>";
    } else {
        let tempoCurso = cursosList.sumIgnoring('duracao', '');
        let qtdCursos = cursosList.length
        document.getElementById("cursos-qualificacoes").innerHTML += "<p style='text-align: right;'> Total de " + qtdCursos + " cursos. (" + Math.round(tempoCurso/60) +" horas) .</p>";
    }
}

function buildExternalLink(element) {
    if(element.certification != ""){
        return "<img src='./img/externo.svg' class='footer-button' onclick='showPDF(\"" + element.certification + "\")'>";        
    }
    return "";
}


function transale(element) {
    if(element.titleTransaled != "") {
        return '<img src=\"./img/reino-unido.svg\"/ class="footer-button" title="' + element.titleTransaled + '"> ';
    }
    return "";
}

function showPDF(certification){
    window.open("./img/curses/" + certification + ".pdf","_blank");
}

function showAllClasses(){
    printClasses(true);
    document.getElementById("btnShowAllClasses").hidden = true;
}

(function() {
    printClasses(false);
    document.getElementById("yearNow").innerHTML = new Date().getFullYear();
 })();




