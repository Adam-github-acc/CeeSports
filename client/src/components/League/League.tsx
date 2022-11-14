import { Props } from "../../types";
import './League.css'

const League: React.FC<Props | any> = ({item}) => {
  return (
    <div className="league-header">
      <img className="league-logo" src={item.leagueLogo} alt={item.league} />
      <div className="league-description">
        <div className="league-league">{item.league}</div>
      </div>
    </div>
  );
}

export default League;