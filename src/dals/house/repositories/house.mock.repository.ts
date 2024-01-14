import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

export const mockRepository: HouseRepository = {
  getHouseList: async (): Promise<House[]> => db.houses,
  getHouseDetail: async (id: string): Promise<House> =>
    db.houses.find((h) => h.id === id),
  insertReview: async (houseId: string, review: Review) => {
    let modifiedHouse = db.houses.find((h) => h.id === houseId);
    if (modifiedHouse) {
      let { reviews } = modifiedHouse;
      const reviewId = reviews.length + 1;
      const date = new Date();
      const newReview = {
        ...review,
        id: reviewId,
        date,
      };
      modifiedHouse = {
        ...modifiedHouse,
        reviews: [...reviews, newReview],
      };
      db.houses = [modifiedHouse, ...db.houses];
      return newReview;
    }
  },
};
