import express from "express";
import AuthorController from "../controllers/authorController.js";
import pagination from "../middlewares/pagination.js";

const routes = express.Router();

routes
  .get("/author", AuthorController.listAuthor, pagination)
  .get("/author/:id", AuthorController.listAuthorId)
  .post("/author", AuthorController.createAuthor)
  .put("/author/:id", AuthorController.updateAuthorId)
  .delete("/author/:id", AuthorController.deleteAuthor);

export default routes;
