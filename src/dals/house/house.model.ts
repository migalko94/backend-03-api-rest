export interface Review {
  reviewId: string;
  date: Date;
  reviewerName: string;
  comment: string;
}

export interface House {
  id: string;
  name: string;
  image: string;
  country: string;
  address: string;
  rooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
}
