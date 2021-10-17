
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home' component={home} exact/>
        <Route path='/login' component={login} exact/>
        <Route path='/signup' component={signup} exact/>
      </Switch>
    </Router>
  );
}

export default App;
