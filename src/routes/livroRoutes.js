import express from "express";
import BookController from "../controllers/livroController.js";

const routes = express.Router();

routes
  .get("/books", BookController.listBooks)
  .get("/books/search", BookController.listBookByPublisher)
  .get("/books/:id", BookController.listBooksId)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.changeBookId)
  .delete("/books/:id", BookController.deleteBook);

export default routes;
