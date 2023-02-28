const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const { ButunTurlar, Login } = require("./model.js");

const app = express();
app.use(cors());
app.use(bodyParser.json());
/* giris*/
app.get("/", (req, res) => {
  res.send("<h1>Admin Panel Giris</h1>");
});
/* butun turlar */
app.get("/butunturlar", (req, res) => {
  ButunTurlar.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  });
});
app.get("/login", (req, res) => {
  Login.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  });
});
/* id gore axdaris */
app.get("/butunturlar/:id", (req, res) => {
  const { id } = req.params;
  ButunTurlar.findById(id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.send(docs);
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    } else {
      res.status(500).json({ message: "Server Problem" });
    }
  });
});
app.get("/login/:id", (req, res) => {
  const { id } = req.params;
  Login.findById(id, (err, docs) => {
    if (!err) {
      if (docs) {
        res.send(docs);
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    } else {
      res.status(500).json({ message: "Server Problem" });
    }
  });
});
/* elave etmek */
app.post("/butunturlar", (req, res) => {
  const yenitur = new ButunTurlar({
    otel: req.body.otel,
    otelkonum: req.body.otelkonum,
    otelimg: req.body.otelimg,
    oteltext: req.body.oteltext,
    oteltitle: req.body.oteltitle,
    oteldahil: req.body.oteldahil,
    otelekstra: req.body.otelekstra,
    otelstar: req.body.otelstar,
    otelqiymet: req.body.otelqiymet,
    otelpaket: req.body.otelpaket,
    otelkampanya: req.body.otelkampanya,
    otelozellik: req.body.otelozellik,
    otelaktivite: req.body.otelaktivite,
    otelhavuzplaj: req.body.otelhavuzplaj,
    otelbalayi: req.body.otelbalayi,
    otelkonsept: req.body.otelkonsept,
    otelnotlar: req.body.otelnotlar,
  });
  yenitur.save();
  res.status(200).json({ message: "Tur elave olundu" });
});
app.post("/login", (req, res) => {
  const yenilogin = new Login({
    email: req.body.email,
    password: req.body.password,
    position: req.body.position,
  });
  yenilogin.save();
  res.status(200).json({ message: "user elave olundu" });
});
/* silme */
app.delete("/butunturlar/:id", (req, res) => {
  const { id } = req.params;
  ButunTurlar.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Delete" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});
app.delete("/login/:id", (req, res) => {
  const { id } = req.params;
  Login.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(200).json({ message: "Delete" });
    } else {
      res.status(404).json({ message: err });
    }
  });
});
const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose.set("strictQuery", true);
mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB connect");
    app.listen(PORT, () => {
      console.log("Server Start");
    });
  } else {
    console.log(err);
  }
});
