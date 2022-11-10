import moment from "moment";
import { Props } from "../../types";
import './Match.css'

const Match: React.FC<Props | any> = ({item}) => {
  return (
    <div className="match">
      <div className="match-time">{moment(item.time).format('h:mm')}</div>
      <div>
        <div className="team-header">
          <img className="team-logo" src={item.hometeamLogo} alt={item.hometeam} />
          <div>{item.hometeam}</div>
        </div>
        <div className="team-header">
          <img className="team-logo" src={item.awayteamLogo} alt={item.awayteam} />
          <div>{item.awayteam}</div>
        </div>
      </div>
    </div>
  );
}

export default Match;