// VISUALIZE:
export const visualize = (changedNodesInOrder, nodes, speed, setNodesVisited, setUpdateHook, setRunState) => {
  var nodesVisited = 1
  var i = 1
  var update = true
  changedNodesInOrder.map((helperNode) => {
    setTimeout(() => {
      const node = nodes[helperNode.rowIndex][helperNode.colIndex]
      node.type = helperNode.type
      if (node.type !== 'shortestPath') setNodesVisited(nodesVisited++)
      else {
        setUpdateHook(update) // this has to be done to make the parent component rerender, thus displaying the updates
        update = !update
      }
    }, speed*i)
    i++
  })
  setTimeout(() => {
    setRunState('finished')
  }, speed*i)
}
