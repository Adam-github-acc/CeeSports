import moment from "moment";
import { Props } from "../types";

const Match: React.FC<Props | any> = ({item}) => {
  return (
    <div>
      <div>{item.hometeam}</div>
      <div>{item.awayteam}</div>
      <div>{moment(item.time).format('h:mm')}</div>
    </div>
  );
}

export default Match;