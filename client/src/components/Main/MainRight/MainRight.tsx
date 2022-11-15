import CountryList from "../../Country/CountryList";

type Props = {
  setCountries:React.Dispatch<React.SetStateAction<string[]>>
  countryList:string[]
};

const MainRight: React.FC<Props> = ({countryList, setCountries}) => {
  return (
    <div className="main-right">
      <div className="country-list">
      {countryList.map((country:string) => <CountryList key={country} setCountries={setCountries} country={country} />)}
      </div>
    </div>
  );
}

export default MainRight;