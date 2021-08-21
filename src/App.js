import React, { useState, useEffect } from 'react';
import './App.css';

function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>

      <Rect x="50" y="50" width="150" height="150" color="cyan" />
      <Rect x="150" y="100" width="150" height="150" color="magenta" />
      <Rect x="100" y="150" width="150" height="150" color="black" />
    </div>
  );
}

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
  }, [])

  return (
    <div style={style}></div>
  )
}

export default App;
