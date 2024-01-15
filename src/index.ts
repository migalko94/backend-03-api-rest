import "#core/load-env.js";
import {
  logErrorRequestMiddleware,
  logRequestMiddleware,
} from "#common/middlewares/logger.middlewares.js";
import { createRestApiServer } from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";
import { housesApi } from "#pods/house/index.js";

const restApiServer = createRestApiServer();

restApiServer.use(logRequestMiddleware);

restApiServer.use("/api/houses", housesApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, () => {
  console.log(`Server ready at port ${envConstants.PORT}`);
});
