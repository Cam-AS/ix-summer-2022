import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  // Same as componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate');
  });

  // Same as componentDidMount
  useEffect(() => {
    console.log('componentDidMount');

    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Same as componentWillUnmount
    return () => {
      console.log('componentWillUnmount');
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log('date did update');
  }, [date]);

  return (
    <div className="card text-center mt-5">
      <h1>The time now is:</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}
