import Rect from './Rect.js';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <Rect x="50" y="50" width="150" height="150" color="cyan" radius="50" />
      <Rect x="150" y="100" width="150" height="150" color="magenta" radius="75" />
      <Rect x="100" y="150" width="150" height="150" color="black" radius="25" />
    </div>
  );
}

export default App;
