import React, { useState, useEffect } from 'react';

function Rect(props) {
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)
  const [width, setWidth] = useState(props.width)
  const [height, setHeight] = useState(props.height)
  const [color, setColor] = useState(props.color)
  const [style, setStyle] = useState({
    backgroundColor: color,
    position: 'absolute',
    left: x + 'px',
    top: y + 'px',
    width: width + 'px',
    height: height + 'px'
  })

  useEffect(() => {
    // TODO: 必要に応じて追加する
  }, [setX, setY, setWidth, setHeight, setColor, setStyle])

  return (
    <div style={style}></div>
  )
}

export default Rect;
