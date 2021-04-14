window.onload = function() {
      putTextInLabels("EN");
}

function putTextInLabels(lang){
    let apresentation, education, experience_one_about, experience_one_info, experience_two_about, experience_two_info, qualifications_title, show_all;
    if(lang === "PT"){
      apresentation = "Trabalho profissionalmente com programação de software desde 2016. Na maior parte do meu dia trabalho principalmente com backend Java, com o framework Spring. Já tive contato com outros frameworks, tais como PrimeFaces, JPA e JSF. Em meu trabalho utilizo na maior parte das vezes MongoDB para banco de dados, mas eventualmente utilizo Oracle. Busco aprimorar meus conhecimentos em programação e em desenvolvimento de software, aplicando minhas habilidades nos projetos e necessidades da empresa.";
      education = "<li>Sistema de informação – PUCRS (concluído 2020)</li> <li>Bacharelado em Educação Física e Ciências do Desporto - PUCRS (concluído 2015).</li>"
      experience_one_info = "<h2>DBC Company</h2> <p>Fev. 2018 - Atual</p> <p>Desenvolvedor</p>";
      experience_one_about = experience_one_about_PT;
      experience_two_info = "<h2>Pontifícia Universidade Católica do Rio Grande do Sul</h2> <p>Jun. 2016 - Fev. 2018</p> <p>Desenvolvedor</p>";
      experience_two_about = experience_two_about_PT; 
      qualifications_title = "<h1>QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS</h1>";
      show_all = "Mostrar todos";
    } else {
      apresentation = "I have been working professionally with software programming since 2016. Most of my day I work mainly with Java backend, with the Spring framework. I have had contact with other frameworks, such as PrimeFaces, JPA and JSF. In my work I mostly use MongoDB for databases, but eventually I use Oracle. I seek to improve my knowledge in programming and software development, applying my skills to the company's projects and needs.";
      education = "<li>Information Systems – PUCRS (finished 2020)</li> <li>Physical Education - PUCRS (finished 2015).</li>"
      experience_one_info = "<h2>DBC Company</h2> <p>Feb 2018 - Today</p> <p>Software Developer</p>";
      experience_one_about = experience_one_about_EN
      experience_two_info = "<h2>Pontifical Catholic University of Rio Grande do Sul (PUCRS)</h2> <p>Jun 2016 - Feb 2018</p> <p>Software Developer</p>";
      experience_two_about = experience_two_about_EN
      qualifications_title = "<h1>QUALIFICATIONS AND PROFESSIONAL ACTIVITIES</h1><h3>Mouse over to read the title in English.</h3>"
      show_all = "Show all";
    }
    document.getElementById("apresentation").innerHTML = apresentation;
    document.getElementById("education").innerHTML = education;
    document.getElementById("experience_one_about").innerHTML = experience_one_about;
    document.getElementById("experience_one_info").innerHTML = experience_one_info;
    document.getElementById("experience_two_about").innerHTML = experience_two_about;
    document.getElementById("experience_two_info").innerHTML = experience_two_info;
    document.getElementById("qualifications_title").innerHTML = qualifications_title;
    document.getElementById("show_all").innerHTML = show_all;
  }
  
  function changeTo(lang) {
    this.lang = lang;
    putTextInLabels(lang);
    document.getElementById("lang").textContent=lang;
  }
  
  var experience_one_about_EN = 
  "<b>Outsourcing Sicredi (banking sector):</b> " + 
    "<li> Development and maintenance of Java microservices, using Spring (MVC and Webflux). All communication async was performed using Kafka. Most microservices were built using MongoDB or PDB; </li>" +
    "<li> Create and execute test cases in JUnit for unit testing with the support of SonarLint and automated testing with jMeter; </li>" + 
    "<li> Team developer leader, participating directly in business decisions and leading other developers into projects; </li>" + 
    "<li> Promote technical knowledge meetings for developers; </li>" + 
    "<li> Use of agile methodologies. </li>" + 
    "<li> Use of JIRA for trouble tickets and Confluence for the knowledge base. </li>" +
    "<b> Outsourcing TNT Mercúrio (transport sector):</b> " + 
    "<li>  Development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, Spring Framework, and JSP) using Oracle as database, Weblogic as application servers and SVN as version control tool;</li>" +
    "<li>  Create and execute test cases in JUnit for unit testing;</li>" +
    "<li>  Participate in alignment demands and projects meetings;</li>" +
    "<li>  Introducing the use of agile methodologies and ceremonies. </li>" +
"<b>  Outsourcing Sicredi (banking sector):</b>"  +
    "<li>  For the backend, Java 8, Spring MVC and Hibernate were used. For the frontend, PrimeFaces with SCSS and Javascript were used to customize the interface; </li>" +
    "<li>  Create test cases in JUnit for unit testing;</li>" +
    "<li>  Participate in alignment demands and project meetings; </li>" +
    "<li>  Use of agile methodologies.</li>";  
  var experience_two_about_EN = 
  "<li>Analysis, development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, RichFaces, Spring Framework, Servlets and JSP) using Oracle as database, JBoss and Tomcat as application servers, and SVN as version control tool;</li>" +
  "<li>Analysis, development and maintenance of database routines with Oracle PL/SQL;</li>" +
  "<li>Create and execute test cases in JUnit for unit testing;</li>" +
  "<li>Develop automated reports and forms, using Jasper Reports.</li>";

  var experience_one_about_PT = 
  "<b>Outsourcing Sicredi (setor bancário):</b> " + 
    "<li> Desenvolver e manter microserviços. Java com Spring (tanto MVC quando Webflux) eram usados. Toda comunicação assíncrona era feita usando Kafka. Quase todos os microserviços usavam MongoDB ou PDB e, quando necessário usávasse Oracle para rotinas PL/SQL; </li><li> Criar casos de teste com JUnit, usando o suporte do SonarLint; </li>" + 
    "<li> Participar do alinhamento de demandas e reuniões de projeto; </li>" + 
    "<li> Uso de metodologias ágeis (Kanban e Scrum). </li>" + 
    "<li> Uso do JURA para controle de demandas e progresso e o Confluence como base de conhecimento;</li>" +
    "<b> Outsourcing TNT Mercúrio (setor de transporte):</b> " + 
    "<li>  Desenvolver e manter sistemas em Java (JPA [Hibernate], EJB, JSF, Spring Framework e JSP) usando Oracle como base de dados, Weblogic comoservidor de aplicação e SVN para versionamento;</li>" +
    "<li>  Criação de testes com JUnit;</li>" +
    "<li>  Participação de alinhamento de demandas e reuniões de projeto;</li>" +
    "<li>  Uso de metodologia ágil (SAFe e Kanban).</li>" +
"<b>  Outsourcing Sicredi (setor bancário):</b>"  +
    "<li>  Para o backend usou-se Java, Spring MVC e Hibernate. Para o frontend, PrimeFaces foi usado, além de SCSS e JavaScript para customização da interface. </li>" +
    "<li>  Uso de metodologias ágeis (Scrum e Kanban).</li>" +
"<b>Intern project:</b>" +
    "<li>  Desenvolvimento de projeto interno para manutenção e administração;</li>" +
    "<li>  Uso de PrimeFaces, Hibernate e Spring;</li>" +
    "<li>  Uso de metodologia ágil (Kanban).</li>";
  
  var experience_two_about_PT = 
  "<li>Analysis, development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, RichFaces, Spring Framework, Servlets and JSP) using Oracle as database, JBoss and Tomcat as application servers, and SVN as version control tool;</li>" +
  "<li>Analysis, development and maintenance of database routines with Oracle PL/SQL;</li>" +
  "<li>Create and execute test cases in JUnit for unit testing.</li>";