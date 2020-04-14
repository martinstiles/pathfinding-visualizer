import React, { useState, useEffect } from 'react'
import Node from './node.js'
import ButtonGroup from '../buttonGroup.js'
import getInitialNodes from './initialNodes.js'
import { Dijkstra } from '../../algorithms/dijkstra.js'
import { render } from '@testing-library/react'

const algorithmMap = {
  dijkstra: Dijkstra
}
var testKey = 0
const NodeArray = () => {
  const [nodes, setNodes] = useState([])
  const [isMouseDownInArray, setIsMouseDownInArray] = useState(false)
  const [runState, setRunState] = useState('empty') // empty, cusomized, running, finished
  //const [algorithm, setAlgorithm] = useState('') // IKKE NØDVENDIG? -> Kan holdes i ButtonGroup -> Samme med speed

  const hooks = {
    isMouseDownInArray,
    setIsMouseDownInArray,
    runState,
    setRunState
  }

  // basicly componentDidMount()
  useEffect(() => {
    const initialNodes = getInitialNodes()
    setNodes(initialNodes)
  }, [])

  const setTypeInNode = (type, coordinates) => {
    const row = coordinates[0]
    const col = coordinates[1]
    nodes[row][col].type = type
  }

  const resetNodes = () => {
    const initialNodes = getInitialNodes() // clears the grid
    setNodes(initialNodes)
    setRunState('empty')
  }
  //console.log(nodes)
  const test2 = () => {
    setRunState('test')
    render()
  }

  const runAlgorithm = (algorithm) => {
    // const algorithmToRun = algorithmMap[algorithm]
    // algorithmToRun(nodes, nodes[10][4])
    if (algorithm === 'dijkstra') {
      setRunState('running')
      Dijkstra(nodes, nodes[10][4])
    }
    setRunState('finished')
  }

  const clearPath = () => {
    var isCustomized = false
    nodes.map((row) => {
      row.map((node) => {
        if (node.type === 'shortestPath' || node.type === 'visited') {
          node.type = 'unvisited'
        } else if (node.type === 'wall') {
          isCustomized = true
        }
      })
    })
    setRunState(isCustomized ? 'customized' : 'empty')
    console.log('path cleared')
  }
  // setAlgorithmInParent={setAlgorithm}
  //console.log('rendered')
  return (
    <div>
      <ButtonGroup runState={runState} runAlgorithm={runAlgorithm} resetNodes={resetNodes} clearPath={clearPath} />
      {nodes.map((row, rowIndex) => {
        return <div key={rowIndex} style={{display: 'flex', flexDirection: 'row'}}>
          {row.map((node, colIndex) =>
            <Node
              key={testKey++}
              type={node.type}
              hooks={hooks}
              setTypeInNode={setTypeInNode}
              coordinates={[rowIndex, colIndex]}
            />
          )}
        </div>
      })}
      <button onClick={test2}>TEST2</button>
    </div>
  )
}

export default NodeArray