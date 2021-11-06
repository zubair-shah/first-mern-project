import './App.css';
import Signup from './components/signup/Form';
import LoginForm from './components/login/Form';
import Nonpath from './components/404';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import MainTodo from './components/todo/todoApp';
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
      <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      <Route  path='/todo'>
        <MainTodo />
        </Route>
        <Route  path='/signup'>
        <Signup />
        </Route>
        <Route exact path='/'>
        <LoginForm />
        </Route>
        <Route exact path="*">
          <Home />
        </Route>
        <Route  component={404}>
        <Nonpath />
        </Route>
      </Switch>
    
    </Router>
      
    </div>
  )
}


export default App;
