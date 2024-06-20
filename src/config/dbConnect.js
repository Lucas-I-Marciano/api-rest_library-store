import mongoose from "mongoose";

export default async function conectDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}
