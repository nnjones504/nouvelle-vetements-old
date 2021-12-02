const database = require("./db.json");
let quotes = database.quotes;
let products = database.products;

module.exports = {
  getQuote: (req, res) => {
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randQuote = quotes[randIndex];
    console.log(randQuote);
    res.status(200).send(randQuote);
  },
  getProducts: (req, res) => {
    res.status(200).send(products);
  },
};
