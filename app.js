const express = require("express");
const bfhlRoutes = require("./routes/bfhl.routes");

const app = express();

app.use(express.json());
app.use("/", bfhlRoutes);

module.exports = app;
