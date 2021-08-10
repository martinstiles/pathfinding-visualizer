  export const getNeighboors = (nodes, node) => {
  const neighboors = []
  const row = node.rowIndex
  const col = node.colIndex

  // UP
  if (row > 0) {
    const upNode = nodes[row - 1][col]
    if (upNode.type === 'unvisited' || upNode.type === 'goal') {
      neighboors.push(upNode) 
    }
  }
  // RIGHT 49
  if (col < 20) {
    const rightNode = nodes[row][col + 1]
    if (rightNode.type === 'unvisited' || rightNode.type === 'goal') {
      neighboors.push(rightNode) 
    }
  }
  // DOWN
  if (row < 10) {
    const downNode = nodes[row + 1][col]
    if (downNode.type === 'unvisited' || downNode.type === 'goal') {
      neighboors.push(downNode) 
    }
  }
  // LEFT
  if (col > 0) {
    const leftNode = nodes[row][col - 1]
    if (leftNode.type === 'unvisited' || leftNode.type === 'goal') {
      neighboors.push(leftNode) 
    }
  }

  return neighboors
}

export const getEuclidianDistance = (u, v) => {
  return Math.sqrt( (u.rowIndex - v.rowIndex)**2 + (u.colIndex - v.colIndex)**2)
}

export const getHelperNodes = (nodes) => {
  const helperNodes = []
  nodes.map((row) => {
    const helperRow = []
    row.map((node) => {
        helperRow.push(
          {
            type: node.type,
            rowIndex: node.rowIndex,
            colIndex: node.colIndex
          }
        )
    })
    helperNodes.push(helperRow)
  })
  return helperNodes
}

