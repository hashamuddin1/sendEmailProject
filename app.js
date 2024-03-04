const express = require("express");
const app = express();
require("dotenv").config();
/* eslint-disable no-undef */
const port = process.env.PORT;
const cors = require("cors");

const emailRouter = require("./router/userRouter");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use([emailRouter]);

app.listen(port, () => {
  console.log(`Our Server is running at port ${port}`);
});
