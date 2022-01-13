import React, { useState, useEffect } from 'react';

export function Location(props) {
  const [myPlace, setMyPlace] = useState('');

  //child component -> based upon props -want to chnage state varaible
  useEffect(() => {
    if (props.place === 'chennai') {
      setMyPlace(props.place);
    } else {
      setMyPlace('not my location');
    }
  }, [props.place]);

  return (
    <>
      <h5>Location: {myPlace}</h5>
    </>
  );
}
