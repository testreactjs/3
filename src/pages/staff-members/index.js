import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStaffMembers } from '../../selectors';
import * as actions from './redux/actions';

const DetailsListItem = ({ title, value, url, avatarUrl }) => {
  return avatarUrl ? (
    <div className="boss-table__cell">
      <div className="boss-table__image">
        <a href="#" className="boss-table__link">
          <div className="boss-avatar boss-avatar_type_combined">
            <img src={avatarUrl} className="boss-avatar__image" />
          </div>
        </a>
      </div>
    </div>
  ) : (
    <div className="boss-table__cell">
      <div className="boss-table__info">
        <p className="boss-table__label">{title}</p>
        <p className="boss-table__text">
          <a href={url} className="boss-table__link">
            {value}
          </a>
        </p>
      </div>
    </div>
  );
};

class StaffMembersList extends Component {
  state = {
    isFetching: true,
  };

  componentDidMount = async () => {
    const { initialLoad } = this.props;
    // console.log("this.props", this.props)
    await initialLoad();
    this.setState({ isFetching: false });
  };

  showHeaderHtml = () => {
    return (
      <div className="boss-table__row">
        <div className="boss-table__cell boss-table__cell_role_header" />
        <div className="boss-table__cell boss-table__cell_role_header">Name</div>
        <div className="boss-table__cell boss-table__cell_role_header">Modified</div>
        <div className="boss-table__cell boss-table__cell_role_header">Status</div>
        <div className="boss-table__cell boss-table__cell_role_header">Type</div>
        <div className="boss-table__cell boss-table__cell_role_header">Master Venue</div>
        <div className="boss-table__cell boss-table__cell_role_header">Work Venues</div>
      </div>
    );
  };

  showStaffMember = staffMember => {
    const { id, avatarUrl, firstName, surname, status, staffType, masterVenue } = staffMember;
    const url = `/staff-member/profile/${id}`;
    return (
      <div key={id} className="boss-table__row">
        <DetailsListItem avatarUrl={avatarUrl} />
        <DetailsListItem title="Name" value={`${firstName} ${surname}`} url={url} />
        <DetailsListItem title="Modified" value="---" url={url} />
        <DetailsListItem title="Status" value={status} url={url} />
        <DetailsListItem title="Type" value={staffType} url={url} />
        <DetailsListItem title="Master Venue" value={masterVenue} url={url} />
        <DetailsListItem title="Work Venues" value="---" url={url} />
      </div>
    );
  };

  render() {
    // console.log("this.props", this.props)
    const { isFetching } = this.state;
    if (isFetching) {
      return null;
    }
    const { staffMembers } = this.props;
    return (
      <div className="boss-page-main__inner">
        <div className="boss-table boss-table_page_staff-members-index">
          {this.showHeaderHtml()}
          {staffMembers.map(staffMember => this.showStaffMember(staffMember))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  initialLoad: actions.initialLoadAction,
};

const mapStateToProps = store => {
  // console.log(getStaffMembers);
  return { staffMembers: getStaffMembers(store) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StaffMembersList);
