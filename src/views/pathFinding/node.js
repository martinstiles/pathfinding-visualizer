import React, {useState} from 'react'
const typeToColorMap = {
  source: 'green',
  goal: 'red',
  wall: `rgb(${[220,220,220]})`,
  visited: 'blue',
  unvisited: ''
}

export const NodeElement = (props) => {
  const background = typeToColorMap[props.type]
  const coordinates = props.coordinates
  console.log('node created')

  const style = {
    height: '1.5em',
    width: '1.5em',
    border: `1px solid rgb(${[220,220,220]})`,
    background: background
  }

  const onMouseDown = () => {
    //console.log('mouse down')
    NodesProvider.setIsMouseDown(true)
    NodesProvider.makeWall(coordinates)
  }
  const onMouseEnter = () => {
    //console.log('mouse enter: ' + NodesProvider.getIsMouseDown())
    if (NodesProvider.isMouseDown) { NodesProvider.makeWall(coordinates) }
  }
  const onMouseUp = () => {
    //console.log('mouse up')
    NodesProvider.setIsMouseDown(false)
  }

  return (
    <div key={props.key} style={style} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseEnter={onMouseEnter} />
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
      var type = 'undefined'
      if (row === 10 && col === 4) { type = 'source' }
      if (row === 10 && col === 44) {type = 'goal'}
      currentRow.push(new Node(row, col, key, type))
      key++
    }
    nodes.push(currentRow)
  }

  return nodes
}

class Node {
  constructor(row, col, key, type='unvisited') {
    //this.key = key
    this.coordinates = [row, col] // keys to access node in array
    this.type = type // 'source', 'goal', 'wall', 'visited', 'unvisited' --> default
    this.distance = undefined // special for some algorithms // this.type === 'source' ? 0 : 10000 // 10000 is "infinity" here, as distance will NEVER surpass that
    this.prevNode = undefined // special for some algorithms

    // The React element to display
    this.nodeElement = <NodeElement type={this.type} coordinates={this.coordinates} key={key}/>
  }

  setType(type) {
    this.type = type
    console.log('type set to: ' + type)
    this.nodeElement = <NodeElement type={this.type} coordinates={this.coordinates} key={this.key}/>
  }
}

class Nodes {
  constructor() {
    this.nodes = initializeNodes()
    this.isMouseDown = false
    console.log('nodes created')
  }
  getNode(coordinates) {
    return this.nodes[coordinates[0]][coordinates[1]]
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

}
export const NodesProvider = new Nodes()
//export const NodesProvider = nodesProvider