var lang = "EN";

window.onload = function() {
      putTextInLabels();
}

function putTextInLabels(){
    let apresentation, education;
    if(lang === "PT"){
      apresentation = "Trabalho profissionalmente com programação de software desde 2016. Na maior parte do meu dia trabalho principalmente com backend Java, com o framework Spring. Já tive contato com outros frameworks, tais como PrimeFaces, JPA e JSF. Em meu trabalho utilizo na maior parte das vezes MongoDB para banco de dados, mas eventualmente utilizo Oracle. Busco aprimorar meus conhecimentos em programação e em desenvolvimento de software, aplicando minhas habilidades nos projetos e necessidades da empresa.";
      education = "<li>Sistema de informação – PUCRS (concluído 2020)</li> <li>Bacharelado em Educação Física e Ciências do Desporto - PUCRS (concluído 2015).</li>"
    
    } else {
      apresentation = "I have been working professionally with software programming since 2016. Most of my day I work mainly with Java backend, with the Spring framework. I have had contact with other frameworks, such as PrimeFaces, JPA and JSF. In my work I mostly use MongoDB for databases, but eventually I use Oracle. I seek to improve my knowledge in programming and software development, applying my skills to the company's projects and needs.";
      education = "<li>Information Systems – PUCRS (finished 2020)</li> <li>Physical Education - PUCRS (finished 2015).</li>"
    
    }
    document.getElementById("apresentation").innerHTML = apresentation;
    document.getElementById("education").innerHTML = education;
  }
  
  function changeEN(){
    lang = "EN";
    putTextInLabels();
  }
  
  function changePT(){
    lang = "PT";
    putTextInLabels();
  }