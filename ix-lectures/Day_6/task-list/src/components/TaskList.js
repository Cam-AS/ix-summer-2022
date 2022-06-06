import React, { useState } from 'react';
import './TaskList.css';

export default function TaskList(props) {
  const [count, setCount] = useState(props.count);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="mt-5 mx-5 p-2 task-list">
      <div className={props.name === 'Jacques' ? 'green' : 'blue'}>Name: {props.name}</div>
      <div className="blue">Title: {props.title}</div>

      <p className="text-center pt-3">
        Note: Each Component holds it's own State so when you increment the values are different1
      </p>

      <div className="text-center">
        <div>{count}</div>
        <button className="btn btn-secondary mt-3" onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}
