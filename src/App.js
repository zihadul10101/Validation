import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from '../src/components/auth/Register'
import Dashborad from '../src/components/dashbord/Dashborad'

function App() {
  return (
    <Router>
      <Switch>
       
        <Route path="/" component={Register} exact />
        <Route path="/dashborad" component={Dashborad} exact />
      </Switch>
    </Router>
  );
}

export default App;
