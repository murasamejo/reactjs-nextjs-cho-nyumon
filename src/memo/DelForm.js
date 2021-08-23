import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { deleteMemo } from './Store'

const DelForm = props => {
  const [number, setNumber] = useState(0)

  const inputStyle = {
    fontSize: '1.5em',
    color: '#066',
    padding: '1px',
    margin: '5px 0'
  }
  const btnStyle = {
    fontSize: '10pt',
    color: '#006',
    padding: '2px 10px'
  }

  const doChange = e => {
    setNumber(e.target.value)
  }
  const doAction = e => {
    e.preventDefault()

    const action = deleteMemo(number)
    props.dispatch(action)

    setNumber(0)
  }

  let n = 0
  const items = props.data.map((value) => (
    <option key={n} value={n++}>{value.message.substring(0, 10)}</option>
  ))

  return (
    <div>
      <form onSubmit={doAction}>
        <select onChange={doChange} defaultValue="-1" style={inputStyle}>
          {items}
        </select>
        <input type="submit" style={btnStyle} value="Del" />
      </form>
    </div>
  )
}

export default connect((state) => state)(DelForm)
