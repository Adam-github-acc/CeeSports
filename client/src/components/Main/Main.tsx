import { useState } from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import MatchList from "./match-list/MatchList";
import './Main.css'

const Main: React.FC = () => {
  const [date, setDate] = useState<string>('')
  return (
    <div className="main-container">
      <MainLeft setDate={setDate}/>
      <MatchList />
      <MainRight />
    </div>
  );
}

export default Main;