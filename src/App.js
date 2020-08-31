import React from 'react';
import Header from './views/header.js'
import NodeArray from './views/pathFinding/nodeArray'

function App() {

  const algorithmStyle = {
    //textAlign: 'center',
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  return (
    <>

      <div style={algorithmStyle}>
        <Header />
        <NodeArray />
      </div>
    </>
  );
}

export default App;
