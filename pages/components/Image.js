import React from 'react'
import ImageComponent from 'next/image'

const Image = props => {
  return (
    <ImageComponent
      width={`${props.size}px`}
      border="1"
      src={`/${props.filename}`}
      alt={`/${props.filename}`}
    />
  )
}

export default Image
