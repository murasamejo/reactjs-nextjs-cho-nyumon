import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [buttonMessage] = useState('Hello, onClick={doAction} World')
  const [exclamationPointString, setExclamationPointString] = useState('!')

  const doAction = e => {
    setExclamationPointString(exclamationPointString + '!')
  }

  return (
    <div>
      <h1>{props.title}</h1>

      { (exclamationPointString.length % 2) === 0 ?
          <p className="exclamation-string-area-in-even">{`${buttonMessage}${exclamationPointString}`}</p>
        :
          <p className="exclamation-string-area-in-odd">{`${buttonMessage}${exclamationPointString}`}</p>
      }

      <button className="button-style" onClick={doAction}>Click Me!</button>
    </div>
  );
}

export default App;
