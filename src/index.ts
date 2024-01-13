import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("My airbnb portal");
});

app.listen(3000, () => {
  console.log("Server ready at port 3000");
});


