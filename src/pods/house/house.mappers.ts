import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

const mapReviewFromModelToApi = (review: model.Review): apiModel.Review => ({
  _id: review.reviewId,
  date: {
    $date: review.date.toISOString(),
  },
  listing_id: "",
  reviewer_id: review.reviewId,
  reviewer_name: review.reviewerName,
  comments: review.comment,
});

const mapReviewListFromModelToApi = (reviewList) =>
  reviewList.map(mapReviewFromModelToApi);

const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  _id: house.id,
  listing_url: "",
  name: house.name,
  summary: "",
  space: "",
  description: "",
  neighborhood_overview: "",
  house_rules: "",
  property_type: "",
  room_type: "",
  bed_type: "",
  minimum_nights: undefined,
  maximum_nights: undefined,
  cancellation_policy: "",
  last_scraped: {
    $date: "",
  },
  calendar_last_scraped: {
    $date: "",
  },
  first_review: {
    $date: "",
  },
  last_review: {
    $date: "",
  },
  accommodates: undefined,
  bedrooms: house.rooms,
  beds: house.beds,
  number_of_reviews: undefined,
  bathrooms: {
    $numberDecimal: house.bathrooms,
  },
  amenities: undefined,
  price: {
    $numberDecimal: undefined,
  },
  security_deposit: {
    $numberDecimal: undefined,
  },
  cleaning_fee: {
    $numberDecimal: undefined,
  },
  extra_people: {
    $numberDecimal: undefined,
  },
  guests_included: {
    $numberDecimal: undefined,
  },
  images: {
    thumbnail_url: "",
    medium_url: "",
    picture_url: house.image,
    xl_picture_url: "",
  },
  host: {
    host_id: "",
    host_url: "",
    host_name: "",
    host_location: "",
    host_about: "",
    host_response_time: "",
    host_thumbnail_url: "",
    host_picture_url: "",
    host_neighbourhood: "",
    host_response_rate: undefined,
    host_is_superhost: undefined,
    host_has_profile_pic: undefined,
    host_identity_verified: undefined,
    host_listings_count: undefined,
    host_total_listings_count: undefined,
    host_verifications: undefined,
  },
  address: {
    street: house.address,
    suburb: "",
    government_area: "",
    market: "",
    country: house.country,
    country_code: "",
    location: {
      type: "",
      coordinates: undefined,
      is_location_exact: undefined,
    },
  },
  availability: {
    availability_30: undefined,
    availability_60: undefined,
    availability_90: undefined,
    availability_365: undefined,
  },
  review_scores: {
    review_scores_accuracy: undefined,
    review_scores_cleanliness: undefined,
    review_scores_checkin: undefined,
    review_scores_communication: undefined,
    review_scores_location: undefined,
    review_scores_value: undefined,
    review_scores_rating: undefined,
  },
  reviews: mapReviewListFromModelToApi(house.reviews),
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map(mapHouseFromModelToApi);
