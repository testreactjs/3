import React from 'react';

export const DetailsListItem = ({ title, value, small }) => {
  return (
    <li className="boss-details__item">
      <p className={`boss-details__label ${small === 'true' ? 'boss-details__label_size_small' : ''}`}>{title}</p>
      <p className="boss-details__value">{value}</p>
    </li>
  );
};

export const DetailsListItemButton = ({ title }) => {
  return (
    <li className="boss-details__item">
      <button className="boss-button boss-button_role_view-history boss-button_type_small">{title}</button>
    </li>
  );
};
export const DetailsListItemMobile = ({ title, value, hrefValue, secondSpan = '' }) => {
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
export const DetailsListItemImg = ({ title, value, imgUrl }) => {
  return (
    <li key={title} className="boss-details__item">
      <p className="boss-details__label">{title}</p>
      <p className="boss-details__value">
        <img className="boss-details__qr" src={imgUrl} alt={value} />
      </p>
    </li>
  );
};

export const DetailsListItemSpans = ({ title, country, postcode, address, county }) => {
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
