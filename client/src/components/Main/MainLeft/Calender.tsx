import { useState } from "react";

const Calender: React.FC<any> = ({setDate}) => {
  function handleChange(e: any) {
    e.preventDefault()
    setDate(e.target.value);
  }
  return (
    <div className="calender">
        <label className="label" htmlFor="date">DATE</label>
        <input type="date" name="date" className="input"  onChange={handleChange} />
    </div>
  );
}

export default Calender;