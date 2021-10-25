import React from 'react';

export const DataShow = ({desc, info}) => {
  return (
    <div className="show-section__details">
      <span className="show-section__info-desc">{desc}:</span>
      <span className="show-section__info-info">{info}</span>
    </div>
  )
}
