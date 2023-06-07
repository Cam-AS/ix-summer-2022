import './App.css';
import Demo from './components/Demo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function sayHello() {
    alert('Hello');
  }

  return (
    <div className="m-5">
      <button onClick={sayHello} className="btn btn-primary">
        Say Hello
      </button>
      <Demo name="Cameron" title="Head Teacher" count={0}></Demo>
      <Demo name="Michelle" title="Teaching Assistant" count={0}></Demo>
      <Demo name="Mitchell" title="Teaching Assistant" count={0}></Demo>
    </div>
  );
}

export default App;
