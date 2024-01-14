import { Router } from "express";
import { houseRepository } from "#dals/house/index.js";
import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
} from "./house.mappers.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);

      let country = req.query.country;

      let houseList = await houseRepository.getHouseList();

      if (country) {
        houseList = houseList.filter((h) => h.address.country === country);
      }
      if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, houseList.length);
        houseList = houseList.slice(startIndex, endIndex);
      }
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const house = await houseRepository.getHouseDetail(id);
    res.send(mapHouseFromModelToApi(house));
  })
  .post("/:id/reviews", async (req, res) => {
    const { id } = req.params;
    const review = req.body;
    const newReview = await houseRepository.insertReview(id, review);
    res.status(201).send(newReview);
  });
