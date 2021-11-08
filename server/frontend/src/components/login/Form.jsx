import React, {useState } from 'react'
import  Message  from '../Message/Message';
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, useFormik } from "formik";
// import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import './Form.css';

import axios from 'axios'
import { GlobalContext } from "../../context/Context";
import { useContext } from 'react';
import { BrowserRouter as 
  Router,
  Route,
  Switch,
  Link

} from 'react-router-dom';



  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(10, 'No more then 10')
      .required('Password is required'),
    // phone: yup
    //   .string('Enter Your phone number')
    //   .phone("please enter valid URL e.g: https://somewebsite.com")
    //   .required('phone number is required'),
      name: yup
      .string('Enter Your Full Name ')
      .url("please enter valid Name")
      .required('Full Namw is required'),
  });


function LoginForm(){
  let { dispatch } = useContext(GlobalContext);
  const [messageBar , setMessageBar] = useState("")
  const dev = "http://localhost:4000";
  const baseURL =
    window.location.hostname.split(":")[0] === "localhost" ? dev : "";
  
    const formik = useFormik({
        initialValues:{
            
            email:'',
        
            password:'',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          axios
            .post(`${baseURL}/api/v1/login`, {
              email: values.email,
              password: values.password,
            })
            .then((result) => {
              if (result.data !== "error") {
                dispatch({
                  type: "USER_LOGIN",
                  payload: {
                    fullName: result.data.fullName,
                    email: result.data.email,
                    // gender: result.data.gender,
                    phone: result.data.phone,
                    // address: result.data.address,
                  },
                });
                //message
                setMessageBar(true);
                setTimeout(() => {
                  history.push("/dashboard");
                  setMessageBar([]);
                }, 1000);
                console.log("successful login");
              } else {
                setMessageBar(false);
                setTimeout(() => {
                  setMessageBar([]);
                }, 1000);
                 console.log("Email or password is invalid");
               
              }
            });
        },
    });
    const history = useHistory();
    return(
      
        <div>
            {messageBar === true ? <Message type="success" message="Welcome" /> : ""}
      {messageBar === false ? (
        <Message type="error" message="Invalid email or password" />
      ) : (
        ""
      )}
            <h1 className="text-center">
                Welcome to Todo List
            </h1>

    <div className="form d-flex justify-content-center p-5">
            <div className="card">
        <div className="card-header">
          <center><h3>Login Form</h3></center>
        </div>
        <Formik>
        <form onSubmit={formik.handleSubmit} id="loginForm" className="card-body px-5 py-4">
          



<TextField
            fullWidth
            // color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          

          <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          
              <center><button type="submit" className="btn btn-primary">Login</button>
              <Link to="/signup"> <button className="btn btn-secondary"  onClick={() => history.push("/signup")}> Create an Account</button></Link>
          </center> 
          
        </form>
        </Formik> 
    
      </div>
            </div>
        </div>
    )
}

export default LoginForm;