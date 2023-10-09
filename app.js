const express = require("express");
const connectToDB = require("./config/db");
require("dotenv").config();

// conniction to Database
connectToDB();

// init app
const app = express();

// apply middlewares
app.use(express.json());

// Routers
app.use("/api/v1/tasks", require("./routes/tasks"));

// Running the Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Hello, Server is running in ${process.env.NODE} mode on port ${PORT}`
  );
});
