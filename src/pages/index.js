import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import StaffMemberEditProfile from "../pages/staff-member/staff-member-edit-profile/"
import StaffMemberProfile from "../pages/staff-member/staff-member-profile"
import StaffMembersList from "../pages/staff-members/"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/staff-member/edit/">EditProfile</Link>
            </li>
            <li>
              <Link to="/staff-member/profile/">UserProfile</Link>
            </li>
            <li>
              <Link to="/staff-members">StaffMembers</Link>
            </li>
          </ul>
          <Route path="/staff-member/edit/:id" component={StaffMemberEditProfile} />
          <Route path="/staff-member/profile/:id" component={StaffMemberProfile} />
          <Route exact path="/staff-members" component={StaffMembersList} />
        </div>
      </Router>
    );
  }
}

export default App;
