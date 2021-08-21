import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [buttonMessage] = useState('Hello, onClick={doAction} World')
  const [exclamationPointString, setExclamationPointString] = useState('!')

  const doAction = e => {
    setExclamationPointString(exclamationPointString + '!')
  }

  const sampleListData = [
    'This is a sample data.',
    'これはリストのサンプルです。',
    'リストの各データは配列を用いて格納しています',
  ]

  return (
    <div>
      <h1>{props.title}</h1>

      { (exclamationPointString.length % 2) === 0 ?
          <p className="exclamation-string-area-in-even">{`${buttonMessage}${exclamationPointString}`}</p>
        :
          <p className="exclamation-string-area-in-odd">{`${buttonMessage}${exclamationPointString}`}</p>
      }

      <button className="button-style" onClick={doAction}>Click Me!</button>

      <hr />

      <h2>リスト表示</h2>
      <List listTitle="サンプルリスト" listData={sampleListData} />
    </div>
  );
}

function List (props) {
  let [number] = useState(0)

  return (
    <div>
      <p className="list-title">{props.listTitle}</p>
      <ul>
        { props.listData.map(item => <Item number={number++} value={item} key={number} />) }
      </ul>
    </div>
  );
}

function Item (props) {
  return (
    <li>
      <span className="item-number">[{props.number}]</span> {props.value}
    </li>
  )
}

export default App;
