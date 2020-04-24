import { Queue } from './queue.js'
import { getNeighboors, getManDistance, getHelperNodes } from './utils.js'

export const AStar = (nodes, source, speed, setUpdateHook, setRunState) => {
  console.log('DEPTH FIRST STARTED')
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
  helperSource.type = 'source'
  Q.add(helperSource)

  var goalNode = undefined // tracking if goal is found

    // HERE IT SHOULD RUN

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
  }, speed*i)

  const foundString = goalFound ? 'found' : 'not found'
  console.log('A* finished: Goal ' + foundString)
}
