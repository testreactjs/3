import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StaffMemberEditProfile from './staff-member/staff-member-edit-profile';
import StaffMemberProfile from './staff-member/staff-member-profile';
import StaffMembersList from './staff-members';

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <header className="boss-page-header">
            <div className="boss-page-header__inner">
              <div className="boss-page-header__group boss-page-header__group_role_logo">
                <Link className="boss-page-header__logo" to="/staff-member/edit/">
                  Edit Profile
                </Link>
                {' | '}
                <Link className="boss-page-header__logo" to="/staff-member/profile/">
                  User Profile
                </Link>
                {' | '}
                <Link className="boss-page-header__logo" to="/staff-members">
                  Staff Members
                </Link>
              </div>
            </div>
          </header>
          <main className="boss-page-main">
            <Route path="/staff-member/edit/:id" component={StaffMemberEditProfile} />
            <Route path="/staff-member/profile/:id" component={StaffMemberProfile} />
            <Route exact path="/staff-members" component={StaffMembersList} />
          </main>
        </section>
      </Router>
    );
  }
}

export default App;
