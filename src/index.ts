import "#core/load-env.js";
import {
  logErrorRequestMiddleware,
  logRequestMiddleware,
} from "#common/middlewares/logger.middlewares.js";
import { connectToDBServer, createRestApiServer } from "#core/servers/index.js";
import { envConstants } from "#core/constants/index.js";
import { housesApi } from "#pods/house/index.js";
import { securityApi, authenticationMiddleware } from "#pods/security/index.js";

const restApiServer = createRestApiServer();

restApiServer.use(logRequestMiddleware);

restApiServer.use("/api/security", securityApi);
restApiServer.use("/api/houses", authenticationMiddleware, housesApi);

restApiServer.use(logErrorRequestMiddleware);

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log("Connected to DB");
  } else {
    console.log("Running API mock");
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
