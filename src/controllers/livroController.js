import book from "../models/books.js";
import { author } from "../models/autor.js";

class BookController {
  static async listBooks(req, res) {
    try {
      // static = Consigo chamar esse método sem usar o new LivroController()
      const bookList = await book.find({}); // O Mongoose vai procurar tudo, já que passei um objeto vazio
      res.status(200).json(bookList); // Passo json para o minha resposta seja comunicada do meio certo padrão json - padrão API REST
    } catch (erro) {
      res.status(500).json({ message: `Bad book request! ${erro.message}` });
    }
  }

  static async listBooksId(req, res) {
    try {
      const { id } = req.params;
      const findedBook = await book.findById(id);
      res.status(200).json(findedBook);
    } catch (erro) {
      res.status(500).json({ message: `Bad book request!: ${erro.message}` });
    }
  }

  static async changeBookId(req, res) {
    try {
      const { id } = req.params;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "Book successfully updated",
        livroNovo: await book.findById(id),
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Bad book updating request! ${erro.message}` });
    }
  }

  static async createBook(req, res) {
    const newBook = req.body;
    try {
      const findedAuthor = await author.findById(newBook["autor"]);
      const completeBook = {
        ...newBook,
        author: { ...findedAuthor["_doc"] },
      };
      const createdBook = await book.create(completeBook);
      res.status(201).json({
        message: "Successfully created",
        book: newBook,
      });
    } catch (erro) {
      res.status(500).json({ message: `Creation failed! ${erro.message}` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const { id } = req.params;
      await book.findByIdAndDelete(id);
      res.status(200).json({
        message: "Book successfully deleted",
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Book deletion failed! ${erro.message}` });
    }
  }

  static async listBookByPublisher(req, res) {
    const publisher = req.query["publisher"];
    try {
      const booksByPublisher = await book.find({ publisher: publisher });
      res.status(200).json(booksByPublisher);
    } catch (erro) {
      res.status(500).json({ message: `Bad request! ${erro.message}` });
    }
  }
}

export default BookController;
