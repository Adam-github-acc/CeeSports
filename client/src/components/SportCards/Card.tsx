import './SportsCards.css';

type Props = {
  setSport: React.Dispatch<React.SetStateAction<string>>;
  cardName: string;
  photo: string;
};
const Card: React.FC<Props> = ({ setSport, cardName, photo }) => {
  function handleClick() {
    setSport(photo);
  }
  return (
    <div>
      <a className="card" onClick={handleClick}>
        <div className={`card-content ${photo}`}>
          <div className="shader"></div>
          <div className="card-image"></div>
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
};

export default Card;
