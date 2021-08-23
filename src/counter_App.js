import React from 'react'
import { connect } from 'react-redux'
import './App.css'

let App = props => {
  return (
    <div>
      <h1>Redux Persistor</h1>
      <Message />
      <Button />
    </div>
  )
}
App = connect()(App)

let Message = props => {
  const style = {
    fontSize: '20pt',
    padding: '20px 5px',
  }

  return (
    <p style={style}>
      {props.message}: {props.counter}
    </p>
  )
}
Message = connect((state) => state)(Message)

let Button = props => {
  const style = {
    fontSize: '16pt',
    padding: '5px 10px',
  }

  const doAction = e => {
    if (e.shiftKey) {
      props.dispatch({ type: 'DECREMENT' })
    } else if (e.ctrlKey) {
      props.dispatch({ type: 'RESET' })
    } else {
      props.dispatch({ type: 'INCREMENT' })
    }
  }

  return (
    <button style={style} onClick={doAction}>
      Click Me!
    </button>
  )
}
Button = connect()(Button)

export default App
