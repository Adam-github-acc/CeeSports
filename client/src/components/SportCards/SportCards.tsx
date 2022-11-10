import { useState } from "react";
import Card from "./Card";

const SportsCards: React.FC = () => {
  const [sport, setSport] = useState('')
  const sportArray = [['Football', 'football'], ['Basketball', 'basketball'], ['Tennis', 'tennis'], ['Baseball', 'baseball'], ['Handball', 'handball'], ['American Football', 'american-football']]
  return (
    <div>
      <div id="cards">
        {sportArray.map((item:string[]) => (
          <Card setSport={setSport} cardName={item[0]} photo={item[1]} key={item[0]} />
        ))}
      </div>
    </div>
  );
}

export default SportsCards;