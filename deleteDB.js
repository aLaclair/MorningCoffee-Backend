const mongoose = require("mongoose");
const db = require("./models");

db.Schedule.deleteMany({}).then((response) => {
  console.log(response);
});

let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
