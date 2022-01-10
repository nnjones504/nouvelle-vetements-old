const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//import controller file
const controller = require("./controller");
const {
  getQuote,
  getProducts,
  addToBag,
  getBagCount,
  getBag,
  submitForm,
  deleteProduct
} = require("./controller");

app.get(`/api/quote`, controller.getQuote);
app.get(`/api/`, controller.getProducts);
app.post(`/api/bag`, controller.addToBag);
//app.get(`/api/bag`, controller.getBagCount);
app.get(`/api/bag`,controller.getBag);
app.post(`/api/reservation`, controller.submitForm)
app.delete(`/api/bag/:id`, controller.deleteProduct)


const port = 4004;
app.listen(port, () => console.log("Server running on PORT:4004"));