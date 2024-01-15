import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

export const mockRepository: HouseRepository = {
  getHouseList: async (): Promise<House[]> => db.houses,
  getHouseDetail: async (id: string): Promise<House> =>
    db.houses.find((h) => h._id === id),

  insertReview: async (houseId: string, review) => {
    let modifiedHouse = db.houses.find((h) => h._id === houseId);
    if (modifiedHouse) {
      let { reviews } = modifiedHouse;
      const _id = (reviews.length + 1).toString();
      const date = new Date();
      const newReview: Review = {
        _id,
        date,
        comments: review.comments,
        reviewer_name: review.reviewer_name,
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
