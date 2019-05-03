var cursosList = [
    {title:"Android I: Crie sua App fantástica no Eclipse", date: new Date("03/22/2016"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Jogos com Android: Desenvolva seu próprio Flappy Bird", date: new Date("04/08/2016"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Jogos com Android I: Desenvolvimento de jogos 2D", date: new Date("03/31/2016"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Android I: Crie sua App fantástica com Android Studio", date: new Date("03/11/2016"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Design Patterns Java I: Boas práticas de programação", date: new Date("10/29/2015"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Eclipse: Produtividade Extrema na IDE com Java", date: new Date("11/18/2015"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Orientação a Objetos: Melhores técnicas com Java", date: new Date("03/01/2016"), duracao:1200, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Testes: TDD com Java", date: new Date("02/23/2016"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java I: Primeiros passos", date: new Date("08/25/2015"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Java e JDBC: Trabalhando com um banco de dados", date: new Date("10/15/2015"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Refatorando na prática", date: new Date("11/17/2015"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Java II: Orientação a Objetos", date: new Date("08/28/2015"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Java III: Principais APIs e bibliotecas", date: new Date("09/30/2015"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Java 8: Tire proveito dos novos recursos da linguagem", date: new Date("11/13/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Clojure: Introdução a programação funcional", date: new Date("11/30/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Threads I : Programação paralela em Java", date: new Date("05/18/2016"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Java: Dominando as Collections", date: new Date("08/01/2016"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"JavaScript : Programando na linguagem da web", date: new Date("09/04/2015"), duracao:1200, showCV: false, showResume: false, company: "Alura.com"},
    {title:"HTML5 e CSS3 I: Suas primeiras páginas da Web", date: new Date("09/01/2015"), duracao:1920, showCV: false, showResume: false, company: "Alura.com"},
    {title:"HTML5 e CSS3 II: Turbinando as suas páginas", date: new Date("10/15/2015"), duracao:2400, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Métodos Ágeis: Introdução", date: new Date("11/13/2015"), duracao:720, showCV: false, showResume: false, company: "Alura.com"},
    {title:"UML Introdução: Modelagem de soluçõe", date: new Date("08/24/2015"), duracao: 480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Scrum: Agilidade em seu projeto", date: new Date("01/14/2016"), duracao:600, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Lean Startup: Primeiros passos da sua startup enxuta", date: new Date("10/26/2015"), duracao:60, showCV: true, showResume: false, company: "Alura.com"},
    {title:"MySQL II: Consultas poderosas", date: new Date("11/18/2015"), duracao:960, showCV: false, showResume: false, company: "Alura.com"},
    {title:"MySQL I: Iniciando suas consultas", date: new Date("09/12/2015"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Oracle I: Aprenda SQL usando esse famoso banco de dados", date: new Date("12/01/2015"), duracao:480, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Redis I: Armazenando chaves e valores", date: new Date("11/25/2015"), duracao:1200, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Redis II: Estruturas e recursos na sua base NoSQL", date: new Date("11/27/2015"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"SQLServer I: desvendando o banco de dados", date: new Date("12/01/2015"), duracao:540, showCV: false, showResume: false, company: "Alura.com"},
    {title:"SQLServer II: Consultas poderosas", date: new Date("12/04/2015"), duracao:600, showCV: false, showResume: false, company: "Alura.com"},
    {title:"Oracle II: Consultas Complexas", date: new Date("02/05/2016"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"SQL Completo", date: new Date("08/05/2015"), duracao:1200, showCV: false, showResume: false, company: "Softblue"},
    {title:"Desenvolvedor NodeJS e MongoDB", date: new Date("07/27/2017"), duracao:930, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Git Completo: Do Básico ao Avançado", date: new Date("07/27/2017"), duracao:120, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Criar aplicativos com Ionic 3, Spring, OAuth2, REST e MongoDB", date: new Date("12/12/2018"), duracao:300, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Design Thinking com Crianças e Jovens: Aplicação e Exemplos", date: new Date("04/02/2019"), duracao:42, showCV: false, showResume: false,  company: "Udemy.com"},
    {title:"API RESTful com Spring Boot e Java 8", date: new Date("04/06/2019"), duracao:930, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Testes unitários em JAVA: Domine JUnit, Mockito e TDD", date: new Date("04/17/2019"), duracao:480, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Treinamento Scrum Developer", date: new Date("01/01/2018"), duracao:480, showCV: true, showResume: false,  company: "DBCCompany"}, //
    {title:"Certificado CLF (Certified Lean Inception Facilitator", date: new Date("08/01/2018"), duracao:480, showCV: true, showResume: false, company: "Caroli.org"},
    {title:"Introdução à Business Intelligence e Data Warehouse", date: new Date("02/14/2018"), duracao:300, showCV: false, showResume: false, company: "BI do Brasil"},
    {title:"Angular 7 e  integração de APIs", date: new Date("04/21/2019"), duracao:150, showCV: true, showResume: false, company: "Udemy.com"},
    {title:"Docker: Ferramenta essencial para Desenvolvedores", date: new Date("05/02/2019"), duracao:330, showCV: true, showResume: false, company: "Udemy.com"}
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
            htmlCursos += element.title + '  - ' + Math.round(element.duracao/60) + 'h (' + element.company + ', ' + element.date.getFullYear() + ');';
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

function showAllClasses(){
    printClasses(true);
    document.getElementById("btnShowAllClasses").hidden = true;
}

(function() {
    printClasses(false);
    document.getElementById("yearNow").innerHTML = new Date().getFullYear();
 })();




