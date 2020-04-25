import { Queue } from './queue.js'
import { visualize } from './visualize'
import { getNeighboors, getHelperNodes } from './utils.js'

export const BreadthFirst = (nodes, source, speed, setUpdateHook, setRunState, setNodesVisited) => {
  const changedNodesInOrder = []
  const helperNodes = getHelperNodes(nodes)

  const Q = new Queue()

  helperNodes.map((row) => 
    row.map((node) => {
      node.dist = 10000
      node.prev = undefined
    })
  )
  
  const helperSource = helperNodes[source.rowIndex][source.colIndex] // gets source according to original source coordinates
  helperSource.dist = 0
  Q.add(helperSource)

  var goalNode = undefined // tracking if goal is found

  while (Q.array.length !== 0) {
    const U = Q.getFirstElem() // gets node with shortest distance and removes it from Q
    if (U.type !== 'source') {
      console.log(Q.array)
      changedNodesInOrder.push(
        {
          rowIndex: U.rowIndex,
          colIndex: U.colIndex,
          type: 'visited'
        }
      )
    }

    const neighboors = getNeighboors(helperNodes, U)

    for (let i = 0; i < neighboors.length; i++) {
      const V = neighboors[i]
      if (V.type === 'goal') {
        goalNode = V
        goalNode.prev = [U.rowIndex, U.colIndex]
        Q.clear()
        break
      }
      V.type = 'visited'
      V.prev = [U.rowIndex, U.colIndex]
      Q.add(V)
    }
  }

  if (goalNode) {
    var shortestPathNode = helperNodes[goalNode.prev[0]][goalNode.prev[1]]
    while (shortestPathNode.prev) {
      shortestPathNode.type = 'shortestPath'
      changedNodesInOrder.push(
        {
          rowIndex: shortestPathNode.rowIndex,
          colIndex: shortestPathNode.colIndex,
          type: 'shortestPath'
        }
      )
      shortestPathNode = helperNodes[shortestPathNode.prev[0]][shortestPathNode.prev[1]]
    }
  }

  visualize(changedNodesInOrder, nodes, speed, setNodesVisited, setUpdateHook, setRunState)

  const foundString = goalNode ? 'found' : 'not found'
  console.log('Dijkstra finished: Goal ' + foundString)
}
