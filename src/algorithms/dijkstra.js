import Queue from './queue.js'

const Dijkstra = (nodes, source) => {

  const Q = new Queue()

  nodes.map((row) => 
    row.map((node) => {
      node.dist = 10000
      node.prev = undefined
    })
  )

  source.dist = 0 // no point in using an if statement for every loop iteration
  Q.add(source)

  while (Q.length !== 0) {
    const U = Q.getFirstElem() // gets node with shortest distance and removes it from Q

    
  }
}

export default Dijkstra

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