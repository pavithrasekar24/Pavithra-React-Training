import React, { useState, useEffect } from 'react';
import { Location } from '../../../Component/HooksExample/Lifecycle/Location';
export function Lifecycle() {
  const [count, setCount] = useState(0);
  const [place, setPlace] = useState('chennai');

  // stage by stage
  // (child,elder,old)

  // useEffect ->lifecycle
  // component intialize (mounting phase),
  // component state, props- updateing phase  ,
  // component destroy (unmounting phase)

  // useEffect(() => {
  //   console.log('trigger -all time');
  // });

  // add ,empty[]  dependency in use Effect -mounting(initialize)
  //get api call, setInterval , settimeout
  useEffect(() => {
    console.log('mouting');
  }, []);

  // add ,[varaibleName]  dependency in use Effect -updating
  //previous value current value diff (parent-child)
  useEffect(() => {
    console.log('updating');
  }, [count]);

  useEffect(() => {
    console.log('updating--place');
  }, [place]);

  // useffect return the return function - unmounting (destroy)
  //clear item , clearInterval
  useEffect(() => {
    return () => {
      console.log('unmounting');
    };
  }, []);

  return (
    <div>
      <input
        type="place"
        placeholder="Enter Place"
        name="place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        clicked {count} times{' '}
      </button>
      <Location place={place} count={count} />
    </div>
  );
}
