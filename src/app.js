import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectDatabase();

conexao.on("error", (erro) => {
  console.error("Connection error\n", erro);
});

conexao.once("open", () => {
  console.log("Database connection: Success!");
});

const app = express();
routes(app);

export default app;
// function alteraLivro(id, titulo) {
//   const myBook = buscaLivro(id);
//   console.log(myBook);
//   myBook["titulo"] = titulo;
// }

// Vou separar as responsabilidades. Estou usando a arquitetura de API REST denominada MVC (Model-View-Controller)
// Controller: Funções
// Routes: Rotas que vou acessar
// Abaixo o método antigo
// app.get("/", (req, res) => {
//   res.status(200).send("Curso de Node.js");
// });
