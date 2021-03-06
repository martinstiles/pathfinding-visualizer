import React, {useState} from 'react'

const typeToColorMap = {
  source: '#63C132',
  goal: '#cf2e2e',
  wall: `rgb(${[220,220,220]})`,
  visited: '#2d749a',
  shortestPath: '#ffff60',
  unvisited: ''
}

const Node = (props) => {
  const [type, setType] = useState(props.type)
  const [internalMouseDown, setInternalMouseDown] = useState(false)
  const runState = props.hooks.runState

  const updateType = (newType) => {
    setType(newType)
    props.setTypeInNode(newType, props.coordinates)
  }
  
  const handleMakeWall = () => {
    if (props.type === 'unvisited') updateType('wall')
    else if (props.type === 'wall') updateType('unvisited')
    setInternalMouseDown(true)
  }

  const style = {
    height: '2.5em',
    width: '2.5em',
    border: `1px solid rgb(${[220,220,220]})`,
    background: typeToColorMap[type],
    ...(internalMouseDown && type === 'wall' && {transform: `scale(${1.3})`})
  }

  const onMouseDown = () => {
    if ( runState !== 'empty' && runState !== 'customized' ) return
    props.hooks.setRunState('customized')

    props.hooks.setIsMouseDownInArray(true)
    handleMakeWall()
  }
  const onMouseEnter = () => {
    if ( runState !== 'empty' && runState !== 'customized' ) return
    if (props.hooks.isMouseDownInArray) {
      props.hooks.setIsMouseDownInArray(true) // To prevent mouseUp outside of grid bug
      handleMakeWall()
    }
  }
  const onMouseUp = () => {
    props.hooks.setIsMouseDownInArray(false)
    setInternalMouseDown(false)
  }
  const onMouseLeave = () => {
    setInternalMouseDown(false) // to stop scale(1.3)
    props.hooks.setIsMouseDownInArray(false) // To prevent mouseUp outside of grid bug
  }
  return (
    <div key={props.key} style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
  )
}

export default Node