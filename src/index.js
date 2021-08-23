import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const stateValue = {
  counter: 0,
  message: 'カウンター',
}

// レデューサ
const counter = (state = stateValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'インクリメント',
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: 'デクリメント',
      }
    case 'RESET':
      return {
        counter: 0,
        message: 'リセット',
      }
    default:
      return state
  }
}

// パーシストの設定
const persistConfig = {
  key: 'root',
  storage,
}

// パーシストレデューサ
const persistedReducer = persistReducer(persistConfig, counter)

// ストアとパーシスターの作成
const store = createStore(persistedReducer)
const thisPersistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={thisPersistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
