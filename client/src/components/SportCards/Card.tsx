const Card: React.FC = () => {
  return (
    <div>
      <a className="card">
        <div className="card-content football">
          <div className="shader"></div>
          <div className="card-image">
          </div>
          <div className="card-info-wrapper">
            <div className="card-info">
              <div className="card-info-title">
                <h3>Football</h3>
                <h4>See when the most important fotball games start</h4>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;