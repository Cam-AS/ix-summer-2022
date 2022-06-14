import React, { useState, useEffect } from 'react'

export default function Clock() {

  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate');
  // });

  useEffect(() => {
    console.log('componentDidMount');

    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);


    return () => {
      clearInterval(id);
    };
  }, []);
  
  useEffect(() => {
    console.log('date did updated');
  }, [date]);

  return (
    <div>
      <h1>The time now is:</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}
