import React from 'react';
import TaskList from './components/TaskList';

export default function App() {
  function sayHello() {
    alert('Hello');
  }

  return (
    <div className="mt-5">
      <button className="btn btn-primary ms-5" onClick={sayHello}>
        Hello
      </button>
      <TaskList name="Jacques" title="Head Teacher" count={0} />
      <TaskList name="Cameron" title="Teaching Assistant" count={0} />
      <TaskList name="Michelle" title="Teaching Assistant" count={0} />
      <TaskList name="Mitchell" title="Teaching Assistant" count={0} />
    </div>
  );
}
