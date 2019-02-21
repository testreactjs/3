import React from 'react';

export const DetailsListItem = ({ title, value, url, avatarUrl }) => {
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
