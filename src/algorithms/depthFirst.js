import { Queue } from './queue.js'
import { visualize } from './visualize'
import { getNeighboors, getHelperNodes } from './utils.js'

export const DepthFirst = (nodes, source, speed, setRunState, setNodesVisited, setNodesInPath) => {
  const changedNodesInOrder = []
  const helperNodes = getHelperNodes(nodes)

  const Q = new Queue()
  
  const helperSource = helperNodes[source.rowIndex][source.colIndex] // gets source according to original source coordinates
  helperSource.dist = 0
  helperSource.type = 'source'
  Q.add(helperSource)
  
  while (Q.array.length !== 0) {
    const U = Q.array.pop() // gets node with shortest distance and removes it from Q
    if (U.type === 'goal') break
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
      Q.add(V)
    }
  }

  console.log('SPEED: ' + speed)
  visualize(changedNodesInOrder, nodes, speed, setNodesVisited, setRunState, setNodesInPath)
}
