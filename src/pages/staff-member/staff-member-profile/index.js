import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as actions from './redux/actions';
import { getStaffMember } from './selectors';

const DetailsList = ({ title, pointerText, children }) => {
  return (
    <div className="boss-page-main__isle">
      <section className="boss-details">
        <p className="boss-details__pointer">
          <span className="boss-details__pointer-text">{pointerText}</span>
        </p>
        <div className="boss-details__content">
          <h3 className="boss-details__title">{title}</h3>
          <ul className="boss-details__list">{children}</ul>
        </div>
      </section>
    </div>
  );
};

const DetailsListItem = ({ title, value, small }) => {
  return (
    <li className="boss-details__item">
      <p className={`boss-details__label ${small === 'true' ? 'boss-details__label_size_small' : ''}`}>{title}</p>
      <p className="boss-details__value">{value}</p>
    </li>
  );
};

const DetailsListItemButton = ({ title }) => {
  return (
    <li className="boss-details__item">
      <button className="boss-button boss-button_role_view-history boss-button_type_small">{title}</button>
    </li>
  );
};
const DetailsListItemMobile = ({ title, value, hrefValue, secondSpan = '' }) => {
  return (
    <li className="boss-details__item">
      <p className="boss-details__label">{title}</p>
      <p className="boss-details__value">
        <span className="boss-details__value-line">
          <a href={hrefValue} className="boss-details__value-action">
            {value}
          </a>
        </span>
        {secondSpan !== '' ? <span className="boss-details__value-line">{secondSpan}</span> : ''}
      </p>
    </li>
  );
};
const DetailsListItemImg = ({ title, value, imgUrl }) => {
  return (
    <li key={title} className="boss-details__item">
      <p className="boss-details__label">{title}</p>
      <p className="boss-details__value">
        <img className="boss-details__qr" src={imgUrl} alt={value} />
      </p>
    </li>
  );
};

const DetailsListItemSpans = ({ title, country, postcode, address, county }) => {
  return (
    <li className="boss-details__item">
      <p className="boss-details__label boss-details__label_size_small">{title}</p>
      <p className="boss-details__value">
        <span className="boss-details__value-line">{address}</span>
        <span className="boss-details__value-line">{county}</span>
        <span className="boss-details__value-line">{country}</span>
        <span className="boss-details__value-line">{postcode}</span>
      </p>
    </li>
  );
};
class StaffMemberProfile extends React.Component {
  state = {
    isFetching: true,
  };

  componentDidMount = async () => {
    const {
      initialLoadStaffMember,
      match: {
        params: { id },
      },
    } = this.props;

    await initialLoadStaffMember(id);
    this.setState({ isFetching: false });
  };

  showTitle = () => {
    const titlesText = ['Profile', 'Holidays', 'Owed hours', 'Accessories', 'Shifts', 'Payments'];
    return titlesText.map((title, i) => (
      <a
        key={i}
        href="#"
        className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch"
      >
        {title}
      </a>
    ));
  };

  showDetailItem = (title, value) => {
    return (
      <li key={title} className="boss-details__item">
        <p className="boss-details__label">{title}</p>
        <p className="boss-details__value">{value}</p>
      </li>
    );
  };

  showDetailItemSmall = (title, value) => {
    return (
      <li className="boss-details__item">
        <p className="boss-details__label boss-details__label_size_small">{title}</p>
        <p className="boss-details__value">{value}</p>
      </li>
    );
  };

  showSendDownloadEmail = (title, value) => {
    return (
      <li className="boss-details__item">
        <p className="boss-details__label">{title}</p>
        <p className="boss-details__value">
          <span className="boss-details__value-line">
            <a href="#" className="boss-details__value-action">
              {value}
            </a>
          </span>
        </p>
      </li>
    );
  };

  showDetail = (title, pointerText, innerText) => {
    return (
      <div className="boss-page-main__isle">
        <section className="boss-details">
          <p className="boss-details__pointer">
            <span className="boss-details__pointer-text">{pointerText}</span>
          </p>
          <div className="boss-details__content">
            <h3 className="boss-details__title">{title}</h3>
            <ul className="boss-details__list">{innerText}</ul>
          </div>
        </section>
      </div>
    );
  };

  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }

    const {
      avatarUrl,
      firstName,
      surname,
      email,
      staffTypeName,
      phoneNumber,
      venueName,
      otherVenues,
      startsAt,
      payRate,
      hoursPreferenceNote,
      dayPreferenceNote,
      nationalInsuranceNumber,
      sageId,
      statusStatement,
      createdAt,
      isActive,
      hasUser,
      passwordSetAt,
      gender,
      dateOfBirth,
      country,
      county,
      address,
      postcode,
    } = this.props.staffMember;
    const {
      match: {
        params: { id },
      },
    } = this.props;

    return (
      <section>
        <div className="boss-page-main__dashboard">
          <div className="boss-page-main__inner">
            <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
              <div className="boss-page-dashboard__group">
                <div className="boss-page-dashboard__user-summary">
                  <div className="boss-user-summary">
                    <div className="boss-user-summary__side">
                      <div className="boss-user-summary__avatar">
                        <div className="boss-user-summary__avatar-inner">
                          <img src={avatarUrl} alt={`${firstName} ${surname}`} className="boss-user-summary__pic" />
                        </div>
                        <a
                          href={`/staff-member/edit/${id}`}
                          className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit"
                        >
                          Edit
                        </a>
                      </div>
                    </div>
                    <div className="boss-user-summary__content">
                      <div className="boss-user-summary__header">
                        <h2 className="boss-user-summary__name">
                          {firstName} {surname}
                        </h2>
                        <span className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label">
                          {staffTypeName}
                        </span>
                      </div>
                      <div className="boss-user-summary__contacts">
                        <a
                          href={`mailto:${email}`}
                          className="boss-user-summary__link boss-user-summary__link_role_email"
                        >
                          {email}
                        </a>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="boss-user-summary__link boss-user-summary__link_role_phone"
                        >
                          {phoneNumber}
                        </a>
                      </div>
                      <ul className="boss-user-summary__review-list">
                        <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                          <span className="boss-user-summary__review-marked">{venueName}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="boss-page-dashboard__buttons-group">
                  <a
                    href={`/staff-member/edit/${id}`}
                    className="boss-button boss-button_role_edit boss-page-dashboard__button"
                  >
                    Edit Profile
                  </a>
                  <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">
                    Disable Staff Member
                  </a>
                </div>
              </div>

              <div className="boss-page-dashboard__switches">{this.showTitle()}</div>
            </div>
          </div>
        </div>
        <div className="boss-page-main__content">
          <div className="boss-page-main__inner">
            <div className="boss-page-main__flow">
              <DetailsList title="Employment Details" pointerText="1">
                <DetailsListItem title="Main Venue" value={venueName} />
                <DetailsListItem title="Other Venues" value={otherVenues} />
                <DetailsListItem title="Job Type" value={staffTypeName} />
                <DetailsListItem title="Start Date" value={startsAt} />
                <DetailsListItem title="Pay Rate" value={payRate} />
                <DetailsListItem title="Hour Preference" value={hoursPreferenceNote} />
                <DetailsListItem title="Day Preference" value={dayPreferenceNote} />
                <DetailsListItem title="National Insurance Number" value={nationalInsuranceNumber} />
                <DetailsListItem title="Sage ID" value={sageId} />
                <DetailsListItem title="Status Statement" value={statusStatement} />
              </DetailsList>
              <DetailsList title="Account Details" pointerText="2">
                <DetailsListItem title="Created" value={moment(createdAt).format('DD-MM-YYYY HH:mm:ss')} />
                <DetailsListItem title="Status" value={isActive} />
                <DetailsListItem title="User" value={hasUser} />
                <DetailsListItem
                  title="Application Password"
                  value={moment(passwordSetAt).format('DD-MM-YYYY HH:mm:ss')}
                />
                <DetailsListItemImg
                  title="ID Scanner App Guid"
                  value="qr code preview"
                  imgUrl="http://boss-styles.herokuapp.com/images/hello-world_512.png"
                />
              </DetailsList>
              <DetailsList title="Personal Details" pointerText="3">
                <DetailsListItem title="Name" value={`${firstName} ${surname}`} />
                <DetailsListItem title="Gender" value={gender} />
                <DetailsListItem title="Date of Birth" value={dateOfBirth} />
              </DetailsList>
              <DetailsList title="Contact Details" pointerText="4">
                <DetailsListItem title="Email Address" value={email} small="true" />
                <DetailsListItem title="Phone Number" value={phoneNumber} small="true" />
                <DetailsListItem title="Date of Birth" value={dateOfBirth} small="true" />
                <DetailsListItemSpans
                  title="Address"
                  address={address}
                  county={county}
                  country={country}
                  postcode={postcode}
                />
              </DetailsList>
              <DetailsList title="Mobile Apps" pointerText="5">
                <DetailsListItemMobile
                  title="Some App"
                  value="Send download email"
                  hrefValue="#"
                  secondSpan="Last sent at 10:30 Mon 11/15/2016"
                />
                <DetailsListItemMobile title="Other App" value="Send download email" hrefValue="#" />
                <DetailsListItemMobile title="Another Ap" value="Send download email" hrefValue="#" />
              </DetailsList>
              <DetailsList title="Revisions History" pointerText="6">
                <DetailsListItemButton title="View History" />
              </DetailsList>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  initialLoadStaffMember: actions.initialLoadActionStaffMember,
};
const mapStateToProps = store => {
  return { staffMember: getStaffMember(store) };
  // return store;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaffMemberProfile);
