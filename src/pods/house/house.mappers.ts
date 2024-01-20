import { ObjectId } from "mongodb";
import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

const getLastReviews = (
  reviewList: apiModel.Review[],
  itemsToShow: number
): apiModel.Review[] =>
  reviewList.slice(reviewList.length - itemsToShow, reviewList.length);

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.Review => ({
  _id: review._id instanceof ObjectId ? review._id.toHexString() : review._id,
  date: review.date,
  reviewer_name: review.reviewer_name,
  comments: review.comments,
});

const mapReviewListFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] =>
  getLastReviews(reviewList.map(mapReviewFromModelToApi), 5);

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id instanceof ObjectId ? house._id.toHexString() : house._id,
  name: house.name,
  image: house.images.picture_url,
  country: house.address.country,
  address: house.address.street,
  rooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms?.$numberDecimal,
  reviews: mapReviewListFromModelToApi(house.reviews),
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);

export const mapReviewFromApiToModel = (
  review: apiModel.Review
): model.Review => ({
  _id: new ObjectId(review._id),
  date: review.date,
  reviewer_name: review.reviewer_name,
  comments: review.comments,
});
