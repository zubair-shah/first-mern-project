import React from 'react'
import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import './Form.css'
import { BrowserRouter  as
  Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom';

function onSubmitFunction(values) {
    console.log("values: ", values)
  }

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


function Signup(){

  
    const formik = useFormik({
        validationSchema : validationSchema,
        initialValues:{
            name: '',
            email:'',
            phone:'',
            password:'',

        },
        onSubmit: onSubmitFunction
    });
    return(
        <div>
            <h1 className="text-center">
               Welcome To Todo List
            </h1>

    <div className="form d-flex justify-content-center p-5">
            <div className="card">
        <div className="card-header">
          <center><h3> SignUp Form</h3></center>
        </div>
        <Formik>
        <form onSubmit={formik.handleSubmit} id="loginForm" className="card-body px-5 py-4">
          
          {/* <center><small><span id="error" style={{color: 'red'}} /></small></center>
          <center><label className="custom-field">
              <input 
             type="text" 
             name="email" 
             value={formik.values.email}
             onChange={formik.handleChange}
             error={formik.touched.email && Boolean(formik.errors.email)}
             helpertext={formik.touched.email && formik.errors.email}
             />
            <span className="placeholder">Email Id</span>
            </label><br />
            <label className="custom-field">
            <input id="password" type="password" className="input" 
      name="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helpertext={formik.touched.password && formik.errors.password}
      />
              <span className="placeholder">Password</span>
            </label></center><br /><br />
          <a href="#">Forgot Password</a>
          <center><button type="submit" className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">Sign Up</button>
          </center> */}


<TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />



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
           id="outlined-basic"
           label="Phone"
           variant="outlined"
           name="phone" />

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
          
              <center><button type="submit" className="btn btn-primary"> <Link to="/"> Login </Link> </button>
            <button className="btn btn-secondary">Sign Up</button>
          </center> 
          
        </form>
        </Formik>
    
      </div>
            </div>
        </div>
    )
}

export default Signup;