Desafio Técnico - Desenvolvedor(a) Web Júnior

Este projeto foi desenvolvido por Henrique Carradore Joaquim como parte de um desafio técnico para a vaga de Desenvolvedor(a) Web Júnior. O objetivo da aplicação é realizar o cadastro e a listagem de projetos, onde cada projeto possui nome, descrição, responsável (nome do herói) e status (pendente, em andamento ou concluído).

A aplicação é dividida em duas partes: o backend, desenvolvido com NestJS e armazenamento em memória (sem uso de banco de dados externo), e o frontend, feito com React e TypeScript, utilizando Vite para build rápido e Tailwind CSS para estilização e responsividade. A comunicação entre o frontend e o backend é feita via requisições HTTP com Axios.

Funcionalidades implementadas:

Cadastro de novos projetos com campos obrigatórios

Listagem de projetos em tela

Atualização do status de cada projeto, seguindo o fluxo pendente → em andamento → concluído

As tecnologias utilizadas no backend incluem NestJS com DTOs e estrutura modular. No frontend, utilizou-se React com componentes reutilizáveis, além de Tailwind CSS para estilização e Axios para chamadas à API. O layout é responsivo e funcional, mesmo com foco na simplicidade e clareza.

Para rodar o projeto localmente, é necessário ter o Node.js e o Git instalados. Primeiro, clone o repositório com o comando git clone https://github.com/HenriqueCarradoreJoaquim/desafio-tecnico-web.git. Em seguida, entre na pasta backend, rode npm install e depois npm run start:dev para iniciar a API. Em uma nova aba do terminal, acesse a pasta frontend, execute npm install e depois npm run dev para iniciar a interface web. O backend roda em http://localhost:3000 e o frontend em http://localhost:5173.

A persistência de dados é feita em memória, o que significa que ao reiniciar o backend os dados serão perdidos. No entanto, para efeito de teste, isso simplifica a configuração e execução local.

O personagem escolhido para representar este projeto é o Homem-Aranha, que simboliza responsabilidade, agilidade e dedicação — qualidades alinhadas com os valores esperados para a vaga.

O projeto está disponível no GitHub no link: https://github.com/HenriqueCarradoreJoaquim/desafio-tecnico-web

Autor: Henrique Carradore Joaquim
Perfil: https://github.com/HenriqueCarradoreJoaquim
