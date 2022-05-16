import React, {useContext, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    if(userVideo.current && userVideo.current.srcObject !== null){
        console.log('userVid: ', userVideo.current)
    }
  
    return (
      <Grid container style={{display: 'flex', justifyContent: 'center'}}>
          <Paper >
            <Grid item xs={12} md={6} >
              <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
              <video playsInline muted ref={myVideo} autoPlay style={{width: '550px'}}/>
            </Grid>
          </Paper>
          <Paper>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay style={{width: '550px'}}/>
            </Grid>
          </Paper>
        {/* {callAccepted && (
            )} */}
      </Grid>
    );
  };

export default VideoPlayer