import React from 'react'
import { connect } from 'react-redux'

const Item = props => {
  const th = {
    fontSize: '14pt',
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 10px',
    width: '50px'
  }
  const td = {
    fontSize: '14pt',
    backgroundColor: 'white',
    color: 'darkblue',
    padding: '5px 10px',
    border: '1px solid lightblue',
    minWidth: '300px'
  }
  const date = {
    fontSize: '14pt',
    backgroundColor: 'white',
    color: 'darkblue',
    padding: '5px 10px',
    border: '1px solid lightblue',
    width: '80px'
  }

  const d = props.value.created_at
  const f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()

  return (
    <tr>
      <th style={th}>No. {props.index}</th>
      <td style={td}>{f}</td>
    </tr>
  )
}

export default connect()(Item)