import { Props } from "../types";

const League: React.FC<Props | any> = ({item}) => {
  return (
    <div>
      <div>{item.league}</div>
      {/* <div>{item.leagueLogo}</div> */}
    </div>
  );
}

export default League;