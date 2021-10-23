import './App.css';
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


export default App;
