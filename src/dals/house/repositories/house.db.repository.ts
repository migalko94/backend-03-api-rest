import { db } from "#core/servers/index.js";
import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { ObjectId } from "mongodb";
import { getHouseContext } from "../house.context.js";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    return await getHouseContext().find().skip(skip).limit(limit).toArray();
  },
  getHouseDetail: async (id: string) => {
    return await getHouseContext().findOne({
      _id: new ObjectId(id),
    });
  },
  insertReview: async (houseId: string, review: Review) => {
    await getHouseContext().updateOne(
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
