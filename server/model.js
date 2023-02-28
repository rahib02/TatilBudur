const mongoose = require("mongoose");
const { Schema } = mongoose;
const turSchema = new Schema({
  otel: { type: String, required: true },
  otelkonum: { type: String, required: true },
  otelimg: { type: String, required: true },
  oteltext: { type: String, required: true },
  oteltitle: { type: Array, required: true },
  oteldahil: { type: String, required: true },
  otelekstra: { type: Array, required: true },
  otelstar: { type: Number, required: true },
  otelqiymet: { type: Number, required: true },
  otelpaket: { type: Array, required: true },
  otelkampanya: { type: Array, required: true },
  otelozellik: { type: Array, required: true },
  otelaktivite: { type: Array, required: true },
  otelhavuzplaj: { type: Array, required: true },
  otelbalayi: { type: Array, required: true },
  otelkonsept: { type: Array, required: true },
  otelnotlar: { type: Array, required: true },
});
const loginSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  position: { type: String, required: true },
});
const ButunTurlar = mongoose.model("users", turSchema);
const Login = mongoose.model("logins", loginSchema);

module.exports = {
  ButunTurlar,
  Login,
};
