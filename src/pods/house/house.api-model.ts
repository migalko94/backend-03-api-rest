export interface Review {
  reviewId: string;
  date: Date;
  reviewer_name: string;
  listing_id: string;
  reviewerId: string;
  comments: string;
}

export interface House {
  id: string;
  name: string;
  image: string;
  country: string;
  address: string;
  rooms: number;
  beds: number;
  bathrooms: string;
  reviews: Review[];
}
