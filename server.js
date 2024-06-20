// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

// const rotas = {
//   "/": "Curso de Node.js",
//   "/livros": "Entrei na rota Livros",
//   "/autores": "Entrei na rota Autores",
// };

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write(rotas[req.url]);
//   res.end();
// });

app.listen(PORT, () => {
  console.log("Server listening");
});
