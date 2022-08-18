const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;



app.listen(port, function () {
    console.log("Express is running");
  });
  