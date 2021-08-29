import React from 'react'

// props は Index -> Layout -> Header と渡ってくる
const Header = props => {
  return (
    <header>
      <div>
        {props.header}
      </div>
      <h1>
        {props.title}
      </h1>
    </header>
  )
}

export default Header