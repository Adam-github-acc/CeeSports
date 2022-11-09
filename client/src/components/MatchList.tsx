import { Props } from "../types";
import Match from "./Match";
import { readByDate, create, readApiByDate } from "../utils";

const MatchList: React.FC = () => {
  let matchInfo:Props;
  return (
    <div>
      MatchList
      <Match matchInfo={matchInfo}/>
    </div>
  );
}

export default MatchList;