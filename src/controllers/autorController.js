import { author, authorSchema } from "../models/autor.js";

class AuthorController {
  static async listAuthor(req, res) {
    try {
      const listaAutores = await author.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({ message: `Bad request! ${erro.message}` });
    }
  }

  static async listAuthorId(req, res) {
    try {
      const { id } = req.params;
      const autorEncontrado = await author.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `Bad request! ${erro.message}` });
    }
  }

  static async updateAuthorId(req, res) {
    try {
      const { id } = req.params;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Author successfully updated",
        autorNovo: await author.findById(id),
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Failed: Update author! ${erro.message}` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const novoAutor = await author.create(req.body);
      res.status(201).json({
        message: "Successfully created",
        author: novoAutor,
      });
    } catch (erro) {
      res.status(500).json({ message: `Failed: Creation! ${erro.message}` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const { id } = req.params;
      await author.findByIdAndDelete(id);
      res.status(200).json({
        message: "Author successfully deleted",
      });
    } catch (erro) {
      res.status(500).json({ message: `Failed: deletion! ${erro.message}` });
    }
  }
}

export default AuthorController;
