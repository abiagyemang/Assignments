import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/pages/login-form/login';
import Signup from './pages/pages/signup-form/signup';
import Dashboard from './pages/pages/dash/dashboard';


function App() {
  return (

    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>

  );
}

export default App;
