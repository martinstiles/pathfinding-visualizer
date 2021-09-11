import React, { useState, useEffect, useCallback, useMemo } from 'react'
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
  const [nodesVisited, setNodesVisited] = useState(0)
  const [nodesInPath, setNodesInPath] = useState(0)

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

  // DOES CALLBACK MAKE ANY DIFFERENCE HERE?
  // I GUESS THE FUNCTION ISNT MADE EVERY RENDER (WHICH HAPPENS A LOT)
  // HOWEVER, A CLG INSIDE OF IT NEVER ACTUALLY HAPPENS UNLESS THE FUNCTION IS CALLED (TESTED)
  const resetNodes = useCallback(() => {
    const initialNodes = getInitialNodes() // clears the grid
    setNodes(initialNodes)
    setRunState('empty')
  }, [])

  const labelToAlgorithm = useMemo(() => {
    return {
      dijkstra: Dijkstra,
      aStar: AStar,
      depthFirst: DepthFirst,
      breadthFirst: BreadthFirst,
      bestFirst: BestFirst
    }
  }, [])

  const runAlgorithm = (currentAlgorithm) => {
    const Algorithm = labelToAlgorithm[currentAlgorithm]
    const algorithmUsesGoalNode = currentAlgorithm === 'aStar' || currentAlgorithm === 'bestFirst'
    const currentSpeed = speedLabelToSpeedMap[speed]
    setRunState('running')
    // console.log(currentAlgorithm, 'is running')

    if (algorithmUsesGoalNode) {
      Algorithm(nodes, nodes[5][4], nodes[5][16], currentSpeed, setRunState, setNodesVisited, setNodesInPath)
    } else {
      Algorithm(nodes, nodes[5][4], currentSpeed, setRunState, setNodesVisited, setNodesInPath)
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
  }

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
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <h1> Nodes expanded: {nodesVisited || '--'} </h1>
        <h1> Nodes in path: {nodesInPath || '--'} </h1>
      </div>
      {algorithm === 'depthFirst' && <p> Note: depth first does not find shortest path, it just finds the goal (and might be slightly bugged :D).</p>}
      {algorithm === 'bestFirst' && <p> Note: Best First search is not guaranteed to find the <b>shortest</b> path. (It also seems to have a tiny bug?)</p>}
    </div>
  )
}

export default NodeArray