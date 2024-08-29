import { author, book } from "../models/index.js"; // Before global validation, this was the correct
// import { author } from "../models/index.js";
import NotFounded from "../errors/notFouded.js";

class BookController {
  static async listBooks(req, res, next) {
    try {
      const findBook = book.find();

      req.result = findBook; // To get on next middleware (pagination.js)
      next();
    } catch (erro) {
      console.log("To no erro do Book controller");
      next(erro);
    }
  }

  static async listBooksId(req, res, next) {
    try {
      const { id } = req.params;
      const foundBook = await book
        .findById(id, {}, { autopopulate: false })
        .populate("author");
      if (!foundBook) {
        next(new NotFounded("Book not found"));
      } else {
        res.status(200).json(foundBook);
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async changeBookId(req, res, next) {
    try {
      const { id } = req.params;
      const foundBook = await book.findByIdAndUpdate(id, req.body);
      if (!foundBook) {
        next(new NotFounded("Book not found"));
      } else {
        res.status(200).json({
          message: "Book successfully updated",
          livroNovo: await book.findById(id),
        });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async createBook(req, res, next) {
    const newBook = req.body;
    try {
      const findedAuthor = await author.findById(newBook["author"]);
      let completeBook;
      if (!findedAuthor) {
        next(new NotFounded("Author ID not found"));
      } else {
        completeBook = {
          ...newBook,
          author: { ...findedAuthor["_doc"] },
        };
        const createdBook = await book.create(completeBook);
        res.status(201).json({
          message: "Successfully created",
          book: newBook,
        });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const { id } = req.params;
      const foundBook = await book.findByIdAndDelete(id);
      if (!foundBook) {
        next(new NotFounded("Book ID not found"));
      } else {
        res.status(200).json({
          message: "Book successfully deleted",
        });
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async listBookByFilter(req, res, next) {
    try {
      const finder = await processQuery(req.query);
      if (finder === null) {
        res.status(200).send([]);
      } else {
        const booksByPublisher = book.find(finder);

        if (booksByPublisher.length === 0) {
          next(new NotFounded("Provided information not found"));
        } else {
          req.result = booksByPublisher;
          next();
        }
      }
    } catch (erro) {
      next(erro);
    }
  }
}

async function processQuery(queryParametrers) {
  const { publisher, title, minPages, maxPages, authorName } = queryParametrers;

  const regex = new RegExp(title, "i");

  let finder = {};
  if (publisher) finder["publisher"] = publisher;
  if (title) finder["title"] = regex;

  if (minPages || maxPages) finder["pages"] = {};
  if (minPages) finder["pages"]["$gte"] = minPages;
  if (maxPages) finder["pages"]["$lte"] = maxPages;

  if (authorName) {
    const specificAuthor = await author.findOne({ name: authorName });
    if (specificAuthor !== null) {
      finder["author"] = specificAuthor["_id"];
    } else {
      finder = null;
    }
  }

  return finder;
}

export default BookController;
