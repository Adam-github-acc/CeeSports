import './bar.css'

const Navbar: React.FC<any> = ({setSport}) => {
  const handleClick = () => setSport('')
  return (
    <div className="navbar">
      <div>CeeSports</div>
      <div onClick={handleClick}>Select Sport</div>
    </div>
  );
}

export default Navbar;