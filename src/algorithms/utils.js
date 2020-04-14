/*export const getNeighboors = (nodes, node) => {
  const neighboors = []
  const row = node.rowIndex
  const col = node.colIndex

  // UP
  if (row > 0) {
    const upNode = nodes[row - 1][col]
    if (upNode.type === 'unvisited' || upNode.type === 'goal') {
      neighboors.push(upNode) 
    }
  }
  // DOWN
  if (row < 20) {
    const downNode = nodes[row + 1][col]
    if (downNode.type === 'unvisited' || downNode.type === 'goal') {
      neighboors.push(downNode) 
    }
  }
  // LEFT
  if (col > 0) {
    const leftNode = nodes[row][col - 1]
    if (leftNode.type === 'unvisited' || leftNode.type === 'goal') {
      neighboors.push(leftNode) 
    }
  }
  // RIGHT
  if (col < 49) {
    const rightNode = nodes[row][col + 1]
    if (rightNode.type === 'unvisited' || rightNode.type === 'goal') {
      neighboors.push(rightNode) 
    }
  }

  return neighboors
}

export const getManDistance = (u, v) => {
  return Math.sqrt( (u.rowIndex - v.rowIndex)**2 + (u.colIndex - v.colIndex)**2)
}


const test = [{x: 1}, {x: 2}]
const a = test[0]
a.x = 3
console.log(test)
*/

const test = () => {
  var t = 'hei'
  var i = 1
  for(var x = 0; x < 5; x++) {
    (function() {
      setTimeout(function() {
        console.log(t)
        t = 'hade'
      }, 1000*i)
    }(i))
    i++
  }
  for(var x = 0; x < 5; x++) {
    (function() {
      setTimeout(function() {
        console.log(t)
      }, 1000*i)
    }(i))
    i++
  }
}
test()