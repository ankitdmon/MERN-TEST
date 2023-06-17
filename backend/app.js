const express = require('express');
const app  = express();
require('dotenv').config();

const PORT  = process.env.PORT || 5001;

// middileware
app.use(express.json());

app.get("/", (req, res)=>{
    console.log("Hii, Ankit Mishra");
    res.json({"Hii": "Ankit Mishra"})
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`);
})