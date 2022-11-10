import { useState } from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import MatchList from "./MatchList";
import './Main.css'

const Main: React.FC = () => {
  const [date, setDate] = useState<string>('')
  return (
    <div className="main-container">Current{date}
      <MainLeft setDate={setDate}/>
      <MatchList date={date} />
      <MainRight />
    </div>
  );
}

export default Main;