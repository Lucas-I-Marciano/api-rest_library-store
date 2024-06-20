import mongoose from "mongoose";
import { authorSchema } from "./autor.js";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: authorSchema, // Dessa forma eu relaciono minhas duas collections
  },
  { versionKey: false }
);

// 666b7b662858516d0db09eca

const book = mongoose.model(
  "books", // Coleção do meu Banco
  bookSchema
);

export default book;
