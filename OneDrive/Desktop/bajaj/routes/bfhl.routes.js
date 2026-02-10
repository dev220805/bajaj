// routes/bfhl.routes.js

const express = require("express");
const router = express.Router();
const {
  handleBFHL,
  healthCheck
} = require("../controllers/bfhl.controller");

router.post("/bfhl", handleBFHL);
router.get("/health", healthCheck);

module.exports = router;
