import React from 'react'
import * as actions from './redux/actions'
import { connect } from 'react-redux'
import { getStaffMember } from './selectors'
class StaffMemberProfile extends React.Component {
  state = {
    isFetching: true,
  }

    componentDidMount = async () => {
        const { initialLoadStaffMember, match: { params: { id } } } = this.props;

        await initialLoadStaffMember(id);
        this.setState({ isFetching: false })
    }

    showTitle = () =>
    {
        const titlesText = ['Profile', 'Holidays', 'Owed hours', 'Accessories', 'Shifts', 'Payments'];
        return titlesText.map((title, i) =>
            (<a key={i} href="#" className="boss-button boss-button_type_small boss-button_role_profile boss-button_state_active boss-page-dashboard__switch">{title}</a>)
        )
    }
    showDetailItem = (title, value) => {
        return (
            <li className="boss-details__item">
                <p className="boss-details__label">{title}</p>
                <p className="boss-details__value">{value}</p>
            </li>
        )
    }
    showDetailItemSmall = (title, value) => {
        return (
        <li className="boss-details__item">
            <p className="boss-details__label boss-details__label_size_small">{title}</p>
            <p className="boss-details__value">{value}</p>
        </li>
        )
    }

    render() {
        console.log("StaffMemberProfile params", this.props)
        const {
            avatarUrl,
            firstName,
            surname,
            email,
            staffTypeName,
            phoneNumber,
            venueName,
            startsAt,
            payRateId,
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
            postcode
        } = this.props.staffMember;
        const {match: { params: { id } } } = this.props;
        const { isFetching } = this.state;
        if (isFetching) {
            return null;
        }
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
                                                <img src={avatarUrl} alt={`${firstName} ${surname}`} className="boss-user-summary__pic" />>
                                            </div>
                                            <a href={`/staff-member/edit/${id}`} className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit">Edit</a>
                                        </div>
                                    </div>
                                    <div className="boss-user-summary__content">
                                        <div className="boss-user-summary__header">
                                            <h2 className="boss-user-summary__name">{firstName} {surname}</h2>
                                            <span className="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label" >{staffTypeName}</span>
                                        </div>
                                        <div className="boss-user-summary__contacts">
                                            <a href={`mailto:${email}`} className="boss-user-summary__link boss-user-summary__link_role_email">{email}</a>
                                            <a href={`tel:${phoneNumber}`} className="boss-user-summary__link boss-user-summary__link_role_phone">{phoneNumber}</a>
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
                                <a href={`/staff-member/edit/${id}`} className="boss-button boss-button_role_edit boss-page-dashboard__button">Edit Profile</a>
                                <a href="#" className="boss-button boss-button_role_block boss-page-dashboard__button">Disable Staff Member</a>
                            </div>
                        </div>

                        <div className="boss-page-dashboard__switches">
                        {this.showTitle()}
                        </div>
                    </div>
                   </div>
                </div>
            <div className="boss-page-main__content">
                <div className="boss-page-main__inner">
                    <div className="boss-page-main__flow">
                        <div className="boss-page-main__isle">
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">1</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Employment Details</h3>
                                    <ul className="boss-details__list">

                                        { this.showDetailItem("Main Venue", venueName) }
                                        { this.showDetailItem("Other Venues", "!!!! LATER N / A") }
                                        { this.showDetailItem("Job Type", staffTypeName) }
                                        { this.showDetailItem("Start Date", startsAt) }
                                        { this.showDetailItem("Pay Rate !!!", payRateId) }
                                        { this.showDetailItem("Hour Preference", hoursPreferenceNote) }
                                        { this.showDetailItem("Day Preference", dayPreferenceNote) }
                                        { this.showDetailItem("National Insurance Number", nationalInsuranceNumber) }
                                        { this.showDetailItem("Sage ID", sageId) }
                                        { this.showDetailItem("Status Statement", statusStatement) }
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="boss-page-main__isle">
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">2</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Account Details</h3>
                                    <ul className="boss-details__list">
                                        { this.showDetailItemSmall("Created", createdAt) }
                                        { this.showDetailItemSmall("Status", isActive) }
                                        { this.showDetailItemSmall("User", hasUser) }
                                        { this.showDetailItemSmall("Application Password", passwordSetAt) }
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">ID Scanner App Guid</p>
                                            <p className="boss-details__value">
                                                <img src="http://boss-styles.herokuapp.com/images/hello-world_512.png" alt="qr code preview" className="boss-details__qr" />
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                        </div>

                        <div className="boss-page-main__isle">
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">3</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Personal Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Name</p>
                                            <p className="boss-details__value">{firstName} {surname}</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Gender</p>
                                            <p className="boss-details__value">{gender}</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label">Date of Birth</p>
                                            <p className="boss-details__value">{dateOfBirth}</p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="boss-page-main__isle">
                            <section className="boss-details">
                                <p className="boss-details__pointer"><span className="boss-details__pointer-text">4</span></p>
                                <div className="boss-details__content">
                                    <h3 className="boss-details__title">Contact Details</h3>
                                    <ul className="boss-details__list">
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Email Address</p>
                                            <p className="boss-details__value">{email}</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Phone Number</p>
                                            <p className="boss-details__value">{phoneNumber}</p>
                                        </li>
                                        <li className="boss-details__item">
                                            <p className="boss-details__label boss-details__label_size_small">Address</p>
                                            <p className="boss-details__value">
                                                <span className="boss-details__value-line">---</span>
                                                <span className="boss-details__value-line">----</span>
                                                <span className="boss-details__value-line">{country}</span>
                                                <span className="boss-details__value-line">{postcode}</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="boss-page-main__isle">
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
                                        </li>
                                        <li className="boss-details__item">
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
                        </div>

                        <div className="boss-page-main__isle">
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
            </section>
        )
    }
}

const mapDispatchToProps = {
    initialLoadStaffMember: actions.initialLoadActionStaffMember,
}
const mapStateToProps = store => {
    return { staffMember: getStaffMember(store), };
    //return store;

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StaffMemberProfile)


