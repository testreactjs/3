import React, { Component } from 'react';
import StaffMemberEditProfile from '../pages/staff-member/staff-member-edit-profile/'
import StaffMemberProfile from '../pages/staff-member/staff-member-profile'
import StaffMembersList from '../pages/staff-members/'
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
          <Route exact path="/edit" component={StaffMemberEditProfile} />
          <Route path="/profile" component={StaffMemberProfile} />
          <Route path="/" component={StaffMembersList} />
        </div>
      </Router>
    );
  }
}

export default App;
