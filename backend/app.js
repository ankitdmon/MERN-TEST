const express = require("express");
const app = express();
require("dotenv").config();
const goalRoute = require("./routes/goalRoute");

const PORT = process.env.PORT || 5001;

// middileware
app.use(express.json());

app.use("/demo", goalRoute);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
