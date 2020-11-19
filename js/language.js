var lang = "EN";

window.onload = function() {
      putTextInLabels();
}

function putTextInLabels(){
    let apresentation, education, experience_one_about, experience_one_info, experience_two_about, experience_two_info;
    if(lang === "PT"){
      apresentation = "Trabalho profissionalmente com programação de software desde 2016. Na maior parte do meu dia trabalho principalmente com backend Java, com o framework Spring. Já tive contato com outros frameworks, tais como PrimeFaces, JPA e JSF. Em meu trabalho utilizo na maior parte das vezes MongoDB para banco de dados, mas eventualmente utilizo Oracle. Busco aprimorar meus conhecimentos em programação e em desenvolvimento de software, aplicando minhas habilidades nos projetos e necessidades da empresa.";
      education = "<li>Sistema de informação – PUCRS (concluído 2020)</li> <li>Bacharelado em Educação Física e Ciências do Desporto - PUCRS (concluído 2015).</li>"
      experience_one_info = "<h2>DBC Company</h2> <p>Fev. 2018 - Atual</p> <p>Desenvolvedor</p>";
      experience_one_about = "<b>Principais atividades: </b>Realizar a manutenção e construção de sistemas ao realizar o trabalho alocado no cliente como outsourcing . Durante os projetos em que participei atuei como programador back-end , utilizando, na maior parte do tempo, a linguagem Java, atuando também como desenvolvedor Dotnet. Utilizei Spring, Hibernate e Apache Camel na maior parte do trabalho. Também atuei como desenvolvedor front-end , utilizando Bootstrap, JavaScript, JQuery, Primefaces e eventualmente AngularJS e JavaFX.";
      experience_two_info = "<h2>Pontifícia Universidade Católica do Rio Grande do Sul</h2> <p>Jun. 2016 - Fev. 2018</p> <p>Desenvolvedor</p>";
      experience_two_about = "<b>Principais atividades: </b>Realizar manutenção e evolução dos sistemas já existentes, como também a elaboração e criação de novas soluções. Utilizava principalmente Java como linguagem de programação back-end, com o apoio de frameworks, tais como JSP, Servlet, Spring MVC, Hibernate. Realizava o controle de versionamento utilizando SVN e Oracle como o banco de dados das aplicações. Também, quando necessário, realizava  geração de relatórios e a manutenção do banco de dados.";
 
    } else {
      apresentation = "I have been working professionally with software programming since 2016. Most of my day I work mainly with Java backend, with the Spring framework. I have had contact with other frameworks, such as PrimeFaces, JPA and JSF. In my work I mostly use MongoDB for databases, but eventually I use Oracle. I seek to improve my knowledge in programming and software development, applying my skills to the company's projects and needs.";
      education = "<li>Information Systems – PUCRS (finished 2020)</li> <li>Physical Education - PUCRS (finished 2015).</li>"
      experience_one_info = "<h2>DBC Company</h2> <p>Feb 2018 - Today</p> <p>Software Developer</p>";
      experience_one_about = experience_one_about_EN
      experience_two_info = "<h2>Pontifical Catholic University of Rio Grande do Sul (PUCRS)</h2> <p>Jun 2016 - Feb 2018</p> <p>Software Developer</p>";
      experience_two_about = experience_two_about_EN
    }
    document.getElementById("apresentation").innerHTML = apresentation;
    document.getElementById("education").innerHTML = education;
    document.getElementById("experience_one_about").innerHTML = experience_one_about;
    document.getElementById("experience_one_info").innerHTML = experience_one_info;
    document.getElementById("experience_two_about").innerHTML = experience_two_about;
    document.getElementById("experience_two_info").innerHTML = experience_two_info;
  }
  
  function changeEN(){
    lang = "EN";
    putTextInLabels();
  }
  
  function changePT(){
    lang = "PT";
    putTextInLabels();
  }

  var experience_one_about_EN = 
  "<b>Outsourcing Sicredi (banking sector):</b> " + 
    "<li> Development and maintenance of Java microservices. Java with Spring (MVC and Webflux) were used. All communication async was made using Kafka. Almost all microservices were built using MongoDB or PDB and, when needed the communication with Oracle and its routines were called; </li><li> Create and execute test cases in JUnit for unit testing with the support of SonarLint; </li>" + 
    "<li> Participate in alignment demands and projects meetings; </li>" + 
    "<li> Use of agile methodologies. </li>" + 
    "<li> Use JIRA for trouble tickets and Confluence for our knowledge base;</li>" +
    "<b> Outsourcing TNT Mercúrio (transport sector):</b> " + 
    "<li>  Development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, Spring Framework and JSP) using Oracle as database, Weblogic as application servers and SVN as version control tool;</li>" +
    "<li>  Create and execute test cases in JUnit for unit testing;</li>" +
    "<li>  Participate in alignment demands and projects meetings;</li>" +
    "<li>  Use of agile methodologies.</li>" +
"<b>  Outsourcing Sicredi (banking sector):</b>"  +
    "<li>  For the backend, Java 8, Spring MVC and Hibernate were used.. For the frontend, PrimeFaces was used, and SCSS and Javascript to customize the interface. </li>" +
    "<li>  Create and execute test cases in JUnit for unit testing;</li>" +
    "<li>  Participate in alignment demands and project meetings; </li>" +
    "<li>  Use of agile methodologies.</li>" +
"<b>Intern project:</b>" +
    "<li>  Development of an intern program to management and administration support;</li>" +
    "<li>  Use of PrimeFaces, Hibernate and Spring;</li>" +
    "<li>  Use of agile methodologies.</li>";
  
  var experience_two_about_EN = 
  "<li>Analysis, development and maintenance of Java systems (JPA [Hibernate], EJB, JSF, RichFaces, Spring Framework, Servlets and JSP) using Oracle as database, JBoss and Tomcat as application servers, and SVN as version control tool;</li>" +
  "<li>Analysis, development and maintenance of database routines with Oracle PL/SQL;</li>" +
  "<li>Create and execute test cases in JUnit for unit testing.</li>";
