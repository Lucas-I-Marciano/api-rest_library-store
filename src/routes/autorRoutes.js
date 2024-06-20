import express from "express";
import AuthorController from "../controllers/autorController.js";

const routes = express.Router();

routes
  .get("/author", AuthorController.listAuthor)
  .get("/author/:id", AuthorController.listAuthorId)
  .post("/author", AuthorController.createAuthor)
  .put("/author/:id", AuthorController.updateAuthorId)
  .delete("/author/:id", AuthorController.deleteAuthor);

export default routes;
