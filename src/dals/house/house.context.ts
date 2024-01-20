import { db } from "#core/servers/index.js";
import { House } from "./house.model.js";

export const getHouseContext = () => db.collection<House>("listingsAndReviews");
