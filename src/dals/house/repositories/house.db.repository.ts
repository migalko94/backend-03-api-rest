import { HouseRepository } from "./house.repository.js";
import { Review } from "../house.model.js";
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
      _id: id,
    });
  },
  insertReview: async (houseId: string, review: Review) => {
    console.log(review);
    const newReview = {
      _id: new ObjectId().toHexString(),
      date: new Date(),
      reviewer_name: review.reviewer_name,
      comments: review.comments,
    };
    await getHouseContext().updateOne(
      { _id: houseId },
      {
        $push: { reviews: newReview },
      }
    );
    return newReview;
  },
};
