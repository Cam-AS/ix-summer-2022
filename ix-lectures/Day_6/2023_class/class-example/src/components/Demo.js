import React, { useState } from 'react';
import './Demo.css';

export default function Demo(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="example-card my-4 p-3">
      <h5 className={props.name === 'Cameron' ? 'green' : 'blue'}>
        Name: {props.name}
      </h5>
      <h5>Title: {props.title}</h5>

      <p className="text-center">
        Note: Each Components holds it's own State, so when you increment or
        decrement the value React knows which component State to update and
        change.
      </p>

      <div className="text-center">
        <div>{count}</div>
        <button className="btn btn-danger mt-4 me-1" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-primary mt-4 ms-1" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}
