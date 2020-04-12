import React from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem, Menu, Link } from '@material-ui/core'
import ReplayIcon from '@material-ui/icons/Replay'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'

const ButtonGroup = (props) => {
  const style = {
    marginBottom: '2em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

  const selectStyle = {
    backgroundColor: '#FFE19C', //'#A0D2DB', //`rgb(${[220,220,220]})`
    minWidth: '12em',
    textAlign: 'left'
  }

  // run states:
  const isEmpty = props.runState === 'empty'
  const isCustomized = props.runState === 'customized'
  const isRunning = props.runState === 'running'

  const [algorithm, setAlgorithm] = React.useState('')
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  }
  const [speed, setSpeed] = React.useState('fast')
  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  }
  // material:
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleMoreClose = () => { setAnchorEl(null) }
  const handleMoreClick = (event) => { setAnchorEl(event.currentTarget) }

  return (
    <div style={style}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <FormControl variant="filled">
        <InputLabel>
          <div style={{color: 'black', fontStyle: 'italic'}}>Select algorithm</div>
        </InputLabel>
        <Select style={selectStyle} value={algorithm} onChange={handleAlgorithmChange} label="Algorithm" autoWidth={true}>
          <MenuItem value={'aStar'}>A*</MenuItem>
          <MenuItem value={'bestFist'}>Best first (greedy)</MenuItem>
          <MenuItem value={'breadthFirst'}>BreadthFirst</MenuItem>
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
        </Select>
      </FormControl>

      <Button
        style={{marginLeft: '2em', color: 'black', backgroundColor: algorithm !== '' ? '#63C132' : 'gray'}} 
        ariant="contained"
        disabled={algorithm === '' || isRunning}>
        <PlayArrowIcon />
      </Button>
      <Button
        style={{marginLeft: '1em', color: 'black', backgroundColor: isCustomized ? '#cf2e2e' : 'gray'}}
        variant="contained"
        disabled={isEmpty}
        onClick={props.resetNodes}>
        { isEmpty || isCustomized ? <HighlightOffIcon /> : <ReplayIcon /> }
      </Button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', fontSize: '3em'}}>
        <Button style={{fontSize: '1em', color: 'white', margin: 0}} aria-haspopup="true" onClick={handleMoreClick}>
          <ViewHeadlineIcon style={{fontSize: '0.9em'}} />
        </Button>
        <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMoreClose}>
          <MenuItem onClick={handleMoreClose}> <Link href='' style={{color: 'black'}}>
            Sorting Algorithms
          </Link></MenuItem>
          <MenuItem onClick={handleMoreClose}> <Link target='_blank' href='https://github.com/martinstiles/algorithm-visualizer' style={{color: 'black'}}>
            Go to repository
          </Link></MenuItem>
          <MenuItem onClick={handleMoreClose}> <Link target='_blank' href='https://martinstiles.github.io/website/' style={{color: 'black'}}>
            Visit my website
          </Link></MenuItem>
        </Menu>
      </div>
    </div>
  )
}

// <GitHubIcon style={{marginLeft: '5px'}} fontSize={'small'} />
// <HomeIcon style={{marginLeft: '5px'}}/>
export default ButtonGroup