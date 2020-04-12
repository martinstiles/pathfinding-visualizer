import React, {useState} from 'react'

const typeToColorMap = {
  source: '#63C132',
  goal: '#cf2e2e',
  wall: `rgb(${[220,220,220]})`,
  visited: 'blue',
  unvisited: ''
}

const Node = (props) => {
  //const [wallBackground, setWallBackground] = useState(undefined)
  //const background = wallBackground ? 'wall' : props.type
  const [type, setType] = useState(props.type)
  const [internalMouseDown, setInternalMouseDown] = useState(false) // I

  const style = {
    height: '1.5em',
    width: '1.5em',
    border: `1px solid rgb(${[220,220,220]})`,
    background: typeToColorMap[type],
    ...(internalMouseDown && {transform: `scale(${1.3})`})
  }

  // make a useMemo on these? -> no point in remaking them for each render
  const runningState = props.hooks.runningState
  const onMouseDown = () => {
    if ( runningState !== 'empty' && runningState !== 'customized' ) return
    props.hooks.setIsMouseDownInArray(true)
    props.hooks.setRunningState('customized')
    setInternalMouseDown(true)
    // updates node if it is of type unvisited
    props.type === 'unvisited' && setType('wall')
  }
  const onMouseEnter = () => {
    if ( runningState !== 'empty' && runningState !== 'customized' ) return
    //console.log('mouseDown: ' + props.hooks.isMouseDownInArray + ' , type: ' + type)
    if (props.hooks.isMouseDownInArray && type === 'unvisited') {
      console.log('2')
      setType('wall')
      props.hooks.setIsMouseDownInArray(true)
      setInternalMouseDown(true)
    }
  }
  const onMouseUp = () => {
    props.hooks.setIsMouseDownInArray(false)
    setInternalMouseDown(false)
  }
  const onMouseLeave = () => {
    setInternalMouseDown(false) // to stop scale(1.3)
  }

  //console.log('RENDERED')
  return (
    <div key={props.key} style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  )
}

export default Node