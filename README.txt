# Desafio Técnico - Desenvolvedor Web Júnior

## Descrição

Aplicação simples para cadastro, listagem e atualização de status de projetos, construída com React (TypeScript) no frontend e NestJS no backend.  
O backend utiliza armazenamento em memória (array local) para persistência temporária dos dados.

## Tecnologias

- Frontend: ReactJS, TypeScript, Tailwind CSS, Axios  
- Backend: NestJS, TypeScript  
- Banco de dados: armazenamento em memória (array local)

## Funcionalidades

- Criar projeto com nome, descrição, responsável (herói) e status inicial `pendente`.  
- Listar projetos cadastrados.  
- Atualizar status do projeto (pendente → em andamento → concluído).  
- Validação básica no frontend para campos obrigatórios.

## Rodando localmente

- Backend

cd backend
npm install
npm run start:dev
API disponível em http://localhost:3000

- Frontend

cd frontend
npm install
npm run dev
Aplicação disponível em http://localhost:5173
