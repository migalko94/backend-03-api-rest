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
      const reviewId = reviews.length + 1;
      const date = new Date();
      const newReview: Review = {
        _id: reviewId.toString(),
        date: {
          $date: date,
        },
        reviewer_id: review.reviewer_id,
        listing_id: review.listing_id,
        reviewer_name: review.reviewer_name,
        comments: review.comments,
      };
      modifiedHouse = {
        ...modifiedHouse,
        reviews: [newReview, ...reviews],
      };
      db.houses = [modifiedHouse, ...db.houses];
      return newReview;
    }
  },
};
