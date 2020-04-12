// UNIQUE keys for every render, otherwise resetting wont work because the hook in each node
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
      currentRow.push([
        { type, key, rowIndex, colIndex }
      ])
      key++
    }
    nodes.push(currentRow)
  }
  return nodes
}

export default getInitialNodes