import express from "express";
import BookController from "../controllers/bookController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes
  .get("/books", BookController.listBooks, pagination)
  .get("/books/search", BookController.listBookByFilter, pagination)
  .get("/books/:id", BookController.listBooksId)
  .post("/books", BookController.createBook)
  .put("/books/:id", BookController.changeBookId)
  .delete("/books/:id", BookController.deleteBook);

export default routes;
