import Calender from "./Calender";

const MainLeft: React.FC<any> = ({setDate}) => {
  return (
    <div className="main-left">
      <div>MainLeft</div>
      <Calender setDate={setDate} />
    </div>
  );
}

export default MainLeft;