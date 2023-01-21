const express = require("express");
const morgan = require("morgan");
const ProductRouter = require('./routers/ProductRouter')
const app = express();

app.use(express.json());// req => body
app.use(morgan('dev'));

app.use("/api/v1/product/", ProductRouter);


module.exports = app;

