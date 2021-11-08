import React, {useEffect , useState} from 'react'
import { Formik, Field, Form, useFormik} from "formik";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import * as yup from 'yup';
import './Form.css'
import axios from 'axios';
import Message from '../Message/Message'
import { useHistory } from 'react-router-dom';
import { BrowserRouter  as
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
    //   .phone("please enter valid phone e.g: 03XXXXXXXXX")
    //   .required('phone number is required'),
      name: yup
      .string('Enter Your Full Name ')
      // .url("please enter valid Name")
      .required('Full Name is required'),
  });

function Signup(){
  const history = useHistory();
  const [messageBar, setMessageBar] = useState("");
  const dev = "http://localhost:4000";
  const baseURL = window.location.hostname.split(":")[0] === "localhost" ? dev : ""; 
  
    const formik = useFormik({
  
        initialValues:{
            fullName: '',
            email:'',
            phone:'',
            password:'',

        },
        validationSchema : validationSchema,
        onSubmit: (values) => {
          console.log("working")
          axios.post(`${baseURL}/api/v1/add_user`,{
            fullName: values.fullName,
            phone: Number(values.phone),
            email:values.email,
            password:values.password
          
          }).then((result) => {
            if (result.data === "user created") {
              //message
              setMessageBar(true);
            setTimeout(() => {
              history.push("/login");
              setMessageBar("");
            }, 1000);
            
            }
          })
          .catch((err) => {
            console.log(err);
          });
        }
    });
    useEffect(() => {
      axios.get(`${baseURL}/api/v1/signupuser`).then((res) => {
        // console.log(res);
      });
      // eslint-disable-next-line
    }, []);
  
    return(
     
        <div>
           {messageBar === true ? (
        <Message
          type="success"
          message="Welcome! Successfully account created"
        />
      ) : (
        ""
      )}
            <h1 className="text-center">
               Welcome To Todo List
            </h1>

    <div className="form d-flex justify-content-center p-5">
            <div className="card">
        <div className="card-header">
          <center><h3> SignUp Form</h3></center>
        </div>
       
        <Box
            type="form"
            component="form"
            noValidate
            autoComplete="off"
            // textAlign="center"
            onSubmit={formik.handleSubmit}
            id="loginForm" className="card-body px-5 py-4"
          >

<TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />



<TextField
            fullWidth
            // color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
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
          
              <center>
                <Link to="/">
                  <button className="btn btn-primary" onClick={() => history.push("/login")}>  I have an account </button>
                  </Link> 
                 <button type="submit"  className="btn btn-secondary">Signup</button>
          </center> 
          
        {/* </form> */}
        </Box>
    
    
      </div>
            </div>
        </div>
    )
}

export default Signup;