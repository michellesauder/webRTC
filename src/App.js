import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const App = () => {

  return (
    <div>
        <AppBar position='static' color="inherit">
            <Typography variant='h2' align='center'>
                Video Chat
            </Typography>
        </AppBar>
        <VideoPlayer/>
        <Options>
            <Notifications/>
        </Options>
    </div>
  )
}

export default App