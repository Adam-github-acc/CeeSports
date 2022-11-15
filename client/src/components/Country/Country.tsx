import './../League/League.css'
import { data } from '../../types';
type Props = {
  item:data
};
const Country: React.FC<Props> = ({item}) => {
  return (
    <div className="country-header">
      <div className="country-description">
        <img className="league-logo" src={item.countryLogo}></img>
        <div className="country">{item.country}</div>
      </div>
    </div>
  );
}

export default Country;