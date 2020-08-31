import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import TransitionModal from './modal.js'
import MoreMenu from './moreMenu.js'

const ButtonGroup = (props) => {
  const style = {
    marginBottom: '2em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  const selectStyle = {
    backgroundColor: '#FFE19C',
    minWidth: '12em',
    textAlign: 'left'
  }

  // run states:
  const isEmpty = props.runState === 'empty'
  const isCustomized = props.runState === 'customized'
  const isRunning = props.runState === 'running'
  const isFinished = props.runState === 'finished'

  // ALGORITHM SELECT
  const [algorithm, setAlgorithm] = useState('')
  const handleAlgorithmChange = (event) => {
    props.setAlgorithm(event.target.value)
    setAlgorithm(event.target.value)
  }

  // SPEED SELECT
  const [speed, setSpeed] = useState('medium')
  const handleSpeedChange = (event) => {
    setSpeed(event.target.value)
    props.setSpeed(event.target.value)
  }

  // PLAY BUTTON
  const handlePlayClick = () => {
    props.runAlgorithm(algorithm)
  }

  return (
    <div style={style}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <FormControl variant="filled">
        <InputLabel>
          <div style={{color: 'black', fontStyle: 'italic'}}>Select algorithm</div>
        </InputLabel>
        <Select style={selectStyle} value={algorithm} onChange={handleAlgorithmChange} label="Algorithm" autoWidth={true}>
          <MenuItem value={'aStar'}>A*</MenuItem>
          <MenuItem value={'bestFirst'}>Best First</MenuItem>
          <MenuItem value={'breadthFirst'}>Breadth First</MenuItem>
          <MenuItem value={'dijkstra'}>Dijkstra</MenuItem>
          <MenuItem value={'depthFirst'}>Depth First</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" style={{marginLeft: '2em'}}>
        <InputLabel>
          <div style={{color: 'black', fontStyle: 'italic'}}>Speed</div>
        </InputLabel>
        <Select style={selectStyle} value={speed} onChange={handleSpeedChange} label="Speed" autoWidth={true}>
          <MenuItem value={'slow'}>Slow</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'fast'}>Fast</MenuItem>
          <MenuItem value={'instant'}>Instant</MenuItem>
        </Select>
      </FormControl>

      <Button
        style={{marginLeft: '2em', color: 'black', backgroundColor: algorithm === '' || isRunning || isFinished ? 'gray' : '#63C132'}} 
        ariant="contained"
        disabled={algorithm === '' || isRunning}
        onClick={handlePlayClick}
      >
        <PlayArrowIcon />
      </Button>
      <Button
        style={{marginLeft: '1em', color: 'black', backgroundColor: isEmpty || isRunning ? 'gray' : '#cf2e2e'}}
        variant="contained"
        disabled={isEmpty || isRunning}
        onClick={isCustomized ? props.resetNodes : props.clearPath}
      >
        { isEmpty || isCustomized ? <HighlightOffIcon /> : <ReplayIcon /> }
      </Button>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', fontSize: '2.65em'}}>
        <TransitionModal />
        <MoreMenu />
      </div>
    </div>
  )
}


//<MenuItem value={'aStar'}>A*</MenuItem>
//<MenuItem value={'bestFist'}>Best first (greedy)</MenuItem>
//<MenuItem value={'breadthFirst'}>Breadth First</MenuItem>

export default ButtonGroup