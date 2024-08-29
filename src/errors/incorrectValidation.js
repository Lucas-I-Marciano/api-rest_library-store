import BaseError from "./baseError.js";

class incorrectValidation extends BaseError {
  constructor(erro) {
    const errorMessage = Object.values(erro.errors);

    super(
      {
        title: "Following errors was encoutered",
        errors: errorMessage.map((erro) => erro.message).join(";"),
      },
      400
    );
  }
}

export default incorrectValidation;
