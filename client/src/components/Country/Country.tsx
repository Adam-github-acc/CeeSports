import './../League/League.css'

const Country: React.FC<any> = ({country}) => {
  return (
    <div className="country-header">
      <div className="country-description">
        <img className="league-logo" src={country.countryLogo}></img>
        <div className="country">{country.country}</div>
      </div>
    </div>
  );
}

export default Country;