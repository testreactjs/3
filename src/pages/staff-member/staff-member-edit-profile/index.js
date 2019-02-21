import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import qs from 'qs';
import ContactDetails from './components/ContactDetails';
import EmploymentDetails from './components/EmploymentDetails';
import PersonalDetails from './components/PersonalDetails';
import * as actions from './redux/actions';
import {
  staffMemberSelector,
  getStaffTypesOptions,
  getVenuesOptions,
  getPayRatesOptions,
  getGenderOptions,
} from './selectors';

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

  handlerUpdateEmploymentDetails = values => {
    const { updateEmploymentDetails } = this.props;
    return updateEmploymentDetails(values);
  };

  handlerUpdatePersonalDetails = values => {
    const { updatePersonalDetails } = this.props;
    return updatePersonalDetails(values);
  };

  handlerUpdateContactDetails = values => {
    const { updateContactDetails } = this.props;
    return updateContactDetails(values);
  };

  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }
    const {
      match: { url },
      staffMember,
      genderOptions,
      venuesOptions,
      payRatesOptions,
      staffTypesOptions,
    } = this.props;

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
                <Switch>
                  <Route
                    exact
                    path={`${url}/employment-details`}
                    render={() => (
                      <EmploymentDetails
                        staffTypesOptions={staffTypesOptions}
                        payRatesOptions={payRatesOptions}
                        venuesOptions={venuesOptions}
                        staffMember={staffMember}
                        onSubmit={this.handlerUpdateEmploymentDetails}
                      />
                    )}
                  />
                  <Route
                    path={`${url}/personal-details`}
                    render={() => (
                      <PersonalDetails
                        genderOptions={genderOptions}
                        staffMember={staffMember}
                        onSubmit={this.handlerUpdatePersonalDetails}
                      />
                    )}
                  />
                  <Route
                    path={`${url}/contact-details`}
                    render={() => (
                      <ContactDetails staffMember={staffMember} onSubmit={this.handlerUpdateContactDetails} />
                    )}
                  />
                  <Route exact path={`${url}`} render={() => <Redirect to={`${url}/employment-details`} />} />
                </Switch>
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
  updateEmploymentDetails: actions.updateEmploymentDetailsAction,
  updatePersonalDetails: actions.updatePersonalDetailsAction,
  updateContactDetails: actions.updateContactDetailsAction,
};

const mapStateToProps = store => {
  return {
    staffMember: staffMemberSelector(store),
    staffTypesOptions: getStaffTypesOptions(store),
    genderOptions: getGenderOptions(store),
    venuesOptions: getVenuesOptions(store),
    payRatesOptions: getPayRatesOptions(store),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaffMemberEditProfile);
