import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import qs from 'qs';
import ContactDetails from './components/ContactDetails';
import EmploymentDetails from './components/EmploymentDetails';
import PersonalDetails from './components/PersonalDetails';
import * as actions from './redux/actions';
import { getEditProfile, getStaffTypes, getVenues, getGenderValues, getPayRates } from './selectors';

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

  handlerChangeEmploymentDetails = values => {
    console.log('handlerChangeEmploymentDetails', values);
  };

  handlerChangePersonalDetails = values => {
    console.log('handlerChangePersonalDetails', values);
    const {
      changePersonalDetailsProfile,
      match: {
        params: { id },
      },
    } = this.props;
    const cleanDataPersonalDetails = { gender: null, dateOfBirth: null, firstName: null, surname: null };
    const sendDataPersonalDetails = { ...cleanDataPersonalDetails, ...values };
    changePersonalDetailsProfile(id, sendDataPersonalDetails);
    // console.log('handlerChangePersonalDetails sendData', sendData.gender, JSON.stringify(sendData));
  };

  handlerChangeContactDetails = values => {
    console.log('handlerChangeContactDetails', values);
  };

  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }
    // console.log('StaffMemberEditProfile this.props', this.props);
    const {
      match: { url },
      staffMemberEditPage,
      staffTypes,
      genderValues,
      payRates,
      venues,
    } = this.props;
    // Personal Details
    const { firstName, surname, dateOfBirth, gender } = staffMemberEditPage;
    // Contact Details
    const { email, phoneNumber, address, postcode, country, county } = staffMemberEditPage;
    // Employment Details
    const {
      masterVenueId,
      otherVenueIds,
      staffTypeId,
      /* dateOfBirth, */ payRateId,
      dayPreferenceNote,
      hoursPreferenceNote,
      nationalInsuranceNumber,
      sageId,
      statusStatement,
    } = staffMemberEditPage;

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
                        data={{
                          masterVenueId,
                          otherVenueIds,
                          staffTypeId,
                          dateOfBirth,
                          payRateId,
                          dayPreferenceNote,
                          hoursPreferenceNote,
                          nationalInsuranceNumber,
                          sageId,
                          statusStatement,
                          staffTypes,
                          payRates,
                          venues,
                        }}
                        onChange={this.handlerChangeEmploymentDetails}
                      />
                    )}
                  />
                  <Route
                    path={`${url}/personal-details`}
                    render={() => (
                      <PersonalDetails
                        data={{ firstName, surname, dateOfBirth, gender, genderValues }}
                        onChange={this.handlerChangePersonalDetails}
                      />
                    )}
                  />
                  <Route
                    path={`${url}/contact-details`}
                    render={() => (
                      <ContactDetails
                        data={{ email, phoneNumber, address, postcode, country, county }}
                        onChange={this.handlerChangeContactDetails}
                      />
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
  changePersonalDetailsProfile: actions.changePersonalDetailsAction,
};

const mapStateToProps = store => {
  return {
    staffMemberEditPage: getEditProfile(store),
    staffTypes: getStaffTypes(store),
    venues: getVenues(store),
    genderValues: getGenderValues(store),
    payRates: getPayRates(store),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaffMemberEditProfile);
