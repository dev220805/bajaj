const axios = require("axios");

exports.getAIResponse = async (question) => {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const response = await axios.post(url, {
    contents: [
      {
        parts: [{ text: question }]
      }
    ]
  });

  return response.data.candidates[0].content.parts[0].text.trim();
};
