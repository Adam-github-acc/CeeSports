import { useState } from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import MatchList from "./MatchList";
import './Main.css'

const Main: React.FC<any> = ({sport}) => {
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}`
  const [date, setDate] = useState<string>(today)
  return (
    <div className="main-container">Current{date}
      <MainLeft setDate={setDate}/>
      <MatchList date={date} sport={sport} />
      <MainRight />
    </div>
  );
}

export default Main;