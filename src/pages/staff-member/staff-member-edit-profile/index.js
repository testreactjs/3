import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ContactDetails from './components/ContactDetails'
import EmploymentDetails from './components/EmploymentDetails'
import PersonalDetails from './components/PersonalDetails'
class StaffMemberEditProfile extends React.Component {

  render() {
    return (
      <Router>
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <div className="boss-content-switcher">
              <div className="boss-content-switcher__inner">
                <aside className="boss-content-switcher__side">
                  <nav className="boss-content-switcher__nav">
                    <NavLink className="boss-content-switcher__nav-link" activeClassName="boss-content-switcher__nav-link_state_active" to="/employment-details">Employment Details</NavLink>
                    <NavLink className="boss-content-switcher__nav-link" activeClassName="boss-content-switcher__nav-link_state_active" to="/personal-details">Personal Details</NavLink>
                    <NavLink className="boss-content-switcher__nav-link" activeClassName="boss-content-switcher__nav-link_state_active" to="/contact-details">Contact Details</NavLink>
                  </nav>
                </aside>
                <Route path="/employment-details" component={EmploymentDetails} />
                <Route path="/personal-details" component={PersonalDetails} />
                <Route path="/contact-details" component={ContactDetails} />
              </div>
            </div>
          </div>
        </div>
      </Router>


    )
    }
}

export default StaffMemberEditProfile;