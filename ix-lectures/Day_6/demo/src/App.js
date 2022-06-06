import React from 'react';
import Demo from './components/Demo';

export default function App() {
  function sayHello() {
    alert('Hello');
  }

  return (
    <div className="my-5">
      <button className="btn btn-primary ms-5" onClick={sayHello}>
        Hello
      </button>
      <Demo name="Jacques" title="Head Teacher" count={0} />
      <Demo name="Cameron" title="Teaching Assistant" count={0} />
      <Demo name="Michelle" title="Teaching Assistant" count={0} />
      <Demo name="Mitchell" title="Teaching Assistant" count={0} />
    </div>
  );
}
