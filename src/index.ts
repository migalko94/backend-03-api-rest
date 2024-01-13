import express from "express";
import { housesApi } from "./houses.api.js";

const app = express();
app.use(express.json());
app.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.get("/", async (req, res) => {
  res.send("My airbnb portal");
});

app.use("/api/houses", housesApi);

app.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log("Server ready at port 3000");
});
