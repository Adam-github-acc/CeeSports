
const CountryList: React.FC<any> = ({setCountries, country}) => {
  const countryArray = country.split(", ")
  const handleClick = () => setCountries([countryArray[0]])
  return (
    <div className="country-list-item" onClick={handleClick}>
      <img className="league-logo" src={countryArray[1]}></img>
      <div>{countryArray[0]}</div>
    </div>
  );
}

export default CountryList;