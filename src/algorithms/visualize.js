// VISUALIZE:
export const visualize = (changedNodesInOrder, nodes, speed, setNodesVisited, setRunState, setNodesInPath) => {
  setNodesVisited(0)
  setNodesInPath(0)
  var nodesVisited = 1
  var nodesInPath = 1
  var i = 1

  // instant
  if (speed === 0) {
    changedNodesInOrder.map((helperNode) => {
      const node = nodes[helperNode.rowIndex][helperNode.colIndex]
      node.type = helperNode.type
      if (node.type !== 'shortestPath') setNodesVisited(nodesVisited++)
      if (node.type === 'shortestPath') setNodesInPath(nodesInPath++)
    })
    setRunState('finished')
    return
  }

  changedNodesInOrder.map((helperNode) => {
    setTimeout(() => {
      const node = nodes[helperNode.rowIndex][helperNode.colIndex]
      node.type = helperNode.type
      if (node.type !== 'shortestPath') setNodesVisited(nodesVisited++)
      if (node.type === 'shortestPath') setNodesInPath(nodesInPath++)
    }, speed*i)
    i++
  })
  setTimeout(() => {
    setRunState('finished')
  }, speed*i)
}
