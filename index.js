require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const cors = require("cors");


const applicationRouter = require("./routes/application.router");
const testRouter = require("./routes/test.rounter");

app.use(bodyParser.json()); // Parse Body In JSON Format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Used CORS for cross-origin and allow-same-origin


app.use("/api", testRouter);
// Entry API or Welcome Route
app.get("/", (_req, res) => {
    res.json({ message: res.__("message") + ` Server is running on port ${PORT}.` });
});

// Listening PORT
const PORT = process.env.PORT || 8041;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});