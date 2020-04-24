import { Queue } from './queue.js'
import { getNeighboors, getManDistance } from './utils.js'

const getHelperNodes = (nodes) => {
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

// TODO: MAKE FUNCTION FOR ADD TO changedNodesInorder

export const Dijkstra = (nodes, source, speed, setUpdateHook, setRunState, setNodesVisited) => {
  const changedNodesInOrder = []
  const helperNodes = getHelperNodes(nodes)
  var nodesVisited = 0

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
    //console.log(U)
    const prevType = U.type
    // OPTION TO ADD YELLOW MARKER FOR DIJKSTRA
    /*changedNodesInOrder.push({
      rowIndex: U.rowIndex,
      colIndex: U.colIndex,
      type: 'test'
    })*/
    nodesVisited++

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
      Q.add(V)
      const alt = U.dist + getManDistance(U, V)
      if (alt < V.dist) {
        V.dist = alt
        V.prev = [U.rowIndex, U.colIndex] // We keep track of index instead of node for memory purposes -> Becomes a long chain
      }
      /*changedNodesInOrder.push(
        {
          rowIndex: V.rowIndex,
          colIndex: V.colIndex,
          type: 'visited'
        }
      )*/
    }
    changedNodesInOrder.push({
      rowIndex: U.rowIndex,
      colIndex: U.colIndex,
      type: prevType
    })
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

  // VISUALIZE:
  var i = 1
  var update = true
  changedNodesInOrder.map((helperNode) => {
    setTimeout(() => {
      const node = nodes[helperNode.rowIndex][helperNode.colIndex]
      node.type = helperNode.type
      setUpdateHook(update) // this has to be done to make the parent component rerender, thus displaying the updates
      update = !update
    }, speed*i)
    i++
  })
  setTimeout(() => {
    setRunState('finished')
    setNodesVisited(nodesVisited)
  }, speed*i)

  const foundString = goalNode ? 'found' : 'not found'
  console.log('Dijkstra finished: Goal ' + foundString)
}
