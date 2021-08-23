import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import thisPersistStore from '../index'

const PersistForm = props => {
  const [check, setCheck] = useState('')

  const checkStyle = {
    margin: '5px 0'
  }
  const labelStyle = {
    fontSize: '12px',
    color: '#006',
    padding: '2px 10px'
  }

  const doChange = e => {
    const f = e.target.checked

    // ここは Boolean にしたほうがいい
    f ? setCheck('on') : setCheck('')

    if (f) {
      thisPersistStore.persist()
      thisPersistStore.flush()
    } else {
      thisPersistStore.pause()
    }
  }

  return (
    <div>
      <label style={labelStyle}>
        <input type="checkbox" id="check" size="40" onChange={doChange} style={checkStyle} checked={check} />
        Persist
      </label>
    </div>
  )
}

export default connect((state) => state)(PersistForm)
