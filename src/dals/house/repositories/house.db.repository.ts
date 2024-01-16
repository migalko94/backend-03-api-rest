import { db } from "#core/servers/index.js";
import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { ObjectId } from "mongodb";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    const houses = await db
      .collection<House>("listingsAndReviews")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
    return houses;
  },
  getHouseDetail: async (id: string) => {
    throw new Error("Not implemented");
  },
  insertReview: async (houseId: string, review: Review) => {
    await db.collection<House>("listingAndReviews").updateOne(
      { _id: new ObjectId(houseId) },
      {
        $set: {
          $push: { reviews: review },
        },
      }
    );
    return review;
  },
};
