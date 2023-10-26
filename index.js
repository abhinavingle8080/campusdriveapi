require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const applicationRouter = require("./routes/common.router");
const testRouter = require("./routes/test.rounter");

// Render Engine
app.engine('html', require('ejs').renderFile); // Render HTML Templates

app.use(express.json({ limit: '25mb' })); // Limit the response
app.use(bodyParser.json()); // Parse Body In JSON Format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Used CORS for cross-origin and allow-same-origin

// Routes
app.use("/api/test", testRouter);
app.use("/api", applicationRouter);

// Entry API or Welcome Route
app.get("/", (req, res) => {
    res.json({ message: ` Server is running on port ${PORT}.` });
});

// Listening PORT
const PORT = process.env.PORT || 8041;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});