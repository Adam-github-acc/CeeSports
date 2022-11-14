import { useEffect, useState } from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import MatchList from "./MatchList";
import './Main.css'

const Main: React.FC<any> = ({sport}) => {
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}`;
  const [date, setDate] = useState<string>(today);
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, [matches]);
  return (
    <div className="main-container">
      {matches &&<MainLeft setDate={setDate} />}
      {matches &&<MatchList date={date} sport={sport} />}
      {matches && <MainRight />}
      {!matches && <div className="small-screen">
        <MainLeft setDate={setDate} />
        <MatchList date={date} sport={sport} /></div>}
    </div>
  );
}

export default Main;