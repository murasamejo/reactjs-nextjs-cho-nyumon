import { createStore } from 'redux'

// 初期化（データ構造を示す意味もある）
const initData = {
  data: [
    {
      message: 'A sample data',
      created_at: new Date(),
    },
  ],
  message: 'Please input message:',
  mode: '',
  fdata: [],
}

// レデューサ
export const memoReducer = (state = initData, action) => {
  switch(action.type) {
    case 'ADD':
      return addReduce(state, action)
    case 'DELETE':
      return deleteReduce(state, action)
    case 'FIND':
      return findReduce(state, action)
    default:
      return state
  }
}

// レデュースアクション

// memo追加のレデュース処理
const addReduce = (state, action) => {
  const data = {
    message: action.message,
    created_at: new Date(),
  }
  // ディープコピーをすることで Redux に更新を認識させる
  const newData = state.data.slice()
  newData.unshift(data)

  return {
    data: newData,
    message: 'Added!',
    mode: 'default',
    fdata: [],
  }
}

// メモ削除のレデュース処理
export const deleteReduce = (state, action) => {
  // ディープコピーをすることで Redux に更新を認識させる
  const newData = state.data.slice()
  newData.splice(action.index, 1)

  return {
    data: newData,
    message: 'delete "' + action.index + '":',
    mode: 'delete',
    fdata: [],
  }
}

// メモ検索のレデュース処理
export const findReduce = (state, action) => {
  const f = action.find
  const fdata = []
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value)
    }
  })

  return {
    data: state.data,
    message: 'find "' + f + '":',
    fdata: fdata
  }
}

// アクションクリエイター

// メモ追加のアクション
export const addMemo = text => {
  return {
    type: 'ADD',
    message: text,
  }
}

// メモ削除のアクション
export const deleteMemo = num => {
  return {
    type: 'DELETE',
    index: num,
  }
}

// メモ検索のアクション
export const findMemo = text => {
  return {
    type: 'FIND',
    find: text,
  }
}

// ストアの作成
export default createStore(memoReducer)
