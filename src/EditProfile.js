import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ContactDetails from './ContactDetails'
import EmploymentDetails from './EmploymentDetails'
import PersonalDetails from './PersonalDetails'
class EditProfile extends React.Component {

  render() {
    return (
      <Router>
        <div class="boss-page-main__content">
          <div class="boss-page-main__inner">
            <div class="boss-content-switcher">
              <div class="boss-content-switcher__inner">
                <aside className="boss-content-switcher__side">
                  <nav className="boss-content-switcher__nav">
                    <Link className="boss-content-switcher__nav-link boss-content-switcher__nav-link_state_active" to="/employment-details">Employment Details</Link>
                    <Link className="boss-content-switcher__nav-link" to="/personal-details">Personal Details</Link>
                    <Link className="boss-content-switcher__nav-link" to="/contact-details">Contact Details</Link>

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

export default EditProfile