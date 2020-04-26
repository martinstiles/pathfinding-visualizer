const getInitialNodes = () => {
  const numRows = 11 // 21
  const numCols = 21 // 50
  const nodes = []
  // Initialize the nodes
  for (let row = 0; row < numRows; row++) {
    const currentRow = []
    for (let col = 0; col < numCols; col++) {
      const rowIndex = row
      const colIndex = col
      var type = 'unvisited'
      // 10 og 4
      // 10 og 44
      if (row === 5 && col === 4) {type = 'source'}
      if (row === 5 && col === 16) {type = 'goal'}
      currentRow.push(
        { type, rowIndex, colIndex }
      )
    }
    nodes.push(currentRow)
  }
  return nodes
}

export default getInitialNodes