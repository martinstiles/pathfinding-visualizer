import React from 'react';
import PathFinding from './views/pathFinding/pathFinding.js'

function App() {

  const algorithmStyle = {
    //textAlign: 'center',
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const test = () => {
    console.log('oppdaterer det?')
  }

  return (
    <>

      <div style={algorithmStyle}>
        <h1>
          HERE COMES THE BUTTONS :D
        </h1>
        <PathFinding />
      </div>
      <button onClick={test}> </button>
    </>
  );
}

export default App;
