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
  doc.text("06/16 - Atual –Gerência da Tecnologia da Informação e Telecomunicação - PUCRS", 25, h+=5);
  doc.text("Cargo: Programador", 25, h+=5);
  doc.setFontSize(10);
  doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, elaboração e criação" ,25, h+=5);
  doc.text("de novos. Utilizando, principalmente Java como linguagem de programação back-end e utilizando os ", 25, h+=5);
  doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão utilizamos o banco de dados Oracle.", 25, h+=5);

  doc.setFontSize(13);
  doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10);
  doc.rect(23, h, 165, 0.1, 'F');
  doc.setFontSize(10);
  doc.text("- HTML5 e CSS3 I: Suas primeiras páginas da Web (Alura.com, 2015)", 25, h+=5);
  doc.text("- HTML5 e CSS3 II: Turbinando as suas páginas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java I: Primeiros passos (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java II: Orientação a Objetos (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java III: Principais APIs e bibliotecas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java 8: Tire proveito dos novos recursos da linguagem (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java: Dominando as Collections (Alura.com, 2016)", 25, h+=5);
  doc.text("- Java e JDBC: Trabalhando com um banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- Eclipse: Produtividade Extrema na IDE com Java (Alura.com, 2015)", 25, h+=5);
  doc.text("- Design Patterns Java I: Boas práticas de programação (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQL Completo (Softblue, 2015)", 25, h+=5);
  doc.text("- MySQL I: Iniciando suas consultas (Alura.com, 2015)", 25, h+=5);
  doc.text("- MySQL II: Consultas poderosas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Oracle I: Aprenda SQL usando esse famoso banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- Oracle II: Consultas Complexas (Alura.com, 2016)", 25, h+=5);
  doc.text("- Lean Startup: Primeiros passos da sua startup enxuta (Alura.com, 2015)", 25, h+=5);
  doc.text("- Métodos Ágeis: Introdução (Alura.com, 2015)", 25, h+=5);
  doc.text("- Refatorando na prática (Alura.com, 2015)", 25, h+=5);
  doc.text("- Clojure: Introdução a programação funcional (Alura.com, 2015)", 25, h+=5);
  doc.text("- JavaScript : Programando na linguagem da web (Alura.com, 2015)", 25, h+=5);
  doc.text("- Redis I: Armazenando chaves e valores (Alura.com, 2015)", 25, h+=5);
  doc.text("- Redis II: Estruturas e recursos na sua base NoSQL (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQLServer I: desvendando o banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQLServer II: Consultas poderosas (Alura.com, 2015)", 25, h+=5);
  doc.text("- UML: Uma introdução à modelagem  (Alura.com, 2015)", 25, h+=5);
  doc.text("- Android I: Crie sua App fantástica com Android Studio (Alura.com, 2016)", 25, h+=5);
  doc.addPage();
  h = 30;
  doc.text("- Jogos com Android: Desenvolva seu próprio Flappy Bird (Alura.com, 2016)", 25, h+=5);
  doc.text("- Scrum: Agilidade em seu projeto (Alura.com, 2016)", 25, h+=5);
  doc.text("- Android I: Crie sua App fantástica no Eclipse (Alura.com, 2016)", 25, h+=5);
  doc.text("- Jogos com Android I: Desenvolvimento de jogos 2D (Alura.com, 2016)", 25, h+=5);
  doc.text("- Testes: TDD com Java (Alura.com, 2016)", 25, h+=5);
  doc.text("- Orientação a Objetos: Melhores técnicas com Java  (Alura.com, 2016)", 25, h+=5);
  doc.text("- Threads I : Programação paralela em Java  (Alura.com, 2016)", 25, h+=5);
  doc.text("- Desenvolvedor NodeJS e MongoDB. (Udemy, 2017)", 25, h+=5);
  doc.text("- Git Completo: Do Básico ao Avançado. (Udemy, 2017)", 25, h+=5);
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
  var resumo = doc.splitTextToSize("Desde 2016 com experiência profissional em desenvolvimento de software utilizando principalmente" +
                                   "tecnologias Java, Spring MVC, JPA, Hibernate, Oracle, HTML, JavaScript, sem esquecer de estudar " +
                                   "tecnologias que tem sido destaque no mercado de trabalho, como NodeJS, MongoDB, etc."+
                                   "Procurando o aperfeiçoamento de meus conhecimentos, visando otimizar meu trabalho com boas práticas em"+
                                   "programação, lembrando sempre que, nem só de código vive o programador, tento obter o máximo de "+
                                   "conhecimento possível em frameworks de métodos ágeis e Design Thinking, áreas de muito interesse pessoal."+
                                   "Busco trabalhar em equipe, ajudando da melhor maneira possível. Considero-me comunicativo, proativo e " +
                                   "adaptativo à novas experiências e rotinas, procurando o maior aprendizado destas novas práticas."
  , 170);
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
  doc.text("06/16 - Atual –Gerência da Tecnologia da Informação e Telecomunicação - PUCRS", 25, h+=5);
  doc.text("Cargo: Programador", 25, h+=5);
  doc.setFontSize(10);
  doc.text("Principais atividades: Realizar manutenção e evolução dos sistemas já existentes, elaboração e criação" ,25, h+=5);
  doc.text("de novos. Utilizando, principalmente Java como linguagem de programação back-end e utilizando os ", 25, h+=5);
  doc.text("frameworks JSP, Servlet, Spring MVC, Hibernate. Como padrão utilizamos o banco de dados Oracle.", 25, h+=5);

  doc.setFontSize(13);
  doc.text("QUALIFICAÇÕES E ATIVIDADES PROFISSIONAIS", 23, h+=10);
  doc.rect(23, h, 165, 0.1, 'F');
  doc.setFontSize(10);
  doc.text("- HTML5 e CSS3 I: Suas primeiras páginas da Web (Alura.com, 2015)", 25, h+=5);
  doc.text("- HTML5 e CSS3 II: Turbinando as suas páginas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java I: Primeiros passos (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java II: Orientação a Objetos (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java III: Principais APIs e bibliotecas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java 8: Tire proveito dos novos recursos da linguagem (Alura.com, 2015)", 25, h+=5);
  doc.text("- Java: Dominando as Collections (Alura.com, 2016)", 25, h+=5);
  doc.text("- Java e JDBC: Trabalhando com um banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- Eclipse: Produtividade Extrema na IDE com Java (Alura.com, 2015)", 25, h+=5);
  doc.text("- Design Patterns Java I: Boas práticas de programação (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQL Completo (Softblue, 2015)", 25, h+=5);
  doc.text("- MySQL I: Iniciando suas consultas (Alura.com, 2015)", 25, h+=5);
  doc.text("- MySQL II: Consultas poderosas (Alura.com, 2015)", 25, h+=5);
  doc.text("- Oracle I: Aprenda SQL usando esse famoso banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- Oracle II: Consultas Complexas (Alura.com, 2016)", 25, h+=5);
  doc.text("- Lean Startup: Primeiros passos da sua startup enxuta (Alura.com, 2015)", 25, h+=5);
  doc.text("- Métodos Ágeis: Introdução (Alura.com, 2015)", 25, h+=5);
  doc.text("- Refatorando na prática (Alura.com, 2015)", 25, h+=5);
  doc.addPage();
  h = 30;
  doc.text("- Clojure: Introdução a programação funcional (Alura.com, 2015)", 25, h+=5);
  doc.text("- JavaScript : Programando na linguagem da web (Alura.com, 2015)", 25, h+=5);
  doc.text("- Redis I: Armazenando chaves e valores (Alura.com, 2015)", 25, h+=5);
  doc.text("- Redis II: Estruturas e recursos na sua base NoSQL (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQLServer I: desvendando o banco de dados (Alura.com, 2015)", 25, h+=5);
  doc.text("- SQLServer II: Consultas poderosas (Alura.com, 2015)", 25, h+=5);
  doc.text("- UML: Uma introdução à modelagem  (Alura.com, 2015)", 25, h+=5);
  doc.text("- Android I: Crie sua App fantástica com Android Studio (Alura.com, 2016)", 25, h+=5);
  doc.text("- Jogos com Android: Desenvolva seu próprio Flappy Bird (Alura.com, 2016)", 25, h+=5);
  doc.text("- Scrum: Agilidade em seu projeto (Alura.com, 2016)", 25, h+=5);
  doc.text("- Android I: Crie sua App fantástica no Eclipse (Alura.com, 2016)", 25, h+=5);
  doc.text("- Jogos com Android I: Desenvolvimento de jogos 2D (Alura.com, 2016)", 25, h+=5);
  doc.text("- Testes: TDD com Java (Alura.com, 2016)", 25, h+=5);
  doc.text("- Orientação a Objetos: Melhores técnicas com Java  (Alura.com, 2016)", 25, h+=5);
  doc.text("- Threads I : Programação paralela em Java  (Alura.com, 2016)", 25, h+=5);
  doc.text("- Desenvolvedor NodeJS e MongoDB. (Udemy, 2017)", 25, h+=5);
  doc.text("- Git Completo: Do Básico ao Avançado. (Udemy, 2017)", 25, h+=5);

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  doc.text(today.toLocaleDateString(), 175, h+=5);
  doc.save('CV_DanielMariaDaSilva.pdf');
}
