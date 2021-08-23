import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import MemoStore, { memoReducer } from './memo/Store'

// Redux Persist の設定
const persistConfig = {
  key: 'memo',
  storage,
}

// パーシストレデューサー
const persistedReducer = persistReducer(persistConfig, memoReducer)

// ストアとパーシスターの作成
const store = createStore(persistedReducer)
const thisPersistStore = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading...</p>} persistor={thisPersistStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

export default thisPersistStore
