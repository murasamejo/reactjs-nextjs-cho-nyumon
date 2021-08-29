import React from 'react'

// props は Index -> Layout -> Footer と渡ってくる
const Footer = props => {
  return (
    <footer>
      <div>
        {props.footer}
      </div>
    </footer>
  )
}

export default Footer
