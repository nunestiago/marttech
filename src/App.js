import './App.css';
import { Navbar } from './components';
import { Login, Register, Main, Cart } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
