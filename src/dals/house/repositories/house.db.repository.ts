import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";

export const dbRepository: HouseRepository = {
  getHouseList: async () => {
    throw new Error("Not implemented");
  },
  getHouseDetail: async (id: string) => {
    throw new Error("Not implemented");
  },
  insertReview: async (houseId: string, review: Review) => {
    throw new Error("Not implemented");
  },
};
