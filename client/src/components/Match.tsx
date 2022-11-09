import { Props } from "../types";

const Match: React.FC<Props | any> = ({item}) => {
  return (
    <div>
      {item.time}
    </div>
  );
}

export default Match;