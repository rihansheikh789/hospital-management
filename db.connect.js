const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/doctors")
  .then(() => {
    console.log("data is conneted");
  })
  .catch((err) => {
    console.log(err);
  });
