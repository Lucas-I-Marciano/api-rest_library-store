import NotFounded from "../errors/notFouded.js";

function handler404(req, res, next) {
  const error404 = new NotFounded();
  next(error404);
}
export default handler404;
