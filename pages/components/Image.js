import React from 'react'

const Image = props => {
  return (
    <img width={`${props.size}px`} border="1" src={`/${props.filename}`} />
  )
}

export default Image
