import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

//Review
export const getLastReviews = (
  reviewList: apiModel.Review[],
  itemsToShow: number
): apiModel.Review[] =>
  reviewList.slice(reviewList.length - itemsToShow, reviewList.length);

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.Review => ({
  _id: review._id,
  date: review.date,
  reviewer_name: review.reviewer_name,
  comments: review.comments,
});

export const mapReviewFromApiToModel = (
  review: apiModel.Review
): model.Review => ({
  _id: review._id,
  date: review.date,
  comments: review.comments,
  reviewer_name: review.reviewer_name,
});

export const mapReviewListFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] =>
  getLastReviews(reviewList.map(mapReviewFromModelToApi), 5);

//House
export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  name: house.name,
  description: house.description,
  image: house.images.picture_url,
  country: house.address.country,
  address: house.address.street,
  rooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms?.$numberDecimal,
  reviews: mapReviewListFromModelToApi(house.reviews),
});

export const mapHouseSummaryFromModelToApi = (
  house: model.House
): apiModel.House => ({
  id: house._id,
  name: house.name,
  image: house.images.picture_url,
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseSummaryFromModelToApi);
