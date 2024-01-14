import "#/core/load-env.js";
import { createRestApiServer } from "#core/servers/index.js";
import { housesApi } from "./houses.api.js";
import { envConstants } from "./core/constants/index.js";

const restApiServer = createRestApiServer();
restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.get("/", async (req, res) => {
  res.send("My airbnb portal");
});

restApiServer.use("/api/houses", housesApi);

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
