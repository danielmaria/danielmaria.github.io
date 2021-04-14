  var cursosList = [
    {title:"Android I: Crie sua App fantástica no Eclipse", titleTransaled: "Android I: Create your fantastic App in Eclipse", date: new Date("03/22/2016"), duracao:720, showCV: false, company: "Alura.com", certification: "alura_android1eclipse"},
    {title:"Jogos com Android: Desenvolva seu próprio Flappy Bird", titleTransaled: "Android games: Develop your own Flappy Bird", date: new Date("04/08/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_fluppy"},
    {title:"Jogos com Android I: Desenvolvimento de jogos 2D", titleTransaled: "Games with Android I: 2D game development", date: new Date("03/31/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_androidjogo"},
    {title:"Android I: Crie sua App fantástica com Android Studio", titleTransaled: "Android I: Create your fantastic App with Android Studio", date: new Date("03/11/2016"), duracao:600, showCV: false, company: "Alura.com",  certification: "alura_android1"},
    {title:"Design Patterns Java I: Boas práticas de programação", titleTransaled: "Design Patterns Java I: Good programming practices", date: new Date("10/29/2015"), duracao:1200, showCV: true, company: "Alura.com",  certification: "alura_designpattern"},
    {title:"Eclipse: Produtividade Extrema na IDE com Java", titleTransaled: "Eclipse: Extreme Productivity in the IDE with Java", date: new Date("11/18/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: "alura_eclipse"},
    {title:"Orientação a Objetos: Melhores técnicas com Java", titleTransaled: "Object Orientation: Best Java Techniques", date: new Date("03/01/2016"), duracao:1200, showCV: false, company: "Alura.com",  certification: "alura_oo"},
    {title:"Java e Testes: Test driven development com Junit", titleTransaled: "Java and Tests: TDD with Junit", date: new Date("02/23/2016"), duracao:720, showCV: true, company: "Alura.com",  certification: "alura_javatestes"},
    {title:"Java I: Primeiros passos", titleTransaled: "Java I: Getting Started", date: new Date("08/25/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: "alura_primeirospassos"},
    {title:"Java e JDBC: Trabalhando com um banco de dados", titleTransaled: "Java and JDBC: Working with a database", date: new Date("10/15/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_javajdbc"},
    {title:"Refatorando na prática", titleTransaled: "Refactoring in practice", date: new Date("11/17/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_refatorando"},
    {title:"Java II: Orientação a Objetos", titleTransaled: "Java II: Object Orientation", date: new Date("08/28/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: "alura_java2_oo"},
    {title:"Java III: Principais APIs e bibliotecas", titleTransaled: "Java III: Main APIs and Libraries", date: new Date("09/30/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: "alura_java3"},
    {title:"Java 8: Tire proveito dos novos recursos da linguagem", titleTransaled: "Java 8: Take advantage of new language features", date: new Date("11/13/2015"), duracao:720, showCV: true, company: "Alura.com",  certification: "alura_java8"},
    {title:"Clojure: Introdução a programação funcional", titleTransaled: "Clojure: Introduction to functional programming", date: new Date("11/30/2015"), duracao:480, showCV: true, company: "Alura.com",  certification: "alura_clojure"},
    {title:"Threads I : Programação paralela em Java", titleTransaled: "Threads I: Parallel programming in Java", date: new Date("05/18/2016"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_threads"},
    {title:"Java: Dominando as Collections", titleTransaled: "Java: Mastering Collections", date: new Date("08/01/2016"), duracao:1200, showCV: true, company: "Alura.com",  certification: "alura_collections"},
    {title:"JavaScript : Programando na linguagem da web", titleTransaled: "JavaScript: Programming in the web language", date: new Date("09/04/2015"), duracao:1200, showCV: false, company: "Alura.com",  certification: "alura_js"},
    {title:"HTML5 e CSS3 I: Suas primeiras páginas da Web", titleTransaled: "HTML5 and CSS3 I: Your first web pages", date: new Date("09/01/2015"), duracao:1920, showCV: false, company: "Alura.com",  certification: "alura_htmlecss"},
    {title:"HTML5 e CSS3 II: Turbinando as suas páginas", titleTransaled: "HTML5 and CSS3 II: Turbocharging your pages", date: new Date("10/15/2015"), duracao:2400, showCV: false, company: "Alura.com",  certification: "alura_htmlcss2"},
    {title:"Métodos Ágeis: Introdução", titleTransaled: "Agile Methods: Introduction", date: new Date("11/13/2015"), duracao:720, showCV: false, company: "Alura.com",  certification: "alura_metodosageis"},
    {title:"UML Introdução: Modelagem de soluçõe", titleTransaled: "UML Introduction: Solution modeling", date: new Date("08/24/2015"), duracao: 480, showCV: false, company: "Alura.com",  certification: "alura_uml"},
    {title:"Scrum: Agilidade em seu projeto", titleTransaled: "Scrum: Agility in your project", date: new Date("01/14/2016"), duracao:600, showCV: false, company: "Alura.com",  certification: "alura_scrum"},
    {title:"Lean Startup: Primeiros passos da sua startup enxuta", titleTransaled: "Lean Startup: Getting started", date: new Date("10/26/2015"), duracao:60, showCV: true, company: "Alura.com",  certification: "alura_lean"},
    {title:"MySQL II: Consultas poderosas", titleTransaled: "MySQL II: Powerful queries", date: new Date("11/18/2015"), duracao:960, showCV: false, company: "Alura.com",  certification: "alura_mysql1"},
    {title:"MySQL I: Iniciando suas consultas", titleTransaled: "MySQL I: Starting your queries", date: new Date("09/12/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_mysql2"},
    {title:"Oracle I: Aprenda SQL usando esse famoso banco de dados", titleTransaled: "Oracle I: Learn SQL using this famous database", date: new Date("12/01/2015"), duracao:480, showCV: false, company: "Alura.com",  certification: "alura_oracle1"},
    {title:"Redis I: Armazenando chaves e valores", titleTransaled: "Redis I: Storing keys and values", date: new Date("11/25/2015"), duracao:1200, showCV: false, company: "Alura.com",  certification: "alura_redis1"},
    {title:"Redis II: Estruturas e recursos na sua base NoSQL", titleTransaled: "Redis II: Structures and resources in its NoSQL base", date: new Date("11/27/2015"), duracao:600, showCV: true, company: "Alura.com",  certification: "alura_redis2"},
    {title:"SQLServer I: desvendando o banco de dados", titleTransaled: "SQLServer I: unraveling the database", date: new Date("12/01/2015"), duracao:540, showCV: false, company: "Alura.com",  certification: "alura_sqlserver1"},
    {title:"SQLServer II: Consultas poderosas", titleTransaled: "SQLServer II: Powerful queries", date: new Date("12/04/2015"), duracao:600, showCV: false, company: "Alura.com",  certification: "alura_sqlserver2"},
    {title:"Oracle II: Consultas Complexas", titleTransaled: "Oracle II: Complex Queries", date: new Date("02/05/2016"), duracao:480, showCV: true, company: "Alura.com",  certification: "alura_oracle2"},
    {title:"SQL Completo", titleTransaled: "Full SQL", date: new Date("08/05/2015"), duracao:1200, showCV: false, company: "Softblue",  certification: "softblue_sql"},
    {title:"Desenvolvedor NodeJS e MongoDB", titleTransaled: "NodeJS and MongoDB Developer", date: new Date("07/27/2017"), duracao:930, showCV: true,  company: "Udemy.com",  certification: "nodejs"},
    {title:"Git Completo: Do Básico ao Avançado", titleTransaled: "Full Git: From Basic to Advanced", date: new Date("07/27/2017"), duracao:120, showCV: true,  company: "Udemy.com",  certification: "git"},
    {title:"Criar aplicativos com Ionic 3, Spring, OAuth2, REST e MongoDB", titleTransaled: "Create applications with Ionic 3, Spring, OAuth2, REST and MongoDB", date: new Date("12/12/2018"), duracao:300, showCV: true,  company: "Udemy.com",  certification: "ionic"},
    {title:"Design Thinking com Crianças e Jovens: Aplicação e Exemplos", titleTransaled: "Design Thinking with Children and Youth: Application and Examples", date: new Date("04/02/2019"), duracao:42, showCV: false,  company: "Udemy.com",  certification: ""},
    {title:"API RESTful com Spring Boot e Java 8", titleTransaled: "RESTful API with Spring Boot and Java 8", date: new Date("04/06/2019"), duracao:930, showCV: true,  company: "Udemy.com",  certification: "api_restful"},
    {title:"Testes unitários em JAVA: Domine JUnit, Mockito e TDD", titleTransaled: "Unit tests in JAVA: Mastering JUnit, Mockito and TDD", date: new Date("04/17/2019"), duracao:480, showCV: true,  company: "Udemy.com",  certification: "testes_unitarios"},
    {title:"Treinamento Scrum Developer", titleTransaled: "Scrum Developer Training", date: new Date("01/01/2018"), duracao:480, showCV: false,  company: "DBCCompany",  certification: ""},
    {title:"Certificado CLF (Certified Lean Inception Facilitator)", titleTransaled: "Certificate CLF (Certified Lean Inception Facilitator)", date: new Date("08/01/2018"), duracao:480, showCV: true, company: "Caroli.org",  certification: "LeanInception"},
    {title:"Introdução à Business Intelligence e Data Warehouse", titleTransaled: "Introduction to Business Intelligence and Data Warehouse", date: new Date("02/14/2018"), duracao:300, showCV: false, company: "BI do Brasil",  certification: "bida"},
    {title:"Angular 7 e  integração de APIs", titleTransaled: "Angular 7 and API integration", date: new Date("04/21/2019"), duracao:150, showCV: true, company: "Udemy.com",  certification: "angular"},
    {title:"Docker: Ferramenta essencial para Desenvolvedores", titleTransaled: "Docker: Essential Tool for Developers", date: new Date("05/02/2019"), duracao:330, showCV: true, company: "Udemy.com",  certification: "docker"},
    {title:"Terminal Linux", titleTransaled: "Linux terminal", date: new Date("03/23/2020"), duracao:60, showCV: true, company: "Udemy.com",  certification: "terminal_linux"},
    {title:"Apache Kafka and Spring Boot (Consumer, Producer)", titleTransaled: "Apache Kafka and Spring Boot (Consumer, Producer)", date: new Date("05/20/2020"), duracao:60, showCV: true, company: "Udemy.com",  certification: ""},
    {title:"Reactive Programming with Spring Framework 5", titleTransaled: "Reactive Programming with Spring Framework 5", date: new Date("10/04/2020"), duracao:240, showCV: true, company: "Udemy.com",  certification: "webflux"},
    {title:"Quarkus com Panache, GraalVM, GitlabCI e AWS", titleTransaled: "Quarkus with Panache, GraalVM, GitlabCI and AWS", date: new Date("07/08/2020"), duracao:90, showCV: true, company: "Udemy.com",  certification: "quarkus"},
    {title:"Java Application Performance and Memory Management", titleTransaled: "Java Application Performance and Memory Management", date: new Date("02/26/2021"), duracao:600, showCV: true, company: "Udemy.com",  certification: "jvm"},
    {title:"JMeter - Testes de performance", titleTransaled: "JMeter: Performance tests", date: new Date("02/03/2021"), duracao:360, showCV: true, company: "Udemy.com",  certification: "jmeter"}
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
    let lang = document.getElementById("lang").innerText;
    getSortedCursos().forEach(element => {
        if(ignoreVar || element.showCV){
            if(lang === "PT") {
                htmlCursos += '<li>';
                htmlCursos += element.title + '  - ' + Math.round(element.duracao/60) + 'h (' + element.company + ', ' + element.date.getFullYear() + '); ' + buildExternalLink(element);
                htmlCursos += "</li>";
            } else {
                htmlCursos += '<li>';
                htmlCursos += element.titleTransaled + '  - ' + Math.round(element.duracao/60) + 'h (' + element.company + ', ' + element.date.getFullYear() + '); ' + buildExternalLink(element);
                htmlCursos += "</li>";
            }
        }
    });
    htmlCursos += "</ul>";
    document.getElementById("courses-qualifications").innerHTML = htmlCursos;
    if(!ignoreVar){
        let tempoCurso = cursosList.sumIgnoring('duracao', 'showCV');
        let qtdCursos = cursosList.filter( curso => !curso.showCV).length
        let labelAndMore = lang === 'PT' ? 'E mais ' : 'And more '
        let labelOtherCourses = lang === 'PT' ? ' outros cursos. (' : ' other courses. (';
        document.getElementById("cursos-qualificacoes").innerHTML = "<p style='text-align: right;' id='conterCourses'>" + labelAndMore + qtdCursos + labelOtherCourses + Math.round(tempoCurso/60) + " horas)</p>";
    } else {
        let tempoCurso = cursosList.sumIgnoring('duracao', '');
        let qtdCursos = cursosList.length
        if(document.getElementById("lang").innerHTML === "PT"){
            document.getElementById("courses-qualifications").innerHTML += "<p style='text-align: right;'> Total de " + qtdCursos + " cursos. (" + Math.round(tempoCurso/60) +" horas) .</p>";
        } else {
            document.getElementById("courses-qualifications").innerHTML += "<p style='text-align: right;'> Total of " + qtdCursos + " courses. (" + Math.round(tempoCurso/60) +" hours) .</p>";
        }
    }
}

function buildExternalLink(element) {
    if(element.certification != ""){
        return "<img src='./img/externo.svg' class='export-button' onclick='showPDF(\"" + element.certification + "\")'>";        
    }
    return "";
}

function showPDF(certification){
    window.open("./img/curses/" + certification + ".pdf","_blank");
}

function showAllClasses(){
    printClasses(true);
    document.getElementById("btnShowAllClasses").hidden = true;
    document.getElementById("conterCourses").hidden = true;
}

(function() {
    printClasses(false);
    document.getElementById("yearNow").innerHTML = new Date().getFullYear();
 })();