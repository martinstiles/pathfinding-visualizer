import React, {useState} from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import HelpIcon from '@material-ui/icons/Help'
import { Button } from '@material-ui/core'

const modal = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const paper = {
  backgroundColor: `rgb(${[40,40,40]})`,
  border: `2px solid rgb(${[220,220,220]})`,
  textAlign: 'left',
  padding: '1em',
}

const TransitionsModal = () => {

  const visited = localStorage.getItem('visited')
  const [open, setOpen] = useState(visited ? false : true)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem('visited', true)
  }

  return (
    <div>
      <Button style={{fontSize: '0.9em', color: 'white', margin: 0 }} onClick={handleOpen}>
        <HelpIcon style={{fontSize: '0.9em'}} />
      </Button>
      <Modal
        style={modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={paper}>
            <h2 > Welcome to my Pathfinding Visualizer</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p style={{color: '#63C132'}}>Green cell&nbsp;</p>
              <p> - start node </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p style={{color: '#cf2e2e'}}>Red cell&nbsp;</p>
              <p> - goal node </p>
            </div>
            <p> 1. Click inside the grid and hold down your mouse button to draw walls </p>
            <p> 2. Clicking again will allow you to remove walls </p>
            <p> 3. Select algorithm of choice (Currently only Dijkstra :D) </p>
            <p> 4. Select a different speed if you feel like it </p>
            <p> 5. Hit play :)  </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal