import moment from 'moment';
import { data } from '../../types';
import './Match.css';

type Props = {
  item: data;
};
const Match: React.FC<Props> = ({ item }) => {
  return (
    <div className="match">
      <div className="match-time">{moment(item.time).format('HH:mm ')}</div>
      <div>
        <div className="team-header">
          <img className="team-logo" src={item.hometeamLogo} alt="" />
          <div>{item.hometeam}</div>
        </div>
        <div className="team-header">
          <img className="team-logo" src={item.awayteamLogo} alt="" />
          <div>{item.awayteam}</div>
        </div>
      </div>
    </div>
  );
};

export default Match;
