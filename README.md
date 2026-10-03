# todo-list

Todo List

Lista de tarefas com front-end em HTML, CSS e JavaScript puro e back-end em Node.js com Express. As tarefas ficam salvas em um arquivo JSON.

Projeto feito durante o curso Hackers do Bem.

Funcionalidades
Adicionar tarefas
Listar tarefas ao abrir a página
Editar uma tarefa em um modal
Excluir tarefas
Marcar tarefas como concluídas (checkbox)
Contador de tarefas
Tecnologias
HTML, CSS e JavaScript (módulos ES, fetch)
Node.js
Express 5
CORS
Estrutura do projeto
todo-list/
├── back/
│   ├── db.json        # "banco de dados" (array de tarefas)
│   └── index.js       # servidor Express (API)
├── index.html         # página e lógica do front-end
├── style.css          # estilos
├── package.json
└── README.md
Como rodar

Você precisa ter o Node.js instalado (versão 20 ou mais nova).

Clone o repositório:
bash
   git clone https://github.com/YanMalaquias/todo-list.git
   cd todo-list
Instale as dependências:
bash
   npm install
Inicie o servidor:
bash
   npm run start

Deve aparecer Example app listening on port 3000.

Abra o index.html no navegador usando a extensão Live Server do VS Code (clique com o botão direito no arquivo e escolha "Open with Live Server").

O servidor precisa continuar rodando enquanto você usa a página.

API

O servidor roda em http://localhost:3000.

Método	Rota	O que faz
GET	/	Lista todas as tarefas
GET	/:id	Busca uma tarefa pelo id
POST	/	Cria uma tarefa ({ "retorno": "texto" })
PUT	/:id	Edita uma tarefa ({ "retorno": "texto" })
DELETE	/:id	Exclui uma tarefa

Exemplo de tarefa salva no back/db.json:

json
{
  "retorno": "estudar JavaScript",
  "id": "43ed8365-c37f-4d6b-8b26-17887e8b2ff8"
}
Autor

Feito por YanMalaquias.