import { House, Review } from "../house.model.js";

export interface HouseRepository {
  getHouseList: () => Promise<House[]>;
  getHouseDetail: (id: string) => Promise<House>;
  insertReview: (houseId: string, review: Review) => Promise<Review>;
}
