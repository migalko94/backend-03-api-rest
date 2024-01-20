import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";
import {
  getLastReviews,
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
  mapHouseSummaryFromModelToApi,
  mapReviewFromApiToModel,
  mapReviewFromModelToApi,
  mapReviewListFromModelToApi,
} from "./house.mappers.js";

describe("house.mappers spec - helper", () => {
  describe("getLastReviews", () => {
    it("should return last feeded number of items in reviews", () => {
      // Arrange
      const reviews: model.Review[] = [
        {
          _id: "10006546",
          date: new Date("2021-07-10T12:30:00"),
          reviewer_name: "test1",
          comments: "test1",
        },
        {
          _id: "10006547",
          date: new Date("2021-07-11T12:30:00"),
          reviewer_name: "test2",
          comments: "test2",
        },
        {
          _id: "10006548",
          date: new Date("2021-07-12T12:30:00"),
          reviewer_name: "test3",
          comments: "test3",
        },
        {
          _id: "10006549",
          date: new Date("2021-07-12T12:31:00"),
          reviewer_name: "test4",
          comments: "test4",
        },
      ];

      // Act
      const result: apiModel.Review[] = getLastReviews(reviews, 2);

      // Assert
      expect(result).toEqual([
        {
          _id: "10006548",
          date: new Date("2021-07-12T12:30:00"),
          reviewer_name: "test3",
          comments: "test3",
        },
        {
          _id: "10006549",
          date: new Date("2021-07-12T12:31:00"),
          reviewer_name: "test4",
          comments: "test4",
        },
      ]);
    });
  });
});

describe("house.mappers spec - Review", () => {
  describe("mapReviewFromModelToApi", () => {
    it("should return one mapped from model to api review item - no changes applied", () => {
      // Arrange
      const review: model.Review = {
        _id: "10006546",
        date: new Date("2021-07-28T12:30:00"),
        reviewer_name: "test",
        comments: "test",
      };

      // Act
      const result: apiModel.Review = mapReviewFromModelToApi(review);

      // Assert
      expect(result).toEqual({
        _id: "10006546",
        date: new Date("2021-07-28T12:30:00"),
        reviewer_name: "test",
        comments: "test",
      });
    });
  });

  describe("mapReviewFromApiToModel", () => {
    it("should return one mapped review item from api to model - no changes applied", () => {
      // Arrange
      const review: apiModel.Review = {
        _id: "10006546",
        date: new Date("2021-07-28T12:30:00"),
        reviewer_name: "test",
        comments: "test",
      };

      // Act
      const result: model.Review = mapReviewFromApiToModel(review);

      // Assert
      expect(result).toEqual({
        _id: "10006546",
        date: new Date("2021-07-28T12:30:00"),
        reviewer_name: "test",
        comments: "test",
      });
    });
  });

  describe("mapReviewListFromModelToApi", () => {
    it("should return one mapped review item from model to api in array when it feeds reviewList with one item", () => {
      // Arrange
      const reviewList: model.Review[] = [
        {
          _id: "10006546",
          date: new Date("2021-07-28T12:30:00"),
          reviewer_name: "test",
          comments: "test",
        },
      ];

      // Act
      const result: model.Review[] = mapReviewListFromModelToApi(reviewList);

      // Assert
      expect(result).toEqual([
        {
          _id: "10006546",
          date: new Date("2021-07-28T12:30:00"),
          reviewer_name: "test",
          comments: "test",
        },
      ]);
    });
  });
});

describe("house.mappers spec - House", () => {
  describe("mapHouseFromModelToApi", () => {
    it("should return one mapped house item from model to api - no changes applied", () => {
      // Arrange
      const house: model.House = {
        _id: "1",
        host: null,
        availability: null,
        review_scores: undefined,
        listing_url: null,
        name: "test",
        summary: null,
        space: null,
        description: "description",
        images: {
          thumbnail_url: "",
          medium_url: "",
          picture_url: "test",
          xl_picture_url: "",
        },
        address: {
          street: "test",
          suburb: "",
          government_area: "",
          market: "",
          country: "test",
          country_code: "",
          location: null,
        },
        neighborhood_overview: undefined,
        notes: undefined,
        transit: undefined,
        access: undefined,
        interaction: undefined,
        house_rules: undefined,
        property_type: undefined,
        room_type: undefined,
        bed_type: undefined,
        minimum_nights: undefined,
        maximum_nights: undefined,
        cancellation_policy: undefined,
        last_scraped: {
          $date: null,
        },
        calendar_last_scraped: {
          $date: null,
        },
        first_review: {
          $date: null,
        },
        last_review: {
          $date: null,
        },
        accommodates: undefined,
        bedrooms: 1,
        beds: 1,
        number_of_reviews: null,
        bathrooms: { $numberDecimal: "1" },
        amenities: null,
        price: {
          $numberDecimal: null,
        },
        weekly_price: {
          $numberDecimal: null,
        },
        monthly_price: {
          $numberDecimal: null,
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
        reviews: [],
      };

      // Act
      const result: apiModel.House = mapHouseFromModelToApi(house);

      // Assert
      expect(result).toEqual({
        id: "1",
        name: "test",
        description: "description",
        image: "test",
        country: "test",
        address: "test",
        rooms: 1,
        beds: 1,
        bathrooms: "1",
        reviews: [],
      });
    });
  });

  describe("mapHouseSummaryFromModelToApi", () => {
    it("should return one mapped summary house item from model to api - no changes applied", () => {
      // Arrange
      const house: model.House = {
        _id: "1",
        host: null,
        availability: null,
        review_scores: undefined,
        listing_url: null,
        name: "test",
        summary: null,
        space: null,
        description: "description",
        images: {
          thumbnail_url: "",
          medium_url: "",
          picture_url: "test",
          xl_picture_url: "",
        },
        address: {
          street: "test",
          suburb: "",
          government_area: "",
          market: "",
          country: "test",
          country_code: "",
          location: null,
        },
        neighborhood_overview: undefined,
        notes: undefined,
        transit: undefined,
        access: undefined,
        interaction: undefined,
        house_rules: undefined,
        property_type: undefined,
        room_type: undefined,
        bed_type: undefined,
        minimum_nights: undefined,
        maximum_nights: undefined,
        cancellation_policy: undefined,
        last_scraped: {
          $date: null,
        },
        calendar_last_scraped: {
          $date: null,
        },
        first_review: {
          $date: null,
        },
        last_review: {
          $date: null,
        },
        accommodates: undefined,
        bedrooms: 1,
        beds: 1,
        number_of_reviews: null,
        bathrooms: { $numberDecimal: "1" },
        amenities: null,
        price: {
          $numberDecimal: null,
        },
        weekly_price: {
          $numberDecimal: null,
        },
        monthly_price: {
          $numberDecimal: null,
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
        reviews: [],
      };

      // Act
      const result: apiModel.House = mapHouseSummaryFromModelToApi(house);

      // Assert
      expect(result).toEqual({
        id: "1",
        name: "test",
        image: "test",
      });
    });
  });

  describe("mapHouseListFromModelToApi", () => {
    it("should return two mapped summary items in array from model to api when it feeds houseList with two items", () => {
      // Arrange
      const houses: model.House[] = [
        {
          _id: "1",
          host: null,
          availability: null,
          review_scores: undefined,
          listing_url: null,
          name: "test",
          summary: null,
          space: null,
          description: "description",
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url: "test",
            xl_picture_url: "",
          },
          address: {
            street: "test",
            suburb: "",
            government_area: "",
            market: "",
            country: "test",
            country_code: "",
            location: null,
          },
          neighborhood_overview: undefined,
          notes: undefined,
          transit: undefined,
          access: undefined,
          interaction: undefined,
          house_rules: undefined,
          property_type: undefined,
          room_type: undefined,
          bed_type: undefined,
          minimum_nights: undefined,
          maximum_nights: undefined,
          cancellation_policy: undefined,
          last_scraped: {
            $date: null,
          },
          calendar_last_scraped: {
            $date: null,
          },
          first_review: {
            $date: null,
          },
          last_review: {
            $date: null,
          },
          accommodates: undefined,
          bedrooms: 1,
          beds: 1,
          number_of_reviews: null,
          bathrooms: { $numberDecimal: "1" },
          amenities: null,
          price: {
            $numberDecimal: null,
          },
          weekly_price: {
            $numberDecimal: null,
          },
          monthly_price: {
            $numberDecimal: null,
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
          reviews: [],
        },
        {
          _id: "2",
          host: null,
          availability: null,
          review_scores: undefined,
          listing_url: null,
          name: "test2",
          summary: null,
          space: null,
          description: "description2",
          images: {
            thumbnail_url: "",
            medium_url: "",
            picture_url: "test2",
            xl_picture_url: "",
          },
          address: {
            street: "test2",
            suburb: "",
            government_area: "",
            market: "",
            country: "test2",
            country_code: "",
            location: null,
          },
          neighborhood_overview: undefined,
          notes: undefined,
          transit: undefined,
          access: undefined,
          interaction: undefined,
          house_rules: undefined,
          property_type: undefined,
          room_type: undefined,
          bed_type: undefined,
          minimum_nights: undefined,
          maximum_nights: undefined,
          cancellation_policy: undefined,
          last_scraped: {
            $date: null,
          },
          calendar_last_scraped: {
            $date: null,
          },
          first_review: {
            $date: null,
          },
          last_review: {
            $date: null,
          },
          accommodates: undefined,
          bedrooms: 1,
          beds: 1,
          number_of_reviews: null,
          bathrooms: { $numberDecimal: "2" },
          amenities: null,
          price: {
            $numberDecimal: null,
          },
          weekly_price: {
            $numberDecimal: null,
          },
          monthly_price: {
            $numberDecimal: null,
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
          reviews: [],
        },
      ];

      // Act
      const result: apiModel.House[] = mapHouseListFromModelToApi(houses);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          name: "test",
          image: "test",
        },
        {
          id: "2",
          name: "test2",
          image: "test2",
        },
      ]);
    });
  });
});
