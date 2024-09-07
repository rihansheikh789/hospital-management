const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const pars = require("body-parser");
// const fs=require("fs")

require("./db.connect");

const Employee = require("./Models/Emloyee");
const Patient = require("./Models/patient");
const { default: mongoose } = require("mongoose");


const encoder = pars.urlencoded({ extended: false });
app.use(pars.json());
// hbs connection
app.use(express.static("views/public"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partial"));

app.get("/", encoder, (req, res) => {
  res.render("index");
});
app.get("/index", encoder, (req, res) => {
  res.render("index");
});

app.get("/thenks", encoder, (req, res) => {
  res.render("thenks");
});
app.get("/adddoctor", encoder, (req, res) => {
  res.render("adddoctor", { show: false, message: "", data: {} });
});

app.post("/adddoctor", encoder, async (req, res) => {
  try {
    var data = new Employee(req.body);
    console.log(data);
    await data.save();

    res.redirect("/index");
  } catch (error) {
    if (error.errors.name) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.name.message,
        data: data,
      });
    } else if (error.errors.lastname) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.lastname.message,
        data: data,
      });
    } else if (error.errors.phonenumber) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.phonenumber.message,
        data: data,
      });
    } else if (error.errors.emailaddress) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.emailaddress.message,
        data: data,
      });
    } else if (error.errors.joindate) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.joindate.message,
        data: data,
      });
    } else if (error.errors.jointime) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.jointime,
        message,
        data: data,
      });
    } else if (error.errors.gander) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.gander.message,
        data: data,
      });
    } else if (error.errors.message) {
      res.render("adddoctor", {
        show: true,
        message: error.errors.message.message,
        data: data,
      });
    } else {
      res.render("adddoctor", {
        show: true,
        message: "Internal Server Error",
        data: req.body,
      });
    }
  }
});






app.get("/patient-list", encoder, async (req, res) => {
  const result = await Patient.find();
  res.render("patient-list", { data: result });
});
app.get("/patient-add", encoder, async (req, res) => {
  res.render("patient-add");
});

app.post("/patients", encoder, async (req, res) => {
  try {
    var data = new Patient(req.body);
    console.log(data);
    await data.save();

    res.redirect("/index");
  } catch (error) {
    if (error.errors.name) {
      res.render("patient-add", {
        show: true,
        message: error.errors.name.message,
        data: data,
      });
    } else if (error.errors.phonenumber) {
      res.render("patient-add", {
        show: true,
        message: error.errors.phonenumber.message,
        data: data,
      });
    } else if (error.errors.emailaddress) {
      res.render("patient-add", {
        show: true,
        message: error.errors.emailaddress.message,
        data: data,
      });
    } else if (error.errors.joindate) {
      res.render("patient-add", {
        show: true,
        message: error.errors.joindate.message,
        data: data,
      });
    } else if (error.errors.jointime) {
      res.render("patient-add", {
        show: true,
        message: error.errors.jointime,
        message,
        data: data,
      });
    } else if (error.errors.gander) {
      res.render("patient-add", {
        show: true,
        message: error.errors.gander.message,
        data: data,
      });
    } else if (error.errors.message) {
      res.render("patient-add", {
        show: true,
        message: error.errors.message.message,
        data: data,
      });
    } else {
      res.render("patient-add", {
        show: true,
        message: "Internal Server Error",
        data: req.body,
      });
    }
  }
});


app.get("/patient-list", encoder,async(req, res) => {
  try {
    var data = Patient.find();
    console.log(data);
    await data.save();
    res.redirect("/index");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});



app.get("/patients", encoder, (req, res) => {
  res.render("patients", { show: false, message: "", data: {} });
});



app.get("/doctor-all", encoder, async (req, res) => {
  const result = await Employee.find();
  res.render("doctor-all", { alldata: result });
});

app.post("/search", encoder, async (req, res) => {
  const searchdata = req.body.search;
  // console.log(searchdata);
  try {
    const filteredData = await Employee.findOne({
      name: { $regex: searchdata, $options: "i" },
    });
    console.log(filteredData, "yha pe pura data hai");
    res.render("doctor-all", { alldata: filteredData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/doctor-profile/:_id", encoder, async (req, res) => {
  try {
    const profile = await Employee.findOne({ _id: req.params._id });
    console.log(profile);
    res.render("doctor-profile", { profile: profile });
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/patient-add", (req, res) => {
  res.render("patient-add");
});
app.post("/patient-add", (req, res) => {
  console.log(req.body);
});
app.listen(9000, () => {
  console.log("hy your server is runing 9000");
});
