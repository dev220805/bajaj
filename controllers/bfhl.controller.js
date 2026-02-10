// controllers/bfhl.controller.js

const {
  isPrime,
  generateFibonacci,
  calculateHCF,
  calculateLCM
} = require("../utils/math.utils");

const { getAIResponse } = require("../services/ai.service");

exports.handleBFHL = async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    // Strict input validation
    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        official_email: process.env.OFFICIAL_EMAIL,
        error: "Exactly one input key is required"
      });
    }

    const key = keys[0];
    let result;

    switch (key) {
      case "fibonacci":
        if (!Number.isInteger(req.body[key]) || req.body[key] < 0) {
          throw new Error("Invalid fibonacci input");
        }
        result = generateFibonacci(req.body[key]);
        break;

      case "prime":
        if (!Array.isArray(req.body[key])) {
          throw new Error("Prime input must be an array");
        }
        result = req.body[key].filter(isPrime);
        break;

      case "hcf":
        result = calculateHCF(req.body[key]);
        break;

      case "lcm":
        result = calculateLCM(req.body[key]);
        break;

      case "AI":
        if (typeof req.body[key] !== "string") {
          throw new Error("AI input must be a string");
        }
        result = await getAIResponse(req.body[key]);
        break;

      default:
        return res.status(400).json({
          is_success: false,
          official_email: process.env.OFFICIAL_EMAIL,
          error: "Invalid key"
        });
    }

    return res.status(200).json({
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL,
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      is_success: false,
      official_email: process.env.OFFICIAL_EMAIL,
      error: error.message
    });
  }
};

exports.healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL
  });
};
