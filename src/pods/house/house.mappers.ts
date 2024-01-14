import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

const getLastFiveReviews = (reviewList: apiModel.Review[]): apiModel.Review[] =>
  reviewList.slice(0, 5);

const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
  reviewId: review._id,
  date: review.date.$date,
  reviewer_name: review.reviewer_name,
  reviewerId: review.reviewer_id,
  listing_id: review.listing_id,
  comments: review.comments,
});

const mapReviewListFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] => reviewList.map(mapReviewFromModelToApi);

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  name: house.name,
  image: house.images.picture_url,
  country: house.address.country,
  address: house.address.street,
  rooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms.$numberDecimal,
  reviews: mapReviewListFromModelToApi(house.reviews),
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);
