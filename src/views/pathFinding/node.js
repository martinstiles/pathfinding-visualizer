import React, {useState} from 'react'

const typeToColorMap = {
  source: '#63C132',
  goal: '#cf2e2e',
  wall: `rgb(${[220,220,220]})`,
  visited: 'blue',
  unvisited: ''
}

export const NodeElement = (props) => {
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
  const onMouseDown = () => {
    NodesProvider.setIsMouseDown(true)
    NodesProvider.setRunningState('customized')
    setInternalMouseDown(true)
    // updates node if it is of type unvisited
    props.type === 'unvisited' && setType('wall')
  }
  const onMouseEnter = () => {
    if (NodesProvider.isMouseDown && props.type === 'unvisited') {
      setType('wall')
      NodesProvider.setIsMouseDown(true)
      setInternalMouseDown(true)
    }
  }
  const onMouseUp = () => {
    NodesProvider.setIsMouseDown(false)
    setInternalMouseDown(false)
  }
  const onMouseLeave = () => {
    setInternalMouseDown(false)
  }

  return (
    <div key={props.key} style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  )
}

const initializeNodes = () => {
  const numRows = 21
  const numCols = 50
  const nodes = []

  // Initialize the nodes
  var key = 0
  for (let row = 0; row < numRows; row++) {
    const currentRow = []
    for (let col = 0; col < numCols; col++) {
      var type = 'unvisited'
      if (row === 10 && col === 4) { type = 'source' }
      if (row === 10 && col === 44) {type = 'goal'}
      // Every object in the 2D array consists of the actual node and the node react component
      currentRow.push([
        new Node(row, col, type),
        <NodeElement key={key} type={type}/>
      ])
      key++
    }
    nodes.push(currentRow)
  }
  return nodes
}

class Node {
  constructor(row, col, type='unvisited') {
    //this.key = key
    this.coordinates = [row, col] // keys to access node in array
    this.type = type // 'source', 'goal', 'wall', 'visited', 'unvisited' --> default
    this.distance = undefined // special for some algorithms // this.type === 'source' ? 0 : 10000 // 10000 is "infinity" here, as distance will NEVER surpass that
    this.prevNode = undefined // special for some algorithms

    // The React element to display
    //this.nodeElement = <NodeElement type={this.type} coordinates={this.coordinates} key={key}/>
  }

  setType(type) {
    this.type = type
    console.log('type set to: ' + type)
    //this.nodeElement = <NodeElement type={this.type} coordinates={this.coordinates} key={this.key}/>
  }
}

class Nodes {
  constructor() {
    this.nodes = initializeNodes()
    this.isMouseDown = false
    this.runningState = 'empty' // empty, cusomized, running, finished
  }
  getNode(coordinates) {
    return this.nodes[coordinates[0]][coordinates[1]][0]
  }
  makeWall(coordinates) {
    const node = this.getNode(coordinates)
    node.setType('wall')
    console.log(node)
  }
  setIsMouseDown(isMouseDown) {
    this.isMouseDown = isMouseDown
  }
  getIsMouseDown() {
    return this.isMouseDown
  }
  reset() {
    this.nodes = initializeNodes()
    console.log('reseting')
    return this.nodes
  }
  getRunningState() {
    return this.runningState
  }
  setRunningState(runningState) {
    this.runningState = runningState
  }

}
export const NodesProvider = new Nodes()
//export const NodesProvider = nodesProvider