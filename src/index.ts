import "#core/load-env.js";
import express from "express";
import { createRestApiServer } from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";
import { housesApi } from "#pods/house/index.js";

const restApiServer = createRestApiServer();

restApiServer.use(async (req, res, next) => {
  console.log(req.url);
  next();
});

restApiServer.use("/api/houses", housesApi);

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
