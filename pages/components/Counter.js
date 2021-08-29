import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const msgStyle = {
    fontSize: '16pt',
    backgroundColor: '#eef',
    padding: '5px',
  }

  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState('カウンター: 0')

  const doAction = () => {
    setCounter(counter + 1)
    setMessage(`カウンター: ${counter}`)
  }

  return (
    <p onClick={doAction} style={msgStyle}>
      {message}
    </p>
  )
}

export default Counter