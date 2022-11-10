import './SportsCards.css'
import React from 'react';

const Card: React.FC<any> = ({setSport, cardName, photo}) => {
  function handleClick() {
    setSport(photo)
  }

  return (
    <div>
      <a className="card" onClick={handleClick}>
        <div className={`card-content ${photo}`}>
          <div className="shader"></div>
          <div className="card-image">
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <div className="card-info-title">
                <h3>{cardName}</h3>
                <h4>See when the most important {cardName} games start</h4>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;