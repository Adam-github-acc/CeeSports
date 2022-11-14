
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MainLeft: React.FC<any> = ({setDate}) => {
  const [value, onChange] = useState(new Date());
  const date = new Date();
  useEffect(() => {
    const date = `${value.getFullYear()}-${(value.getMonth() + 1)}-${value.getDate()}`
    setDate(date)
  }, [value])
  return (
    <div className="main-left">
      <Calendar onChange={onChange} value={value} className="calendar" />
    </div>
  );
}

export default MainLeft;