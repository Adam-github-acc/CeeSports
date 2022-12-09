type Props = {
  country:string
  setCountries:React.Dispatch<React.SetStateAction<string[]>>
};
const CountryList: React.FC<Props> = ({setCountries, country}) => {
  const countryArray = country.split(", ")
  const handleClick = () => {
    setCountries([countryArray[0]])
  }
  return (
    <div className="country-list-item" onClick={handleClick}>
      <img className="country-flag" src={countryArray[1]}></img>
      <div className="country-text">{countryArray[0]}</div>
    </div>
  );
}

export default CountryList;