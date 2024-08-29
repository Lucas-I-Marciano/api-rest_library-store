import mongoose from "mongoose";
// import { author, authorSchema } from "../models/autor.js"; // Before global validation, this was the correct
import { author } from "../models/index.js";
import NotFounded from "../errors/notFouded.js";

class AuthorController {
  static async listAuthor(req, res, next) {
    try {
      const listaAutores = author.find();
      req.result = listaAutores;
      next();
      // res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({ message: `Bad request! ${erro.message}` });
    }
  }

  static async listAuthorId(req, res, next) {
    try {
      const { id } = req.params;
      const autorEncontrado = await author.findById(id);
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NotFounded("Author ID not founded"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async updateAuthorId(req, res, next) {
    try {
      const { id } = req.params;
      const foundedAuthor = await author.findByIdAndUpdate(id, req.body);
      if (!foundedAuthor) {
        next(new NotFounded("Author ID not founded"));
      } else {
        res.status(200).json({
          message: "Author successfully updated",
          autorNovo: await author.findById(id),
        });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async createAuthor(req, res, next) {
    try {
      const novoAutor = await author.create(req.body);
      res.status(201).json({
        message: "Successfully created",
        author: novoAutor,
      });
    } catch (erro) {
      next(erro);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const { id } = req.params;
      const foundedAuthor = await author.findByIdAndDelete(id);
      if (!foundedAuthor) {
        next(new NotFounded("Author ID not founded"));
      } else {
        res.status(200).json({
          message: "Author successfully deleted",
        });
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default AuthorController;
