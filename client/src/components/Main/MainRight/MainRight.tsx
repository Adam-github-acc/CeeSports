import CountryList from "../../Country/CountryList";


const MainRight: React.FC<any> = ({countryList, setCountries}) => {
  return (
    <div className="main-right">
      <div className="country-list">
      {countryList.map((country:string) => <CountryList key={country} setCountries={setCountries} country={country} />)}
      </div>
    </div>
  );
}

export default MainRight;