import mongoose from "mongoose";
import { authorSchema } from "./autor.js";
import autopopulate from "mongoose-autopopulate";

const bookSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "Title book is required"] },
    publisher: {
      type: String,
      required: [true, "Publisher name is required"],
    },
    price: { type: Number },
    pages: {
      type: Number,
      // Two ways to validate information
      // min: [
      //   10,
      //   "{VALUE} pages provided not allowed. Pages must be between 10 and 5000 pages",
      // ],
      // max: [
      //   5000,
      //   "{VALUE} pages provided not allowed. Pages must be between 10 and 5000 pages",
      // ],
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 5000;
        },
        message:
          "Provided pages: {VALUE} not allowed. Pages must be between 10 and 5000 pages",
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: [true, "Author name is required"],
      autopopulate: { select: "name" },
    }, // Dessa forma eu relaciono minhas duas collections
  },
  { versionKey: false }
);

// 666b7b662858516d0db09eca

bookSchema.plugin(autopopulate);
const book = mongoose.model(
  "books", // Coleção do meu Banco
  bookSchema
);

export default book;
