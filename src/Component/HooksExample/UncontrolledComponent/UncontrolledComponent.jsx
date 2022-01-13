import React, { useState, useRef } from 'react';
// useRef -- want to access dom element and its property directly, ( it will create one reference)
//without state varible you can get value from element  ->
UncontrolledComponent;
export function UncontrolledComponent() {
  // state- cant mutable(change) state variable
  //useState  method change

  const districtRef = useRef('');
  const cityRef = useRef('');

  // const [distrinct, setDistrict] = useState('');
  let handleDistrinct = () => {
    console.log(districtRef.current.value, cityRef.current.value);
  };
  let handleClear = () => {
    districtRef.current.value = '';
    districtRef.current.focus();
    cityRef.current.style.color = 'blue';
  };

  return (
    <div>
      <h4>UncontrolledComponent ::{districtRef.current.value}</h4>
      <input
        ref={districtRef}
        style={{ color: 'orange' }}
        placeholder="Enter Distrinct"
        type="text"
        onChange={handleDistrinct}
      />
      <input
        ref={cityRef}
        style={{ color: 'orange' }}
        placeholder="Enter City"
        type="text"
        onChange={handleDistrinct}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
