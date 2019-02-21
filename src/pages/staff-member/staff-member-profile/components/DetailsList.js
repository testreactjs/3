import React from 'react';

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
export default DetailsList;
