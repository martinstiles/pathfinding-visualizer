import React from 'react';
import PathFinding from './views/pathFinding/pathFinding.js'
import Navbar from './views/navbar'

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
        <Navbar />
        <PathFinding />
      </div>
    </>
  );
}

export default App;
