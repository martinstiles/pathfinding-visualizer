import React, { useState, useMemo } from 'react'
import Node from './nodee.js'


const initializeNodes = (hooks) => {
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
      currentRow.push([
        <Node key={key} type={type} hooks={hooks}/>
      ])
      key++
    }
    nodes.push(currentRow)
  }
  console.log('reset')
  return nodes
}

const NodeArray = () => {
  const [isMouseDownInArray, setIsMouseDownInArray] = useState(false)
  /*var isMouseDownInArray = false
  const setIsMouseDownInArray = (boolean) => {
    isMouseDownInArray = boolean
  } */

  const [runningState, setRunningState] = useState('empty') // empty, cusomized, running, finished
  const hooks = {
    isMouseDownInArray,
    setIsMouseDownInArray,
    runningState,
    setRunningState
  }

  // Is all of this really necessary?? --> let nodes = initializeNodes(hooks)
  const nodes = useMemo(() => {
    //console.log('Init')
    return initializeNodes(hooks)
  }, [hooks])

  const reset = () => {
    let c = 0
    nodes.map((row, rowIndex) => 
      row.map((col, colIndex) => {
        console.log(nodes[rowIndex][colIndex])
        nodes[rowIndex][colIndex] = <Node type={'unvisited'} hooks={hooks}/>
        c++}
      )
    )
    //console.log('DONE: ' + c)
  }

  console.log(nodes)
  return (
    <div>
        {nodes.map((row, rowIndex) => {
          return <div style={{display: 'flex', flexDirection: 'row'}}>
            {row.map((col, colIndex) => nodes[rowIndex][colIndex])}
          </div>
        })}
        <button onClick={reset}> TEST </button>
    </div>
  )
}

export default NodeArray