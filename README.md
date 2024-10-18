# API de Corridas com Sequelize

Esta é uma API para gerenciar corridas utilizando o Sequelize como ORM e SQLite como banco de dados. A API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em registros de corridas.

## Funcionalidades

- Criar novas corridas
- Listar todas as corridas
- Buscar uma corrida por ID
- Atualizar informações de uma corrida existente
- Deletar uma corrida

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework web para construir aplicações web e APIs.
- **Sequelize**: ORM para Node.js que facilita a interação com bancos de dados SQL.
- **SQLite**: Banco de dados leve utilizado para armazenamento de dados.
- **Postman**: Para a realização de testes

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm instalados em seu sistema. Você pode baixá-los [aqui](https://nodejs.org/).

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL-do-repositório>
   cd <nome-do-repositório>

2. **Instale as dependências**
    npm install

3. **Inicie o servidor:"
    npm run dev
- O servidor estará disponível em http://localhost:3000.

## Uso dos Endpoints

- POST /corrida: Cria uma nova corrida.
Corpo da requisição: json
    ```bash
    {
        "nomeDoEvento": "Nome do Evento",
        "dataDoEvento": "2024-10-20",
        "pilotos": ["Piloto 1", "Piloto 2"]
    }

- GET /todasAsCorridas
Retorna todas as corridas.

- GET /corrida/:id
Retorna uma corrida específica pelo ID. Neste caso, é necessário substituir o ":id" pelo número do id da corrida.

- PUT /corrida/
Atualiza uma corrida existente.
Corpo da requisição: json
    ```bash
    {
       "nomeDoEvento": "Novo Nome do Evento",
       "dataDoEvento": "2024-10-21",
       "pilotos": ["Piloto 3", "Piloto 4"]
    }

- DELETE /corrida/:id
Deleta uma corrida pelo ID. Neste caso, é necessário substituir o ":id" pelo número do id da corrida.
