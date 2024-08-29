import mongoose from "mongoose";
import BaseError from "../errors/baseError.js";
import incorrectRequisition from "../errors/incorrectRequisition.js";
import incorrectValidation from "../errors/incorrectValidation.js";
import NotFounded from "../errors/notFouded.js";

function errorHandler(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    // Specific error from mongoose to convert values
    new incorrectRequisition().sendResponse(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new incorrectValidation(erro).sendResponse(res);
  } else if (erro instanceof BaseError) {
    erro.sendResponse(res); // As NotFounded is a instance of BaseError
  } else {
    console.log(erro);
    new BaseError().sendResponse(res);
  }
}

export default errorHandler;
