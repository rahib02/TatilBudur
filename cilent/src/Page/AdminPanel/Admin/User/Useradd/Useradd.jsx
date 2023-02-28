import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Useradd.css'
import axios from 'axios';
function Useradd() {
  return (
    <div className="Loginadmin" >
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <Formik
        initialValues={{ email: "", password: "",position:""}}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Buranı doldur "),
          password: Yup.string().required("Buranı doldur "),
          position:Yup.string().required("Buranı doldur ")
        })}
        onSubmit={(values) => {
            axios.post("http://localhost:8000/login",{
                email:values.email,
                password:values.password,
                position:values.position
            })
        }}
      >
        <Form className="adminlogin" style={{backgroundColor:"black"}}>
          <h3>Sign Up</h3>
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

           
            <ErrorMessage name="password" />
          </span>
           <div className='useradd_radiobtn'>
            <div><label >User</label>
            <Field 
            className="useradd_radio"
            name="position"
            type="radio"
            id="position"
             value="user"
          />
          <label >Admin</label>
           <Field 
           className="useradd_radio"
            name="position"
            type="radio"
            id="position"
            value="admin"
          /></div>
          <div>
            <span><ErrorMessage name="position" /></span>
          </div>
           </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Useradd