import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="mt-5 mx-5 p-2 task-list">
      <div className={props.name === 'Jacques' ? 'green' : 'blue'}>Name: {props.name}</div>
      <div className="blue">Title: {props.title}</div>

      <p className="text-center pt-3">
        Note: Each Component holds it's own State so when you increment or decrement the value React
        knows which Components state to update and change
      </p>

      <p className="text-center pt-3">Wow! What a time to be alive</p>

      <div className="text-center">
        <div>{count}</div>
        <button className="btn btn-danger mt-3 me-1" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-secondary mt-3 ms-1" onClick={increment}>
          Increment
        </button>
      </div>

      <p className="text-center pt-3">Hold on to your keyboards!</p>
    </div>
  );
}
