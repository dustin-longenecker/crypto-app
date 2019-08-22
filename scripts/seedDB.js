const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Coins collection and inserts the coins below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coinlist",
  { useNewUrlParser: true }
);

const coinSeed = [
  {
    name: "Dust",
    symbol: "DUST",
    description:
      "The world's best cryptocurrency."
  }
];

db.Coin
  .deleteMany({})
  .then(() => db.Coin.collection.insertMany(coinSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
