import { Queue } from './queue.js'
import { getNeighboors, getManDistance } from './utils.js'

export const Dijkstra = (nodes, source) => {
  var goalFound = false
  const Q = new Queue()

  nodes.map((row) => 
    row.map((node) => {
      node.dist = 10000
      node.prev = undefined
    })
  )

  source.dist = 0 // no point in using an if statement for every loop iteration
  Q.add(source)
  var goalNode = undefined
  // iteration tracker: to set timeout
  var c = 1// TEST

  while (Q.array.length !== 0) {
    const U = Q.getFirstElem() // gets node with shortest distance and removes it from Q
    // if {U.type = 'goal'} return
    
    const neighboors = getNeighboors(nodes, U)
    for (let i = 0; i < neighboors.length; i++) {
      const V = neighboors[i]
      if (V.type === 'goal') {
        goalNode = V
        goalNode.prev = [U.rowIndex, U.colIndex]
        goalFound = true
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
    }
    c++
  }

  if (goalFound) {
    //const shortestPathNodes = [] // TEST
    var shortestPathNode = nodes[goalNode.prev[0]][goalNode.prev[1]]
    while (shortestPathNode.prev) {
      shortestPathNode.type = 'shortestPath'
      //shortestPathNodes.push(shortestPathNode) // TEST
      shortestPathNode = nodes[shortestPathNode.prev[0]][shortestPathNode.prev[1]]
    }
    console.log('Dijkstra finished: Goal found')
    //return shortestPathNodes 
  } else {
    console.log('Dijkstra finished: Goal not found')
  }
}

const dijkstraIterationWithTimeout = (Q, U, i, c, neighboors, goalNode, goalFound) => {
  setTimeout(function() {
    const V = neighboors[i]
    if (V.type === 'goal') {
      goalNode = V
      goalNode.prev = [U.rowIndex, U.colIndex]
      goalFound = true
      Q.clear()
      return
    }
    V.type = 'visited'
    //setTypeInNode(visited, [V.rowIndex, V.colIndex])
    Q.add(V)
    const alt = U.dist + getManDistance(U, V)
    if (alt < V.dist) {
      V.dist = alt
      V.prev = [U.rowIndex, U.colIndex] // We keep track of index instead of node for memory purposes -> Becomes a long chain
    }
  }, 100)
}

// export default Dijkstra

/*
const test = [{x: 1, dist: 1}, {x: 2, dist: 2}]
console.log(test)
addToQ(test, {x: 3, dist: 1})
console.log(test)
console.log(getFirstElem(test))
console.log(test)
*/
// getShortestDist:
// return array.reduce((min, node) => node.dist < min.dist ? node : min, array[0])

/*
var key = 0
const getInitialNodes = () => {
  const numRows = 21
  const numCols = 50
  const nodes = []
  // Initialize the nodes
  for (let row = 0; row < numRows; row++) {
    const currentRow = []
    for (let col = 0; col < numCols; col++) {
      const rowIndex = row
      const colIndex = col
      var type = 'unvisited'
      if (row === 10 && col === 4) {type = 'source'}
      if (row === 10 && col === 44) {type = 'goal'}
      currentRow.push(
        { type, key, rowIndex, colIndex }
      )
      key++
    }
    nodes.push(currentRow)
  }
  return nodes
}


const nodes = getInitialNodes()
const source = nodes[10][4]

const path = Dijkstra(nodes, source)
console.log(path)
console.log(path.length)
*/