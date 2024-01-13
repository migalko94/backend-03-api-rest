interface Review {
  reviewId: number;
  date: Date;
  reviewerName: string;
  comment: string;
}

interface House {
  id: number;
  name: string;
  image: string;
  country: string;
  address: string;
  rooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
}

let mockHousesList: House[] = [
  {
    id: 1,
    name: "Malaga beach house",
    image: "https://example.com/pictures/1.jpg",
    country: "Spain",
    address: "Calle Camino Cupiano, Malaga, Spain",
    rooms: 5,
    beds: 8,
    bathrooms: 2,
    reviews: [
      {
        reviewId: 1,
        date: new Date("2021-06-12"),
        reviewerName: "Ana",
        comment: "La casa es fantástica, 100% recomendada.",
      },
      {
        reviewId: 2,
        date: new Date("2021-03-22"),
        reviewerName: "Miguel",
        comment:
          "Son super amables y pudimos pasar un rato bueno en familia. Muy recomendada",
      },
      {
        reviewId: 3,
        date: new Date("2021-01-10"),
        reviewerName: "Lola",
        comment: "Excelente lugar para unas vacaciones",
      },
      {
        reviewId: 4,
        date: new Date("2020-12-31"),
        reviewerName: "Paco",
        comment: "Para repetir sin duda",
      },
      {
        reviewId: 5,
        date: new Date("2020-11-04"),
        reviewerName: "Lucía",
        comment: "Nos encantó",
      },
    ],
  },
  {
    id: 2,
    name: "Home with pool",
    image: "https://example.com/pictures/2.jpg",
    country: "France",
    address: "Rue Paris, 43",
    rooms: 2,
    beds: 3,
    bathrooms: 1,
    reviews: [
      {
        reviewId: 1,
        date: new Date("2019-07-09"),
        reviewerName: "Esther",
        comment: "Maravilla!",
      },
      {
        reviewId: 2,
        date: new Date("2020-03-06"),
        reviewerName: "Andrea",
        comment: "Buena localización",
      },
      {
        reviewId: 3,
        date: new Date("2021-01-10"),
        reviewerName: "Mario",
        comment: "Lo mejor",
      },
      {
        reviewId: 4,
        date: new Date("2020-12-31"),
        reviewerName: "Ethan",
        comment: "Great place",
      },
      {
        reviewId: 5,
        date: new Date("2020-11-04"),
        reviewerName: "Rick",
        comment: "Fantastic",
      },
    ],
  },
];

export const getHouseList = async (): Promise<House[]> => await mockHousesList;

export const getHouseDetail = async (id: number): Promise<House> =>
  await mockHousesList.find((h) => h.id === id);

export const insertReview = async (
  houseId: number,
  review: Review
): Promise<Review> => {
  let modifiedHouse = mockHousesList.find((h) => h.id === houseId);
  if (modifiedHouse) {
    let { reviews } = modifiedHouse;
    const reviewId = reviews.length + 1;
    const date = new Date();
    const newReview = {
      ...review,
      id: reviewId,
      date,
    };
    modifiedHouse = {
      ...modifiedHouse,
      reviews: [...reviews, newReview],
    };
    mockHousesList = [modifiedHouse, ...mockHousesList];
    return newReview;
  }
};
