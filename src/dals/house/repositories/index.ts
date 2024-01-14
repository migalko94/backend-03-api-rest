import { mockRepository } from "./house.mock.repository.js";
import { dbRepository } from "./house.db.repository.js";
import { HouseRepository } from "./house.repository.js";
import { envConstants } from "#core/constants/index.js";

export const houseRepository: HouseRepository = envConstants.isApiMock
  ? mockRepository
  : dbRepository;
