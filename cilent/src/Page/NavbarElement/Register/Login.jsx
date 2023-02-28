import React from "react";
import "./Login.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import { Context } from "../../../ContextApi/FilterTurlar";
function Login() {
  const [admin, setadmin] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/login").then((res) => setadmin(res.data));
  }, []);
  const { setuser } = useContext(Context);
  return (
    <div className="Loginadmin">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Formik
        initialValues={{ email: "", password: ""}}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Buranı doldur "),
          password: Yup.string().required("Buranı doldur "),
        })}
        onSubmit={(values) => {
            if (admin
            .filter(x => x.email == values.email)=="") {
                document.getElementById("adminlogin_h4").style.display = "block";
            }
          admin
            .filter(x => x.email == values.email)
            .map((y) => {
                if (y.password===values.password) {
                    
                        setuser(y)
                         navigate(-1)
                }
                else{
                    document.getElementById("adminlogin_h4").style.display = "block";
                }
            });
        }}
      >
        <Form className="adminlogin">
          <h3>Login</h3>
          <h4 id="adminlogin_h4">E-posta ile Şifre eşleşmiyor</h4>
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
          <label ><Link to={"/register"} style={{color:"blue"}}>Bir hesabınız yok mu? Ücretsiz üye olun</Link></label>
          <button type="submit">Giriş Yap</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
