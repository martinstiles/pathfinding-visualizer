import React, { Component } from 'react'
import { NodesProvider } from './node.js'


const pathFinding = () => {
  const nodes = NodesProvider.nodes

  const test = () => {
    console.log('oppdaterer det?')
  }

  return (
    <div>
      {nodes.map((row, rowIndex) => {
        return <div style={{display: 'flex', flexDirection: 'row'}}>
          {row.map((col, colIndex) => nodes[rowIndex][colIndex].nodeElement)}
        </div>
      })}
    </div>
  )
}






export class PathFinding extends Component {
  nodes = NodesProvider.nodes
  test = () => {
    console.log(this.nodes)
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        {this.nodes.map((row, rowIndex) => {
          return <div style={{display: 'flex', flexDirection: 'row'}}>
            {row.map((col, colIndex) => this.nodes[rowIndex][colIndex].nodeElement)}
          </div>
        })}
        <button onClick={this.test}> TEST</button>
      </div>
    )
  }
}

export default PathFinding