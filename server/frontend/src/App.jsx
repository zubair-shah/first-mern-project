import './App.css';
// import { Formik, Field, Form, useFormik } from "formik";
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import * as yup from 'yup';
import Signup from './signup/Form';
import LoginForm from './login/Form';
import Nonpath from './404';
import MainTodo from './todo/todoApp';
import { BrowserRouter as 
         Router,
         Switch,
         Route,
         Link

} from 'react-router-dom';





function App(){
  return(
    
    <div>
    <Router>
      <Switch>
      <Route  path='/todo'>
        <MainTodo />
        </Route>
        <Route  path='/signup'>
        <Signup />
        </Route>
        <Route exact path='/'>
        <LoginForm />
        </Route>
        <Route  component={404}>
        <Nonpath />
        </Route>
      </Switch>
    
    </Router>
      
    </div>
  )
}


// // function doSomething(values) {
// //   console.log("values: ", values)
// // }
// function onSubmitFunction(values) {
//   console.log("values: ", values)
// }

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .max(10, 'No more then 10')
//     .required('Password is required'),
//   website: yup
//     .string('Enter Your Website link')
//     .url("please enter valid URL e.g: https://somewebsite.com")
//     .required('link is required'),
// });


// function App() {

//   const formik = useFormik({
//     validationSchema: validationSchema,
//     initialValues: {
//       website: '',
//       email: '',
//       password: '',
//     },
//     onSubmit: onSubmitFunction
//   });


//   return ( 
    


//     <div style={{ padding: "1rem" }}>

//       {/* <Formik
//         initialValues={{ name: "", email: "" }}
//         onSubmit={doSomething}
//       >
//         <Form>
//           <Field name="name" type="text" />
//           <Field name="email" type="email" />
//           <button type="submit">Submit</button>
//         </Form>
//       </Formik> */}

// <Formik>
// <form onSubmit={formik.handleSubmit}>
//         <Stack spacing={2}>
//           <TextField
//             fullWidth
//             color="primary"
//             id="outlined-basic"
//             label="Enter your website"
//             variant="outlined"
//             name="website"
//             value={formik.values.website}
//             onChange={formik.handleChange}
//             error={formik.touched.website && Boolean(formik.errors.website)}
//             helperText={formik.touched.website && formik.errors.website}
//           />

//           <TextField
//             fullWidth
//             color="primary"
//             id="outlined-basic"
//             label="Outlined"
//             variant="outlined"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//           />

//           <TextField
//             fullWidth
//             color="primary"
//             id="filled-basic"
//             label="Outlined"
//             variant="outlined"
//             type="password"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />

//           <Button fullWidth variant="contained" color="primary" type="submit">Button</Button>
//         </Stack>

//       </form>

// </Formik>

     
//     </div>
//   );
// }

export default App;
