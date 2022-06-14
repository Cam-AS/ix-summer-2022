import React, { useState, useEffect } from 'react'

export default function Counter(props) {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('component did mount');

    return () => {
      console.log('component did umount');
    };
  }, []);

  useEffect(() => {
      console.log('appCount did change');
  }, [props.appCount]);

  // useEffect(() => {
  //   // console.log('count 2 did updated');
  // }, [count2]);

  // useEffect(() => {
  //   // console.log('a count did updated');
  // }, [count1, count2]);



  return (
    <div>
      <h1>Count 1: {count1}</h1>

      <h1>Count 2: {count2}</h1>

      <h1>App Count: {props.appCount} </h1>

      <button onClick={() => setCount1(count1 + 1)}>
        Add To Count 1
      </button>

      <button onClick={() => setCount2(count2 + 1)}>
        Add To Count 2
      </button>

    </div>
  )
}
