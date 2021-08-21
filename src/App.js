import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [buttonMessage] = useState('Hello, onClick={doAction} World')
  const [exclamationPointString, setExclamationPointString] = useState('!')
  const [enteredValueByInputText, setEnteredValueByInputText] = useState('')
  const [submittedTextByForm, setSubmittedTextByForm] = useState('（初期値）')

  const doAction = e => {
    setExclamationPointString(exclamationPointString + '!')
  }

  const doSubmit = e => {
    setSubmittedTextByForm(enteredValueByInputText)

    e.preventDefault()
  }

  const doChange = e => {
    setEnteredValueByInputText(e.target.value)
  }

  const doCheckInputText = e => {
    alert(`${e.target.value} は長すぎます（最大10文字）`)
  }

  const sampleListData = [
    'This is a sample data.',
    'これはリストのサンプルです。',
    'リストの各データは配列を用いて格納しています',
  ]

  return (
    <div>
      <h1>{props.title}</h1>

      <form onSubmit={doSubmit} className="standard-margin">
        <label>
          <input type="text" id="input-name" onChange={doChange} name="input-name" />
        </label>

        <button type="submit">Submit!</button>
      </form>

      <p>{`今フォームに入力されている値は ${enteredValueByInputText} です。`}</p>
      <p>{`フォームに入力されて送信された値は ${submittedTextByForm} です。`}</p>

      <hr />

      { (exclamationPointString.length % 2) === 0 ?
          <p className="exclamation-string-area-in-even">{`${buttonMessage}${exclamationPointString}`}</p>
        :
          <p className="exclamation-string-area-in-odd">{`${buttonMessage}${exclamationPointString}`}</p>
      }

      <button className="button-style" onClick={doAction}>Click Me!</button>

      <hr />

      <h2>リスト表示</h2>
      <List listTitle="サンプルリスト" listData={sampleListData} />

      <hr />
      <h2>Children のテスト</h2>
      <Message>
        ほげ。
        ふが。
        FooFooBarBar
        foobar。
      </Message>

      <hr />
      <MessageLengthChecker maxLength="10" onCheck={doCheckInputText}/>
    </div>
  );
}

function MessageLengthChecker (props) {
  const doChange = e => {
    if (e.target.value.length > props.maxLength) {
      props.onCheck(e)

      e.target.value = e.target.value.substr(0, props.maxLength)
    }
  }

  return (
    <input type="text" onChange={doChange} />
  )
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

function Message (props) {
  const content = props.children
  const contents = content.split('。')

  return (
    <div>
      <p className="standard-text">Message コンポーネントのノードに含まれる句点の数は {contents.length - 1}個 です。</p>
    </div>
  )
}

export default App;
