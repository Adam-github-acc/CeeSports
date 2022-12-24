import './bar.css';

type Props = {
  setSport: React.Dispatch<React.SetStateAction<string>>;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
  darkmode: boolean;
};

const Navbar: React.FC<Props> = ({ setSport, setDarkmode, darkmode }) => {
  const handleClick = () => setSport('');
  const handleDarkmode = () => setDarkmode(!darkmode);
  return (
    <div className="navbar">
      <div>CeeSports</div>
      <div className="select-sport" onClick={handleClick}>
        Select Sport
      </div>
      <div className="toggle">
        <input
          type="checkbox"
          id="unchecked"
          className="cbx hidden"
          onChange={handleDarkmode}
          defaultChecked={!darkmode}
        />
        <label htmlFor="unchecked" className="lbl"></label>
        <div className="icon">☀️</div>
      </div>
    </div>
  );
};

export default Navbar;
