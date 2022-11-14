import Card from "./Card";

const SportsCards: React.FC<any> = ({setSport}) => {
  const sportArray = [['Football', 'football'],
    ['Basketball', 'basketball'], ['Hockey', 'hockey'],
    ['Baseball', 'baseball'], ['Handball', 'handball'],
    ['Rugby', 'rugby']]

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