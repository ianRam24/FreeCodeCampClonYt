import React from 'react';
import '../css/Testimony.css';

function Testimony(props) {
  const { img, name, country, charge, enterprise, text } = props;
  return (
    <div className="testimony-container">
      <img
        className="testimony-img"
        src={require(`../img/testimonio-${img}.png`)}
        alt={`Foto de ${name}`}
      />
      <div className="text-container">
        <p className="testimony-name">
          {name} - {country}
        </p>
        <p className="testimony-charge">
          {charge} - {enterprise}
        </p>
        <p className="testimony-text">"{text}"</p>
      </div>
    </div>
  );
}

export default Testimony;
