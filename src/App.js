
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup.js'
import product from './pages/product';

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path='/home' component={home} exact/>
        <Route path='/login' component={login} exact/>
        <Route path='/signup' component={signup} exact/>
        <Route path='/product/:id' component={product} exact />
      </Switch>
    </Router>
  );
}

export default App;
