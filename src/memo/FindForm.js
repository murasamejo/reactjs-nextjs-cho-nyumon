import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { findMemo } from './Store'

const FindForm = props => {
  const [find, setFind] = useState('')

  const inputStyle = {
    fontSize: '14pt',
    color: '#006',
    padding: '0px',
  }
  const btnStyle = {
    fontSize: '12pt',
    color: '#006',
    padding: '1px 10px',
  }

  const doChange = e => {
    setFind(e.target.value)
  }
  const doAction = e => {
    e.preventDefault()

    const action = findMemo(find)
    props.dispatch(action)
  }

  return (
    <form onSubmit={doAction}>
      <input type="text" size="10" onChange={doChange} style={inputStyle} value={find} />
      <input type="submit" style={btnStyle} value="Find" />
    </form>
  )
}

export default connect((state) => state)(FindForm)
