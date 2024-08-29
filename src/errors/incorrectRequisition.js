import BaseError from "./baseError.js";

class incorrectRequisition extends BaseError {
  constructor() {
    super("Provided information is wrong", 400);
  }
}

export default incorrectRequisition;
