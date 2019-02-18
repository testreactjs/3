import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ContactDetails from './components/ContactDetails';
import EmploymentDetails from './components/EmploymentDetails';
import PersonalDetails from './components/PersonalDetails';
import * as actions from './redux/actions';
import { getStaffMember } from './selectors';

class StaffMemberEditProfile extends React.Component {
  state = {
    isFetching: true,
  };

  componentDidMount = async () => {
    const {
      initialLoadEditProfile,
      match: {
        params: { id },
      },
    } = this.props;

    await initialLoadEditProfile(id);
    this.setState({ isFetching: false });
  };

  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }
    console.log('StaffMemberEditProfile params url id', this.props);
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
                <Route path={`${url}/employment-details`} component={EmploymentDetails} data />
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
const mapDispatchToProps = {
  initialLoadEditProfile: actions.initialLoadActionEditProfile,
};

const mapStateToProps = store => {
  return { staffMember: getStaffMember(store) };
  // return store;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaffMemberEditProfile);
