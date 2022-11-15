import { useEffect, useState } from "react";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import MatchList from "./MatchList";
import './Main.css'
type Props = {
  sport:string
};
const Main: React.FC<Props> = ({sport}) => {
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}`;
  const [date, setDate] = useState<string>(today);
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
  const [countries, setCountries] = useState <string[]>();
  const [countryList, setCountryList] = useState <string[]>();
  useEffect(() => {
    window
    .matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, [matches]);
  return (
    <div className="main-container">
      {matches && <MainLeft setDate={setDate} />}
      {matches && <MatchList date={date} sport={sport} countries={countries} setCountries={setCountries} setCountryList={setCountryList} />}
      {matches && countries && <MainRight setCountries={setCountries} countryList={countryList} />}
      {!matches &&
      <div className="small-screen">
        <MainLeft setDate={setDate} />
        <MatchList date={date} sport={sport} countries={countries} setCountries={setCountries} setCountryList={setCountryList}/>
      </div>}
    </div>
  );
}

export default Main;