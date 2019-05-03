function getSortedCursos(){ 
    return cursos.sort(function(a, b) {
            dateOne = new Date(a.date);
            dateTwo = new Date(b.date);
            return dateOne>dateTwo ? -1 : dateOne<dateTwo ? 1 : 
                a.title>b.title ? 1 : a.title<b.title ? -1 : 0;
        });
}

Array.prototype.sumIgnoring = function (prop, ignore) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        if(!this[i][ignore]){
            total += this[i][prop]
        }
    }
    return total
}

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
    doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, além de elaboração e " ,25, h+=5); 
    doc.text("criação de novos. Utilizando principalmente Java como linguagem de programação back-end e os  " ,25, h+=5); 
    doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão era utilizado o banco de dados Oracle.",25, h+=5); 
  
    doc.text("02/18 - atual – DBC Company", 25, h+=10); 
    doc.text("Cargo: Programador", 25, h+=5); 
    doc.setFontSize(10); 
    doc.text("Principais atividades: Realizar a construção de sistemas utilizando Java como linguagem de programação" ,25, h+=5); 
    doc.text("back-end e frameworks Primefaces e Hibernate, além de realizar as customizações necessárias utilizando " ,25, h+=5); 
    doc.text("Bootstrap, JavaScript e JQuery.",25, h+=5); 
    
   
    doc.setFontSize(13); 
    doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10); 
    doc.rect(23, h, 165, 0.1, 'F'); 
    doc.setFontSize(10);
    cursos.forEach(element => {
        if(element.showResume && h < 270)
            doc.text('- ' + element.title + ' (' + element.company + ', ' + element.date.getFullYear() + ');', 25, h+=5);
    });
    
    var today = new Date(); 
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
    var resumo = doc.splitTextToSize("Trabalho profissionalmente com programação de software desde 2016, utilizando diariamente tecnologias Java, Spring, PrimeFaces, JPA, JSF, Hibernate, Oracle. Além disso, busco aprimorar meus conhecimentos em cursos relacionados a banco de dados NoSql e de tecnologias que fazem uso de JavaScript, como NodeJS, Ionic, etc. Procuro me aperfeiçoar em programação e em desenvolvimento de software, buscando o desenvolvimento de minhas habilidades como um todo. Assim, preocupo-me desde o aspecto visual do programa quanto aos aspectos mais técnicos, visando escrever o código da forma mais simples e clara.", 165); 
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
    doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, além de elaboração e " ,25, h+=5); 
    doc.text("criação de novos. Utilizando principalmente Java como linguagem de programação back-end e os  " ,25, h+=5); 
    doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão era utilizado o banco de dados Oracle.",25, h+=5); 
  
    doc.text("02/18 - atual – DBC Company", 25, h+=10); 
    doc.text("Cargo: Programador", 25, h+=5); 
    doc.setFontSize(10); 
    doc.text("Principais atividades: Realizar a construção de sistemas utilizando Java como linguagem de programação" ,25, h+=5); 
    doc.text("back-end e frameworks Primefaces e Hibernate, além de realizar as customizações necessárias utilizando " ,25, h+=5); 
    doc.text("Bootstrap, JavaScript e JQuery.",25, h+=5); 
   
    doc.setFontSize(13); 
    doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10); 
    doc.rect(23, h, 165, 0.1, 'F'); 
    doc.setFontSize(10);
    getSortedCursos().forEach(element => {
        if(element.showCV){
            if(h > 270) {
                doc.addPage();
                h = 30;
            }
            doc.text('- ' + element.title + ' (' + element.company + ', ' + element.date.getFullYear() + ');', 25, h+=5);
        }
    });
    let tempoCurso = cursos.sumIgnoring('duracao', 'showResume');
    doc.text("E mais " + tempoCurso + " horas em cursos voltados a computação.", 23, h+=10); 
    var today = new Date(); 
    today.setHours(0, 0, 0, 0); 
    doc.text(today.toLocaleDateString(), 175, h+=5); 
    doc.save('CV_DanielMariaDaSilva.pdf'); 
  }

  var cursos = [
    {title:"Android I: Crie sua App fantástica no Eclipse", date: new Date("03/22/2016"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Jogos com Android: Desenvolva seu próprio Flappy Bird", date: new Date("04/08/2016"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Jogos com Android I: Desenvolvimento de jogos 2D", date: new Date("03/31/2016"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Android I: Crie sua App fantástica com Android Studio", date: new Date("03/11/2016"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Design Patterns Java I: Boas práticas de programação", date: new Date("10/29/2015"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Eclipse: Produtividade Extrema na IDE com Java", date: new Date("11/18/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Orientação a Objetos: Melhores técnicas com Java", date: new Date("03/01/2016"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Testes: TDD com Java", date: new Date("02/23/2016"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java I: Primeiros passos", date: new Date("08/25/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java e JDBC: Trabalhando com um banco de dados", date: new Date("10/15/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Refatorando na prática", date: new Date("11/17/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java II: Orientação a Objetos", date: new Date("08/28/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java III: Principais APIs e bibliotecas", date: new Date("09/30/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java 8: Tire proveito dos novos recursos da linguagem", date: new Date("11/13/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Clojure: Introdução a programação funcional", date: new Date("11/30/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Threads I : Programação paralela em Java", date: new Date("05/18/2016"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Java: Dominando as Collections", date: new Date("08/01/2016"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"JavaScript : Programando na linguagem da web", date: new Date("09/04/2015"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"HTML5 e CSS3 I: Suas primeiras páginas da Web", date: new Date("09/01/2015"), duracao:1920, showCV: true, showResume: false, company: "Alura.com"},
    {title:"HTML5 e CSS3 II: Turbinando as suas páginas", date: new Date("10/15/2015"), duracao:2400, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Métodos Ágeis: Introdução", date: new Date("11/13/2015"), duracao:720, showCV: true, showResume: false, company: "Alura.com"},
    {title:"UML Introdução: Modelagem de soluçõe", date: new Date("08/24/2015"), duracao: 480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Scrum: Agilidade em seu projeto", date: new Date("01/14/2016"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Lean Startup: Primeiros passos da sua startup enxuta", date: new Date("10/26/2015"), duracao:60, showCV: true, showResume: false, company: "Alura.com"},
    {title:"MySQL II: Consultas poderosas", date: new Date("11/18/2015"), duracao:960, showCV: true, showResume: false, company: "Alura.com"},
    {title:"MySQL I: Iniciando suas consultas", date: new Date("09/12/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Oracle I: Aprenda SQL usando esse famoso banco de dados", date: new Date("12/01/2015"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Redis I: Armazenando chaves e valores", date: new Date("11/25/2015"), duracao:1200, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Redis II: Estruturas e recursos na sua base NoSQL", date: new Date("11/27/2015"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"SQLServer I: desvendando o banco de dados", date: new Date("12/01/2015"), duracao:540, showCV: true, showResume: false, company: "Alura.com"},
    {title:"SQLServer II: Consultas poderosas", date: new Date("12/04/2015"), duracao:600, showCV: true, showResume: false, company: "Alura.com"},
    {title:"Oracle II: Consultas Complexas", date: new Date("02/05/2016"), duracao:480, showCV: true, showResume: false, company: "Alura.com"},
    {title:"SQL Completo", date: new Date("08/05/2015"), duracao:1200, showCV: true, showResume: false, company: "Softblue"},
    {title:"Desenvolvedor NodeJS e MongoDB", date: new Date("07/27/2017"), duracao:930, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Git Completo: Do Básico ao Avançado", date: new Date("07/27/2017"), duracao:120, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Criar aplicativos com Ionic 3, Spring, OAuth2, REST e MongoDB", date: new Date("12/12/2018"), duracao:300, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Design Thinking com Crianças e Jovens: Aplicação e Exemplos", date: new Date("04/02/2019"), duracao:42, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"API RESTful com Spring Boot e Java 8", date: new Date("04/06/2019"), duracao:930, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Testes unitários em JAVA: Domine JUnit, Mockito e TDD", date: new Date("04/17/2019"), duracao:480, showCV: true, showResume: false,  company: "Udemy.com"},
    {title:"Treinamento Scrum Developer", date: new Date("01/01/2018"), duracao:480, showCV: true, showResume: false,  company: "DBCCompany"}, //
    {title:"Certificado CLF (Certified Lean Inception Facilitator", date: new Date("08/01/2018"), duracao:480, showCV: true, showResume: false, company: "Caroli.org"},
    {title:"Introdução à Business Intelligence e Data Warehouse", date: new Date("02/14/2018"), duracao:300, showCV: false, showResume: false, company: "BI do Brasil"},
    {title:"Docker: Ferramenta essencial para Desenvolvedores", date: new Date("05/02/2019"), duracao:330, showCV: true, showResume: false, company: "Udemy.com"}
  ]
