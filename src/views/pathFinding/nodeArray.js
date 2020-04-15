import React, { useState, useEffect } from 'react'
import Node from './node.js'
import ButtonGroup from '../buttonGroup.js'
import getInitialNodes from './initialNodes.js'
import { Dijkstra } from '../../algorithms/dijkstra.js'
//import { AStar } from '../../algorithms/aStar.js'

const algorithmMap = {
  dijkstra: Dijkstra
}
const speedLabelToSpeedMap = {
  slow: 200,
  medium: 100,
  fast: 60
}

var testKey = 0
const NodeArray = () => {
  const [nodes, setNodes] = useState([])
  const [isMouseDownInArray, setIsMouseDownInArray] = useState(false)
  const [runState, setRunState] = useState('empty') // empty, cusomized, running, finished
  //const [algorithm, setAlgorithm] = useState('') // IKKE NØDVENDIG? -> Kan holdes i ButtonGroup -> Samme med speed -> Nei
  const [speed, setSpeed] = useState('medium')
  const [updateHook, setUpdateHook] = useState(false)

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

  const runAlgorithm = (algorithm) => {
    // const algorithmToRun = algorithmMap[algorithm]
    setRunState('running')
    const currentSpeed = speedLabelToSpeedMap[speed]
    if (algorithm === 'dijkstra') {
      Dijkstra(nodes, nodes[5][4], currentSpeed, setUpdateHook, setRunState)
    } else if (algorithm) {
      //AStar(nodes, nodes[5][4], nodes[5][16], currentSpeed, setUpdateHook, setRunState)
    }
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
      <ButtonGroup runState={runState} runAlgorithm={runAlgorithm} setSpeed={setSpeed} resetNodes={resetNodes} clearPath={clearPath} />
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
    </div>
  )
}

export default NodeArray