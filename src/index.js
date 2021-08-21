import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ストアの初期値
const stateValue = {
  counter: 0,
  message: 'COUNTER',
}

// レデューサ
const counter = (state = stateValue, action) => {
  switch(action.type) {
    case 'INCREMENT':
    return {
      counter: state.counter + 1,
      message: 'INCREMENT',
    }
    case 'DECREMENT':
    return {
      counter: state.counter - 1,
      message: 'DECREMENT',
    }
    default:
      return state
  }
}

// ストアの作成
const store = createStore(counter)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App title="React" store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
