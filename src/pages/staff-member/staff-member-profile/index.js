import React from 'react'

class StaffMemberProfile extends React.Component {

  render() {

    return (

<main className="boss-page-main">
            <div className="boss-page-main__dashboard">
                <div className="boss-page-main__inner">
                   {/* <!-- Page dashboard start --></div> */}
                    <div className="boss-page-dashboard boss-page-dashboard_updated boss-page-dashboard_page_profile">
                        <div className="boss-page-dashboard__group">
                            <div className="boss-page-dashboard__user-summary">
                                {/* <!-- User informtion start --> */}
                                <div className="boss-user-summary">
                                    <div className="boss-user-summary__side">
                                        <div className="boss-user-summary__avatar">
                                            <div className="boss-user-summary__avatar-inner">
                                                <img src="../images/avatars/user-info_pic.jpg" alt="Trulla Collier" className="boss-user-summary__pic" />
                                            </div>
                                            <a href="#" className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">Edit</a>
                                        </div>
                                    </div>
                                    <div className="boss-user-summary__content">
                                        <div className="boss-user-summary__header">
                                            <h2 className="boss-user-summary_ className">Trulla Collier</h2>
                                            <span className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label" >Floor Staff</span>
                                        </div>
                                        <div className="boss-user-summary__contacts">
                                            <a href="mailto:trulla.collier@yahoo.com" className="boss-user-summary__link boss-user-summary__link_role_email">trulla.collier@yahoo.com</a>
                                            <a href="tel:123342342" className="boss-user-summary__link boss-user-summary__link_role_phone">+123 342 342</a>
                                        </div>
                                        <ul className="boss-user-summary__review-list">
                                            <li className="boss-user-summary__review-item boss-user-summary__review-item_role_venue">
                                                <span className="boss-user-summary__review-marked">Some Venue className</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                               {/* <!-- User informtion end --> */}
                            </div>
                            <div className="boss-page-dashboard__buttons-group">
                                <a href="#" className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</a>
                                <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</a>
                            </div>
                        </div>

                        <div className="boss-page-dashboard__switches">
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch">Profile</a>
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_holidays boss-page-dashboard__switch">Holidays</a>
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_timelog boss-page-dashboard__switch">Owed hours</a>
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_accessories boss-page-dashboard__switch">Accessories</a>
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_shifts boss-page-dashboard__switch">Shifts</a>
                            <a href="#" className="boss-button boss-button_type_small boss-button_role_payments boss-page-dashboard__switch">Payments</a>
                        </div>
                    </div>
                    {/* <!-- Page dashboard end -->*/}
                </div>
            </div>

            <div className="boss-page-main__content">
                <div className="boss-page-main__inner">
                    <div className="boss-page-main__flow">
                        <div className="boss-page-main__isle">
                           {/*  <!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">1</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Employment Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Main Venue</p>
                                            <p className="boss-details__value">McCoolay’s</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Other Venues</p>
                                            <p className="boss-details__value">N / A</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Job Type</p>
                                            <p className="boss-details__value">Floor Staff</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Start Date</p>
                                            <p className="boss-details__value">Tue 11/15/2016</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Pay Rate</p>
                                            <p className="boss-details__value">Age 18-20</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Hour Preference</p>
                                            <p className="boss-details__value">20 - 25</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Day Preference</p>
                                            <p className="boss-details__value">Thursday / Saturday / Sunday</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">National Insurance Number</p>
                                            <p className="boss-details__value">PE630024B</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Sage ID</p>
                                            <p className="boss-details__value">260</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Status Statement</p>
                                            <p className="boss-details__value">A</p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                           {/* <!-- Details end -->*/}
                        </div>

                        <div className="boss-page-main__isle">
                          {/*  <!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">2</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Account Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Created</p>
                                            <p className="boss-details__value">Mon 11/14/2016</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Status</p>
                                            <p className="boss-details__value">Active</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">User</p>
                                            <p className="boss-details__value">No Associated User</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Application Password</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">Set at 10:30 Mon 11/15/2016</span>
                                            </p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">ID Scanner App Guid</p>
                                            <p className="boss-details__value">
                                                <img src="images/hello-world_512.png" alt="qr code preview" className="boss-details__qr" />
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                           {/* <!-- Details end -->*/}
                        </div>

                        <div className="boss-page-main__isle">
                            {/*<!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">3</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Personal Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label"></p>
                                            <p className="boss-details__value">Trulla Collier</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Gender</p>
                                            <p className="boss-details__value">Female</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Date of Birth</p>
                                            <p className="boss-details__value">23 April 1999</p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                           {/* <!-- Details end -->*/}
                        </div>

                        <div className="boss-page-main__isle">
                           {/* <!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">4</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Contact Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Email Address</p>
                                            <p className="boss-details__value">trulla.collier@yahoo.com</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Phone Number</p>
                                            <p className="boss-details__value">+123 342 342</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Address</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">907 Charisse Junction</span>
                                                <span className="boss-details__value-line">New Jersey</span>
                                                <span className="boss-details__value-line">Monaco</span>
                                                <span className="boss-details__value-line">42448</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            {/* <!-- Details end -->*/}
                        </div>

                        <div className="boss-page-main__isle">
                            {/*<!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">5</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Mobile Apps</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Some App</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">
                                                    <a href="#" className="boss-details__value-action">Send download email</a>
                                                </span>
                                                <span className="boss-details__value-line">Last sent at 10:30 Mon 11/15/2016</span>
                                            </p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Other App</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">
                                                    <a href="#" className="boss-details__value-action">Send download email</a>
                                                </span>
                                            </p>
                                        </li><li className="boss-details__item">
                                            <p className="boss-details__label">Another App</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">
                                                    <a href="#" className="boss-details__value-action">Send download email</a>
                                                </span>
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                            </section>
                           {/* <!-- Details end -->*/}
                        </div>

                        <div className="boss-page-main__isle">
                            {/*<!-- Details start -->*/}
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">6</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Revisions History</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <button className="boss-button boss-button_role_view-history boss-button_type_small">View History</button>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
    }
}

export default StaffMemberProfile;