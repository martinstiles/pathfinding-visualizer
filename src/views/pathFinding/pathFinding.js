import React, { Component, useState } from 'react'
import { NodesProvider } from './node.js'
import ButtonGroup from '../buttonGroup.js'
import NodeArray from './nodeArray.js'

export const PathFinding = () => {
  return (
    <>
      <ButtonGroup />
      <NodeArray />
    </>
  )
}



const BathFinding = () => {
  const [nodes, setNodes] = useState(NodesProvider.nodes)
  const resetOnClick = () => {
    console.log(1)
    console.log(nodes)
    console.log(2)
    setNodes(NodesProvider.reset())
    console.log('reseting')
    console.log(nodes)
  }


  console.log((nodes))
  return (
    <div style={{marginTop: '0em'}}>
      <ButtonGroup />

        {nodes.map((row, rowIndex) => {
          return <div style={{display: 'flex', flexDirection: 'row'}}>
            {row.map((col, colIndex) => nodes[rowIndex][colIndex][1])}
          </div>
        })}
    </div>
  )

}

export default PathFinding