import React, { Component } from 'react';

export default class DetailUser extends Component {
  render() {
    const { id, avatarUrl, firstName, surname, staffTypeName, email, phoneNumber, venueName } = this.props;
    return (
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
              <a href={`mailto:${email}`} className="boss-user-summary__link boss-user-summary__link_role_email">
                {email}
              </a>
              <a href={`tel:${phoneNumber}`} className="boss-user-summary__link boss-user-summary__link_role_phone">
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
    );
  }
}
