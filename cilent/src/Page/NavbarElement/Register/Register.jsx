import React from "react";
import "./Login.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../ContextApi/FilterTurlar";
function Register() {
  const [admin, setadmin] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/login").then((res) => setadmin(res.data));
  }, []);
  return (
    <div className="Loginadmin">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <Formik
        initialValues={{ email: "", password: "", position: "user" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Buranı doldur "),
          password: Yup.string()
            .min(7, "En az 8 simvol")
            .required("Buranı doldur "),
        })}
        onSubmit={(values) => {
          if (admin.filter((x) => x.email == values.email) == "") {
            axios.post("http://localhost:8000/login", {
              email: values.email,
              password: values.password,
              position: values.position,
            }).then(navigate("/login"))
          } else {
            document.getElementById("adminlogin_h4").style.display = "block";
          }
        }}
      >
        <Form className="adminlogin">
          <h3>Logup</h3>
          <h4 id="adminlogin_h4">E-posta zaten var</h4>
          <label>E-posta</label>
          <Field type="mail" placeholder="E-posta" id="username" name="email" />
          <span>
            <ErrorMessage name="email" />
          </span>

          <label>Password</label>
          <Field
            name="password"
            type="text"
            placeholder="Password"
            id="password"
          />
          <span>
            {" "}
            <ErrorMessage name="password" />
          </span>
          <button type="submit">Üye ol</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
