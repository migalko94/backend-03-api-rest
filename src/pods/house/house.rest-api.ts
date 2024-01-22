import { Router } from "express";
import jwt from "jsonwebtoken";
import { houseRepository } from "#dals/house/index.js";
import {
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapReviewFromModelToApi,
} from "./house.mappers.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res, next) => {
    try {
      const page = Number(req.query.page);
      const pageSize = Number(req.query.pageSize);
      const country = req.query.country as string;

      const houseList = await houseRepository.getHouseList(
        page,
        pageSize,
        country
      );
      res.send(mapHouseListFromModelToApi(houseList));
    } catch (error) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.getHouseDetail(id);
      res.send(mapHouseFromModelToApi(house));
    } catch (error) {
      next(error);
    }
  })
  .post("/:id/reviews", async (req, res, next) => {
    try {
      const { id } = req.params;
      const newReview = await houseRepository.insertReview(id, req.body);
      res.status(201).send(mapReviewFromModelToApi(newReview));
    } catch (error) {
      next(error);
    }
  });
