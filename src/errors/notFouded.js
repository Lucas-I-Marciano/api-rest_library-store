import BaseError from "./baseError.js";

class NotFounded extends BaseError {
  constructor(message = "Page not founded") {
    super(message, 404);
  }
}

export default NotFounded;
