import { Queue } from './queue.js'
import { visualize } from './visualize'
import { getNeighboors, getManDistance, getHelperNodes } from './utils.js'

export const AStar = (nodes, source, goal, speed, setRunState, setNodesVisited, setNodesInPath) => {
  console.log('ASTAR STARTED')
  const changedNodesInOrder = []
  const helperNodes = getHelperNodes(nodes)

  const Q = new Queue()

  helperNodes.map((row) => 
    row.map((node) => {
      node.dist = 10000
      node.prev = undefined
      node.currentDistance = 0
    })
  )
  
  const helperSource = helperNodes[source.rowIndex][source.colIndex] // gets source according to original source coordinates
  helperSource.dist = 0
  helperSource.type = 'source'
  Q.add(helperSource)

  var helperGoal = helperNodes[goal.rowIndex][goal.colIndex]

  var goalFound = false // tracking if goal is found

  while (Q.array.length !== 0) {
    const U = Q.getFirstElem() // gets node with shortest distance and removes it from Q
    if (U.type !== 'source') {
      U.type = 'visited'
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
        goalFound = true
        helperGoal.prev = [U.rowIndex, U.colIndex]
        Q.clear()
        break
      }
      V.type = 'peeked'
      V.currentDistance = U.currentDistance + 1
      V.dist = V.currentDistance + getManDistance(V, helperGoal) // current distance from start to node + distance to goal
      V.prev = [U.rowIndex, U.colIndex]
      Q.add(V)
    }
  }

  if (goalFound) {
    var shortestPathNode = helperNodes[helperGoal.prev[0]][helperGoal.prev[1]]
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

  console.log('SPEED: ' + speed)
  visualize(changedNodesInOrder, nodes, speed, setNodesVisited, setRunState, setNodesInPath)
}
