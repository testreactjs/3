import React, { Component } from 'react';
import EditProfile from './pages/edit/index'
import UserProfile from './pages/profile/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (

       <Router>
    <div>
      <ul>
        <li>
          <Link to="/">EditProfile</Link>
        </li>
        <li>
          <Link to="/about">UserProfile</Link>
        </li>
      </ul>


      <Route exact path="/" component={EditProfile} />
      <Route path="/about" component={UserProfile} />
    </div>
  </Router>
    );
  }
}

export default App;
