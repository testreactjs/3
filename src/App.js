import React, { Component } from 'react';
import EditProfile from './pages/edit/index'
import UserProfile from './pages/profile/index'
import UsersList from './pages/index'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {

  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/edit">EditProfile</Link>
          </li>
          <li>
            <Link to="/profile">UserProfile</Link>
          </li>
          <li>
            <Link to="/">StaffMembers</Link>
          </li>
        </ul>
        <Route exact path="/edit" component={EditProfile} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/" component={UsersList} />
      </div>
    </Router>
    );
  }
}

export default App;
