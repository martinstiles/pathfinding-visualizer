import React, { useState, useEffect } from 'react'
import Node from './node.js'
import ButtonGroup from '../buttonGroup.js'
import getInitialNodes from './initialNodes.js'


const NodeArray = () => {
  const [nodes, setNodes] = useState([])
  const [isMouseDownInArray, setIsMouseDownInArray] = useState(false)
  const [runState, setRunState] = useState('empty') // empty, cusomized, running, finished
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
    nodes[row][col][0].type = type
  }

  const resetNodes = () => {
    const initialNodes = getInitialNodes() // clears the grid
    setNodes(initialNodes)
    setRunState('empty')
  }
  //console.log(nodes)
  
  return (
    <div>
      <ButtonGroup runState={runState} resetNodes={resetNodes} />
      {nodes.map((row, rowIndex) => {
        return <div key={rowIndex} style={{display: 'flex', flexDirection: 'row'}}>
          {row.map((node, colIndex) =>
            <Node
              key={node[0].key}
              type={node[0].type}
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