const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//import controller file
const controller = require("./controller");
const { getQuote, getProducts} = require("./controller");

app.get(`/api/quote`, controller.getQuote);
app.get(`/api/`, controller.getProducts);

const port = 4004;
app.listen(port, () => console.log("Server running on PORT:4004"));