import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ContactDetails from './components/ContactDetails';
import EmploymentDetails from './components/EmploymentDetails';
import PersonalDetails from './components/PersonalDetails';

class StaffMemberEditProfile extends React.Component {
  render() {
    console.log('StaffMemberEditProfile params url id', this.props.match.params.id);
    const { url } = this.props.match;
    return (
      <Router>
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <div className="boss-content-switcher">
              <div className="boss-content-switcher__inner">
                <aside className="boss-content-switcher__side">
                  <nav className="boss-content-switcher__nav">
                    <NavLink
                      className="boss-content-switcher__nav-link"
                      activeClassName="boss-content-switcher__nav-link_state_active"
                      to={`${url}/employment-details`}
                    >
                      Employment Details
                    </NavLink>
                    <NavLink
                      className="boss-content-switcher__nav-link"
                      activeClassName="boss-content-switcher__nav-link_state_active"
                      to={`${url}/personal-details`}
                    >
                      Personal Details
                    </NavLink>
                    <NavLink
                      className="boss-content-switcher__nav-link"
                      activeClassName="boss-content-switcher__nav-link_state_active"
                      to={`${url}/contact-details`}
                    >
                      Contact Details
                    </NavLink>
                  </nav>
                </aside>
                <Route path={`${url}/employment-details`} component={EmploymentDetails} />
                <Route path={`${url}/personal-details`} component={PersonalDetails} />
                <Route path={`${url}/contact-details`} component={ContactDetails} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default StaffMemberEditProfile;
