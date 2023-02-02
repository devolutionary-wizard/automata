const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { error, connectDB } = require("../../core/index");

const fa_route = require("../routes/fa.route");
const state_route = require("../routes/state.route");
const transition_route = require("../routes/transition.route");
const transition_table_route = require("../routes/transition_table.route");
const check_fa_route = require("../routes/check_fa.route");
const accept_string_route = require("../routes/accept_string.route");
const convert_route = require("../routes/convert.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// Connect to Database
require("dotenv").config();
connectDB();

// Routes
app.use("/api/v1/fa", fa_route);
app.use("/api/v1/state", state_route);
app.use("/api/v1/transition", transition_route);
app.use("/api/v1/transition_table", transition_table_route);
app.use("/api/v1/check_fa", check_fa_route);
app.use("/api/v1/accept_string", accept_string_route);
app.use("/api/v1/convert", convert_route);

// Handle error
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  if (err instanceof error.HttpError) {
    res.status(err.statusCode).send({
      message: err.message,
      error: err.error,
    });
  } else {
    res.status(500).send({ message: "Internal server error", error: err });
  }
}

module.exports = app;
