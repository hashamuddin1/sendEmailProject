const express = require("express");
const emailRouter = express.Router();
const { sendEmail } = require("../controller/emailController");

emailRouter.post("/api/v1/sendEmail", sendEmail);

module.exports = emailRouter;
