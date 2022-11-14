import './SportsCards.css'
import React, { useRef } from 'react';
import { useEffect } from 'react';

const Card: React.FC<any> = ({setSport, cardName, photo}) => {
  function handleClick() {
    setSport(photo)
  }
  const ref = useRef(null);
  /* useEffect(() => {
    const card = ref.current;
    console.log('card', card);
    card.addEventListener('mousemove', (e:MouseEvent) => {
      const rect = card.getBoundingClientRect()
      console.log(rect)
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    })
  }, []); */
  return (
    <div>
      <a className="card" ref={ref} onClick={handleClick}>
        <div className={`card-content ${photo}`}>
          <div className="shader"></div>
          <div className="card-image">
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <div className="card-info-title">
                <h3>{cardName}</h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;