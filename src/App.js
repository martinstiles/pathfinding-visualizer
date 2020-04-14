import React from 'react';
import PathFinding from './views/pathFinding/pathFinding.js'
import Header from './views/header.js'

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
        <PathFinding />
      </div>
    </>
  );
}

export default App;
