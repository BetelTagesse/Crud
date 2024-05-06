const express = require("express");
const mongoose = require("mongoose");

const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(
    "mongodb+srv://Betel:admin123@backenddb.qyeipjw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(3004, () => {
      console.log("Server is running on port 3004");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
