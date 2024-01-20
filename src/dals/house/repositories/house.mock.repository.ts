import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";

const paginateHouseList = (
  houseList: House[],
  page: number,
  pageSize: number
): House[] => {
  let paginatedHouseList = [...houseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};

const filterByCountryHouseList = (
  houseList: House[],
  country: string
): House[] => {
  let filteredHouseList: House[] = [...houseList];
  if (country) {
    filteredHouseList = filteredHouseList.filter(
      (h) => h.address.country === country
    );
  }
  return filteredHouseList;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number, country?: string) =>
    paginateHouseList(
      filterByCountryHouseList(db.houses, country),
      page,
      pageSize
    ),
  getHouseDetail: async (id: string): Promise<House> =>
    db.houses.find((h) => h._id === id),

  insertReview: async (houseId: string, review: Review) => {
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
