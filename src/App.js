import React from 'react'
import { connect } from 'react-redux'
import './App.css'

// ステートのマッピング
const mappingState = (state) => {
  return state
}

let App = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <Message />
      <Button />
    </div>
  );
}

// ストアのコネクト (App)
App = connect()(App)

let Message = (props) => {
  return(
    <p>
      {props.message}: {props.counter}
    </p>
  )
}

// ストアのコネクト (Message)
Message = connect(mappingState)(Message)

let Button = (props) => {
  const doAction = e => {
    if (e.shiftKey) {
      props.dispatch({ type: 'DECREMENT' })
    } else {
      props.dispatch({ type: 'INCREMENT' })
    }
  }

  return(
    <button onClick={doAction}>Click Me!</button>
  )
}

// ストアのコネクト (Button)
Button = connect()(Button)

export default App;
