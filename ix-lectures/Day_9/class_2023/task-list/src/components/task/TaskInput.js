import React, { useState } from 'react';

export default function TaskInput(props) {
  const [task, setTask] = useState('');

  function onTaskFormSubmit(e) {
    e.preventDefault();

    props.onTaskCreate(task);

    setTask('');
  }
  return (
    <div>
      {/* <form onSubmit={(e) => onTaskFormSubmit(e)}> */}
      <form onSubmit={onTaskFormSubmit}>
        <div className="input-group mb-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Task"
          ></input>
          <button className="btn btn-outline-secondary" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
