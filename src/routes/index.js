import express from "express";
import livroRouters from "./livroRoutes.js";
import autorRouters from "./autorRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    return res.status(200).send("Node.js Course");
  });

  app.use(express.json(), livroRouters, autorRouters);
};

export default routes;
