require("dotenv").config();
const {mapFields} = require("./gemini");
const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GrowEasy Backend is Running");
});
app.post("/upload", async (req, res) => {
  try {
    const csvData = req.body;

    const result = await mapFields(csvData);

    res.json({
      message: "Data mapped successfully",
      aiResponse: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "AI Mapping Failed",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});