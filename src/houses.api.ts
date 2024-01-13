import { Router } from "express";
import { getHouseDetail, getHouseList, insertReview } from "./mock.db.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);

      let country = req.query.country;

      let houseList = await getHouseList();

      if (country) {
        houseList = houseList.filter((h) => h.country === country);
      }
      if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, houseList.length);
        houseList = houseList.slice(startIndex, endIndex);
      }
      res.send(houseList);
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const houseId = Number(id);
    const house = await getHouseDetail(houseId);
    res.send(house);
  })
  .post("/:id/reviews", async (req, res) => {
    const { id } = req.params;
    const newReviewId = Number(id);
    const review = req.body;
    const newReview = await insertReview(newReviewId, review);
    res.status(201).send(newReview);
  });
