const express = require("express");
const app = express();
require("dotenv").config();
const goalRoute = require("./routes/goalRoute");
const response  = require("./utills/responses");

const PORT = process.env.PORT || 5001;

// middileware
app.use(express.json());

app.use("/api", goalRoute);

// Custom error handling middleware
app.use((err, req, res, next) => {
  response(req, res, true, false, err.key, errorDesc, err.message );
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
