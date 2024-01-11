const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const routes = require("./routes/api/books");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use("/api/books", routes);
connectDB();

app.get('/', (req, res) => {
    res.send("Hello world")
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log("Server is running on port " + port));
