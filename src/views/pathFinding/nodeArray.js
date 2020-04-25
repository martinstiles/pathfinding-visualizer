import React, { useState, useEffect } from 'react'
import Node from './node.js'
import ButtonGroup from '../buttonGroup/buttonGroup.js'
import getInitialNodes from './initialNodes.js'
import { Dijkstra } from '../../algorithms/dijkstra.js'
import { AStar } from '../../algorithms/aStar.js'
import { DepthFirst } from '../../algorithms/depthFirst'
import { BreadthFirst } from '../../algorithms/breadthFirst'
import { BestFirst } from '../../algorithms/bestFirst'

const speedLabelToSpeedMap = {
  slow: 200,
  medium: 100,
  fast: 60,
  instant: 0
}

var key = 0
const NodeArray = () => {
  const [nodes, setNodes] = useState([])
  const [isMouseDownInArray, setIsMouseDownInArray] = useState(false)
  const [runState, setRunState] = useState('empty') // empty, cusomized, running, finished
  const [algorithm, setAlgorithm] = useState('') // IKKE NØDVENDIG? -> Kan holdes i ButtonGroup -> Samme med speed -> Nei
  const [speed, setSpeed] = useState('medium')
  const [updateHook, setUpdateHook] = useState(false)
  const [nodesVisited, setNodesVisited] = useState(0)

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

  const runAlgorithm = (currentAlgorithm) => {
    //console.log('IN NODEARRAY: ' + algorithm)
    setRunState('running')
    const currentSpeed = speedLabelToSpeedMap[speed]
    if (currentAlgorithm === 'dijkstra') {
      Dijkstra(nodes, nodes[5][4], currentSpeed, setUpdateHook, setRunState, setNodesVisited)
    } else if (currentAlgorithm === 'aStar') {
      AStar(nodes, nodes[5][4], nodes[5][16], currentSpeed, setUpdateHook, setRunState, setNodesVisited)
    } else if(currentAlgorithm === 'depthFirst') {
      DepthFirst(nodes, nodes[5][4], currentSpeed, setUpdateHook, setRunState, setNodesVisited)
    } else if(currentAlgorithm === 'breadthFirst') {
      BreadthFirst(nodes, nodes[5][4], currentSpeed, setUpdateHook, setRunState, setNodesVisited)
    } else if (currentAlgorithm === 'bestFirst') {
      BestFirst(nodes, nodes[5][4], nodes[5][16], currentSpeed, setUpdateHook, setRunState, setNodesVisited)
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
    <div style={{textAlign: 'center'}}>
      <ButtonGroup runState={runState} setAlgorithm={setAlgorithm} runAlgorithm={runAlgorithm} setSpeed={setSpeed} resetNodes={resetNodes} clearPath={clearPath} />
      {nodes.map((row, rowIndex) => {
        return <div key={rowIndex} style={{display: 'flex', flexDirection: 'row'}}>
          {row.map((node, colIndex) =>
            <Node
              key={key++}
              type={node.type}
              hooks={hooks}
              setTypeInNode={setTypeInNode}
              coordinates={[rowIndex, colIndex]}
            />
          )}
        </div>
      })}
      <h1> Nodes visited: {nodesVisited || '--'} </h1>
      {algorithm === 'depthFirst' && <p> Note: depth first does not find shortest path, it just finds the goal (and might be slightly bugged :D).</p>}
    </div>
  )
}

export default NodeArray