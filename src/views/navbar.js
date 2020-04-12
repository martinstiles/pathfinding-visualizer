import React from 'react'

const Navbar = () => {
  const style = {
    margin: '0 0 7em 0',
    left: 0,
    position: 'fixed',
    width: '100%',
    height: '5em',
    backgroundColor: `rgb(${[220,220,220]})`,
    color: `rgb(${[40,40,40]})`,
    display: 'flex',
    flexDirection: 'row'
  }
  const test = {
    marginBottom: '2em'
  }

  return (
    <div style={test}>
      <h1 style={{fontSize: '3.5em'}}> Algorithm Visualizer </h1>
    </div>
  )
}

export default Navbar
