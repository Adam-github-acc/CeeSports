import { data } from '../../types';
import './League.css';
type Props = {
  item: data;
};
const League: React.FC<Props> = ({ item }) => {
  return (
    <div className="league-header">
      <img className="league-logo" src={item.leagueLogo} alt={item.league} />
      <div className="league-description">
        <div className="league-league">{item.league}</div>
      </div>
    </div>
  );
};

export default League;
