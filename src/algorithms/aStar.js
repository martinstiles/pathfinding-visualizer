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

export const AStar = (nodes, source, goal, speed, setUpdateHook, setRunState) => {
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

  var helperGoal = helperNodes[goal.rowIndex][goal.colIndex]

  var goalFound = false // tracking if goal is found

  while (Q.array.length !== 0) {
    const U = Q.getFirstElem() // gets node with shortest distance and removes it from Q
    const neighboors = getNeighboors(helperNodes, U)
    for (let i = 0; i < neighboors.length; i++) {
      const V = neighboors[i]
      if (V.type === 'visited') {
        continue
      }
      Q.add(V)


      if (V.type === 'goal') { // this should technically be before the for-loop, but here it makes a lot of extra work and is unnecessary
        goalFound = true
        helperGoal.prev = [U.rowIndex, U.colIndex]
        Q.clear()
        break
      }
      V.type = 'visited'
      V.dist = getManDistance(helperNodes, V) + getManDistance(V, helperGoal) // HEURISTIC + DISTANCE TO GOAL
      V.prev = [U.rowIndex, U.colIndex]
      Q.add(V)
      changedNodesInOrder.push(
        {
          rowIndex: V.rowIndex,
          colIndex: V.colIndex,
          type: 'visited'
        }
      )
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
  }, speed*i)

  const foundString = goalFound ? 'found' : 'not found'
  console.log('A* finished: Goal ' + foundString)
}