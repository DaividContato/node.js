const express = require("express");
const uuid = require("uuid");
const port = 3000;
const app = express();
app.use(express.json());

/* GET - buscar informação do Back-end
   POST - Criar informação do Back-end
   PUT - PATCH - alterar/ atualizar informação do Back-end
   DELETE - Deletar informação do Back-end
   Middleware - interceptor - tem o poder de parar ou alterar dados da requisição 

   */

const users = [];

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  return response.json(users);
});

app.listen(port, () => {
  console.log(`👌 Server started on port ${port}👌`);
});
