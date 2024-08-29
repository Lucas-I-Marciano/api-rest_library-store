import incorrectRequisition from "../errors/incorrectRequisition.js";

async function pagination(req, res, next) {
  try {
    let { limit = 5, page = 1, toOrder = "_id:1" } = req.query;

    let [fieldOrder, order] = toOrder.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);

    const result = req.result;

    if (limit > 0 && page > 0) {
      // static = Consigo chamar esse método sem usar o new LivroController()
      const paginatedResult = await result
        .find({})
        .sort({ [fieldOrder]: order })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).json(paginatedResult);
    }
  } catch (error) {
    next(new incorrectRequisition());
  }
}

export default pagination;
