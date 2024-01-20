export interface Review {
  _id: string;
  date: Date;
  comments: string;
  listing_id?: string;
  reviewer_id?: string;
  reviewer_name: string;
}

export interface House {
  id: string;
  name: string;
  description?: string;
  image: string;
  country?: string;
  address?: string;
  rooms?: number;
  beds?: number;
  bathrooms?: string;
  reviews?: Review[];
}
